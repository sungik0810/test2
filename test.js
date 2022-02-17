const getBackground = document.querySelector(".class");
const getCircle = document.querySelector(".circle");
const getrandomBackground = document.querySelector(".randomBackground");

let backRandomColorNum = 50;

//마우스 위치 찾기 -> 박스 마우스 위치로 이동시키기
function mousePosition(event){
    let x = 0;
    let y = 0;
    x = event.pageX-150;
    y = event.pageY-150;
    
    getCircle.style.left = `${x}px`;
    getCircle.style.top = `${y}px`;
  

    }
document.addEventListener("mousemove",mousePosition);





//화면 색 바꾸기
// function changeColor(event){
//     let r = Math.round(Math.random()*255);
//     let g = Math.round(Math.random()*255);
//     let b = Math.round(Math.random()*255);
//     getBackground.style.backgroundColor = `rgb(${r},${g},${b})`;
// }
// document.addEventListener("click",changeColor);


for(let i = 0; i < backRandomColorNum; i++){
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
getrandomBackgroundNum.style.background = `radial-gradient(circle at 50% 50%, rgba(255, ${window["rBg"+i]},${window["rBb"+i]}, 1) 0%, rgba(255, 0,0, 0)60%, rgba(0, 0, 0, 0) 100%)`;
getrandomBackgroundNum.style.left = `${randomLeft-400}px`;
getrandomBackgroundNum.style.top = `${randomTop-400}px`;


getrandomBackgroundNum.style.zIndex = i;
}
getCircle.style.zIndex = backRandomColorNum;
        
        for(let i = 0; i<backRandomColorNum; i++){
            function functionName(){

                getCircle.style.background = `radial-gradient(circle at 50% 50%, rgba(255, ${window["rBg"+i]}, ${window["rBb"+i]}, 1) 0%, rgba(0, 0, 255, 1) 30%, rgba(0, 150, 136, 0) 70%)`;
            }//function
            document.querySelector(`.randomColor${i}`).addEventListener("mousemove",functionName);
        }



//         for(let i =0; i<backRandomColorNum; i++){
// function functiontwo(){
//     //css 속성값 가져오기
//     let aaa = document.querySelector(`.randomColor${i}`);
//     let bbb = getComputedStyle(aaa).getPropertyValue("z-index");

//     if(bbb !== getComputedStyle(aaa).getPropertyValue("z-index")){
//     }else{
//         getCircle.style.transition = "all 1s ease-in-out 1s";
//         console.log("error")
//     }
// }
// document.querySelector(`.randomColor${i}`).addEventListener("mouseover",functiontwo);
// }