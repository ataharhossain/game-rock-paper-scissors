let userScore=0;
let computerScore=0;
// let life=10;

const choices = document.querySelectorAll((".choice"));
const message = document.querySelector(("#mess"));

const updateUserScore= document.querySelector(("#user-score"));
const updateComputerScore= document.querySelector(("#computer-score"));
// const updateLife= document.querySelector(("#life"));

const genComputerChoice= () =>{
    const options=[ "rock", "paper", "scissors"];
    const optionsIdx = Math.floor(Math.random()*3);
    return options[optionsIdx];
}

const drawGame = () =>{
    console.log("Game was draw");
    message.innerText ="Game was draw try again";
    message.style.backgroundColor = "blue";
}

const showWinner = (userWin , userChoice, computerChoice) => {
    if(userWin)
    {
        userScore++;
        updateUserScore.innerText = userScore;
        console.log("You win!");
        message.innerText =`You win! your ${userChoice} beats ${computerChoice}`;
        message.style.backgroundColor = "green";
    }
    else
    {
        computerScore++;
        updateComputerScore.innerText = computerScore;
        // life--;
        // updateLife.innerText = life;
        console.log("You lost");
        message.innerText =`You lost!  ${computerChoice} beats your ${userChoice}`;
        message.style.backgroundColor = "red";
        // if(life===0){
        //     userScore=0;
        //     computerScore=0;
        //     updateComputerScore.innerText = computerScore;
        //     updateUserScore.innerText = userScore;
        //     life=10;
        //     userScore > computerScore ? message.innerText =(`You win! your ${userScore} computer ${computerScore}`): message.innerText =`You lost! your ${userScore} computer ${computerScore}`;
            
        // }
    }
}

let playGame= (userChoice)=>{
  console.log("user choice =" ,userChoice );
   const computerChoice= genComputerChoice();
  console.log("computer choice=" ,computerChoice );
   if( computerChoice === userChoice){
    //draw game
    drawGame();
   }
   else{
    let userWin = true;
    if( userChoice=== "rock"){
        //paper, scissor
        userWin = computerChoice=== "paper" ? false: true;

    }
    else if(userChoice=== "paper"){ 
      // rock, scissor
      userWin = computerChoice=== "scissors" ? false : true;
    }
    else{
        //rock,paper
        userWin= computerChoice=== "rock"? false : true;
    }
    showWinner(userWin , userChoice , computerChoice);
   }
}

choices.forEach( (choice) => {
    choice.addEventListener("click" , () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
