"use strict";

const numbers = document.querySelectorAll(".rating__num");
const submitBtn = document.querySelector(".rating__submit-btn");

//first select a number and highlight it white - only one number can be white at any one time
const select = (e) => {
  numbers.forEach((num) => num.classList.remove("circle_selected"));
  e.target.classList.add("circle_selected");
};

numbers.forEach((num) => num.addEventListener("click", select));

// function for hiding the selection screen
const hide = () => {
  const container = document.querySelector(".rating-container");
  container.classList.add("hidden");
  const thankYou = document.querySelector(".rating-container_center");
  thankYou.classList.remove("hidden");
};

// lastly, show the Thank You container when 'Submit" is clicked and hide the selection screen
const submit = (e) => {
  e.preventDefault();
  const selectedNum = document.querySelector(".circle_selected").textContent;
  document.querySelector(
    ".rating__selected"
  ).textContent = `You selected ${selectedNum} out of 5`;
  hide();
};

submitBtn.addEventListener("click", submit);
