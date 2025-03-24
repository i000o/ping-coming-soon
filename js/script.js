document.addEventListener("DOMContentLoaded", () => { 
    let form = document.querySelector(".form");
    let email = document.querySelector(".email");
    let errorPrompt = document.querySelector(".error-prompt");
    let exampleEmail = document.querySelector(".example-email");

    form.addEventListener("submit", function(e))
        e.preventDefault(); 

        if (email) {
            email.value = true;
        else 
            errorPrompt.style.display = "block";
        }
});