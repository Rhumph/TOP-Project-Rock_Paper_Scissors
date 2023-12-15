let playerScoreCount = 0;
let computerScoreCount = 0;

function playGame(playerSelection) {

    if (playerScoreCount >= 5 || computerScoreCount >= 5) {

        if(playerScoreCount >= 5){ 
            const endGameMessage = document.createElement("p");
        endGameMessage.innerHTML = "this is the end, the player one with " + playerScoreCount;
        resultsDisplayTable.appendChild(endGameMessage)
        }else if (computerScoreCount >= 5){ 
            const endGameMessage = document.createElement("p");
        endGameMessage.innerHTML = "this is the end, the computer one with " + computerScoreCount;
        resultsDisplayTable.appendChild(endGameMessage)
        }
        
    }

    else {
        resultsDisplayTable = document.querySelector('.results-table-ul');

        for (let i = 0; i < 1; i++) {

            function game() {

                const gameOptions = ["ROCK", "PAPER", "SCISSORS"];

                function getComputerChoice() {

                    function randomString(gameOptions) {
                        const randomIndex = Math.floor(Math.random() * gameOptions.length);
                        return gameOptions[randomIndex];
                    }
                    const computerChoice = randomString(gameOptions);
                    return computerChoice
                }

                let computerSelection = getComputerChoice();

                console.log('Computer: ' + computerSelection)
                let computerChoiceOutput = ('Computer: ' + computerSelection)



                let playerSelectionCapitalised = playerSelection.toUpperCase();

                console.log('You: ' + playerSelectionCapitalised);
                let playerChoiceOutput = (`You: ${playerSelectionCapitalised}\n`);

                let lossConcession = `Darn you win, ${playerSelectionCapitalised} beats ${computerSelection}`;
                let winProclomation = `Yeah Boi I win, ${computerSelection} beats ${playerSelectionCapitalised}`;
                let drawProclomation = "We'll get them next time";

                function outcomeStatement() {
                    if (playerSelectionCapitalised === computerSelection) {
                        return drawProclomation;
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
                playerSelection = '';
                return `${playerChoiceOutput}\n${computerChoiceOutput}\n${outcomeStatement()}`;
            }


            let gameResult = [`${game() + " "}\n,${playerScoreCount + " "}\n,${computerScoreCount + " "}`];


            const resultElement = document.createElement('p');
            resultElement.innerHTML = gameResult;
            resultsDisplayTable.appendChild(resultElement);


            console.log(gameResult)

            if (i === 4) {
                if (playerScoreCount > computerScoreCount) {
                    console.log("Darn it you won")
                } else if (playerScoreCount < computerScoreCount) {
                    console.log("HAHAHA LOOOOOOOSSSSSEEERRRR")
                } else if (playerScoreCount == computerScoreCount) {
                    console.log("This is highly unlikely")
                }
            }

        }
    }

}
