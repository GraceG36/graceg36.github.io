const game = ()=> {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
         });
    };

    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        
        //CP options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option =>{
            option.addEventListener("click", function() {
                //CP Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                compareHands(this.textContent, computerChoice);

                //Update Images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
            });
            
        });
    };

    const compareHands = (playerChoice, computerChoice) =>{
        const winner = document.querySelector(".winner");

        if(playerChoice === computerChoice){
            winner.textContent = "It is a tie";
            return;
        }
    
        //check for rock
        if(playerChoice === "rock"){
            if(computerChoice === "scissors"){
                winner.textContent = "Player Wins"
                return;
            }else{
                winner.textContent = "Computer Wins";
                return;
            }
        }
            //Check for paper
        if(playerChoice === "paper"){
            if(computerChoice === "scissors"){
                winner.textContent = "Computer Wins"
                return;
            }else{
                winner.textContent = "Player Wins";
                return;
            }
        }
            //check for scissors
        if(playerChoice === "scissors"){
            if(computerChoice === "rock"){
                winner.textContent = "Computer Wins"
                return;
            }else{
                winner.textContent = "Player Wins";
                return;
            }
        }
    };

    //Check for Paper
    startGame();
    //updateScore();
    playMatch();
        
    };




game();
