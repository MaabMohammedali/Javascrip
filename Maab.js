function formValidate() {
      // valid name
    // I use this link to solve this part :https://www.codexworld.com/how-to/validate-first-last-name-with-regular-expression-using-javascript/
    //  method to access the input field by its ID
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var nameRegex = /^[A-Za-z]+$/;

    

    // Validate email
    var email = document.getElementById('email').value;
    var emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

}