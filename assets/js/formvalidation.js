let name1 = document.getElementById("name");
let email = document.getElementById("email");
let number = document.getElementById("number");
let reach = document.getElementById("reach");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
let formOne = document.getElementById("form-one");
let formTwo = document.getElementById("form-two");
let error = document.getElementById("error");
let tost = document.createElement("div");
var one = "one";

formOne.addEventListener("submit", (e) => {
  e.preventDefault();
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
      tost.innerHTML = "sorry network error";
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
      tost.innerHTML = "your details are sucessfully submited";
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
});

formTwo.addEventListener("submit", (e) => {
  e.preventDefault();
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
});
