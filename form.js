const root = document.documentElement;

// Theme functionality
const themeSwitch = document.querySelector(
  'body > header > .header-right > span > i'
);
const logo = document.querySelector('.logo');
const favicon = document.querySelector('link[rel="icon"]');

function setTheme() {
  const newTheme = root.className === 'dark' ? 'light' : 'dark';
  root.className = newTheme;

  themeSwitch.classList.toggle('iconoir-light-bulb-on');
  themeSwitch.classList.toggle('iconoir-light-bulb-off');

  const newLogoSrc =
    newTheme === 'dark' ? 'assets/logo-green.svg' : 'assets/logo-purple.svg';
  logo.src = newLogoSrc;

  const newFaviconHref =
    newTheme === 'dark'
      ? 'assets/favicon-green.png'
      : 'assets/favicon-purple.png';
  favicon.href = newFaviconHref;
}

document.querySelector('.theme-toggle').addEventListener('click', setTheme);

// Tooltip functionality using TippyJS
let placement = 'left-end';

if (window.innerWidth < 600) {
  // Change placement for smaller viewports
  placement = 'bottom';
}

tippy('#info', {
  content:
    'This is a form template created to showcase various client-side validation methods using semantic HTML, CSS and vanilla JS. <br><br>Check out my <strong><a href="https://www.github.com/louvalman" class="github-link">Github</a></strong> for more usable templates!',
  arrow: true,
  trigger: 'click',
  arrowType: 'round',
  animateFill: false,
  animation: 'shift-away',
  interactive: true,
  placement: placement,
});

// Clear input
document.addEventListener('click', function (event) {
  let clearButton = event.target.closest('.clear');
  if (clearButton) {
    let inputId = clearButton.getAttribute('data-input-id');
    document.getElementById(inputId).value = '';

    // Check if the cleared input is either password or password confirmation
    if (inputId === 'password' || inputId === 'password_confirmation') {
      validatePasswords();
    }
  }
});

// Password validation
const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#password_confirmation');
const helperTexts = document.querySelectorAll('.helper-text');
const helperTextConfirm = document.querySelector('.helper-text-confirm');

function validatePasswords() {
  const passwordValue = password.value.trim();
  const passwordConfirmationValue = passwordConfirmation.value.trim();
  const hasUppercase = /[A-Z]/.test(passwordValue);
  const hasLowercase = /[a-z]/.test(passwordValue);
  const hasDigit = /\d/.test(passwordValue);
  const hasMinLength = passwordValue.length >= 8;

  // Reset all helper texts
  helperTexts.forEach((helperText) => {
    helperText.innerHTML = '';
  });

  helperTextConfirm.innerHTML = '';

  // Accumulate error messages for failed conditions
  const errorMessages = [];

  if (!hasLowercase) {
    errorMessages.push('The password does not contain a lowercase letter');
  }

  if (!hasUppercase) {
    errorMessages.push('The password does not contain an uppercase letter');
  }

  if (!hasDigit) {
    errorMessages.push('The password does not contain a digit');
  }

  if (!hasMinLength) {
    errorMessages.push('The password should be at least 8 characters long');
  }

  // Update helper texts with accumulated error messages
  if (errorMessages.length > 0) {
    const errorMessageHtml = errorMessages.map(
      (message) =>
        `<div><i class="iconoir-warning-hexagon"></i> ${message}</div>`
    );
    helperTexts.forEach((helperText) => {
      helperText.innerHTML = errorMessageHtml.join('');
    });
  }

  // Check password match
  if (
    passwordValue !== '' &&
    passwordConfirmationValue !== '' &&
    passwordConfirmationValue !== passwordValue
  ) {
    helperTextConfirm.innerHTML =
      '<i class="iconoir-warning-hexagon"></i> The passwords do not match';
    passwordConfirmation.classList.remove('password-match');
    passwordConfirmation.classList.add('password-invalid');
    return false;
  } else {
    helperTextConfirm.innerHTML = '';
    passwordConfirmation.classList.remove('password-invalid');
    passwordConfirmation.classList.add('password-match');
    return passwordValue === passwordConfirmationValue;
  }
}

// Validate passwords on input in either field
password.addEventListener('input', validatePasswords);
passwordConfirmation.addEventListener('input', validatePasswords);
