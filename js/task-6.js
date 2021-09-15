"use strict";

let inputValidation = document.getElementById("validation-input");

let totalLenght = inputValidation.getAttribute("data-length");
let intTotallenght = parseInt(totalLenght, 10);

inputValidation.oninput = function () {
  if (inputValidation.value.length === intTotallenght) {
    inputValidation.classList.remove("invalid");
    inputValidation.classList.add("valid");
  }
  if (inputValidation.value.length === 0) {
    inputValidation.classList.remove("valid");
    inputValidation.classList.remove("invalid");
  }
  if (
    inputValidation.value.length !== intTotallenght &&
    inputValidation.value.length !== 0
  ) {
    inputValidation.classList.add("invalid");
  }
};
