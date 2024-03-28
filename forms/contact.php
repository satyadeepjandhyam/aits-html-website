<?php
$to = "info@analogueitsolutions.com";
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['Phone'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$reach = $_POST['reach'];
$message = 'Name: ' .$name.' , Email: '. $email.' , Phone: '.$phone.' , reach: '.$reach.' , Subject: '.$subject.', Message: ' .$message;

// More headers
$headers = 'From: <info@analogueitsolutions.com>' . "\r\n";

mail($to,$subject,$message,$headers);

return 'ok';
?> 