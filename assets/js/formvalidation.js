let name1 = document.getElementById("name");
let email = document.getElementById("email");
let number = document.getElementById("number");
let reach = document.getElementById("reach");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
let form = document.getElementById("form-one");
let error = document.getElementById("error");
let tost = document.createElement("div");
var one = "one";




form.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData();

formData.append("name",form.name.value);
formData.append("email",form.email.value);
formData.append("Phone",form.number.value);
formData.append("subject",form.subject.value);
formData.append("message",form.message.value);
formData.append("reach",form.reach.value);
   
    
    
    fetch('forms/contact.php', {
        method: 'POST',
        body: formData
    }).then(response => {
        console.log(response.status);
        if (!response.ok) {
            tost.classList.add('error1');
            tost.innerHTML = "sorry network error"
            error.appendChild(tost);
            setTimeout(()=>{error.removeChild(tost)}, 5000);
            
            form.email.value="";
            form.name.value="";
            form.number.value="";
            form.subject.value="";
            form.message.value="";
            form.reach.options.selectedIndex=0;
            
        }
        else if(response.ok){
            tost.classList.add('sucess1');
            tost.innerHTML = "your details are sucessfully submited"
            error.appendChild(tost);
            setTimeout(()=>{error.removeChild(tost),
                form.name.value="",
                form.email.value="";
            }, 5000);
            form.email.value="";
            form.name.value="";
            form.number.value="";
            form.subject.value="";
            form.message.value="";
            form.reach.options.selectedIndex=0;
        }
    })


})

