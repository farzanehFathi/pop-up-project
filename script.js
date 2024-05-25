// Select Objects

const popUpModal = document.querySelector(".pop-up-modal");
const successModal = document.querySelector(".success-modal");
const overlay = document.querySelector(".overlay");

const form = document.querySelector("form");
const emailInput = document.querySelector(".email");
const policyCheckBox = document.querySelector(
  ".check-box input[type='checkbox']"
);
const errMsg = document.querySelector(".errMsg");
const closeSuccessBtn = document.querySelector(".close-sccss-btn");

// Define Functions
const ShowPopUp = () => {
  if (popUpModal === null) return;
  popUpModal.classList.add("active");
  overlay.classList.add("active");
};

const closeSuccess = () => {
  successModal.classList.remove("active");
  overlay.classList.remove("active");
};

// Open Pop Up
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(ShowPopUp, 1000);
});

// Submit the Form
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const isPolicyChecked = policyCheckBox.checked;
  if (!isPolicyChecked) {
    errMsg.classList.add("active");
  } else {
    popUpModal.classList.remove("active");
    successModal.classList.add("active");
    errMsg.classList.remove("active");
  }
});

// Close Success
closeSuccessBtn.addEventListener("click", closeSuccess);
