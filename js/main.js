(function(){
	pj = window.pj || {};

	pj.width = window.innerWidth;
	pj.height = window.innerHeight;
	
	pj.renderer = new THREE.WebGLRenderer();
	pj.renderer.setSize(pj.width, pj.height);
	document.getElementById("container").appendChild(pj.renderer.domElement);

	pj.camera = new THREE.PerspectiveCamera(45, pj.width / pj.height, 1, 1000);
	pj.camera.position.z = 500;

	pj.scene = new THREE.Scene();

	pj.sphere = new THREE.Mesh(new THREE.SphereGeometry(150, 100, 100), new THREE.MeshNormalMaterial());
	pj.sphere.overdraw = true;
	pj.scene.add(pj.sphere);

	pj.renderer.render(pj.scene, pj.camera);
})();
