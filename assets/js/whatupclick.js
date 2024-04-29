document.getElementById("whatsappButton").addEventListener("click", function() {
    // Define your WhatsApp phone number
    var phoneNumber = "1234567890"; // Replace with your WhatsApp phone number
    
    // Construct the WhatsApp URL
    var whatsappUrl = "https://wa.me/" + phoneNumber;

    // Redirect the user to the WhatsApp URL
    window.open(whatsappUrl, "_blank");});