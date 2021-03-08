(function() {
    var scene, camera, renderer, cube;

    function calcAspectRatio() {
        return window.innerWidth / window.innerHeight;
    }

    init();
    function init() {
        scene = new THREE.Scene();

        // fov, aspect ratio, near plane, far plane
        camera = new THREE.PerspectiveCamera(75, calcAspectRatio(), 0.1, 1000);
    
        // antialias makes cube edges look better
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
    
        document.body.appendChild(renderer.domElement);
    
        // create cube
        var geometry = new THREE.BoxGeometry(2, 2, 2, 2);
        var material = new THREE.MeshBasicMaterial({ color: '#4dd080' });
        cube = new THREE.Mesh(geometry, material);
    
        scene.add(cube);
    
        camera.position.z = 5;    
    }

    animate();
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

    function onWindowResize() {
        // resize renderer size on window resize
        camera.aspect = calcAspectRatio();
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', onWindowResize, false);
})();
