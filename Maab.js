function formValidate() {
     // this function worked once click on submit button
    document.getElementById('error-message').innerHTML = '';// innerHTML property  used to get  the HTML content within an element
      // VALID NAME
    // I use this link to solve this part :https://www.codexworld.com/how-to/validate-first-last-name-with-regular-expression-using-javascript/
    var firstName = document.getElementById('firstName').value; //  method to access the input field by its ID
    var lastName = document.getElementById('lastName').value;
    var nameRegex = /^[A-Za-z]+$/; // to check if both first name and last name contain only letters

    if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
        document.getElementById('error-message').textContent  = 'Try again only letter are accepted';
        return;
    }

    // VALID EMAIL
    var email = document.getElementById('email').value;
    var emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // to check if the email has a valid format

    if (!emailRegex.test(email)) {
        document.getElementById('error-message').textContent  = 'Please enter a valid email address';
        return;
    }
    // Validate required questions are not left unanswered
    var requiredQuestions = ['q1', 'q2', 'q8', 'q10'];
    var isValid = true;

    for (var i = 0; i < requiredQuestions.length; i++) {
        var question = requiredQuestions[i];

        if (!isQuestionAnswered(question)) {
            isValid = false;
            break;
        }
    }

    if (!isValid) {
        document.getElementById('error-message').textContent = 'Required questions must be answered';
        return;
    }

}