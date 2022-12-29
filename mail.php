<?php
$to = "gowdham.ee20@bitsathy.ac.in";
$subject = "HTML email from SMTP";

$message = "Test message from exploemychoice";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <contact@exploemychoice.click>' . "\r\n";

$res = mail($to,$subject,$message,$headers);
if($res){
    echo 'Message sent';
}
else{
    echo 'Message not send';
}
?>