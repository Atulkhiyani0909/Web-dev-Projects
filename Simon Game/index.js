let gameseq=[];
let userseq=[];

let btns=["yellow","red","purple","green"];
let started =false;
let level=0;
let h2 =document.querySelector("h2");
let h3=document.querySelector("h3");
document.addEventListener("keypress",function(){
     if(started== false){
      console.log("game started");
      started=true;
      levelup();
     }
    
});
function btnflash(btn){
      btn.classList.add("flash");
      setTimeout(function(){
            btn.classList.remove("flash");
      },200);
}
function levelup(){
      userseq=[];
level++;
h2.innerText=`Level ${level}`;
//random button choose

let randomidx =Math.floor((Math.random()*4));
console.log(randomidx);
let randomcolor=btns[randomidx];
gameseq.push(randomcolor);
 console.log(gameseq);
let randombtn=document.querySelector(`.${randomcolor}`);//use this type of value `${} for such event otherwise it cant recognize it.
console.log(randombtn);

btnflash(randombtn);
}
function checkbtn(idx){
    //  console.log("curr level ",level);
//      let idx =level-1;
    if(userseq[idx]==gameseq[idx]){
      if(userseq.length == gameseq.length){
           setTimeout(levelup,300);
      }
      console.log("same value");

    }
    else{
      h2.innerText=`Game over : Press any key to start`;
      h3.innerText=`Your Score is :: ${level} `;
      extra();
      reset();
    }
   
}
function btnpress(){
      let btn =this;
      console.log(this);
      userflash(btn);

      usercolor=btn.getAttribute("id");
      console.log(usercolor);
      userseq.push(usercolor);
      console.log(userseq)
      checkbtn(userseq.length-1);
}
let allbtns =document.querySelectorAll(".btn");
for(btn of allbtns){
      btn.addEventListener("click",btnpress);
}
function userflash(btn){
      btn.classList.add("userflash");
      setTimeout(function(){
            btn.classList.remove("userflash");
      },200);
}
function reset(){
      started=false;
      gameseq=[];
      userseq=[];
      level=0;

}
let name =prompt("Enter Your Name");
let h4=document.getElementById("h3");
function extra(){


if(level<=12){
      h4.innerText=`${name} good try you can do better in next time `
}

else{
      h4.innerText=`${name} well done to do it better next time`;
}
}
//try to display the highst score of the user on the screen;