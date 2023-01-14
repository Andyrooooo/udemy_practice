'use strict';

// define a variable that contains our scores
let currentScore = 0

// here we will store the array with two numbers starting at 0 for the current 
// rounds score
const scores = [0, 0]

// and here we store the score for the active player
let activePlayer = 0

// here we create variables to store the PLAYER SECTION from HTML (<section id=player--0><section>)
const activePLayer0 = document.querySelector('.player--0')
const activePLayer1  = document.querySelector('.player--1')

// Here we create a variable to display the players OVERALL score
const playerScore0 = document.querySelector('#score--0')
const playerScore1 = document.querySelector('#score--1')

// here we create the variable to display the current score for each players turn
const currentScore0 = document.querySelector('#current--0')
const currentScore1 = document.querySelector('#current--1')

// we then set the sores to '0' for starters
playerScore0.textContent = 0
playerScore1.textContent = 0

// we then create a variable for the picture of the dice
const dicePicture = document.querySelector('.dice')
// Then we add the hidden class we created in CSS to the dice picture and it hides it 
dicePicture.classList.add('hidden')

// Here we created the new variables that store the classes to roll the dice,
// hold your number, and start a new game
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

// This is where we add the functionality to the dice roll
btnRoll.addEventListener('click', function() {
    // 1. generating a random dice roll that is between 1-6
    const dice = Math.trunc(Math.random() * 6) +1

    // 2. Display the dice by removing the 'hidden' class
    dicePicture.classList.remove('hidden')

    // here we take the src attribute and give it a value dependent on what number
    // is rolled and it will also grab that image at the same time
    dicePicture.src = `dice-${dice}.png`
    console.log(dice)

    // 3. check for rolled 1: if true, switch to next player
    // if the dice roll is not '1' then continue here
    if (dice !== 1) {
        // here we add the dice roll to the CURRENT SCORE
        currentScore += dice

        // Then we display the current score of the player who is ACTIVE PLAYER
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore

    } else {
        // We then also display the current players score which we set to '0'
        document.querySelector(`#current--${activePlayer}`).textContent = 0

        // Here we also set the current score back to '0'
        currentScore = 0

        // here we use a (else-if) statement and the ACTIVE PLAYER which is set to 0
        // so if the active player is 0 then we want the new active player to be 1
        // so it will switch and (else) it will switch 1 to 0 if thats the case
        activePlayer = activePlayer === 0 ? 1 : 0

        activePLayer0.classList.toggle('player--active')
        activePLayer1.classList.toggle('player--active')
    }
})

btnHold.addEventListener('click', function () {
    // here we will add the current score to active players score
    // here is the example scores[1] = scores[1] + currentScore
    scores[activePlayer] += currentScore

    // here we grab the HTML selector again and set it to the active player
    // we then display the score of the active player
    document.querySelector(`#current--${activePlayer}`).textContent = scores[activePlayer]

    //

    //
})