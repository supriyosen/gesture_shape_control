import * as THREE from 'three';

export default class Particles {
    constructor() {
        this.count = 40000;
        this.size = 0.08;

        // Scale factor for all shapes
        const S = 0.5;

        // Shape generation
        this.shapes = {
            sphere: { points: this.generateSphere(S), color: new THREE.Color('#00ffff') },
            cube: { points: this.generateCube(S), color: new THREE.Color('#00aa00') },
            torus: { points: this.generateTorus(S), color: new THREE.Color('#8800ff') },
            cone: { points: this.generateCone(S), color: new THREE.Color('#ff5500') },
            cylinder: { points: this.generateCylinder(S), color: new THREE.Color('#ffff00') },
            helix: { points: this.generateHelix(S), color: new THREE.Color('#ff00ff') },
            heart: { points: this.generateHeart(S), color: new THREE.Color('#ff0000') }
        };

        this.currentShapeName = 'sphere';
        this.targetPositions = this.shapes.sphere.points;
        this.targetColor = this.shapes.sphere.color;

        // Initial Geometry
        this.geometry = new THREE.BufferGeometry();
        this.geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(this.shapes.sphere.points), 3));

        const sprite = new THREE.TextureLoader().load('https://threejs.org/examples/textures/sprites/disc.png');

        this.material = new THREE.PointsMaterial({
            size: this.size,
            color: this.shapes.sphere.color,
            map: sprite,
            transparent: true,
            opacity: 0.6, // Transparent as requested
            blending: THREE.NormalBlending,
            sizeAttenuation: true,
            depthWrite: false,
            alphaTest: 0.01
        });

        this.mesh = new THREE.Points(this.geometry, this.material);

        // Initial Rotation 
        this.mesh.rotation.y = -0.5; // Start tilted slightly left
        this.mesh.rotation.z = 0.1;

        // Interactive State (Target values for smoothing)
        this.targetRotationZ = 0.1;
        this.targetScale = 1.0;

        this.transitionSpeed = 0.08;
        this.lerpFactor = 0.3; // High scaling for fast response
    }

    generateSphere(s) {
        const positions = new Float32Array(this.count * 3);
        for (let i = 0; i < this.count; i++) {
            const radius = 3 * Math.cbrt(Math.random()) * s;
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);

            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = radius * Math.cos(phi);
        }
        return positions;
    }

    generateCube(s) {
        const positions = new Float32Array(this.count * 3);
        const side = 4.5 * s;
        for (let i = 0; i < this.count; i++) {
            // Distribute mainly on surface? Or volume? Volume is fine.
            positions[i * 3] = (Math.random() - 0.5) * side;
            positions[i * 3 + 1] = (Math.random() - 0.5) * side;
            positions[i * 3 + 2] = (Math.random() - 0.5) * side;
        }
        return positions;
    }

    generateTorus(s) {
        const positions = new Float32Array(this.count * 3);
        const R = 3 * s;
        const r = 1 * s;
        for (let i = 0; i < this.count; i++) {
            const u = Math.random() * Math.PI * 2;
            const v = Math.random() * Math.PI * 2;

            const x = (R + r * Math.cos(v)) * Math.cos(u);
            const y = (R + r * Math.cos(v)) * Math.sin(u);
            const z = r * Math.sin(v);

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
        }
        return positions;
    }

    generateCone(s) {
        const positions = new Float32Array(this.count * 3);
        const height = 5 * s;
        const radius = 2.5 * s;
        for (let i = 0; i < this.count; i++) {
            const h = Math.random() * height;
            const r = (h / height) * radius;
            const angle = Math.random() * Math.PI * 2;

            const x = r * Math.cos(angle);
            const z = r * Math.sin(angle);
            const y = h - height / 2;

            positions[i * 3] = x;
            positions[i * 3 + 1] = z;
            positions[i * 3 + 2] = -y;
        }
        return positions;
    }

    generateCylinder(s) {
        const positions = new Float32Array(this.count * 3);
        const height = 5 * s;
        const radius = 2 * s;
        for (let i = 0; i < this.count; i++) {
            const y = (Math.random() - 0.5) * height;
            const angle = Math.random() * Math.PI * 2;
            const r = Math.sqrt(Math.random()) * radius;

            const x = r * Math.cos(angle);
            const z = r * Math.sin(angle);

            positions[i * 3] = x;
            positions[i * 3 + 1] = z;
            positions[i * 3 + 2] = -y;
        }
        return positions;
    }

    generateHelix(s) {
        const positions = new Float32Array(this.count * 3);
        for (let i = 0; i < this.count; i++) {
            const t = Math.random() * 20;
            const x = Math.cos(t) * 2 * s;
            const z = Math.sin(t) * 2 * s;
            const y = (t - 10) * 0.5 * s;

            const scatter = 0.2 * s;
            positions[i * 3] = x + (Math.random() - 0.5) * scatter;
            positions[i * 3 + 1] = z + (Math.random() - 0.5) * scatter;
            positions[i * 3 + 2] = y;
        }
        return positions;
    }

    generateHeart(s) {
        const positions = new Float32Array(this.count * 3);
        for (let i = 0; i < this.count; i++) {
            const t = Math.random() * Math.PI * 2;
            const scale = 0.15 * s;
            let x = 16 * Math.pow(Math.sin(t), 3);
            let y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
            let z = (Math.random() - 0.5) * 4 * s;

            x *= scale;
            y *= scale;

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
        }
        return positions;
    }

    setShape(shapeName) {
        if (this.shapes[shapeName]) {
            this.currentShapeName = shapeName;
            this.targetPositions = this.shapes[shapeName].points;
            this.targetColor = this.shapes[shapeName].color;
        }
    }

    nextShape() {
        const keys = Object.keys(this.shapes);
        const index = keys.indexOf(this.currentShapeName);
        const nextIndex = (index + 1) % keys.length;
        this.setShape(keys[nextIndex]);
        return keys[nextIndex];
    }

    setInteractionState(angle, scale) {
        // Rotation disabled by user request
        // this.targetRotationZ = angle; 
        this.targetScale = scale;
    }

    update() {
        const positions = this.geometry.attributes.position.array;
        const target = this.targetPositions;

        for (let i = 0; i < this.count * 3; i++) {
            positions[i] += (target[i] - positions[i]) * this.transitionSpeed;
        }
        this.geometry.attributes.position.needsUpdate = true;

        // Smooth Color Transition
        this.material.color.lerp(this.targetColor, 0.05);

        // Smooth Interaction Transition (Rotation & Scale)

        // Rotation Z (DISABLE INTERACTIVE ROTATION)
        // User requested to remove rotation control. 
        // We only update Scale.

        // Auto-rotate slowly for life
        this.mesh.rotation.y += 0.002;
        this.mesh.rotation.x += 0.001;

        // Scale (Smoothed)
        const currentScale = this.mesh.scale.x;
        const newScale = currentScale + (this.targetScale - currentScale) * this.lerpFactor;
        this.mesh.scale.set(newScale, newScale, newScale);
    }
}
