"use strict";

// || Value to display
const value = document.querySelector(".header__title");

// || Event handler for the decrementButton
const decrementButton = document.querySelector(".btn-decrement");
decrementButton.addEventListener("click", () => {handleDecrement(value)});

function handleDecrement(display) {
  const nextValue = parseInt(display.textContent) - 1;
  display.textContent = nextValue;
}

// || Event handler for the resetButton
const resetButton = document.querySelector(".btn-reset");
resetButton.addEventListener("click", () => {handleReset(value)});

function handleReset(display) {
  display.textContent = "0";
}

// || Event handler for the incrementButton
const incrementButton = document.querySelector(".btn-increment");
incrementButton.addEventListener("click", () => {handleIncrement(value)});

function handleIncrement(display) {
  const nextValue = parseInt(display.textContent) + 1;
  display.textContent = nextValue;
}