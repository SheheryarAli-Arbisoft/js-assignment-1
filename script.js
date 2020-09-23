// This function checks if a value is empty or not
function isEmpty(field) {
  if (field.value === '') {
    return true;
  }
  return false;
}

// This function marks the invalid field with a red color
function markInvalid(field) {
  field.style['borderColor'] = 'red';
  field.nextElementSibling.style['color'] = 'red';

  if (field.id !== 'password') {
    field.nextElementSibling.classList.remove('hidden');
  }
}

// This function removes the red border and color from invalid fields
function markValid(field) {
  field.style['borderColor'] = 'inherit';
  field.nextElementSibling.style['color'] = 'inherit';

  if (field.id !== 'password') {
    field.nextElementSibling.classList.add('hidden');
  }
}

// This function checks if the email is valid or not
function isValidEmail(value) {
  if (
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value)
  ) {
    return true;
  }
  return false;
}

// This function checks to see if card number is valid or not
function isValidCardNumber(value) {
  if (value.length === 16) {
    for (let char of value) {
      if (!/\d/.test(char)) {
        return false;
      }
    }
    return true;
  }
  return false;
}

// This function checks to see if password is valid or not
function isValidPassword(value) {
  if (value.length >= 8) {
    if (
      !/[a-zA-Z]+/.test(value) ||
      !/[0-9]+/.test(value) ||
      !/[\@\$\#]+/.test(value)
    ) {
      return false;
    }
    return true;
  }
  return false;
}

// This function returns the gender value
function getGender(value) {
  if (value == 0) {
    return 'Male';
  } else {
    return 'Female';
  }
}

// This function returns the formatted date of birth
function getFormattedDob(value) {
  const dateObj = new Date(value);

  const date = dateObj.getDate();
  const month = dateObj.getMonth();
  const year = dateObj.getFullYear();

  const monthNames = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];

  return `${date}-${monthNames[month]}-${year}`;
}

// This function handles the submit event when the form is submitted
function handleSubmit() {
  // Getting all the values from the form
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const email = document.getElementById('email');
  const gender = document.getElementById('gender');
  const dob = document.getElementById('dob');
  const cardNumber = document.getElementById('cardNumber');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');

  let emptyFieldsCount = 0;

  // Checking to see if the first name is entered or not
  if (isEmpty(firstName)) {
    markInvalid(firstName);
    emptyFieldsCount++;
  } else {
    markValid(firstName);
  }

  // Checking to see if the last name is entered or not
  if (isEmpty(lastName)) {
    markInvalid(lastName);
    emptyFieldsCount++;
  } else {
    markValid(lastName);
  }

  // Checking to see if the email is valid or not
  if (isEmpty(email)) {
    markInvalid(email);
    emptyFieldsCount++;
  } else {
    if (!isValidEmail(email.value)) {
      markInvalid(email);
    } else {
      markValid(email);
    }
  }

  // Checking to see if the gender is selected or not
  if (isEmpty(gender)) {
    markInvalid(gender);
    emptyFieldsCount++;
  } else {
    markValid(gender);
  }

  // Checking to see if the dob is entered or not
  if (isEmpty(dob)) {
    markInvalid(dob);
    emptyFieldsCount++;
  } else {
    markValid(dob);
  }

  // Checking to see if the card number is valid or not
  if (isEmpty(cardNumber)) {
    markInvalid(cardNumber);
    emptyFieldsCount++;
  } else {
    if (!isValidCardNumber(cardNumber.value)) {
      markInvalid(cardNumber);
    } else {
      markValid(cardNumber);
    }
  }

  // Checking to see if the password is valid or not
  if (isEmpty(password)) {
    markInvalid(password);
    emptyFieldsCount++;
  } else {
    if (!isValidPassword(password.value)) {
      markInvalid(password);
    } else {
      markValid(password);
    }
  }

  let passwordsMatch = true;

  // Checking to see if the confirm password is valid or not
  if (isEmpty(confirmPassword)) {
    markInvalid(confirmPassword);
    emptyFieldsCount++;
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

  // If there are no empty fields and passwords match
  if (emptyFieldsCount === 0 && passwordsMatch) {
    const result = `Form submitted successfully!\n
      First Name: ${firstName.value}\n
      Last Name: ${lastName.value}\n
      Email: ${email.value}\n
      Gender: ${getGender(gender.value)}\n
      Date of Birth: ${getFormattedDob(dob.value)}\n
      Credit Card Number: ${cardNumber.value}\n
      Password: ${password.value}\n
      Confirm Password: ${confirmPassword.value}\n`;

    alert(result);
  }

  // Returning false does not cause the form to submit
  return false;
}
