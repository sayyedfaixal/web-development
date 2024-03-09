let TOTAL_ATTEMPTS = 10;
const MAX = 10;
const MIN = 0;
const attempts = document.querySelector(".item");
const mainContent = document.querySelector(".main-content");
const submitButton = document.querySelector(".submit-btn");
const inputValue = document.querySelector("#input-field");
const prompt = document.querySelector(".prompts");
const previousGuess = document.querySelector(".previous-guess");
const lowerContent = document.querySelector(".lower-content");
const randomNumber = Math.round(Math.random() * (MAX - MIN)) + MIN;
const previousGuessArray = [];

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  let guess = parseInt(inputValue.value);
  validateInput(guess);
});

function greetMessage() {
  mainContent.innerHTML = `
  <h1 clas='hidden'
  style ="background-color: salmon;
  color: #000;
  width:100%;
  text-align:center;
  border-radius: 10px;" >
  Congratulation 🥳🙌🏻, you have got the Number</h1>`;
  // const button = `<button class="play-again">Play Again</button>`;
  const button = document.createElement("button");
  button.textContent = "Replay";
  button.setAttribute("class", "play-again");
  console.log(button);
  lowerContent.appendChild(button);
  button.addEventListener("click", function () {
    location.reload();
  });
}
function handlePreviousGuess(guess) {
  previousGuessArray.push(guess);
  previousGuess.innerHTML = `<h4 class="previous-guess">Your Previous Guesses: <span class='hidden'>${previousGuessArray} </span></h4>`;
}
function decrementAttemp() {
  TOTAL_ATTEMPTS -= 1;
  if (TOTAL_ATTEMPTS === 0) {
    mainContent.innerHTML = `
    <h1 clas='hidden'
    style ="background-color: salmon;
    color: #000;
    width:100%;
    text-align:center;
    border-radius: 10px;" >
    OOPS🥲, No More attempts Left, You have ${TOTAL_ATTEMPTS}. Please Try again</h1>`;
  } else {
    attempts.innerHTML = `Number is Hidden <span class="hidden">here</span> you have ${TOTAL_ATTEMPTS} Attempts
    left`;
  }
}
function validateInput(guess) {
  if (isNaN(guess)) {
    prompt.innerText = "Ye kya daal diya aapne";
  } else if (guess < 0 || guess > 10) {
    prompt.innerText = "Please Guess a number between 0 - 10";
    inputValue.value = "";
  } else if (guess < randomNumber) {
    prompt.innerText = "Your Guessed Number is TOO LOW";
  } else if (guess > randomNumber) {
    prompt.innerText = "Your Guessed Number is TOO HIGH";
  } else if (guess === randomNumber) {
    prompt.innerText = "7 Crore";
    greetMessage();
  }
  handlePreviousGuess(guess);
  decrementAttemp();
}

/**
 *
const interval = setInterval(() => {
  attempts.innerText = `${TOTAL_ATTEMPTS} Attempts left`;
  TOTAL_ATTEMPTS = TOTAL_ATTEMPTS - 1;
  if (TOTAL_ATTEMPTS < 0) {
    attempts.innerText = "Sorry you have NO attemps left";
    clearInterval(interval);
  }
}, 1000);
*/
