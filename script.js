let randomNumber = Math.ceil(Math.random() * 100); 
let guessInput = document.querySelector('#guessInput');  
let resetButton = document.querySelector('#resetButton');
let outputText = document.querySelector('.outputText');
let myForm = document.querySelector('#form');

let numberOfGuesses = 0; 

myForm.addEventListener('submit', function (e){ 
  e.preventDefault(); 
  let input = Number(document.querySelector('#guessInput').value); 
  numberOfGuesses += 1;  
                        
  if(numberOfGuesses > 3){ 
    outputText.innerHTML = `You have exceeded the number of tries that you have the correct 
    number is ${randomNumber}`; 
    return; 
  }

  if(input === randomNumber) {
    outputText.innerHTML = `Congrats You Guessed Right! The Number Is ${randomNumber}`;
    outputText.style.color = 'green';
    numberOfGuesses = 4;
  } else if(input > randomNumber) {
    outputText.innerHTML = 'You Guessed Too High';
    outputText.style.color = 'red';
  } else if(input < randomNumber) {
    outputText.innerHTML = 'You Guessed Too Low';
    outputText.style.color = 'red';
  }
})

resetButton.addEventListener('click', function(){ 
  randomNumber = Math.ceil(Math.random() * 100); 
  numberOfGuesses = 0; 
  outputText.innerHTML = '';
})

