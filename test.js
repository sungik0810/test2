const getBackground = document.querySelector(".class");
const getCircle = document.querySelector(".circle");
const getrandomBackground = document.querySelector(".randomBackground");
//마우스 위치 찾기 -> 박스 마우스 위치로 이동시키기
function mousePosition(event){
    let x = 0;
    let y = 0;
    x = event.pageX-250;
    y = event.pageY-250;
    
    getCircle.style.left = `${x}px`;
    getCircle.style.top = `${y}px`;


    }
document.addEventListener("mousemove",mousePosition);





//화면 색 바꾸기
function changeColor(event){
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    getBackground.style.backgroundColor = `rgb(${r},${g},${b})`;
}
document.addEventListener("click",changeColor);


for(let i = 0; i < 50; i++){
const makeRandomBackground = document.createElement("div");
getrandomBackground.appendChild(makeRandomBackground);
makeRandomBackground.classList.add("randomColor");
makeRandomBackground.classList.add(`randomColor${i}`);
let getrandomBackgroundNum = document.querySelector(`.randomColor${String(i)}`);
window["rBr"+i] = Math.round(Math.random()*255); // 일단 안씀 왜냐면 255로 했을 때 색이 더 이뻐서
window["rBg"+i] = Math.round(Math.random()*255);
window["rBb"+i] = Math.round(Math.random()*255);
let innerWidth = window.innerWidth;
let innerHeight = window.innerHeight;
let randomLeft = Math.round(Math.random()*innerWidth);
let randomTop = Math.round(Math.random()*innerHeight);
getrandomBackgroundNum.style.boxShadow = `1000px 1000px 200px 200px rgba(255,${window["rBg"+i]},${window["rBb"+i]},0.5)`;
getrandomBackgroundNum.style.left = `${randomLeft-1500}px`;
getrandomBackgroundNum.style.top = `${randomTop-1500}px`;


}

let getcircleColor = document.querySelector(".circle");


function functionName(){
    for(let i=0;i<50;i++){
    getcircleColor.style.boxShadow =`200px 200px 10px rgba(255,${window["rBg"+i]},${window["rBb"+i]},0.5)`;
    }
}
document.addEventListener("mousemove",functionName);

        //if( 마우스가 getrandomBackgroundNum 위에 있는지 확인 == true){
        //getCircle.style.boxShadow = `200px 200px 100px rgba(${rBr2},${rBg2},${rBb2},0.5)`;
        //}