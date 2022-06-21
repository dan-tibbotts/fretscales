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


        <h2 class="text-center">Help</h2>

        <!-- Help Container -->
        <div class="help-container bg-light">
            <p>
                We aim to make FretScales.com as intuative as possible and are open to ideas and suggestions for improvement.  If you have any questions/feedback or would like to contribute to this website please <a href="contact.html">contact us</a>.
            </p>


            <h2 id="help-contents">Contents</h2>
            <ol>
                <li><a href="#new-scale">Display a new scale</a></li>
                <li><a href="#random-scale">Generate a random scale</a></li>
                <li><a href="#scale-selector">Using the scale selector</a></li>
                <li><a href="#browser-support">What browsers are supported?</a></li>
            </ol>

            <!-- Display a New Scale  -->
            <h5 id="new-scale">Display a new scale</h5>
            <p>
                To display a new scale;:
            </p>
            <ol>
                <li>Click the <em>New Scale</em> button.  This will open the scale selector dialog box.</li>
                <li>Choose the desired scale and click <em>Display</em>.  
                    <br>For more information on using the scale selector see <a href="#scale-selector">Using the Scale Selector</a> section of this page.</li>
            </ol>
            <a href="#help-contents">Back to contents</a>
            

            <!-- Generate a Random Scale  -->
            <h5 id="random-scale">Generate a random scale</h5>
            <p>
                A random scale is automatically generated each time you visit FretScales.com. <br>
                Changing the random scale can be done in two ways:
            </p>
            <ol>
                <li>Click the <em>Random Scale</em> button below the fretboard diagram.</li>
                <li>Click the <em>Random Scale</em> menu item in the navigation bar.</li>
            </ol>
            <a href="#help-contents">Back to contents</a>



            <!-- Using the Scale Selector  -->
            <h5 id="scale-selector">Using the scale selector</h5>
            <p>
                The scale selector allows the user to specify which scale should be displayed. <br>
                
            </p>
            <ol>
                <li>Click the root note from A to G.
                <li>
                    Flatten (&flat;) or sharpen (&sharp;) the note by selecting the &flat; or &sharp; button. <br>
                    Use the natural (&natural;) button to clear accidentals.
                </li>
                <li>Use the dropdown menu to select the desired scale.</li>
                <li>Click the <em>Display</em> button.</li>
            </ol>
            <a href="#help-contents">Back to contents</a>
            

            <!-- Browser Support  -->
            <h5 id="browser-support">Browser Support</h5>
            <p>
                FretScales should work on all modern browsers and has been tested for compatibility on the following browser versions.<br>
            </p>

            <table>
                <th>Chrome</th>
                <th>Firefox</th>
                <th>Edge</th>
                <th>Safari</th>
                <tr>
                    <td><i class="fab fa-chrome"></i> 80</td>
                    <td><i class="fab fa-firefox"></i> 82</td>
                    <td><i class="fab fa-edge"></i> 81</td>
                    <td><i class="fab fa-safari"></i> 5.1</td>
                </tr>
            </table>

            <br>

            <a href="#help-contents">Back to contents</a>



        </div>

    </main>

    
    <?php include("templates/footer.php"); ?>
    <?php include("templates/bootstrap.php"); ?>

    <script src="js/help.js"></script>

</body>
</html>