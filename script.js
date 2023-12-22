document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  const maxNumInput = document.getElementById("maxNumberInput");
  const attemptInput = document.getElementById("attemptInput");
  const generateBtn = document.getElementById("generate");
  const resetBtn = document.getElementById("resetBtn");
  const guessNumInput = document.getElementById("userGuess");
  const guessNumBtn = document.getElementById("guessNumBtn");
  const resultGuess = document.getElementById("resultGuessText");
  const resultAttempt = document.getElementById("counter");

  let randNum;
  let maxNumber;
  let yourGuess;
  let attemptNumber;
  counter = 0;

  const generateRandNum = (event) => {
    event.preventDefault();
    maxNumber = maxNumInput.value;
    attemptNumber = parseInt(attemptInput.value);
    resultAttempt.textContent = attemptNumber;
    maxNumInput.setAttribute("disabled", true);
    attemptInput.setAttribute("disabled", true);
    generateBtn.setAttribute("disabled", true);
    randNum = Math.floor(Math.random() * maxNumber) + 1;
    console.log(randNum);
  };

  generateBtn.addEventListener("click", generateRandNum);

  resetBtn.addEventListener("click", () => {
    maxNumInput.removeAttribute("disabled");
    attemptInput.removeAttribute("disabled");
    generateBtn.removeAttribute("disabled");
    guessNumInput.removeAttribute("disabled");
    guessNumBtn.removeAttribute("disabled");
    maxNumInput.value = "";
    attemptInput.value = "";
    guessNumInput.value = "";
    resultAttempt.textContent = "0";
    resultGuess.textContent = "";
    counter = 0;
  });

  const guessNum = (event) => {
    event.preventDefault();
    yourGuess = parseInt(guessNumInput.value);
    counter++;

    const leftAttempt = parseInt(attemptNumber - counter);
    resultAttempt.textContent = `${leftAttempt}`;
    console.log(`left ${leftAttempt}`);
    console.log(yourGuess);

    if (leftAttempt <= 0) {
      resultGuess.textContent = "You lose!";
      guessNumInput.setAttribute("disabled", true);
      guessNumBtn.setAttribute("disabled", true);
    }

    if (leftAttempt > 0) {
      if (yourGuess == randNum) {
        resultGuess.textContent = "Congrats. You guessed it";
        guessNumInput.setAttribute("disabled", true);
        guessNumBtn.setAttribute("disabled", true);
      } else if (yourGuess > randNum) {
        resultGuess.textContent = "Too high";
      } else if (yourGuess < randNum) {
        resultGuess.textContent = "Too low";
      } else {
        resultGuess.textContent = "Not a Number";
      }
    }
  };

  guessNumBtn.addEventListener("click", guessNum);
});
