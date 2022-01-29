import './style.css'

import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window. innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
})

renderer.setPixelRatio( window.devicePixelRation );
renderer.setSize( windowwww.innerWWwidth, window.innerHeight )
camera.position.setZ(30);

renderer.render( scene, camera );

//objects

const geometry = new THREE.Sphere(10, 40, 18)

