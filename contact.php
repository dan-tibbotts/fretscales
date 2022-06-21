<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FretScales</title>

    <?php include("templates/styles.php"); ?>

</head>

<body class="bg-light">
    <?php include("templates/header.php"); ?>

    <main class="bg-white">


        <h2 class="text-center">Contact Us</h2>

        <!-- Contact Form Container -->
        <div class="contact-container bg-light">



            <!-- Form -->
            <form action="sendmsg.php" method="POST" id="contact-form">
                

                <!-- Success Message Appears Here -->
                <div>
                    <?php 
                        $message = "";
                        if(isset($_GET['success'])){
                            $message = "Your message has been sent";
                            echo "<div class='bg-success text-light p-2 rounded'>" . $message . "</div>";
                        }
                    ?>
                </div>

                <label for="name" class="text-center">Your Name<span class="input-required"></span></label>
                <input name="name" id="name" type="name" placeholder="Enter your name">

                <label for="email" class="text-center">Your Email<span class="input-required"></span></label>
                <input name="email" id="email" type="email" placeholder="Enter your email">
                
                <label for="message" class="text-center">Your Message<span class="input-required"></span></label>
                <textarea name="message" id="message" placeholder="Type your message..." rows="5"></textarea>
                
                <div>
                    <p><small><span class="input-required"></span> denotes a required field.</small></p>
                </div>

                
                <div id="validation-container"> 
                    <!-- Validation Messages Appears Here  -->
                    <?php 
                        $message = "";

                        if(isset($_GET['error'])){
                            $message = "Unknown error, your message was not sent.  If this problem continues please send an email directly to fretscales@gmail.com";
                            echo $message;
                        }
                    ?>
                </div>

                <div>
                    <button name="btn-submit" class="btn-success  btn">Send Message</button>
                </div>
            </form>

        </div>

    </main>

    
    <?php include("templates/footer.php"); ?>
    <?php include("templates/bootstrap.php"); ?>

    <script src="js/formValidation.js"> </script>
    <script src="js/contact.js"></script>
</body>
</html>