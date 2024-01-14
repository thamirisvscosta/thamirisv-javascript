// import starTexture from 'img/stars.jpg';

const renderer = new THREE.WebGLRenderer({antialias:true});
//antialias suaviza as bordas da geometria
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);


// cena e camera

const scene = new THREE.Scene();

//tentativa de fundo ...

const cubeGeometry = new THREE.BoxGeometry(1000,1000,1000);

const loader3 = new THREE.TextureLoader();

 const materialArray = [
     new THREE.MeshBasicMaterial({map:loader3.load('img/stars.jpg'), side: THREE.DoubleSide }),
     new THREE.MeshBasicMaterial({map:loader3.load('img/stars.jpg'), side: THREE.DoubleSide }),
     new THREE.MeshBasicMaterial({map:loader3.load('img/stars.jpg'), side: THREE.DoubleSide }),
     new THREE.MeshBasicMaterial({map:loader3.load('img/stars.jpg'), side: THREE.DoubleSide }),
     new THREE.MeshBasicMaterial({map:loader3.load('img/stars.jpg'), side: THREE.DoubleSide }),
     new THREE.MeshBasicMaterial({map:loader3.load('img/stars.jpg'), side: THREE.DoubleSide })
]

const back = new THREE.Mesh(cubeGeometry,materialArray);
scene.add(back);

// scene.background = new THREE.TextureLoader().setPath('img/').load(
// 'stars.jpg')

const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth/ window.innerHeight,
    0.1,
    1000
);

// orbita - ajuda a movimentar a cena

const orbit = new THREE.OrbitControls(camera,renderer.domElement,scene);
orbit.update();

//posicao da camera

camera.position.z = 120;
camera.position.y = 0;
camera.position.x = 2;




// geometrias na cena
const sunGeometry = new THREE.SphereGeometry(16,40,40);
const earthGeometry = new THREE.SphereGeometry(6,40,40);
const marsGeometry = new THREE.SphereGeometry(4,40,40);
const mercuryGeometry = new THREE.SphereGeometry(3.2,40,40);
const jupiterGeometry = new THREE.SphereGeometry(12,40,40);
const neptuneGeometry = new THREE.SphereGeometry(2,40,40);
const saturnGeometry = new THREE.SphereGeometry(10,40,40);
const venusGeometry = new THREE.SphereGeometry(5.8,40,40);
const uranusGeometry = new THREE.SphereGeometry(7,40,40);
const moonGeometry = new THREE.SphereGeometry(.8,40,40);
// const sphereMaterial = new THREE.MeshPhongMaterial({color:0x030ff0, wireframe: false});

    //texturas

    //para carregar uma textura...
const loader = new THREE.TextureLoader();

// sol

const suntexture = new THREE.MeshBasicMaterial({
    map: loader.load('img/sun.jpg')
})
const sun = new THREE.Mesh(sunGeometry, suntexture);
sun.position.set(0,1,0);
sun.castShadow = true; //gerando sombra na esfera

scene.add(sun);

// terra

const earthtexture = new THREE.MeshStandardMaterial({
    map: loader.load('img/earth_day.jpg')
})
const earth = new THREE.Mesh(earthGeometry, earthtexture);
earth.position.set(62,1,0);
earth.receiveShadow = true; //gerando sombra na esfera

const earthObj = new THREE.Object3D();
earthObj.add(earth);

sun.add(earthObj);

// marte

const marstexture = new THREE.MeshStandardMaterial({
    map: loader.load('img/mars.jpg')
})
const mars = new THREE.Mesh(marsGeometry, marstexture);
mars.position.set(78,1,0);
mars.receiveShadow = true; //gerando sombra na esfera

const marsObj = new THREE.Object3D();
marsObj.add(mars);

sun.add(marsObj);

// mercúrio

const mercurytexture = new THREE.MeshStandardMaterial({
    map: loader.load('img/mercury.jpg')
})
const mercury = new THREE.Mesh(mercuryGeometry, mercurytexture);
mercury.position.x = 30;
mercury.receiveShadow = true; //gerando sombra na esfera

const mercuryObj = new THREE.Object3D();
mercuryObj.add(mercury);

sun.add(mercuryObj);

// jupiter


const jupitertexture = new THREE.MeshStandardMaterial({
    map: loader.load('img/jupiter.jpg')
})
const jupiter = new THREE.Mesh(jupiterGeometry, jupitertexture);
jupiter.position.set(100,1,0);
jupiter.receiveShadow = true; //gerando sombra na esfera

const jupiterObj = new THREE.Object3D();
jupiterObj.add(jupiter);

sun.add(jupiterObj);

// netuno

const neptunetexture = new THREE.MeshStandardMaterial({
    map: loader.load('img/neptune.jpg')
})
const neptune = new THREE.Mesh(neptuneGeometry, neptunetexture);
neptune.position.set(200,1,0);
neptune.receiveShadow = true; //gerando sombra na esfera

const neptuneObj = new THREE.Object3D();
neptuneObj.add(neptune);

sun.add(neptuneObj);

// saturno
const saturntexture = new THREE.MeshStandardMaterial({
    map: loader.load('img/saturn.jpg'),
    
})
const saturn = new THREE.Mesh(saturnGeometry, saturntexture);
saturn.position.set(138,0,0);
saturn.receiveShadow = true; //gerando sombra na esfera

const saturnObj = new THREE.Object3D();
saturnObj.add(saturn);

sun.add(saturnObj);

//anel de saturno

const saturnRingGeo = new THREE.RingGeometry(10,20,30);
const saturnRingMat = new THREE.MeshBasicMaterial({
    map:loader.load('img/saturn_ring.png'),
    side: THREE.DoubleSide,
});
const saturnRing = new THREE.Mesh(saturnRingGeo,saturnRingMat);

saturnRing.position.x = 138;
saturnRing.rotation.x = -0.5 *  Math.PI;

saturnObj.add(saturnRing);


const venustexture = new THREE.MeshStandardMaterial({
    map: loader.load('img/venus.jpg')
})
const venus = new THREE.Mesh(venusGeometry, venustexture);
venus.position.x = 44;
venus.receiveShadow = true; //gerando sombra na esfera

const venusObj = new THREE.Object3D();
venusObj.add(venus);

sun.add(venusObj);


const uranustexture = new THREE.MeshStandardMaterial({
    map: loader.load('img/uranus.jpg')
})
const uranus = new THREE.Mesh(uranusGeometry,uranustexture);
uranus.position.set(176,0,0);
uranus.receiveShadow = true; //gerando sombra na esfera

const uranusObj = new THREE.Object3D();
uranusObj.add(uranus);

sun.add(uranusObj);


const moontexture = new THREE.MeshStandardMaterial({
    map: loader.load('img/moon.jpg')
})
const moon = new THREE.Mesh(moonGeometry,moontexture);
moon.position.set(-8,0,0);
moon.receiveShadow = true; //gerando sombra na esfera

const moonObj = new THREE.Object3D();
moonObj.add(moon);

earth.add(moonObj);

//sombra ligada

renderer.shadowMap.enabled = true;

renderer.shadowMap.type = THREE.PCFSoftShadowMap; //tirando serrilhado - qualidade


//luz
const ambientLight = new THREE.AmbientLight(0xffffff, .2);
ambientLight.position.set(0,1,0);
ambientLight.castShadow = true;
scene.add(ambientLight);


const pointLight = new THREE.PointLight(0xffffff,2,300);
scene.add(pointLight);


//luz - sombra


// animção da cena

function animate(){

    //esfera girando
    sun.rotateY(0.005); 
    mercury.rotateY(0.005); 
    saturn.rotateY(0.035);
    earth.rotateY(0.009);
 
    mercuryObj.rotateY(0.04); 
    venusObj.rotateY(0.02); 
    earthObj.rotateY(0.01); 
    moonObj.rotateY(0.07); 
    marsObj.rotateY(0.008); 
    jupiterObj.rotateY(0.0006); 
    saturnObj.rotateY(0.0009); 
    uranusObj.rotateY(0.00006); 
    neptuneObj.rotateY(0.0000); 

    renderer.render(scene,camera);
}

renderer.setAnimationLoop(animate);


//data/x3 - configuração na tela (data entry colocar embaixo dps)

const x3 = new THREEx3({
    THREE,
    OrbitControls: THREE.OrbitControls,
    camera,
    renderer,
    scene
});

x3.add(camera);

x3.add(sun, {label:'sun options'}); //Mesh(2) - label dá o nome no controle de opções
x3.add(jupiter, {label:'jupiter options'}); //Mesh(2) - label dá o nome no controle de opções
x3.add(mercury, {label:'mercury options'}); //Mesh(2) - label dá o nome no controle de opções
x3.add(venus, {label:'venus options'}); //Mesh(2) - label dá o nome no controle de opções
x3.add(earth, {label:'earth options'}); //Mesh(2) - label dá o nome no controle de opções
x3.add(mars, {label:'mars options'}); //Mesh(2) - label dá o nome no controle de opções
x3.add(saturn, {label:'saturn options'}); //Mesh(2) - label dá o nome no controle de opções
x3.add(neptune, {label:'neptune options'}); //Mesh(2) - label dá o nome no controle de opções
x3.add(uranus, {label:'uranus options'}); //Mesh(2) - label dá o nome no controle de opções
x3.add(moon, {label:'moon options'}); //Mesh(2) - label dá o nome no controle de opções

x3.add(ambientLight)
