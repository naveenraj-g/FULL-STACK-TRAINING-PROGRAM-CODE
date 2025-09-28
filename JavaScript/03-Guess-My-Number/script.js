"use strict"

// console.log(document.getElementsByClassName("message"));
// console.log(document.querySelector("p"));
// console.log(document.querySelectorAll("p"));
// console.log(document.querySelector(".message"));
// console.log(document.querySelector("#message"));
// console.log(document.getElementById("demo"));

// const result = document.querySelector(".message");
// const test = document.querySelector(".test");

// console.log(result.innerHTML);
// console.log(test.innerHTML);

// result.textContent = "Hi";
// const input = +document.querySelector(".guess").value
// console.log(typeof input);

const checkBtn = document.querySelector(".check");
const number = document.querySelector(".number");
const message = document.querySelector(".message");
const scoreLabel = document.querySelector(".score");

const secretNumber = Math.trunc(Math.random() * 20) + 1;
number.textContent = secretNumber
let score = 20;
const highScore = 0;

checkBtn.addEventListener("click", function () {
  const userInput = +document.querySelector(".guess").value;

  if (!userInput) {
    message.textContent = "No Number"
    return;
  }

  if (userInput > secretNumber) {
    message.textContent = "Too High"
    score--;
    scoreLabel.textContent = score;
  } else if (userInput < secretNumber) {
    message.textContent = "Too Low"
    score--;
    scoreLabel.textContent = score;
  } else {
    message.textContent = "Correct Number"
  }
})