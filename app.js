let gameSeq = [];
let userSeq = [];

let btns = ["pink","cobalt","orange","violet"];

let started = false;
let level = 0;
let high = 0;

let h2 = document.querySelector("h2");

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function(){
    if(started == false ){
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;


    let ranIdx = Math.floor(Math.random()*3);
    let ranColor = btns[ranIdx];
    let ranBtn = document.querySelector(`.${ranColor}`);

    // console.log(ranIdx);
    // console.log(ranColor);
    // console.log(ranBtn);

    gameSeq.push(ranColor);
    console.log(gameSeq);
    gameFlash(ranBtn);  
}

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function checkAns(idx){
    // console.log("curr level:",level);
    // let idx = level - 1;
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else {
         h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br> Press any key to start.`;
         document.querySelector("body").style.backgroundColor = "red";
         setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
         },250);

        if(high < level){
          high = level;   
        }

        h3.innerText = `Highsore is ${high}`;
         
         reset();
    }
}


function btnPress() {
    let btn = this;
    gameFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    level = 0;
}

