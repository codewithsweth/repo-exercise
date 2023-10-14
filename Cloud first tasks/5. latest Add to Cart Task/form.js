// all variables
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const phoneno = document.getElementById('phoneno');
const startDate = document.getElementById('start-date');
const endDate = document.getElementById('end-date');

// ///////////////////////////
// const formButton = document.getElementById('formButton');
// const submitModal = document.querySelector('submitModal');

// form validation
form.addEventListener('submit', function (e) {
  e.preventDefault();
  validateInput();
});
// error message
const setError = function (element, message) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerHTML = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};
// success message
const setSuccess = function (element) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerHTML = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};
// set neutral
const setNeutral = function () {
  const inputControl = element.parentElement;
  inputControl.classList.remove('success');
  inputControl.classList.remove('error');
};

// email valid
const isValidEmail = function (email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
// validate function
const validateInput = function () {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  const phonenoValue = phoneno.value.trim();
  // start
  console.log('---------------');
  const startDateValue = startDate.value.trim();
  console.log(startDateValue);
  // end
  const endDateValue = endDate.value.trim();
  console.log(endDateValue);
  endDate.setAttribute('min', startDateValue);

  // new start
  const newStart = new Date(startDateValue);
  console.log(newStart);
  // new end
  const newEnd = new Date(endDateValue);
  console.log(newEnd);
  // live date
  const liveDate = new Date();
  console.log(liveDate);
  // time gap
  const timeGap = newEnd - newStart;
  console.log(timeGap);

  // in days
  const inDays = Math.ceil(timeGap / (1000 * 60 * 60 * 24));
  console.log(inDays);
  //
  const invalidTime = newStart - liveDate;
  console.log(invalidTime);
  //
  const invalidDays = Math.ceil(invalidTime / (1000 * 60 * 60 * 24)) + 1;
  console.log(invalidDays);
  //
  // console.log(newStart >= liveDate);
  //
  let isValid = true;

  //
  // const clearErrors = () => {
  //   setError(username, '');
  //   setError(email, '');
  //   setError(phoneno, '');
  //   setError(password, '');
  //   setError(password2, '');
  // };
  const clearClasses = () => {
    username.parentElement.classList.remove('error', 'success');
    email.parentElement.classList.remove('error', 'success');
    password.parentElement.classList.remove('error', 'success');
    password2.parentElement.classList.remove('error', 'success');
    phoneno.parentElement.classList.remove('error', 'success');
    startDate.parentElement.classList.remove('error', 'success');
    endDate.parentElement.classList.remove('error', 'success');
  };
  // /////////////
  // Add event listeners for input fields to update error messages automatically
  username.addEventListener('input', function () {
    const usernameValue = this.value.trim();
    if (usernameValue === '') {
      setError(this, 'Username is required');
    } else {
      setSuccess(this); // Clear the error message
    }
  });

  email.addEventListener('input', function () {
    const emailValue = this.value.trim();
    if (emailValue === '') {
      setError(this, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
      setError(this, 'Provide valid email');
    } else {
      setSuccess(this); // Clear the error message
    }
  });

  phoneno.addEventListener('input', function () {
    const phonenoValue = this.value.trim();
    if (phonenoValue === '') {
      setError(this, 'Telephone no. is required');
    } else if (!phonenoValue.match(/^[0-9]{10}$/)) {
      setError(this, 'Provide a valid Telephone no.');
    } else {
      setSuccess(this); // Clear the error message
    }
  });

  password.addEventListener('input', function () {
    const passwordValue = this.value.trim();
    if (passwordValue === '') {
      setError(this, 'Password is required');
    } else if (passwordValue.length < 8) {
      setError(this, 'Provide a valid password');
    } else {
      setSuccess(this); // Clear the error message
    }
  });

  password2.addEventListener('input', function () {
    const password2Value = this.value.trim();
    if (password2Value === '') {
      setError(this, 'Password confirmation is required');
    } else if (password2Value !== password.value.trim()) {
      setError(this, 'Both passwords must match');
    } else {
      setSuccess(this); // Clear the error message
    }
  });
  startDate.addEventListener('input', function () {
    const startDateValue = this.value.trim();
    if (startDateValue === '') {
      setError(startDate, 'Date must be Selected');
    } else {
      if (invalidDays < 1) {
        setError(
          startDate,
          'Oops! You can only select dates from today onward. '
        );
      } else {
        setSuccess(startDate);
      }
    }
    endDate.setAttribute('min', startDateValue);
  });
  endDate.addEventListener('input', function () {
    const endDateValue = endDate.value.trim();
    if (endDateValue === '') {
      setError(endDate, 'Date must be Selected');
    } else {
      if (inDays < 0) {
        setError(endDate, 'Select date after start date');
      } else {
        setSuccess(endDate);
      }
    }
  });

  // ///////////////
  // username
  if (usernameValue === '') {
    setError(username, 'Username is required');
  } else {
    setSuccess(username);
  }
  // email
  if (emailValue === '') {
    setError(email, 'email is required');
    isValid = false;
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide valid email');
    isValid = false;
  } else {
    setSuccess(email);
  }
  // phone number
  if (phonenoValue === '') {
    setError(phoneno, 'Telephone no. is required');
    isValid = false;
  } else if (!phonenoValue.match(/^[0-9]{10}$/)) {
    setError(phoneno, 'Provide a valid Telephone no.');
    isValid = false;
  } else {
    setSuccess(phoneno);
  }
  // password
  if (passwordValue === '') {
    setError(password, 'password is required');
    isValid = false;
  } else if (passwordValue.length < 8) {
    setError(password, 'Provide a valid password');
    isValid = false;
  } else {
    setSuccess(password);
  }
  // password
  if (password2Value === '') {
    setError(password2, 'password confirmation is required');
    isValid = false;
  } else if (password2Value !== passwordValue) {
    setError(password2, 'Both the passwords must match');
    isValid = false;
  } else {
    setSuccess(password2);
  }
  // date picker start
  // if(startDateValue < )
  if (startDateValue === '') {
    setError(startDate, 'Date must be Selected');
  } else {
    if (invalidDays < 1) {
      setError(
        startDate,
        'Oops! You can only select dates from today onward. '
      );
    } else {
      setSuccess(startDate);
    }
  }
  if (endDateValue === '') {
    setError(endDate, 'Date must be Selected');
  } else {
    if (inDays < 0) {
      setError(endDate, 'Select date after start date');
    } else if (startDateValue > endDateValue) {
      setError(endDate, 'o0000000000pppppp');
    } else {
      setSuccess(endDate);
    }
  }
  // date picker end

  // form valid
  if (isValid) {
    clearClasses();
    // clearErrors();
    form.reset();
    alert(`
    Form Submitted Successfully!
    Username: ${usernameValue}
    E-mail: ${emailValue}
    password: ${passwordValue}
    Telephone no.: ${phonenoValue}
    Press 'OK' to confirm the details
    `);
  }
};

// /////////////////////////
// disable prev dates
const currentDate = new Date();
const getDates = currentDate.getDate();
console.log(getDates);
const getMonths = currentDate.getMonth() + 1;
console.log(getMonths);
const getYears = currentDate.getUTCFullYear();
console.log(getYears);
if (getDates < 10) {
  getDates = '0' + getDates;
}
if (getMonths < 10) {
  getMonths = '0' + getMonths;
}
const getFullDates = `${getYears}-${getMonths}-${getDates}`;
console.log(getFullDates);
startDate.setAttribute('min', getFullDates);
endDate.setAttribute('min', getFullDates);
// ///////////////////////////
// End date starts from start date
// experimental
// startDate.addEventListener('input', function () {
//   const startDateValue2 = this.value.trim();
//   const endDateValue2 = endDate.value.trim();
//   endDate.setAttribute('min', startDateValue2);
//   if (endDateValue2 > startDateValue2) {
//     setError(endDate, 'Value must be ');
//   }
// });
// form.addEventListener('click', function () {
//   console.log('---------------');
//   const startDateValue2 = startDate.value.trim();
//   console.log(startDateValue2);
//   endDate.setAttribute('min', startDateValue2);
//   // validateInput();
// });
// /////////////
startDate.addEventListener('input', function () {
  const startDateValue = this.value.trim();
  const endDateValue = endDate.value.trim();

  if (startDateValue > endDateValue && endDateValue !== '') {
    setError(endDate, 'ooopps');
  }
  endDate.setAttribute('min', startDateValue);
});
// endDate.addEventListener('input', function () {
//   const startDateValue = this.value.trim();
//   const endDateValue = endDate.value.trim();
//   startDate.setAttribute('max', endDateValue);
// });

// ////////////////
// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password2');
// const phoneno = document.getElementById('phoneno');
// const formButton = document.getElementById('formButton');

// form.addEventListener('submit', e => {
//   e.preventDefault();
//   // calling validinput function
//   validateInput();
// });
// // error
// const setError = function (element, message) {
//   const inputControl = element.parentElement; //
//   const errorDisplay = inputControl.querySelector('.error');

//   errorDisplay.innerText = message;
//   inputControl.classList.add('error');
//   inputControl.classList.remove('success');
// };
// // success
// const setSuccess = function (element) {
//   const inputControl = element.parentElement;
//   const errorDisplay = inputControl.querySelector('.error');

//   errorDisplay.innerText = '✅';
//   inputControl.classList.add('success');
//   inputControl.classList.remove('error');
// };
// // is valid email
// // copied from other sources
// const isValidEmail = function (email) {
//   const re =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// };

// // form validation
// const validateInput = function () {
//   const usernameValue = username.value.trim();
//   const emailValue = email.value.trim();
//   const passwordValue = password.value.trim();
//   const password2Value = password2.value.trim();
//   const phoneValue = phoneno.value.trim();
//   let isValid = true;
//   //
//   // const clearErrors = () => {
//   //   setSuccess(username, '');
//   //   setSuccess(email, '');
//   //   setSuccess(phoneno, '');
//   //   setSuccess(password, '');
//   //   setSuccess(password2, '');
//   // };

//   // username
//   if (usernameValue === '') {
//     setError(username, 'Username is required');
//     isValid = false;
//   } else {
//     setSuccess(username);
//   }
//   // email
//   if (emailValue === '') {
//     setError(email, 'Email is required');
//     isValid = false;
//   } else if (!isValidEmail(emailValue)) {
//     setError(email, 'Provide a valid email address');
//     isValid = false;
//   } else {
//     setSuccess(email);
//   }
//   // phone number
//   if (phoneValue === '') {
//     setError(phoneno, 'Telephone no. is required');
//     isValid = false;
//   } else if (!phoneValue.match(/^[0-9]{10}$/)) {
//     setError(phoneno, 'Provide a valid telephone no.');
//     isValid = false;
//   } else {
//     setSuccess(phoneno);
//   }

//   // password
//   if (passwordValue === '') {
//     setError(password, 'Password is required');
//     isValid = false;
//   } else if (passwordValue.length < 8) {
//     setError(password, 'Provide a valid password');
//     isValid = false;
//   } else {
//     setSuccess(password);
//   }
//   // confirm password
//   if (password2Value === '') {
//     setError(password2, 'Password is required');
//     isValid = false;
//   } else if (password2Value !== passwordValue) {
//     setError(password2, "Password doesn't match");
//     isValid = false;
//   } else {
//     setSuccess(password2);
//   }
//   // form valid
//   if (isValid) {
//     // All inputs are valid, show an alert
//     // clearErrors();
//     alert(`
// Form Submitted Successfully!

// Username: ${usernameValue}
// E-mail: ${emailValue}
// password: ${passwordValue}
// Telephone no.: ${phoneValue}

// Press 'OK' to confirm the details

//     `);
//     // You can also submit the form to a server using AJAX here if needed.
//   }
// };

// // One doubt is how to make it green as soon as alert pops up
