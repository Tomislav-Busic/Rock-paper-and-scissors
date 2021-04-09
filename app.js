const game = () => {
    let pScore = 0;
    let cScore = 0;

    //start the game
    const startGame = () => {
        const startBtn = document.querySelector(".intro button");
        const intro = document.querySelector(".intro");
        const match = document.querySelector(".match");

        startBtn.addEventListener("click", () => {
            intro.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //Play Metch
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        //computer options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function(){
                //computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                //Here is where we call compare hands
                compareHands(this.textContent, computerChoice);
                //Update Images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
        
        checkLogic();
    }

    const compareHands = (playerChoice, computerChoice) =>{
        //Updata Text
        const winner = document.querySelector(".winner");
        //Checking for a tie
        if(playerChoice === computerChoice){
            winner.textContent = "It is a tie";
            return;
        }

        //Check for Rock
        if(playerChoice === "rock"){
            if(computerChoice === "scissors"){
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }

        //Check for Paper
        if(playerChoice === "paper"){
            if(computerChoice === "rock"){
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }

        //Check for Sissors
        if(playerChoice === "scissors"){
            if(computerChoice === "paper"){
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }  
    }

    
    const endMessage = document.querySelector(".end-message");
    const resetButton = document.querySelector(".reset-button");
    resetButton.addEventListener("click", resetGame);
    
    function checkLogic() {
        
        // ako pobjediš
        if (pScore === 10) {
            endMessage.textContent = "Congrats! You won.";
            document.body.classList.add("overlay-is-open");
            setTimeout(() => resetButton.focus(), 331);
        }
        if (cScore === 10) {
            endMessage.textContent = "Sorry, you lose.";
            document.body.classList.add("overlay-is-open");
            setTimeout(() => resetButton.focus(), 331);
        }
    }

    

    function resetGame() {
        document.body.classList.remove("overlay-is-open");
        pScore = 0;
        cScore = 0;
        updateScore();    //za raćanje početnog rezultaata
       }

    //Is call all the innner function
    startGame();
    playMatch();
};
//start the game function
game();

var typed = new Typed(".typing", {
    strings: ["Rock paper and scissors", "Paper rock and scissors", "Scissors paper and rock"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});