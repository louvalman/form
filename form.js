const themeSwitch = document.querySelector('body > header > span > i');

function setTheme() {
  const root = document.documentElement;
  const newTheme = root.className === 'dark' ? 'light' : 'dark';
  root.className = newTheme;
  themeSwitch.classList.toggle('iconoir-light-bulb-on');
  themeSwitch.classList.toggle('iconoir-light-bulb-off');
}

document.querySelector('.theme-toggle').addEventListener('click', setTheme);
