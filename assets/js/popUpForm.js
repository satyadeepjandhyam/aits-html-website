(function () {
  "use strict";

  // Function to show the pop-up form
  function showPopUpForm() {
    var popUpForm = document.querySelector(".pop-up-form");
    popUpForm.style.display = "block";
  }

  // Function to hide the pop-up form
  function hidePopUpForm() {
    var popUpForm = document.querySelector(".pop-up-form");
    popUpForm.style.display = "none";
  }

  // Show the pop-up form when the page loads
  window.addEventListener("load", function () {
    showPopUpForm();
  });

  // Handle close button click
  document
    .querySelector(".pop-up-form-close-btn")
    .addEventListener("click", function () {
      hidePopUpForm();
    });
})();
