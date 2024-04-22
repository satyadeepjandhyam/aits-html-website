<?php
$error = ''; // Variable to store error messages

// Check if all fields are filled
if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['Phone']) || empty($_POST['subject']) || empty($_POST['message']) || empty($_POST['reach'])) {
    $error = 'All fields are required';
} else {
    // If all fields are filled, proceed with sending the email
    $to = "info@analogueitsolutions.com";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['Phone'];
    $subject = $_POST['subject'];
    $message_content = $_POST['message'];
    $reach = $_POST['reach'];
    
    // Construct the message body
    $message = 'Name: ' . $name . ' , Email: ' . $email . ' , Phone: ' . $phone . ' , Reach: ' . $reach . ' , Subject: ' . $subject . ', Message: ' . $message_content;

    // Set additional headers
    $headers = 'From: <info@analogueitsolutions.com>' . "\r\n";

    // Send the email
    if(mail($to, $subject, $message, $headers)) {
        // Email sent successfully
        echo 'ok';
    } else {
        // Error occurred while sending email
        $error = 'Error sending email. Please try again later.';
    }
}

// Return error message if there was any issue with form submission
if(!empty($error)) {
    echo $error;
}
?>

