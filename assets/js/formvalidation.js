let formOne = document.getElementById("form-one");
let formTwo = document.getElementById("form-two");
let emailErrorF1 = document.getElementById("email-errorF1");
let emailErrorF2 = document.getElementById("email-errorF2");
let error = document.getElementById("error");
let tost = document.createElement("div");

formOne.addEventListener("submit", (e) => {
  e.preventDefault();

  const userEmail = formOne.email.value;

  if (
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(userEmail) ===
    false
  ) {
    emailErrorF1.style.display = "block";

    setTimeout(() => {
      emailErrorF1.style.display = "none";
    }, 5000);
  } else {
    let formData = new FormData();

    formData.append("name", formOne.name.value);
    formData.append("email", formOne.email.value);
    formData.append("Phone", formOne.number.value);
    formData.append("subject", formOne.subject.value);
    formData.append("message", formOne.message.value);
    formData.append("reach", formOne.reach.value);

    fetch("forms/contact.php", {
      method: "POST",
      body: formData,
    }).then((response) => {
      console.log(response.status);
      if (!response.ok) {
        tost.classList.add("error1");
        tost.innerHTML = "Sorry network error";
        error.appendChild(tost);
        setTimeout(() => {
          error.removeChild(tost);
        }, 5000);

        formOne.email.value = "";
        formOne.name.value = "";
        formOne.number.value = "";
        formOne.subject.value = "";
        formOne.message.value = "";
        formOne.reach.options.selectedIndex = 0;
      } else if (response.ok) {
        tost.classList.add("sucess1");
        tost.innerHTML = "Your details are successfully submitted";
        error.appendChild(tost);
        setTimeout(() => {
          error.removeChild(tost),
            (formOne.name.value = ""),
            (formOne.email.value = "");
        }, 5000);
        formOne.email.value = "";
        formOne.name.value = "";
        formOne.number.value = "";
        formOne.subject.value = "";
        formOne.message.value = "";
        formOne.reach.options.selectedIndex = 0;
      }
    });
  }
});

formTwo.addEventListener("submit", (e) => {
  e.preventDefault();
  const userEmail = formTwo.email.value;

  if (
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(userEmail) ===
    false
  ) {
    emailErrorF2.style.display = "block"; // Show the email error span

    setTimeout(() => {
      emailErrorF1.style.display = "none";
    }, 5000);
  } else {
    let formData = new FormData();

    formData.append("name", formTwo.name.value);
    formData.append("email", formTwo.email.value);
    formData.append("Phone", formTwo.number.value);
    formData.append("subject", formTwo.subject.value);
    formData.append("message", formTwo.message.value);
    formData.append("reach", formTwo.reach.value);

    fetch("forms/contact.php", {
      method: "POST",
      body: formData,
    }).then((response) => {
      console.log(response.status);
      if (!response.ok) {
        tost.classList.add("error1");
        tost.innerHTML = "sorry network error";
        error.appendChild(tost);
        setTimeout(() => {
          error.removeChild(tost);
        }, 5000);

        formTwo.email.value = "";
        formTwo.name.value = "";
        formTwo.number.value = "";
        formTwo.subject.value = "";
        formTwo.message.value = "";
        formTwo.reach.options.selectedIndex = 0;
      } else if (response.ok) {
        tost.classList.add("sucess1");
        tost.innerHTML = "your details are sucessfully submited";
        error.appendChild(tost);
        setTimeout(() => {
          error.removeChild(tost),
            (formTwo.name.value = ""),
            (formTwo.email.value = "");
        }, 5000);
        formTwo.email.value = "";
        formTwo.name.value = "";
        formTwo.number.value = "";
        formTwo.subject.value = "";
        formTwo.message.value = "";
        formTwo.reach.options.selectedIndex = 0;
      }
    });
  }
});
