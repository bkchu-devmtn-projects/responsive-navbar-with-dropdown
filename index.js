function openmenu() {
  var menu = document.querySelector('.nav__dropdown');
  if (!menu.classList.contains('nav__dropdown--show')) {
    menu.classList.add('nav__dropdown--show');
  } else {
    menu.classList.remove('nav__dropdown--show');
  }
}
