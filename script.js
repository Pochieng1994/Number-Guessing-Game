/* A user has three tries to guess the number, between 1-100, that the computer picked.
Whenever they guess, let them know if their guess is too high, or too low.
After their third guess, reveal the number the computer chose to them, and 
let them know if they got it right or wrong.

*/
let randomNumber = Math.floor(Math.random() * 101);

let guessInput = document.querySelector('#guessInput');
let guessSubmit = document.querySelector('#guessSubmit');

let outputText = document.querySelector('.outputText');

guessSubmit.addEventListener('click', function() {
  let input = document.getElementById('guessInput').value;
  if(input === randomNumber) {
    outputText.innerHTML = `Congrats You Guessed Right! The Number Is ${randomNumber}`;
  } else if(input > randomNumber) {
    outputText.innerHTML = 'You Guessed Too Low';
  } else if(input < randomNumber) {
    outputText.innerHTML = 'You Guessed Too High';
  }
})
