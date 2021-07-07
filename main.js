import './style.css'

//import three.js
import * as THREE from 'three';

//scene, camera and renderer
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

//set renderer and camera
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

//render this
renderer.render(scene, camera);

//torus object
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({ color: 0xFF6347, wireframe: true });
const torus = new THREE.Mesh(geometry, material);

//add torus to scene
scene.add(torus);

//animation loop - something like "Update" or "game loop"
function animate() {
    requestAnimationFrame(animate);

    //rotate torus
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01

    renderer.render(scene, camera);
}

//update things at screen
animate();