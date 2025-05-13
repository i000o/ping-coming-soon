# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da).

## Table of contents

- [Overview](#overview)
- [Focus](#focus)
- [Outcome](#outcome)
- [Built with](#built-with)
- [Lessons](#lessons)
- [Useful resources](#useful-resources)

## Overview

This challenge asks that for client-side form validation including empty field and formatting checks.

## Focus

My focus here is to try to understand every line of Javascript I write, why it's there and what it's doing.

## Outcome

I'm pleased with the outcome. There is one bug that I've asked for feedback on, but I'm yet to find an answer. The error messages shows up beside the submit button rather than underneath the input field. Other than that, I'm happy with the design, responsiveness and particularly, the Javascript. I wrote comments explaining it to myself for when I reference it later, to help embed my understanding. It helped a lot.

![]()

:jigsaw: [Live Site URL](https://i000o.github.io/ping-coming-soon/)  
:pencil2: [Solution URL](https://www.frontendmentor.io/solutions/ping-coming-soon-js-client-side-validation-1zJWY-pAyD)

## Built with

:gear: Semantic HTML5 markup  
:gear: CSS  
:gear: Mobile-first workflow  
:gear: Sass  
:gear: JavaScript

## Time taken

:timer_clock: 11.5 hrs

## Lessons

- Client-side verification
- For custom-styling, we need JavaScript.
- `required` HTML attribute on `<input>`
- Constraint Validation API
- Custom Error Handling
- "If you want to change the text of the native error messages, JavaScript is needed."
- **Specificity:**  
  "Element selectors (e.g., `input`, `button`) have lower specificity.  
  Class selectors (e.g., `.email`, `.submit`) are more specific than element selectors.  
  Attribute selectors (e.g., `input[type="email"]`, `button[type="submit"]`) are even more specific than class selectors.  
  **When to Use What**  
  Use classes (`.email`, `.submit`) for reusable, general-purpose styling.  
  Use attribute selectors (`input[type="email"]`, `button[type="submit"]`) for specific, role-based styles.  
  Use combination selectors when you want flexibility but with controlled specificity."
- CoPilot Think Deeper function.
- `<span>` is inline by default so will not take top/bottom margins.
- Link to JS file with `<script>` _not_ `<link>`.
- `.valueMissing` is a boolean that checks if the field is required and left empty. This relies on the `required` attribute in the HTML.
- `.setCustomValidity` sets a _custom_ error message.
- `.add("visible")` add the `visible` class (in this case, to the error span element).
- `.typeMismatch` is a boolean that checks if the entered input complies to the expect format of the `type` in this case, `email`.
  error.classList.remove("visible");
- `classList` is a property in JS which allows you to easily modify/access classes using methods like `.add()`, `.remove()`, `.toggle()`, `contains()`. In this challenge we used `error.classList.remove("visible");` to `remove`/`add` visibility to error when/if we wanted them.
- The `validity` object as part of the HTML Form Validation API. Every `input` has a `validity` property which contains boolean values (`true/false`) as validation states. These check whether inputs comply to necessary constraints or not. Key properties of the `validity` object are: `.valid` (`true/false`), `.valueMissing` (boolean), `.typeMismatch`, `.patternMismatch`, `.tooShort`/`.tooLong`, `rangeUnderflow`/`rangeOverflow`, `stepMismatch`, `..customError` which is set with `setCustomValidity()`.
- `setCustomValidity()` doesn't _render_ anything visible in my UI. It just passes the error message value (the string) to the `validity.customError` state in the browser's memory. It doesn't do anything after that on its own, which is why you also needed to include the lines `.textContent`. `setCustomValidity()` is more of a behind-the-scenes performance, rather than anything your user would be seeing/experiencing on the screen. You need both because one serves validation logic and the other, visible feedback.
- I replaced the subheading text with my own on valid submission :slightly_smiling_face:
- I made the input field clear on valid submission :slightly_smiling_face:
- If you set a `width` to a `%`, it will always grow/shrink in relation to the container regardless of `flex-shrink: 0;` for instance. Instead, if you want the size to remain fixed, set a `px` unit instead.

## Useful resources

[<input type="email">](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email)
[Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)

# ping-coming-soon
