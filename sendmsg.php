<?php

    if(isset($_POST["btn-submit"])){

        $to = "dan.tibbotts@gmail.com";
        $subject = "FretScales Website Enquiry";

        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];
        

        $body = "";
        $body .= "From: " . $name . "\r\n";
        $body .= "Email: " . $email . "\r\n";
        $body .= "Message: " . $message . "\r\n";

        $headers = "From: " . $email . "\r\n" .
           "Reply-To: " . $email ."\r\n";


        if(mail($to, $subject, $body, $headers)){
            header("location:contact.php?success");
        }else{
            header("location:contact.php?error");
        }
            

    }else{
        header("location:contact.php");
    }

?>