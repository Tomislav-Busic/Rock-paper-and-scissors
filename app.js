const tl = gsap.timeline({defaults: { ease: "power1.out" } }); //koliko dugo želimo da se svaka animacija dogodi

tl.to(".text", { y: "0%", duration: 2, stagger: 0.35});
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5});
tl.to(".intro1", { y: "-100%", duration: 1}, "-=1");

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
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            })
        })
        //computer options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function(){
                //computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                
                setTimeout(() => {
                    //Here is where we call compare hands
                    compareHands(this.textContent, computerChoice);
                    //Update Images
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);

                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
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
            winner.style.color = "yellow";
            return;
        }

        //Check for Rock
        if(playerChoice === "rock"){
            if(computerChoice === "scissors"){
                winner.textContent = "Player Wins";
                winner.style.color = "green";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Computer Wins";
                winner.style.color = "crimson";
                cScore++;
                updateScore();
                return;
            }
        }

        //Check for Paper
        if(playerChoice === "paper"){
            if(computerChoice === "rock"){
                winner.textContent = "Player Wins";
                winner.style.color = "green";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Computer Wins";
                winner.style.color = "crimson";
                cScore++;
                updateScore();
                return;
            }
        }

        //Check for Sissors
        if(playerChoice === "scissors"){
            if(computerChoice === "paper"){
                winner.textContent = "Player Wins";
                winner.style.color = "green";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Computer Wins";
                winner.style.color = "crimson";
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
            endMessage.style.color = "green";
            document.body.classList.add("overlay-is-open");
            setTimeout(() => resetButton.focus(), 331);
        }
        if (cScore === 10) {
            endMessage.textContent = "Sorry, you lose.";
            endMessage.style.color = "crimson";
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
    strings: ["Rock paper scissors",
     "is a hand game usually played between two people", 
     "in which each player simultaneously forms one of three shapes with an outstretched hand",
     " These shapes are 'rock' (a closed fist),",
     "'paper' (a flat hand),",
     " and 'scissors' (a fist with the index finger and middle finger extended, forming a V).",
     "'Scissors' is identical to the two-fingered V sign (also indicating 'victory' or 'peace')",
     "except that it is pointed horizontally instead of being held upright in the air."],
    typeSpeed: 100,
    backSpeed: 30,
    loop: true
});