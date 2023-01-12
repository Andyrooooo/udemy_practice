'use strict';

//console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent = 'Correct Number!'

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10

// document.querySelector('.guess').value = 23
//console.log(document.querySelector('.guess').value) 

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highScore = 0

// This removes mutiple lines so were not repeating and can just have it show the message
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message
}


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value)


    console.log(guess)

// ------------------------------If player doesn't choose a number-----------
    if(!guess) {
        if(score > 1) {
            /* document.querySelector('.message').textContent = 'No number!' */
            displayMessage('No number!')
            score--
            document.querySelector('.score').textContent = score
        } else {
            /* document.querySelector('.message').textContent = 'You Lost the Game :(' */
            displayMessage('You Lost the Game :(')
            document.querySelector('.score').textContent = 0
        }
    }

// ------------------------------If player chooses a correct number-----------
    else if (guess === secretNumber) {
        /* document.querySelector('.message').textContent = 'Correct Number' */
        displayMessage('Correct Number!!!')

        document.querySelector('.score').textContent = score

        // where the number is stored to keep it hidden
        document.querySelector('.number').textContent = secretNumber

        // changes the background color once you get the correct number
        document.querySelector('body').style.backgroundColor = '#60b347'

        // changes the size of the question mark box once you get it correct
        document.querySelector('.number').style.width = '30rem'

        // if the score on your game is higher than the current highscore then
        // highscore becomes the new score and then we put it on the page with 
        //textContent
        if(score > highScore) {
            highScore = score
            document.querySelector('.highscore').textContent = highScore
        }
    } 

// ------------------------------when guess is wrong --------------------------
// This shorter version just means if the guess is different than the secret number it will run this code
    else if(guess !== secretNumber) {
    // then as long as the score is still greater than 1 it will execute
    if(score > 1) {
        // then if the guess is greater than the secret number it will say 'Too High' 
        // then it uses ELSE and basically says if its not too high then its too low and will say 'Too Low'
        /* document.querySelector('.message').textContent = guess > secretNumber ? 'Too High' : 'Too Low' */
        displayMessage(guess > secretNumber ? 'Too High' : 'Too Low')

        // then it minuses 1 point each time you are wrong and then shows the score
        score--
        document.querySelector('.score').textContent = score
    } else {
        // once your score is not greater than 1 you lose and displays this message and score of '0'
        /* document.querySelector('.message').textContent = 'You Lost the Game :(' */
        displayMessage('You Lost the Game :(')
        document.querySelector('.score').textContent = 0
    }
    }

// ------------------------------If player chooses a too high number-----------
 /*    else if (guess > secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = 'Too High'
            score--
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = 'You Lost the Game :('
            document.querySelector('.score').textContent = 0
        }
    }  */

// ------------------------------If player chooses a too low number-----------
/*     else if (guess < secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = 'Too Low'
            score--
            document.querySelector('.score').textContent = score
        }  else {
            document.querySelector('.message').textContent = 'You Lost the Game :('
            document.querySelector('.score').textContent = 0
        }
    }*/

}) 

document.querySelector('.again').addEventListener('click', function () {
    score = 20
    secretNumber = Math.trunc(Math.random() * 20) + 1

    // The message goes back to the original
    /* document.querySelector('.message').textContent = 'Start guessing...' */
    displayMessage('Start guessing...')

    // score will revert back to 20 because of the local variable we declared in this function
    document.querySelector('.score').textContent = score
    
    // This basically returns the value to the left which was when it chose a random number, and starts it over
    document.querySelector('.number').textContent = '?'

    // changes the background color back
    document.querySelector('body').style.backgroundColor = '#000'

    // changes the size of the question mark back
    document.querySelector('.number').style.width = '15rem'

    // changes the value shown in guess box back to empty
    document.querySelector('.guess').value = ''
})