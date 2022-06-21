<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <meta name="description" content="Guitar scale generator and scale theory reference for musicians including note names, diatonic triads and relative keys.  Generate a pre defined or random scale." />
    
    <title>FretScales - scale generator and information for guitarists</title>

    <?php include("templates/styles.php"); ?>

</head>

<body class="bg-light">
    <?php include("templates/header.php"); ?>

    <main class="bg-white">

        <h2 id="scale-name-heading" class="text-center bg-light scale-heading">&nbsp;</h2>
        
        <?php include("components/fretboard.php"); ?>
        <?php include("components/fretboard-indicator.php"); ?>

        
        <!-- New/Random Scale Buttons -->
        <div id="control-buttons" class="bg-light">
            <button id="new-scale-button" type="button" class="btn btn-success btn" data-toggle="modal" data-target="#scale-select-modal" data-placement="top" title="This button will display a random scale on the fretboard">New Scale</button>
            <a href="index.php">
                <button id="random-scale-button" type="button" class="btn btn-secondary btn">Random Scale</button>
            </a>
        </div>

        <!-- Display Scale Information -->
        <div class="scale-information bg-light">

            <!-- Scale Notes  -->
            <p class="scale-notes">
                <span class="scale-info-heading">Notes</span>
                <br>
                <span id="scale-note-values"></span>             
            </p>

            <!-- Diatonic Triads  -->
            <p>
                <span class="scale-info-heading">Diatonic Triads</span>
                <br>
                <span id="diatonic-triad-1">&nbsp;</span><br>
                <span id="diatonic-triad-2">&nbsp;</span><br>
                <span id="diatonic-triad-3">&nbsp;</span><br>
                <span id="diatonic-triad-4">&nbsp;</span><br>
                <span id="diatonic-triad-5">&nbsp;</span><br>
                <span id="diatonic-triad-6">&nbsp;</span><br>
                <span id="diatonic-triad-7">&nbsp;</span><br>
            </p>

            <!-- Relative Keys  -->
            <p>
                <span class="scale-info-heading">Relative Key</span>
                <br>
                <span id="relative-key-value"></span>
            </p>
        </div>

        <?php include("components/scale-select-modal.php"); ?>

    </main>
    
    <?php include("templates/footer.php"); ?>
    <?php include("templates/bootstrap.php"); ?>

    <!-- Scale Selector Script -->
    <script src="js/scaleSelector.js"></script>
</body>
</html>