const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const themeSwitchToggleRef = document.querySelector('#theme-switch-toggle');
document.body.classList.add(localStorage.getItem('theme'));

themeSwitchToggleRef.addEventListener('change', handleThemeSwitch);

function handleThemeSwitch(event) {
  if (document.body.classList.toggle(Theme.DARK)) {
    localStorage.setItem('theme', Theme.DARK);
  } else if (document.body.classList.toggle(Theme.LIGHT)) {
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
