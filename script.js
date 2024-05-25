const popUpModal = document.querySelector(".pop-up-modal");
const successModal = document.querySelector(".success-modal");
const overlay = document.querySelector(".overlay");

const form = document.querySelector("form");
const emailInput = document.querySelector(".email");
const policyCheckBox = document.querySelector(".check-box input");
const closeSuccessBtn = document.querySelector(".close-sccss-btn");

const ShowPopUp = () => {
  if (popUpModal === null) return;
  popUpModal.classList.add("active");
  overlay.classList.add("active");
};

const closePopUp = () => {
  if (popUpModal === null) return;
  popUpModal.classList.remove("active");
};

const openSuccess = () => {
  if (successModal === null) return;
  successModal.classList.add("active");
};

const closeSuccess = () => {
  successModal.classList.remove("active");
  overlay.classList.remove("active");
};

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(ShowPopUp, 1000);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  popUpModal.classList.remove("active");
  successModal.classList.add("active");
});

closeSuccessBtn.addEventListener("click", closeSuccess);
