function playGame() {
    let playerScoreCount = 0;
        let computerScoreCount = 0;
    for (let i = 0; i < 5; i++) {

        

        function game() {


            const gameOptions = ["ROCK", "PAPER", "SCISSORS"];

            let playerSelection = prompt();
            let winLose = false;

            function getComputerChoice() {

                function randomString(gameOptions) {
                    const randomIndex = Math.floor(Math.random() * gameOptions.length);
                    return gameOptions[randomIndex];
                }
                const computerChoice = randomString(gameOptions);
                return computerChoice
            }

            let computerSelection = getComputerChoice();

            console.log(computerSelection)



            let playerSelectionCapitalised = playerSelection.toUpperCase();

            console.log(playerSelectionCapitalised);

            let lossConcession = `Darn you win, ${playerSelectionCapitalised} beats ${computerSelection}`;
            let winProclomation = `Yeah Boi I win, ${computerSelection} beats ${playerSelectionCapitalised}`;



            if (playerSelectionCapitalised === computerSelection) {
                console.log("We'll get them next time");
            } else if (playerSelectionCapitalised === "ROCK" && computerSelection === "SCISSORS") {
                playerScoreCount++;
                return winProclomation;
            } else if (playerSelectionCapitalised === "ROCK" && computerSelection === "PAPER") {
                computerScoreCount++;
                return lossConcession;
            } else if (playerSelectionCapitalised === "PAPER" && computerSelection === "SCISSORS") {
                computerScoreCount++;
                return lossConcession;
            } else if (playerSelectionCapitalised === "PAPER" && computerSelection === "ROCK") {
                playerScoreCount++;
                return winProclomation;
            } else if (playerSelectionCapitalised === "SCISSORS" && computerSelection === "ROCK") {
                computerScoreCount++;
                return lossConcession;
            } else if (playerSelectionCapitalised === "SCISSORS" && computerSelection === "PAPER") {
                playerScoreCount++;
                return winProclomation;
            }
        }


        const gameResult = game()
        console.log(gameResult)
        console.log(playerScoreCount)
        console.log(computerScoreCount)

        if(i===4){ 
            if(playerScoreCount > computerScoreCount){ 
                console.log("Darn it you won")
            }else if (playerScoreCount < computerScoreCount){ 
                console.log("HAHAHA LOOOOOOOSSSSSEEERRRR")
            }else if (playerScoreCount == computerScoreCount){
                console.log("This is highly unlikely")
            }
        }
    }
    
}
