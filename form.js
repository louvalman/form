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
      ? 'assets/favicon-green.svg'
      : 'assets/favicon-purple.svg';
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
  }
  validatePasswords();
});

// Password validation
const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#password_confirmation');
const helperTexts = document.querySelectorAll('.helper-text');

function validatePasswords() {
  const passwordValue = password.value.trim();
  const passwordConfirmationValue = passwordConfirmation.value.trim();

  if (
    passwordValue !== '' &&
    passwordConfirmationValue !== '' &&
    passwordConfirmationValue !== passwordValue
  ) {
    helperTexts.forEach((helperText) => {
      helperText.innerHTML =
        '<i class="iconoir-warning-hexagon"></i> The passwords do not match';
    });
  } else {
    helperTexts.forEach((helperText) => {
      helperText.innerHTML = '';
    });
  }
}

// Validate passwords on input in either field
password.addEventListener('input', validatePasswords);
passwordConfirmation.addEventListener('input', validatePasswords);
