// This function checks if a value is empty or not
function isEmpty(field) {
  if (field.value === '') {
    return true;
  }
  return false;
}

// This function marks the invalid field with a red color
function markInvalid(field) {
  if (field.id !== 'gender') {
    field.style['borderColor'] = 'red';
  }

  field.nextElementSibling.style['color'] = 'red';

  if (field.id !== 'password') {
    field.nextElementSibling.classList.remove('hidden');
  }
}

// This function removes the red border and color from invalid fields
function markValid(field) {
  if (field.id !== 'gender') {
    field.style['borderColor'] = 'inherit';
  }

  field.nextElementSibling.style['color'] = 'inherit';

  if (field.id !== 'password') {
    field.nextElementSibling.classList.add('hidden');
  }
}

// This function checks if the email is valid or not
const isValidEmail = (value) => {
  if (
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value)
  ) {
    return true;
  }
  return false;
};

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

// This function adds a content change listener to an text field
function addContentChangeListener(field) {
  if (field.id === 'dob') {
    field.addEventListener('change', () => markValid(field));
  } else {
    field.addEventListener('keyup', (e) => {
      if (e.key === 'Enter' || e.key === 'Backspace') {
        return;
      }

      if (field.value === '') {
        markInvalid(field);
      } else {
        markValid(field);
      }
    });
  }
}

// This function adds an on checked listener to a radio field
function addOnCheckedListener(container, field) {
  field.addEventListener('click', () => {
    markValid(container);
  });
}
