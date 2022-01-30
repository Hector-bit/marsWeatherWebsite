import './style.css'
import * as THREE from 'three';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
})

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight )
camera.position.setZ(30);

renderer.render( scene, camera );

//objects
const geometry = new THREE.SphereGeometry(10, 40, 18);
const material = new THREE.MeshStandardMaterial( { color: 0xFF6347, wireFrame: true });
const sphere = new THREE.Mesh( geometry, material );

//scene
scene.add(sphere)

const pointLight = new THREE.PointLight(0xffffff)

scene.add(pointLight)
pointLight.position.set(30,30,30)



//animations
function animate() {
  requestAnimationFrame( animate )

  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.005;
  sphere.rotation.z += 0.01;

  renderer.render( scene, camera );
}

animate()


