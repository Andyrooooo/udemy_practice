'use strict';
// Here we will create all the variables that will store the HTML selectors so they can be used
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const buttonCloseModal = document.querySelector('.close-modal')
// Here we will do the same but we get all the modals and turn it into the node list
const buttonsOpenModal = document.querySelectorAll('.show-modal')
console.log(buttonsOpenModal)


const openModal = function () {
    // since we set up the click function, now when you click on one of the buttons it will
    // remove the 'hidden' class from the HTML divider and you will see the description
    modal.classList.remove('hidden')
    // we do the same here as the other one so when we click we get our overlay
    overlay.classList.remove('hidden')
}

// once we have all the modals we put it through a loop to be able to use them or do somehting with 
//them and then display just the text but doing the buttonsOpenModal[i] also turns them into an element
for (let i = 0; i < buttonsOpenModal.length; i++)
// each one of the buttonsOpenModal[i] is an element and shows their numbers
buttonsOpenModal[i].addEventListener('click', openModal)




// to make it more simple we create a function that closes the modal
const closeModal = function () {
    // same as before but this time we add them back on once clicked
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}


// we then create a function to wait for a click on the 'X' and then executes the
// 'closeModal' function
buttonCloseModal.addEventListener('click', closeModal)


// Here is the same as this one ^^^^ we wait until they click outside the description
// and then it will execute the 'closeModal' function
overlay.addEventListener('click', closeModal)

// when we add the keydown here it was for you to press any button on the keyboard
// we then add in this parameter(event) it passes in this event as an argument
document.addEventListener('keydown', function (keyEvent) {
    console.log(keyEvent.key)

    // we say if the 'keyEvent' ^^^^ catches you pressing escape AND if the 
    // modal(the text inside the button) does NOT contain the hidden HTML class
    if(keyEvent.key === 'Escape' && !modal.classList.contains('hidden')) {
       // then we call the closeModal function to add the hidden classes back in and close
       closeModal()
    }
})