import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { get_mars_weather } from './apiFunctions';
import backgroundPicure from './pictures/space.jpg';
import marsSurface from './pictures/mars.jpg'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const marsData = get_mars_weather();
console.log(marsData);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
})

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);
renderer.render( scene, camera );

//planet objects
// const geometry = new THREE.SphereGeometry(10, 40, 18);
// const material = new THREE.MeshStandardMaterial( { color: 0xCC3333 });
const marsTexture = new THREE.TextureLoader().load(marsSurface)
const mars = new THREE.Mesh( 
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshBasicMaterial( { map: marsTexture } )
  );

//scene
scene.add(mars)

const pointLight = new THREE.PointLight(0xffffff)
const lightHelper = new THREE.PointLightHelper(pointLight)
scene.add(lightHelper)

const controls = new OrbitControls(camera, renderer.domElement);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);
pointLight.position.set(30,30,30)

const spaceTexture = new THREE.TextureLoader().load(backgroundPicure);
scene.background = spaceTexture



//animations
function animate() {
  requestAnimationFrame( animate )

  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.005;
  sphere.rotation.z += 0.01;

  controls.update()

  renderer.render( scene, camera );
}

animate()


