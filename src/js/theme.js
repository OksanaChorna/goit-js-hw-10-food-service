const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const themeSwitchToggleRef = document.querySelector('#theme-switch-toggle');
document.body.classList.add(Theme.LIGHT);

if (localStorage.getItem('theme') === Theme.DARK) {
  document.body.classList.toggle(Theme.DARK);
}

themeSwitchToggleRef.addEventListener('change', changeThemeSwitch);

function changeThemeSwitch(event) {
  if (document.body.classList.toggle(Theme.DARK)) {
    localStorage.setItem('theme', Theme.DARK);
    themeSwitchToggleRef.checked = true;
  }
  if (document.body.classList.toggle(Theme.LIGHT)) {
    localStorage.setItem('theme', Theme.DARK);
  }
}
