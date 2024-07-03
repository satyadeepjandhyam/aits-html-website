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
  setTimeout(function () {
    showPopUpForm();
  }, 5000);

  // Handle close button click
  document
    .querySelector(".pop-up-form-close-btn")
    .addEventListener("click", function () {
      hidePopUpForm();
    });
    document.querySelectorAll(".pop-up-sidebar").forEach(function(element) {
      element.addEventListener("click", function() {
          showPopUpForm();
      });
  });
    // document
    // .getElementById("pop-up-sidebar")
    // .addEventListener("click", function () {
    //   showPopUpForm();
    // });
    // document
    // .getElementById("pop-up-sidebar1")
    // .addEventListener("click", function () {
    //   showPopUpForm();
    // });
    // document
    // .getElementById("pop-up-sidebar2")
    // .addEventListener("click", function () {
    //   showPopUpForm();
    // });
    // document
    // .getElementById("pop-up-sidebar-ourservice")
    // .addEventListener("click", function () {
    //   showPopUpForm();
    // });
    // document
    // .getElementById("pop-up-sidebar-digital").addEventListener("click", function () {
    //   showPopUpForm();
    // });
})();