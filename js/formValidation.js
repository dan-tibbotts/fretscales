const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

const form = document.getElementById("contact-form");
const validationContainer = document.getElementById("validation-container");


form.addEventListener("submit", (e)=> {

    let messages = [];

    // Check name input
    if(name.value === ""){
        messages.push("Please provide your name");
    }

    // Check email input 
    if(email.value === ""){
        messages.push("You must provide an email address");
    }else{
        // Check Email is in correct format
        let atPosition = email.value.indexOf("@");
        let dotPosition = email.value.lastIndexOf(".");

        if (atPosition < 1 || ( dotPosition - atPosition < 2 )) {
            messages.push("Email address must be in correct format e.g. you@domain.com");
        }
    }

    // Check for a typed message
    if(message.value == ""){
        messages.push("You must type a message");
    }

    // If errors, stop submit and display validation errors
    if (messages.length > 0){
        e.preventDefault();
        validationContainer.innerText = messages.join(", ");
    }
    
})