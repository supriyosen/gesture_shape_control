import './style.css';
import Scene from './World/Scene.js';
import Particles from './World/Particles.js';
import HandTracker from './Input/HandTracker.js';

const init = async () => {
    // 1. Setup Scene
    const canvas = document.createElement('canvas');
    document.querySelector('#app').appendChild(canvas);

    const scene = new Scene(canvas);

    // 2. Setup Particles
    const particles = new Particles();
    scene.add(particles);

    // 3. Setup UI
    const shapeNameEl = document.getElementById('shape-name');
    const updateUI = (name) => {
        if (shapeNameEl) shapeNameEl.innerText = name;
    };

    // 4. Setup Hand Tracker (but don't start yet)
    const tracker = new HandTracker();

    // State for debounce
    let lastShapeChange = 0;
    const SHAPE_COOLDOWN = 1000; // ms

    tracker.on('onShapeChange', () => {
        const now = Date.now();
        if (now - lastShapeChange > SHAPE_COOLDOWN) {
            const newShape = particles.nextShape();
            updateUI(newShape);
            lastShapeChange = now;
        }
    });

    tracker.on('onRotate', (angle, dist) => {
        // Scale mapping
        // dist typically 0.05 (pinch) to 0.3 (wide pinch)
        // Map to scale 0.5 to 2.0
        const minFn = 0.05;
        const maxFn = 0.3;
        const normalized = Math.max(0, Math.min(1, (dist - minFn) / (maxFn - minFn)));
        const scale = 0.5 + normalized * 1.5;

        // Pass to particles for smoothing
        particles.setInteractionState(angle, scale);
    });

    // 5. Build Start Button Logic
    const startBtn = document.getElementById('start-btn');
    const startOverlay = document.getElementById('start-overlay');

    startBtn.addEventListener('click', async () => {
        startBtn.innerText = "Accessing Camera...";
        startBtn.disabled = true;

        try {
            await tracker.start();
            // Success
            startOverlay.style.opacity = '0';
            setTimeout(() => {
                startOverlay.style.display = 'none';
            }, 500);
        } catch (e) {
            startBtn.innerText = "Camera Failed";
            startBtn.style.background = "red";
            startBtn.disabled = false;
            alert(`Camera Error: ${e.message}\nPlease allow camera permissions and refresh.`);
            console.error(e);
        }
    });

    // 6. Start Loop (Particles run immediately)
    scene.animate();
};

init();
