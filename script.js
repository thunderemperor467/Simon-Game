let gameseq=[];
let userseq=[];

let btns=["yellow","red","purple", "green"];

let started=false;
let level=0;



let h2=document.querySelector("h1");

document.addEventListener("keypress", function(){
    if(started == false){
    console.log("Game Started");
    started=true;

    levelup();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}


function levelup(){
    userseq=[]; // reset user sequence
    level++;
    h2.innerText =`Level ${level}`;

    let randidx =Math.floor(Math.random()*btns.length);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    
    // 
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);
}


function checkans(idx){
    // console.log("curr level:",level)
    // let idx=level-1;
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML= `game over, your score was <br>${level} <br> <br>Press any key to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}


function btnpress(){
    console.log(this);
    let btn=this;
    userflash(btn);

    let usercolor= btn.id;
    userseq.push(usercolor);
    checkans(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}



function reset(){
    started= false;
    gameseq=[];
    userseq=[];
    level=0;
}