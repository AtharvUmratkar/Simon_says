let gameSeq=[] ;
let userSeq=[] ;

let level = 0;
let started = false;

let btns =["yellow", "red", "purple", "green"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if(started == false){
        console.log("started");
        started = true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
        }, 250
    );
    
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx){
    

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 600);
        }
    }
    else{

        h2.innerHTML = `Game over! Your score was <b> ${level}</b> <br> Press any Key to Start again`;
        console.log(`Over`);
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( function() {
            document.querySelector("body").style.backgroundColor = "white"} , 250);
        reset();
    }
}

function btnPress(){
    let btn = this;
    btnFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}