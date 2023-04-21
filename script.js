/* A user has three tries to guess the number, between 1-100, that the computer picked.
Whenever they guess, let them know if their guess is too high, or too low.
After their third guess, reveal the number the computer chose to them, and 
let them know if they got it right or wrong.

*/
let randomNumber = Math.ceil(Math.random() * 100);

let guessInput = document.querySelector('#guessInput');
let guessSubmit = document.querySelector('#guessSubmit');
let resetButton = document.querySelector('#resetButton');

let outputText = document.querySelector('.outputText');

let myForm = document.querySelector('#form');

let numberOfGuesses = 0;


guessSubmit.addEventListener('click', function() {
  let input = document.querySelector('#guessInput').value;

  numberOfGuesses += 1;

  if(input === randomNumber) {
    outputText.innerHTML = `Congrats You Guessed Right! The Number Is ${randomNumber}`;
  } else if(input > randomNumber) {
    outputText.innerHTML = 'You Guessed Too Low';
    outputText.style.color = 'red';
  } else if(input < randomNumber) {
    outputText.innerHTML = 'You Guessed Too High';
    outputText.style.color = 'red';
  }
})

resetButton.addEventListener('click', function(){
  location.reload();
})

myForm.addEventListener('submit', function (e){
  e.preventDefault();
})
