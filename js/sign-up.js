const inputFields = document.getElementsByTagName('input');

// Attaching content change listeners to every text field
for (let field of inputFields) {
  if (field.type === 'radio') {
    addOnCheckedListener(field.parentElement, field);
  } else {
    addContentChangeListener(field);
  }
}

// This function handles the submit event when the form is submitted
function handleSignUp() {
  // Checking to see if the user accepted the agreements or not
  const checkBox1 = document.getElementById('checkBox1');
  const checkBox2 = document.getElementById('checkBox2');

  if (!checkBox1.checked || !checkBox2.checked) {
    alert('Please accept the aggrements');
    return false;
  }

  // Getting all the values from the form
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const email = document.getElementById('email');
  const dob = document.getElementById('dob');
  const cardNumber = document.getElementById('cardNumber');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');

  const gender = document.getElementById('gender');
  const male = gender.children[0];
  const female = gender.children[2];

  let invalidFieldsCount = 0;

  // Checking to see if the first name is entered or not
  if (isEmpty(firstName)) {
    markInvalid(firstName);
    invalidFieldsCount++;
  } else {
    markValid(firstName);
  }

  // Checking to see if the last name is entered or not
  if (isEmpty(lastName)) {
    markInvalid(lastName);
    invalidFieldsCount++;
  } else {
    markValid(lastName);
  }

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

  let genderValue = -1;

  // Checking to see if the gender is selected or not
  if (!male.checked && !female.checked) {
    markInvalid(gender);
    invalidFieldsCount++;
  } else {
    markValid(gender);

    if (male.checked) {
      genderValue = 0;
    } else {
      genderValue = 1;
    }
  }

  // Checking to see if the dob is entered or not
  if (isEmpty(dob)) {
    markInvalid(dob);
    invalidFieldsCount++;
  } else {
    markValid(dob);
  }

  // Checking to see if the card number is valid or not
  if (isEmpty(cardNumber)) {
    markInvalid(cardNumber);
    invalidFieldsCount++;
  } else {
    if (!isValidCardNumber(cardNumber.value)) {
      markInvalid(cardNumber);
      invalidFieldsCount++;
    } else {
      markValid(cardNumber);
    }
  }

  // Checking to see if the password is valid or not
  if (isEmpty(password)) {
    markInvalid(password);
    invalidFieldsCount++;
  } else {
    if (!isValidPassword(password.value)) {
      markInvalid(password);
      invalidFieldsCount++;
    } else {
      markValid(password);
    }
  }

  let passwordsMatch = true;

  // Checking to see if the confirm password is valid or not
  if (isEmpty(confirmPassword)) {
    markInvalid(confirmPassword);
    invalidFieldsCount++;
  } else {
    markValid(confirmPassword);

    // Checking to see if the confirm password is valid or not
    if (confirmPassword.value !== password.value) {
      passwordsMatch = false;
      markInvalid(confirmPassword);
    } else {
      markValid(confirmPassword);
    }
  }

  // If there are no invalid fields and passwords match
  if (invalidFieldsCount === 0 && genderValue > -1 && passwordsMatch) {
    const result = `Form submitted successfully!\n
      First Name: ${firstName.value}\n
      Last Name: ${lastName.value}\n
      Email: ${email.value}\n
      Gender: ${getGender(genderValue)}\n
      Date of Birth: ${getFormattedDob(dob.value)}\n
      Credit Card Number: ${cardNumber.value}\n
      Password: ${password.value}\n
      Confirm Password: ${confirmPassword.value}\n`;

    alert(result);
  }

  // Returning false does not cause the form to submit
  return false;
}
