const root = document.documentElement;

// Theme functionality
const themeSwitch = document.querySelector('body > header > span > i');

function setTheme() {
  const newTheme = root.className === 'dark' ? 'light' : 'dark';
  root.className = newTheme;
  themeSwitch.classList.toggle('iconoir-light-bulb-on');
  themeSwitch.classList.toggle('iconoir-light-bulb-off');
}

document.querySelector('.theme-toggle').addEventListener('click', setTheme);

// Tooltip functionality using TippyJS

tippy('#info', {
  content: 'This is a form template created to showcase various client-side validation methods using semantic HTML, CSS and vanilla JS. <br><br>Check out my <strong><a href="https://www.github.com/louvalman" class="github-link">Github</a></strong> for more usable templates!',
  arrow: true,
  trigger: 'click',
  arrowType: 'round',
  animateFill: false,
  animation: 'shift-away',
  interactive: true,
  theme: 'light',
  placement: 'left'
});