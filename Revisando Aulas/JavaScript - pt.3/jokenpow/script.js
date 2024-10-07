const result = document.querySelector('.result');
const humanScore = document.getElementById('human-score');
const machineScore = document.getElementById('machine-score');

let humanScoreNumber = 0;
let machineScoreNumber = 0;


/*
    humanScoreNumber -> Camel Case
    GAME_OPTIONS     -> Snake Case
*/

//ENUM
const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine());
}

const playMachine = () => {
    const choice = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS];
    const randomNumber = Math.floor(Math.random() * 3);

    return choice[randomNumber];
}

const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + " Maquina: " + machine)
    
    if (human === machine) {
        result.innerHTML = "Deu empate!"
    } else if ((human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)) {
        result.innerHTML = 'Você ganhou!'
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
    } else {
        result.innerHTML = 'Você perdeu para a máquina!'
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber;
    }
}

/*
    papel -> pedra -> tesoura
 */