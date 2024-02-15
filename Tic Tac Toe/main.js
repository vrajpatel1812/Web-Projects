let boxs = document.querySelectorAll(".box");
let reset = document.querySelector(".resetButton");
let winner = document.querySelector(".WinnerName");

let turn0 = true; //to know who's turn it is 

const winningPattern = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

boxs.forEach(box => {
    box.addEventListener("click", ()=>{
        console.log("box clicked!")

        if(turn0) {
            box.innerHTML = "0";
            turn0 = false;
        }else{
            box.innerHTML = "x";
            turn0 = true;
        }

        box.disabled = true;

        checkWinner();
    })
});

const checkWinner = () => {
    for(let x of winningPattern) {
        let pos1 = boxs[x[0]].innerText;
        let pos2 = boxs[x[1]].innerText;
        let pos3 = boxs[x[2]].innerText;
        
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3) {
                winner.innerHTML = `${pos1} is Winner`;
                winner.style.display = "block";
                changeResettoNew();

                disableBoxs(); 
            }    
        }
    }
}

const changeResettoNew = () => {
    reset.innerText = `New Game`;
}

const disableBoxs = () => {   //after finding any winner this will auto-matically disable other boxs from doing any further action until use reset game
    for(let box of boxs) {
        box.disabled = true;
    }
}

const enableBoxs = () => {
    for(let box of boxs) {
        box.disabled = false;
        box.innerText = "";
    }
}

const resetGame = () => {
    turn0 = true;
    enableBoxs();
    winner.style.display = "none";
    reset.innerText = `Reset Game`
}

reset.addEventListener("click", resetGame);