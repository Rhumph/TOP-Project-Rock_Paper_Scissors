function playGame() {
    const gameOptions = ["ROCK", "PAPER", "SCISSORS"];

    let playerSelection = prompt();

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
            return lossConcession;
        } else if (playerSelectionCapitalised === "ROCK" && computerSelection === "PAPER") {
            return winProclomation;
        } else if (playerSelectionCapitalised === "PAPER" && computerSelection === "SCISSORS") {
            return winProclomation;
        } else if (playerSelectionCapitalised === "PAPER" && computerSelection === "ROCK") {
            return winProclomation;
        } else if (playerSelectionCapitalised === "SCISSORS" && computerSelection === "ROCK") {
            return winProclomation;
        } else if (playerSelectionCapitalised === "SCISSORS" && computerSelection === "PAPER") {
            return lossConcession;
        }

    
}

const gameResult = playGame()
    console.log(gameResult)
