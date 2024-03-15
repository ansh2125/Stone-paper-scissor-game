let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#message");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
   const genCompChoice = () =>{
    const options =["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
     return options[randIdx]
        //  rock,paper,scissors

   };
   const drawGame =() =>{
    message.innerText="Game was draw.Play Again";
    message.style.backgroundColor="#081b31";
   };

const showWinner =(userWin, userChoice, compChoice) =>{
 if(userWin){
    userscore++;
    userScorePara.innerText=userscore;
    message.innerText=`You win your ${userChoice} beats ${compChoice}`;
    message.style.backgroundColor="green";
 }   
 else {
    compscore++;
    compScorePara.innerText=compscore;
 message.innerText=`You Lose ${compChoice} beats your ${userChoice}`;
 message.style.backgroundColor="red";
 }
}

const playGame = (userChoice) =>{
console.log("user choice=",userChoice);
    // generate computer choice
    const compChoice= genCompChoice();
    console.log("computer Choice=",compChoice);
    if(userChoice==compChoice)
    drawGame();
else {
    let userWin=true;
    if(userChoice==="rock"){
       userWin= compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
      userWin=  compChoice==="scissors"?false:true;
    }
    else if(userWin==="scissors"){
       userWin= compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
}
 };


choices.forEach((choice) => {
     choice.addEventListener("click",() =>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
     });
});