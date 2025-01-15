let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userPoint = document.querySelector("#userPoint");
let compPoint = document.querySelector("#compPoint");

let drawGame = () => {
    // console.log("Game drawn");
    msg.innerText = "Game drawn!";
    msg.style.backgroundColor = "black";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        // console.log("You win");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userPoint.innerText = userScore; 
    } else{
        compScore++;
        // console.log("You lose");
        msg.innerText = `You lose! ${compChoice} beats Your ${userChoice}`;;
        msg.style.backgroundColor = "red";
        compPoint.innerText = compScore;
    }
}

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    let randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame = (userChoice) => {
    // console.log("User choice = ",userChoice);
    const compChoice = genCompChoice();
    // console.log("Computer choice = ",compChoice);

    if(userChoice === compChoice){
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        } else{ //scissors
            // rock, paper
            userWin = compChoice === "rock" ? false : true;  
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click" , () => {
        let userChoice = choice.getAttribute("id");
        // console.log("Choice was clicked",choiceId);
        playGame(userChoice);
    })
})