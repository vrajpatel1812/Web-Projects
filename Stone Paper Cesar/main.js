let userScore = 0;
let compScore = 0;

let choice = document.querySelectorAll(".imgs");
let msg = document.querySelector(".pickMoveButton");

let user = document.querySelector("#userID");
let comp = document.querySelector("#compID");

const generateRandom = () => {
    const options = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return options[random];
}

const drawGame = () => {
    msg.innerHTML = "Game was Draw";
}

const showWinnner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        user.innerText = userScore;
        msg.innerText = `You win. Your ${userChoice} beats ${compChoice}`;

    }else{
        compScore++;
        comp.innerText = compScore;
        msg.innerText = `You Lost. ${compChoice} beats ${userChoice}`;
    }
}

const playGame = (userChoice) => {
    const compChoice = generateRandom();
    console.log(`computer choice : ${compChoice}`);

    if(compChoice === userChoice) {
        drawGame();
    }else{
        let userWin = true;

        if(userWin === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }else if(userWin === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }

        showWinnner(userWin, userChoice, compChoice);
    }
}

choice.forEach((choices) => {
    choices.addEventListener("click", () => {
        const userChoice = choices.getAttribute("id");
        console.log(`User choice : ${userChoice}`);
        playGame(userChoice);
    })
})

