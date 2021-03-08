(function() {
    var scene = new THREE.Scene();

    var aspectRatio = window.innerWidth / window.innerHeight;
    // fov, aspect ratio, near plane, far plane
    var camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);

    // antialias makes cube edges look better
    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(2, 2, 2, 2);
    var material = new THREE.MeshBasicMaterial({ color: '#4dd080' });
    var cube = new THREE.Mesh(geometry, material);

    scene.add(cube);

    camera.position.z = 5;

    function animate() {
        // create a loop that makes the renderer draw the scene
        // every time the screen is refreshed
        // which is 60 frames per second on average monitor
        requestAnimationFrame(animate);

        var speed = 0.02;
        // rotate both ways
        cube.rotation.x += speed;
        cube.rotation.y += speed;

        renderer.render(scene, camera);
    }

    animate();
})();
