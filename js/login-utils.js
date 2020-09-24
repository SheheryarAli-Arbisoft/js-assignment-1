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
  field.nextElementSibling.classList.remove('hidden');
}

// This function removes the red border and color from invalid fields
function markValid(field) {
  field.style['borderColor'] = 'inherit';
  field.nextElementSibling.style['color'] = 'inherit';
  field.nextElementSibling.classList.add('hidden');
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

// This function adds a content change listener to an text field
function addContentChangeListener(field) {
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
