const inputFields = document.getElementsByTagName('input');

// Attaching content change listeners to every text field
for (let field of inputFields) {
  addContentChangeListener(field);
}

// This function handles the submit event when the form is submitted
function handleLogin() {
  // Getting all the values from the form
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  let invalidFieldsCount = 0;

  // Checking to see if the email is valid or not
  if (isEmpty(email)) {
    markInvalid(email);
    invalidFieldsCount++;
  } else {
    if (!isValidEmail(email.value)) {
      markInvalid(email);
    } else {
      markValid(email);
    }
  }

  // Checking to see if the password is valid or not
  if (isEmpty(password)) {
    markInvalid(password);
    invalidFieldsCount++;
  } else {
    markValid(password);
  }

  // If there are no invalid fields
  if (invalidFieldsCount === 0) {
    const result = `Form submitted successfully!\n
      Email: ${email.value}\n
      Password: ${password.value}\n`;

    alert(result);
  }

  // Returning false does not cause the form to submit
  return false;
}
