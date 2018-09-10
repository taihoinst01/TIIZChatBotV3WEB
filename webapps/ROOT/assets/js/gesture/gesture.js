var mixers = [];
var container, stats, controls;
var camera, scene, renderer, light;
var action;
var actionList = [];
var clock;
var mixer;
function playAction(actionNum) {
    console.log("actionNum ::: " + actionNum);
    if (actionNum == undefined) {
        actionNum = 3;
    }
    console.log("change actionNum ::: " + actionNum);
    //동작을 맨처음 클릭시에는 action에 애니메이션이 없는 상태이기 때문에 분기처리를 안하고 action.stop()을 하면 에러 발생
    if (action != null) {
        action.stop();
    }


    //원하는 동작을 리스트에서 가져옵니다.
    action = actionList[actionNum];

    /*angry_00 - 0 ~ 95
    cheer_00 - 100 ~ 175
    confused_00 - 180 ~285
    cry_00 - 290 ~ 422
    cute_00 - 427 ~ 521
    daydream_00 - 526 ~ 718
    excited_00 - 723 ~ 827
    hello_00 - 832 ~ 923
    hello_01 - 928 ~ 998
    idle_00 - 1003 ~ 1128
    interested_00 - 1133 ~ 1233 
    joy_00 - 1238 ~ 1318
    love_00 - 1323 ~ 1423
    neg_00 - 1428 ~ 1526
    neg_01 - 1531 ~ 1639
    pos_00 - 1644 ~ 1710
    pos_01 - 1715 ~ 1784
    sleepy_00 - 1789 ~ 1924
    think_00 - 1929 ~ 2039
    wink_00 - 2044 ~ 2109	*/


    if (actionNum == 0) {

        action.time = 0;

    } else if (actionNum == 1) {

        action.time = 108;

    } else if (actionNum == 2) {

        action.time = 177;

    } else if (actionNum == 3) {

        action.time = 291;
    } else if (actionNum == 4) {
        action.time = 431;
    } else if (actionNum == 5) {
        action.time = 520;
    } else if (actionNum == 6) {
        action.time = 713;
    } else if (actionNum == 7) {
        action.time = 827.5;
    } else if (actionNum == 8) {
        action.time = 929;
    } else if (actionNum == 9) {
        action.time = 1011;
    } else if (actionNum == 10) {
        action.time = 1147.5;
    } else if (actionNum == 11) {
        action.time = 1271;
    } else if (actionNum == 12) {
        action.time = 1324.5;
    } else if (actionNum == 13) {
        action.time = 1471.5;
    } else if (actionNum == 14) {
        action.time = 1580.5;
    } else if (actionNum == 15) {
        action.time = 1650.5;
    } else if (actionNum == 16) {
        action.time = 1722;
    } else if (actionNum == 17) {
        action.time = 1791;
    } else if (actionNum == 18) {
        action.time = 1967;
    } else if (actionNum == 19) {
        action.time = 2106.5;
    }
    //action.setLoop(THREE.LoopOnce);
    action.play();


}

function playAnimation(fbxName) {
    console.log("fbxName ::: " + fbxName);
    if (!Detector.webgl) Detector.addGetWebGLMessage();
    clock = new THREE.Clock();


    init();
    animate();

    var _width = 249;
    var _height = 487;

    function init() {
        container = $('#animationDiv');

        //원근 투영 을 사용하는 카메라 .
        //camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 3, 200000);
        camera = new THREE.PerspectiveCamera(45, 249 / 487, 3, 200000);     //케릭터 생성위치(width/height)
        camera.position.set(100, 3000, 7500);

        //궤도 제어는 카메라가 표적 주위를 도는 것을 허용합니다. 
        //controls = new THREE.OrbitControls(camera);
        //controls.target.set(0, 2000, 0);
        //controls.update();

        //장면을 사용하면 three.js에서 렌더링 할 내용의 위치를 ​​설정할 수 있습니다. 이것은 물건, 조명 및 카메라를 배치하는 곳입니다.
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xa0a0a0);

        //하늘색에서 바탕색으로 색상이 희미 해져 장면 바로 위에 배치 된 광원입니다. 이 빛은 그림자를 드리 우는 데 사용할 수 없습니다.
        light = new THREE.HemisphereLight(0xffffff);
        scene.add(light);

        //특정 방향으로 방출되는 빛. 이 빛은 무한히 멀리 떨어져있는 것처럼 행동 할 것이고 그 광선은 모두 평행합니다. 이것에 대한 일반적인 사용 사례는 일광을 시뮬레이션하는 것입니다.  
        light = new THREE.AmbientLight(0xffffff);
        scene.add(light);

        // model
        var loader = new THREE.FBXLoader();
        loader.load('assets/fbx/ChatBot_AniAll01.FBX', function (object) {

            //AnimationMixer는 장면의 특정 객체에 대한 애니메이션 플레이어입니다.
            object.mixer = new THREE.AnimationMixer(object);
            mixers.push(object.mixer);

            //버튼을 누를때마다 동작을 자연스럽게 변화시키기 위해 하나의 fbx파일에 여러 애니메이션클립이 있는것을 따로 뽑아놈	

            actionList.push(object.mixer.clipAction('angry_00'));
            actionList.push(object.mixer.clipAction('cheer_00'));
            actionList.push(object.mixer.clipAction('confused_00'));
            actionList.push(object.mixer.clipAction('cry_00'));
            actionList.push(object.mixer.clipAction('cute_00'));
            actionList.push(object.mixer.clipAction('daydream_00'));
            actionList.push(object.mixer.clipAction('excited_00'));
            actionList.push(object.mixer.clipAction('hello_00'));
            actionList.push(object.mixer.clipAction('hello_01'));
            actionList.push(object.mixer.clipAction('idle_00'));
            actionList.push(object.mixer.clipAction('interested_00'));
            actionList.push(object.mixer.clipAction('joy_00'));
            actionList.push(object.mixer.clipAction('love_00'));
            actionList.push(object.mixer.clipAction('neg_00'));
            actionList.push(object.mixer.clipAction('neg_01'));
            actionList.push(object.mixer.clipAction('pos_00'));
            actionList.push(object.mixer.clipAction('pos_01'));
            actionList.push(object.mixer.clipAction('sleepy_00'));
            actionList.push(object.mixer.clipAction('think_00'));
            actionList.push(object.mixer.clipAction('wink_00'));


            object.traverse(function (child) {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                }

                // 캐릭터 세부 작업( 투명도 및 양면이 보이게 )
                if (child.name == 'hair001') {

                    child.material.transparent = true;
                    child.material.opacity = 100;
                    child.material.alphaTest = 0.5;
                    child.material.side = THREE.DoubleSide;
                }

                if (child.name == 'cloth001') {
                    child.material[0].opacity = 100;
                    child.material[0].alphaTest = 0.5;
                    child.material[0].transparent = true;
                    child.material[0].side = THREE.DoubleSide;
                }

                if (child.name == 'face001') {
                    child.material[1].opacity = 5;
                    child.material[1].alphaTest = 0.1;
                    child.material[1].transparent = true;
                    child.material[1].side = THREE.DoubleSide;
                }

            });
            scene.add(object);
        });

        //WebGL 렌더러를 사용하여 아름답게 제작 된 장면을 표시
        renderer = new THREE.WebGLRenderer({ antialias: true });
        //장치 픽셀 비율을 설정합니다.
        renderer.setPixelRatio(window.devicePixelRatio);

        //출력 캔버스를 장치 픽셀 비율을 고려하여 (너비, 높이)로 조정하고 (0, 0)부터 시작하여 뷰포트를 해당 크기에 맞게 설정합니다.
        //renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setSize(249, 487);     //챗팅창에 고려한 canvas 사이즈 임의 조정

        container.append(renderer.domElement);
        //window.addEventListener('resize', onWindowResize, false); //resize 안되게 주석

        // stats
        stats = new Stats();

    }

    //Window Size 변경에 따른 카메라 및 화면 조정
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }


}

function animate() {
    //렌더러가 화면이 새로 고침 될 때마다 화면을 그려주는 루프가 생성됩니다
    requestAnimationFrame(animate);
    if (mixers.length > 0) {
        for (var i = 0; i < mixers.length; i++) {
            mixers[i].update(clock.getDelta());
        }
    }
    renderer.render(scene, camera);
    stats.update();
}