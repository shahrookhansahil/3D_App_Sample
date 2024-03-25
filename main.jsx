// import * as THREE from "three";
// import WebGL from "three/addons/capabilities/WebGL.js";

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
// 	75,
// 	window.innerWidth / window.innerHeight,
// 	0.1,
// 	1000
// );
// camera.position.set(4, 0, 100);

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 5;
// function animate() {
// 	requestAnimationFrame(animate);
// 	renderer.render(scene, camera);
// 	cube.rotation.x += 0.01;
// }
// if (WebGL.isWebGLAvailable()) {
// 	// Initiate function or other initializations here
// 	animate();
// } else {
// 	const warning = WebGL.getWebGLErrorMessage();
// 	document.getElementById("container").appendChild(warning);
// }

import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);
camera.position.set(0, 0, 0);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({
	antialias: true,
});

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener("resize", () => {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;

	camera.updateProjectionMatrix();
});

// Load texture (optional)
const texture = new THREE.TextureLoader().load("images/bricks.png");
texture.repeat.set(0.4, 0.4);

// Create cylinder geometry
const radiusTop = 1; // Top radius
const radiusBottom = 1; // Bottom radius
const height = 2; // Height of the cylinder
const radialSegments = 32; // Number of segmented faces around the circumference
const geometry = new THREE.CylinderGeometry(
	radiusTop,
	radiusBottom,
	height,
	radialSegments
);

const material = new THREE.MeshBasicMaterial({
	// color: 0x00ff00,
	wireframe: false,
	map: texture, // Optional: apply texture
});

const cylinder = new THREE.Mesh(geometry, material);

// Rotate the cylinder by 90 degrees around the --axis
cylinder.rotation.z = Math.PI / 2;

scene.add(cylinder);
camera.position.z = 5;

function animate() {
	requestAnimationFrame(animate);
	// cylinder.rotation.y += 0.008;
	cylinder.rotation.x += 0.008;

	renderer.render(scene, camera);
}

animate();
