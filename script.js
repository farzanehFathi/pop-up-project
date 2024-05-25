const popUpModal = document.querySelector(".pop-up-modal");
const successModal = document.querySelector(".success-modal");
const overlay = document.querySelector(".overlay");

const form = document.querySelector("form");
const emailInput = document.querySelector(".email");
const policyCheckBox = document.querySelector(".check-box input");
const closeSuccess = document.querySelector(".close-sccss-btn");

const ShowPopUp = () => {
  if (popUpModal === null) return;
  popUpModal.classList.add("active");
  overlay.classList.add("active");
};

const Success = () => {
  if (successModal === null) return;
  successModal.classList.add("active");
};

const closePopUps = () => {
  popUpModal.classList.remove("active");
  successModal.classList.remove("active");
  overlay.classList.remove("active");
};

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(ShowPopUp, 1000);
});

closeSuccess.addEventListener("click", function () {
  successModal.classList.remove("active");
  overlay.classList.remove("active");
});
