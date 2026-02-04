import * as THREE from 'three';

export default class Scene {
    constructor(canvas) {
        this.canvas = canvas;
        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.scene = new THREE.Scene();

        // Add some fog for depth
        this.scene.fog = new THREE.FogExp2(0x000000, 0.002);

        this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 0.1, 1000);
        this.camera.position.z = 5;

        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            alpha: true
        });
        this.renderer.setSize(this.width, this.height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setClearColor(0x000000, 0); // Transparent background

        this.objects = [];

        window.addEventListener('resize', () => this.onResize());
    }

    add(object) {
        this.scene.add(object.mesh);
        this.objects.push(object);
    }

    onResize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(this.width, this.height);
    }

    animate() {
        this.objects.forEach(obj => obj.update());
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(() => this.animate());
    }
}
