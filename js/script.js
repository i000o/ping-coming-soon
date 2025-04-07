// You need an Event Listener not Handler  
// Use HTMLButtonElement API to access button element 
// Use HTMLInputElement API to access input element - accesses validity which returns a ValidityState object which contains the property typeMismatch if the input provided is not an email. Returns true when type is not an email - then matches the :invalid CSS pseudoclass. Returns false when type matches required (email). 
// Unlocks valid object. 
// Unlocks valueMissing. Returns true if the input with required attribute holds no value (is empty, I think). False if not and therefore matches CSS :invalid.
// setCustomValidity(message)


document.addEventListener("DOMContentLoaded", () => { 
    let form = document.querySelector(".form"); // Are these classes present in your HTML? Yes. 
    let email = document.querySelector(".email");
    let error = document.querySelector(".error");
    let notifyYou = document.querySelector(".subheading");

    console.log('Form element:', form);
    console.log('Email input element:', email);
    console.log('Error element:', error);

      // Clear any past error messages as the user types
    email.addEventListener("input", () => {
        email.setCustomValidity(""); // When we use empty strings here, we're asking JS to clear anything that was before. 
        error.textContent = "";
        error.classList.remove("visible");
      });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        console.log('Submit triggered');
        console.log('Email value:', email.value);
        console.log('Validity state:', email.validity);
    // Validate the email input for being empty or incorrectly formatted
        if (email.validity.valueMissing) { // Validation check 1: Is the input field empty? If it is, do the following: 
            email.setCustomValidity("Please provide a valid email address."); // Set a custom error message,
            error.textContent = "Please provide a valid email address."; // update the error text 
            error.classList.add("visible"); // and make it visible 
        } else if (email.validity.typeMismatch) { // Validation check 2: Is the input providede formatted correctly? If not, do the following: 
            email.setCustomValidity("Please provide a valid email address"); // Set a custom error message,
            error.textContent = "Please provide a valid email address"; // update the erorr text
            error.classList.add("visible") // and make it visible
            
        } else { // If the input passes the validation checks, do this: 
            email.setCustomValidity(""); // Clear any custom errors 
            error.classList.remove("visible"); // Hides the error message 
            notifyYou.textContent = "We'll notify you!"; // Replaces subheading element with this message
            email.value = ""; // This clears the field on successful submission 
        }
    });
});

// I could also store "Please provide a valid email address" in its own variable and call on it to save typing. 