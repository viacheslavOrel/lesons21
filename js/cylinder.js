function cylinder() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.CylinderGeometry(5, 5, 20, 32);
    const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    const cylinder = new THREE.Mesh( geometry, material );
    scene.add( cylinder );
    camera.position.z = 25;
    console.log(cylinder);

    const light = new THREE.DirectionalLight('#fff', 0.5);
    light.position.set(-1, 2, 4);
    scene.add(light);

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();
}