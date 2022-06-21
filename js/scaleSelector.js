// Scale information
const scales = {
    "a-flat-minor": {
        name: "Ab Minor",
        notes: ["Ab", "Bb", "Cb", "Db", "Eb", "Fb", "Gb"],
        relativeKey: "Cb major",
        diatonicTriads: [
                "Ab minor (Ab, Cb, Eb)", 
                "Bb diminished (Bd, Db, Fb)", 
                "Cb major (Cb, Eb, Gb)", 
                "Db minor (Db, Fb, Ab)", 
                "Eb minor (Eb, Gb, Bb)", 
                "Fb major (Fb, Ab, Cb)", 
                "Gb major (Gb, Bb, Db)"]
    },
    "a-minor": {
        name: "A Minor",
        notes: ["A", "B", "C", "D", "E", "F", "G"],
        relativeKey: "C major",
        diatonicTriads: [
                "A minor (A, C, E)", 
                "B diminished (B, D, F)", 
                "C major (C, E, G)", 
                "D minor (D, F, A)", 
                "E minor (E, G, B)", 
                "F major (F, A, C)", 
                "G major (G, B, D)"]
    },
    "a-sharp-minor": {
        name: "A# Minor",
        notes: ["A#", "B#", "C#", "D#", "E#", "F#", "G#"],
        relativeKey: "C# major",
        diatonicTriads: [
                "A# minor (A#, C#, E#)", 
                "B# diminished (B#, D#, F#)", 
                "C# major (C#, E#, G#)", 
                "D# minor (D#, F#, A#)", 
                "E# minor (E#, G#, B#)", 
                "F# major (F#, A#, C#)", 
                "G# major (G#, B#, D#)"]
    },
    "a-flat-major": {
        name: "Ab Major",
        notes: ["Ab", "Bb", "C", "Db", "Eb", "F", "G"],
        relativeKey: "F minor",
        diatonicTriads: [
                "Ab major (Ab, C, Eb)", 
                "Bb minor (Bb, Db, F)", 
                "C minor (C, Eb, G)", 
                "Db major (Db, F, Ab)", 
                "Eb major (Eb, G, Bb)", 
                "F minor (F, Ab, C)", 
                "G diminished (G, Bb, Db)"]
    },
    "a-major": {
        name: "A Major",
        notes: ["A", "B", "C#", "D", "E", "F#", "G#"],
        relativeKey: "F# minor",
        diatonicTriads: [
                "A major (A, C#, E)", 
                "B minor (B, D, F#)", 
                "C# minor (C#, E, G#)", 
                "D major (D, F#, A)", 
                "E major (E, G#, B)", 
                "F# minor (F#, A, C#)", 
                "G# diminished (G#, B, D)"]
    },
    "b-flat-minor": {
        name: "Bb Minor",
        notes: ["Bb", "C", "Db", "Eb", "F", "Gb", "Ab"],
        relativeKey: "Db major",
        diatonicTriads: [
                "Bb minor (Bb, Db, F)", 
                "C diminished (C, Eb, Gb)", 
                "Db major (Db, F, Ab)", 
                "Eb minor (Eb, Gb, Bb)", 
                "F minor (F, Ab, C)", 
                "Gb major (Gb, Bb, Db)", 
                "Ab major (Ab, C, Eb)"]
    },
    "b-minor": {
        name: "B Minor",
        notes: ["B", "C#", "D", "E", "F#", "G", "A"],
        relativeKey: "D major",
        diatonicTriads: [
                "B minor (B, D, F#)", 
                "C# diminished (C#, E, G)", 
                "D major (D, F#, A)", 
                "E minor (E, G, B)", 
                "F# minor (F#, A, C#)", 
                "G major (G, B, D)", 
                "A major (A, C#, E)"]
    },
    "b-flat-major": {
        name: "Bb Major",
        notes: ["Bb", "C", "D", "Eb", "F", "G", "A"],
        relativeKey: "G minor",
        diatonicTriads: [
                "Bb major (Bb, D, F)", 
                "C minor (C, Eb, G)", 
                "D minor (D, F, A)", 
                "Eb major (Eb, G, Bb)", 
                "F major (F, A, C)", 
                "G minor (G, Bb, D)", 
                "A diminished (A, C, Eb)"]
    },
    "b-major": {
        name: "B Major",
        notes: ["B", "C#", "D#", "E", "F#", "G#", "A#"],
        relativeKey: "G# minor",
        diatonicTriads: [
                "B major (B, D#, F#)", 
                "C# minor (C#, E, G#)", 
                "D# minor (D#, F#, A#)", 
                "E major (E, G#, B)", 
                "F# major (F#, A#, C#)", 
                "G# minor (G#, B, D#)", 
                "A# diminished (A#, C#, E)"]
    },
    "c-minor": {
        name: "C Minor",
        notes: ["C", "D", "Eb", "F", "G", "Ab", "Bb"],
        relativeKey: "Eb major",
        diatonicTriads: [
                "C minor (C, Eb, G)", 
                "D diminished (D, F, Ab)", 
                "Eb major (Eb, G, Bb)", 
                "F minor (F, Ab, C)",
                "G minor (G, Bb, D)", 
                "Ab major (Ab, C, Eb)", 
                "Bb major (Bb, D, F)"]
    },
    "c-sharp-minor": {
        name: "C# Minor",
        notes: ["C#", "D#", "E", "F#", "G#", "A", "B"],
        relativeKey: "E major",
        diatonicTriads: [
                "C# minor (C#, E, G#)", 
                "D# diminished (D#, F#, A)", 
                "E major (E, G#, B)", 
                "F# minor (F#, A, C#)", 
                "G# minor (G#, B, D#)", 
                "A major (A, C#, E)", 
                "B major (B, D#, F#)"]
    },
    "c-flat-major": {
        name: "Cb Major",
        notes: ["Cb", "Db", "Eb", "Fb", "Gb", "Ab", "Bb"],
        relativeKey: "Ab minor",
        diatonicTriads: [
                "Cb major (Cb, Eb, Gb)", 
                "Db minor (Db, Fb, Ab)", 
                "Eb minor (Eb, Gb, Bb)", 
                "Fb major (Fb, Ab, Cb)", 
                "Gb major (Gb, Bb, Db)", 
                "Ab minor (Ab, Cb, Eb)", 
                "Bb diminished (Bb, Db, Fb)"]
    },
    "c-major": {
        name: "C Major",
        notes: ["C", "D", "E", "F", "G", "A", "B"],
        relativeKey: "A minor",
        diatonicTriads: [
                "C major (C, E, G)", 
                "D minor (D, F, A)", 
                "E minor (E, G, B)", 
                "F major (F, A, C)", 
                "G major (G, B, D)", 
                "A minor (A, C, E)", 
                "B diminished (B, D, F)"]
    },
    "c-sharp-major": {
        name: "C# Major",
        notes: ["C#", "D#", "E#", "F#", "G#", "A#", "B#"],
        relativeKey: "A# minor",
        diatonicTriads: [
                "C# major (C#, E#, G#)", 
                "D# minor (D#, F#, A#)", 
                "E# minor (E#, G#, B#)", 
                "F# major (F#, A#, C#)", 
                "G# major (G#, B#, D#)", 
                "A# minor (A#, C#, E#)", 
                "B# diminished (B#, D#, F#)"]
    },
    "d-minor": {
        name: "D Minor",
        notes: ["D", "E", "F", "G", "A", "Bb", "C"],
        relativeKey: "F major",
        diatonicTriads: [
                "D minor (D, F, A)", 
                "E diminished (E, G, Bb)", 
                "F major (F, A, C)", 
                "G minor (G, Bb, D)", 
                "A minor (A, C, E)", 
                "Bb major (Bb, D, F)", 
                "C major (C, E, G)"]
    },
    "d-sharp-minor": {
        name: "D# Minor",
        notes: ["D#", "E#", "F#", "G#", "A#", "B", "C#"],
        relativeKey: "F# major",
        diatonicTriads: [
                "D# minor (D#, F#, A#)", 
                "E# diminished (E#, G#, B)", 
                "F# major (F#, A#, C#)", 
                "G# minor (G#, B, D#)", 
                "A# minor (A#, C#, E#)", 
                "B major (B, D#, F#)", 
                "C# major (C#, E#, G#)"]
    },
    "d-flat-major": {
        name: "Db Major",
        notes: ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"],
        relativeKey: "Bb minor",
        diatonicTriads: [
                "Db major (Db, F, Ab)", 
                "Eb minor (Eb, Gb, Bb)", 
                "F minor (F, Ab, C)", 
                "Gb major (Gb, Bb, Db)", 
                "Ab major (Ab, C, Eb)", 
                "Bb minor (Bb, Db, F)", 
                "C diminished (C, Eb, Gb)"]
    },
    "d-major": {
        name: "D Major",
        notes: ["D", "E", "F#", "G", "A", "B", "C#"],
        relativeKey: "B minor",
        diatonicTriads: [
                "D major (D, F#, A)", 
                "E minor (E, G, B)", 
                "F# minor (F#, A, C#)", 
                "G major (G, B, D)", 
                "A major (A, C#, E)", 
                "B minor (B, D, F#)", 
                "C# diminished (C#, E, G)"]
    },
    "e-flat-minor": {
        name: "Eb Minor",
        notes: ["Eb", "F", "Gb", "Ab", "Bb", "Cb", "Db"],
        relativeKey: "Gb major",
        diatonicTriads: [
                "Eb minor (Eb, Gb, Bb)", 
                "F diminished (F, Ab, Cb)", 
                "Gb major (Gb, Bb, Db)", 
                "Ab minor (Ab, Cb, Eb)", 
                "Bb minor (Bb, Db, F)", 
                "Cb major (Cb, Eb, Gb)", 
                "Db major (Db, F, Ab)"]
    },
    "e-minor": {
        name: "E Minor",
        notes: ["E", "F#", "G", "A", "B", "C", "D"],
        relativeKey: "G major",
        diatonicTriads: [
                "E minor (E, G, B)", 
                "F# diminished (F#, A, C)", 
                "G major (G, B, D)", 
                "A minor (A, C, E)", 
                "B minor (B, D, F#)", 
                "C major (C, E, G)", 
                "D major (D, F#, A)"]
    },
    "e-flat-major": {
        name: "Eb Major",
        notes: ["Eb", "F", "G", "Ab", "Bb", "C", "D"],
        relativeKey: "C minor",
        diatonicTriads: [
                "Eb major (Eb, G, Bb)", 
                "F minor (F, Ab, C)", 
                "G minor (G, Bb, D)", 
                "Ab major (Ab, C, Eb)", 
                "Bb major (Bb, D, F)", 
                "C minor (C, Eb, G)", 
                "D diminished (D, F, Ab)"]
    },
    "e-major": {
        name: "E Major", 
        notes: ["E", "F#", "G#", "A", "B", "C#", "D#"],
        relativeKey: "C# minor",
        diatonicTriads: [
                "E major (E, G#, B)", 
                "F# minor (F#, A, C#)", 
                "G# minor (G#, B, D#)", 
                "A major (A, C#, E)", 
                "B major (B, D#, F#)", 
                "C# minor (C#, E, G#)", 
                "D# diminished (D#, F#, A)"]
    },
    "f-minor": {
        name: "F Minor",
        notes: ["F", "G", "Ab", "Bb", "C", "Db", "Eb"],
        relativeKey: "Ab major",
        diatonicTriads: [
                "F minor (F, Ab, C)", 
                "G diminished (G, Bb, Db)", 
                "Ab major (Ab, C, Eb)", 
                "Bb minor (Bb, Db, F)", 
                "C minor (C, Eb, G)", 
                "Db major (Db, F, Ab)", 
                "Eb major (Eb, G, Bb)"]
    },
    "f-sharp-minor": {
        name: "F# Minor",
        notes: ["F#", "G#", "A", "B", "C#", "D", "E"],
        relativeKey: "A major",
        diatonicTriads: [
                "F# minor (F#, A, C#)", 
                "G# diminished (G#, B, D)", 
                "A major (A, C#, E)", 
                "B minor (B, D, F#)", 
                "C# minor (C#, E, G#)", 
                "D major (D, F#, A)", 
                "E major (E, G#, B)"]
    },
    "f-major": {
        name: "F Major",
        notes: ["F", "G", "A", "Bb", "C", "D", "E"],
        relativeKey: "D minor",
        diatonicTriads: [
                "F major (F, A, C)", 
                "G minor (G, Bb, D)", 
                "A minor (C, E, G)", 
                "Bb major (Bb, D, F)", 
                "C major (C, E, G)", 
                "D minor (D, F, A)", 
                "E diminished (E, G, Bb)"]
    },
    "f-sharp-major": {
        name: "F# Major",
        notes: ["F#", "G#", "A#", "B", "C#", "D#", "E#"],
        relativeKey: "D# minor",
        diatonicTriads: [
                "F# major (F#, A#, C#)", 
                "G# minor (G#, B, D#)", 
                "A# minor (A#, C#, E#)", 
                "B major (B, D#, F#)", 
                "C# major (C#, E#, G#)", 
                "D# minor (D#, F#, A#)", 
                "E# diminished (E#, G#, B)"]
    },
    "g-minor": {
        name: "G Minor",
        notes: ["G", "A", "Bb", "C", "D", "Eb", "F"],
        relativeKey: "Bb major",
        diatonicTriads: [
                "G minor (G, Bb, D)", 
                "A diminished (A, C, Eb)", 
                "Bb major (Bb, D, F)", 
                "C minor (C, Eb, G)", 
                "D minor (D, F, A)", 
                "G minor (Eb, G, Bb)", 
                "F major (F, A, C)"]
    },
    "g-sharp-minor": {
        name: "G# Minor",
        notes: ["G#", "A#", "B", "C#", "D#", "E", "F#"],
        relativeKey: "B major",
        diatonicTriads: [
                "G# minor (G#, B, D#)", 
                "A# diminished (A#, C#, E)", 
                "B major (B, D#, F#)", 
                "C# minor (C#, E, G#)", 
                "D# minor (D#, F#, A#)", 
                "E major (E, G#, B)", 
                "F# major (F#, A#, C#)"]
    },
    "g-flat-major": {
        name: "Gb Major",
        notes: ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"],
        relativeKey: "Eb minor",
        diatonicTriads: [
                "Gb major (Gb, Bb, Db)", 
                "Ab minor (Ab, Cb, Eb)", 
                "Bb minor (Bb, Db, F)", 
                "Cb major (Cb, Eb, Gb)", 
                "Gb major (Db, F, Ab)", 
                "Eb minor (Eb, Gb, Bb)", 
                "F diminished (F, Ab, Cb)"]
    },
    "g-major": {
        name: "G Major",
        notes: ["G", "A", "B", "C", "D", "E", "F#"],
        relativeKey: "E minor",
        diatonicTriads: [
            "G major (G, B, D)", 
            "A minor (A, C, E)", 
            "B minor (B, D, F#)", 
            "C major (C, E, G)", 
            "D major (D, F#, A)", 
            "E minor (E, G, B)", 
            "F# diminished (F#, A, C)"]
    }
}


// Theorectical scales and there relative/replacement scale
const theoreticalScales = {
    //  SCALE     |  REPLACEMENT
    "a-sharp-major": "Bb Major",
    "b-sharp-major": "C Major",
    "d-sharp-major": "Eb Major",
    "e-sharp-major": "F Major",
    "f-flat-major": "E Major",
    "g-sharp-major": "Ab Major",
    "b-sharp-minor": "C Minor",
    "c-flat-minor": "B Minor",
    "d-flat-minor": "C# Minor",
    "e-sharp-minor": "F Minor",
    "f-flat-minor": "E Minor",
    "g-flat-minor": "F# Minor"
}


// Warning message if user selected a theoretical scale
const warning = (scale, replacement)=>  `${scale} is a theoretical scale key which means its key signature contains either double-sharps or double-flats.\n
This key is rarely used because it is too complex. \n\n
${replacement} is an identical scale that you can use in its place. 
`;


// Generate a Random Scale
const randomScale = () =>{
    let scaleArray = Object.entries(scales);
    let random = Math.floor(Math.random() * scaleArray.length);
    let scaleSplit = scaleArray[random][0].split("-");

    if(scaleSplit.length < 3){
        return [scaleSplit[0], "", scaleSplit[1]]
    }else{
        return [scaleSplit[0],scaleSplit[1],scaleSplit[2]]
    }
}


// Load DOM elements
const scale = document.getElementById("opt-scale");
const display = document.getElementById("display-scale-button");
const scaleHeading = document.getElementById("scale-heading");
const scaleError = document.getElementById("selection-error");
const stylesheet = document.getElementById("scale-style");

// Navigation DOM elements
const navScale = document.getElementById("nav-scale");
const navRandom = document.getElementById("nav-random");
const navHelp = document.getElementById("nav-help");
const navContact = document.getElementById("nav-contact");


// Convert scale selection buttons to an array
const scaleOptionNote = Array.from(document.getElementsByClassName("scale-option-note"));
const scaleOptionAccidental = Array.from(document.getElementsByClassName("scale-option-accidental"));


// Get Random Scale Data
const random = randomScale();

// Selection Data
const selection = {
    key: random[0],
    accidental: random[1],
    scale: random[2]
}


// Add event listenders for note buttons
scaleOptionNote.forEach((element)=>{
    element.addEventListener("click", (e)=> {
        selection.key = e.target.value;
        scaleHeading.textContent = heading();
    });
});


// Add event listeners for accidental buttons
scaleOptionAccidental.forEach((element)=>{
    element.addEventListener("click", (e)=>{
        selection.accidental = e.target.value;
        scaleHeading.textContent = heading();
    });
});


// Add "change" event listener for scale combo box
scale.addEventListener("change", (e)=>{
    selection.scale = e.target.value;
    scaleHeading.textContent = heading();
});


// Convert string to Sentence Case 
const sentenceCase = (string)=>{
    if ((string===null) || (string==='')){
        return false;
    }else{
        string = string.toString();
    }
    
    return string.replace(/\w\S*/g, (txt)=>{
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}


// Reset modal options to selection value
const resetModalOptions = ()=>{

    // Set key to selection value
    scaleOptionNote.forEach((element)=>{
        // element.setAttribute("checked", element.value == selection.key);
        if(element.value == selection.key){
            element.setAttribute("checked", true);
        }
    });

    // Set accidental to selection value
    scaleOptionAccidental.forEach((element)=>{
        switch(element.id){
        case "opt-flat":
            if(selection.accidental == "flat"){
                // element.checked = true;
                element.setAttribute("checked", true);
            }
            break;
        case "opt-sharp":
            if(selection.accidental == "sharp"){
                // element.checked = true;
                element.setAttribute("checked", true);
            }
            break;
        default:
            if(selection.accidental == ""){
                // element.checked = true;
                element.setAttribute("checked", true);
            }
        }
    });

    // Set combobox to selection value
    scale.value = selection.scale;

    // Change the Heading to selected scale
    document.getElementById("scale-heading").textContent = heading();
}



// Return Scale Heading based on selected data
const heading = ()=>{
    let key, accidental, scale;

    key = selection.key == null ? "" : selection.key.toUpperCase();

    switch(selection.accidental){
        case "flat":
            accidental = "b";
            break;
        case "natural": 
            accidental = "";
            break;
        case "sharp": 
            accidental = "#";
            break;
        default:
            accidental = "";
    }

    if(selection.scale == "select"){
        selection.scale = null;
    }

    scale = selection.scale == null ? "" : sentenceCase(selection.scale);

    return `${key}${accidental} ${scale}`;
}



// Return the scale in "key-accidental-scale" format e.g. "a-sharp-major"
const key = ()=> {
    if(selection.accidental == ""){
        return `${selection.key}-${selection.scale}`;
    }else{
        return `${selection.key}-${selection.accidental}-${selection.scale}`;
    }
} 



// When user clicks "Display" draw the selected scale if valid
display.addEventListener("click", (e)=>{

    scaleHeading.textContent = heading();

    let validationMessage = Array();

    // Hide Valiation Container
    scaleError.className = "hidden";

    // Data validation 
    if(selection.key == null) validationMessage.push("Key");
    if(selection.accidental == null) validationMessage.push("Accidental");
    if(selection.scale == null) validationMessage.push("Scale");

    if(validationMessage.length > 0){
        scaleError.textContent = `Error: Select ${validationMessage.join(", ")}`
        scaleError.className = "";
        return;
    }else{
        scaleError.textContent = "";
    }

    // Check for valid scale
    for(const [theoreticalKey, replacementScale] of Object.entries(theoreticalScales)){
        if(theoreticalKey == key()){
            scaleError.textContent = `Error: ${warning(heading(), replacementScale)}`;
            scaleError.className = "";
            return;
        }
    }

    // Draw 
    drawScale();

    // close the modal 
    document.getElementById("close-modal").click();

});



const drawScale = ()=>{

     // Adjust stylesheet to selected scale
    stylesheet.setAttribute("href", `./css/scales/${selection.scale}/${key()}.css`)

    // Change the Heading to selected scale
    document.getElementById("scale-name-heading").textContent = heading();


    // Update Scale Information
    for(const [scaleKey, scaleValue] of Object.entries(scales)){

        if(scaleKey == key()){

            for(const [scaleItem, scaleItemValue] of Object.entries(scaleValue)){

                // Add the Note Values
                if(scaleItem == "notes"){
                    document.getElementById("scale-note-values").textContent = scaleItemValue.join(", ");
                }

                // Add the Diatonic Triads / Chords
                if(scaleItem == "diatonicTriads"){
                    let i = 1;
                    for(const [triadKey, triadValue] of Object.entries(scaleItemValue)){
                        document.getElementById(`diatonic-triad-${i}`).textContent = triadValue;
                        i++;
                    }
                }

                // Add the relative key
                if(scaleItem == "relativeKey"){ 
                    document.getElementById("relative-key-value").textContent = scaleItemValue;
                }

            }

            break;
        }
    }

}


drawScale();
resetModalOptions();