const container = document.querySelector('.container');
const clearBtn = document.getElementById('clear');
const sqNum = ()=> document.getElementById('square').value ;
let sq = sqNum();
const sqInput =  document.getElementById('square');
const eraser = document.getElementById('eraser');
let favColor = ()=> document.getElementById('favcolor').value;
let colorInput = document.getElementById('favcolor');
let childs = ()=>document.querySelectorAll('.child');
let gridLine = document.getElementById('grid-line');
let rainBows = document.getElementById('rain-bow');

rainBows.addEventListener('click',rainBow);
gridLine.addEventListener('click',toggleGridLine);
colorInput.addEventListener('change',draw);
clearBtn.addEventListener('click', clear);
eraser.addEventListener('click',earse);
sqInput.addEventListener('input',upDateSq);

function createGrid(){
    container.style.gridTemplateColumns  = `repeat(${sq},1fr)`;
    container.style.gridTemplateRows  = `repeat(${sq},1fr)`;
    for(let i = 0; i < sq  * sq ; i++){
        const child = document.createElement("div");
        child.classList.add("child");
        container.appendChild(child);
    }
}

function draw(){
    childs().forEach((child) => {
        child.addEventListener('mouseover',() => {
            child.style.backgroundColor = favColor();
        });
    })
}
function rainBow(){
    childs().forEach((child) => {
        child.addEventListener('mouseover',() => {
            let r = (Math.random() * 200)  % 255;
            let g = (Math.random() * 150)  % 255;
            let b = (Math.random() * 100)  % 255;
            child.style.backgroundColor = `rgb(${r},${g},${b})`;
            
        });
    })
}


function upDateSq() {
    container.innerHTML = '';
    sq = sqNum();
    createGrid();
    draw();
}

function clear(){
    childs().forEach((child) => {
        child.style.backgroundColor = '';
    })
    draw();
}

function earse(){
    childs().forEach((child) => {
        child.addEventListener('mouseover',()=>{
            child.style.backgroundColor = '';
        });
    })
}
let toggle = false;
function toggleGridLine(){
    console.log(toggle);
    if (!toggle){
        childs().forEach((child) => {
            child.style.border = 'none';
        })
        toggle = true;
    }
    else{
        childs().forEach((child) => {
            child.style.border = '0.2px solid #dde';
        })
        toggle = false;
    }
}
createGrid();
draw();