let TOTAL_ATTEMPTS = 10;
const attempts = document.querySelector(".item");

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
const MAX = 10;
const MIN = 0;

const submitButton = document.querySelector(".submit-btn");
const inputValue = document.querySelector("#input-field");
const prompt = document.querySelector(".prompts");
const randomNumber = Math.round(Math.random() * (MAX - MIN)) + MIN;

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log(typeof inputValue.value);
  // console.log(typeof parseInt(inputValue.value));
  let guess = parseInt(inputValue.value);
  validateInput(guess);
});
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
  }
}
