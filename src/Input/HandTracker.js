import { Hands } from '@mediapipe/hands';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';
import { HAND_CONNECTIONS } from '@mediapipe/hands';

export default class HandTracker {
    constructor() {
        this.callbacks = {
            onShapeChange: () => { },
            onRotate: (angle, distance) => { }
        };

        // Video element
        this.videoElement = document.getElementById('webcam-video');
        if (!this.videoElement) {
            this.videoElement = document.createElement('video');
            this.videoElement.id = 'webcam-video';
            this.videoElement.style.display = 'block';
            this.videoElement.autoplay = true;
            this.videoElement.playsInline = true;
            document.body.appendChild(this.videoElement);
        }

        // Debug Canvas
        this.canvasElement = document.getElementById('output_canvas');
        if (!this.canvasElement) {
            this.canvasElement = document.createElement('canvas');
            this.canvasElement.id = 'output_canvas';
            this.canvasElement.style.position = 'absolute';
            this.canvasElement.style.top = '0';
            this.canvasElement.style.left = '0';
            this.canvasElement.style.width = '100%';
            this.canvasElement.style.height = '100%';
            this.canvasElement.style.zIndex = '1'; // Above video, below particles
            this.canvasElement.style.pointerEvents = 'none';
            document.body.appendChild(this.canvasElement);
        }
        this.canvasCtx = this.canvasElement.getContext('2d');

        this.hands = new Hands({
            locateFile: (file) => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
            }
        });

        this.hands.setOptions({
            maxNumHands: 1,
            modelComplexity: 1,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5
        });

        this.hands.onResults((results) => this.onResults(results));

        this.lastGesture = 'none';
        this.gestureStartTime = 0;
        this.gestureDurationThreshold = 300;
        this.isRunning = false;
    }

    async start() {
        try {
            console.log("Requesting camera access...");
            const stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    width: { ideal: 1280 },
                    height: { ideal: 720 },
                    facingMode: "user"
                }
            });

            this.videoElement.srcObject = stream;

            await new Promise((resolve) => {
                this.videoElement.onloadedmetadata = () => {
                    this.videoElement.play();
                    this.canvasElement.width = this.videoElement.videoWidth;
                    this.canvasElement.height = this.videoElement.videoHeight;
                    resolve();
                };
            });

            this.isRunning = true;
            this.detectLoop();
        } catch (e) {
            console.error("Error accessing camera:", e);
            alert("Camera access failed! Please refresh.");
            throw e;
        }
    }

    async detectLoop() {
        if (!this.isRunning) return;
        if (this.videoElement.readyState >= 2) {
            await this.hands.send({ image: this.videoElement });
        }
        requestAnimationFrame(() => this.detectLoop());
    }

    on(event, callback) {
        if (this.callbacks[event]) {
            this.callbacks[event] = callback;
        }
    }

    onResults(results) {
        // Draw logic
        this.canvasCtx.save();
        this.canvasCtx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
        this.canvasCtx.drawImage(results.image, 0, 0, this.canvasElement.width, this.canvasElement.height);

        if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
            for (const landmarks of results.multiHandLandmarks) {
                drawConnectors(this.canvasCtx, landmarks, HAND_CONNECTIONS, { color: '#00FF00', lineWidth: 2 });
                drawLandmarks(this.canvasCtx, landmarks, { color: '#FF0000', lineWidth: 1 });
                this.detectGestures(landmarks);
            }
        }
        this.canvasCtx.restore();
    }

    detectGestures(landmarks) {
        const isThumbExtended = this.isThumbOpen(landmarks);
        const isIndexExtended = this.isFingerOpen(landmarks, 8);
        const isMiddleExtended = this.isFingerOpen(landmarks, 12);
        const isRingExtended = this.isFingerOpen(landmarks, 16);
        const isPinkyExtended = this.isFingerOpen(landmarks, 20);

        const openFingersCount = [isThumbExtended, isIndexExtended, isMiddleExtended, isRingExtended, isPinkyExtended].filter(Boolean).length;

        const now = Date.now();

        // Draw active gesture status
        this.canvasCtx.font = "30px Arial";
        this.canvasCtx.fillStyle = "white";

        if (openFingersCount === 5) {
            this.canvasCtx.fillText("GESTURE: OPEN HAND (Morph)", 50, 50);

            // Full Open Hand
            if (this.lastGesture !== 'open_hand') {
                this.gestureStartTime = now;
                this.lastGesture = 'open_hand';
            } else if (now - this.gestureStartTime > this.gestureDurationThreshold) {
                this.callbacks.onShapeChange();
                this.gestureStartTime = now + 500;
            }
        } else if (isThumbExtended && isIndexExtended) {
            this.canvasCtx.fillText("GESTURE: L-SHAPE (Rotate)", 50, 50);

            // Pinch / L-Shape Mode
            this.lastGesture = 'rotation';
            const p1 = landmarks[4]; // Thumb
            const p2 = landmarks[8]; // Index

            const dx = p2.x - p1.x;
            const dy = p2.y - p1.y;

            // Draw the vector
            this.canvasCtx.beginPath();
            this.canvasCtx.moveTo(p1.x * this.canvasElement.width, p1.y * this.canvasElement.height);
            this.canvasCtx.lineTo(p2.x * this.canvasElement.width, p2.y * this.canvasElement.height);
            this.canvasCtx.strokeStyle = "yellow";
            this.canvasCtx.lineWidth = 4;
            this.canvasCtx.stroke();

            // Angle calculation
            const angle = Math.atan2(-dy, dx);

            // Distance calculation for Scale
            const dist = Math.sqrt(dx * dx + dy * dy);

            this.callbacks.onRotate(angle, dist);
        } else {
            this.canvasCtx.fillText("GESTURE: NONE", 50, 50);
            this.lastGesture = 'none';
        }
    }

    isFingerOpen(landmarks, tipIdx) {
        const wrist = landmarks[0];
        const tip = landmarks[tipIdx];
        const pip = landmarks[tipIdx - 2];
        return this.distance(wrist, tip) > this.distance(wrist, pip);
    }

    isThumbOpen(landmarks) {
        const wrist = landmarks[0];
        const tip = landmarks[4];
        const ip = landmarks[3];
        return this.distance(wrist, tip) > this.distance(wrist, ip);
    }

    distance(p1, p2) {
        return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
    }
}
