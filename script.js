var navbar = document.querySelector('.navbar');
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = navbar.offsetHeight;

function hasScrolled() {
  var scrollTop = window.scrollY;

  if (Math.abs(lastScrollTop - scrollTop) <= delta) {
    return;
  }

  if (scrollTop > lastScrollTop && scrollTop > navbarHeight) {
    navbar.classList.add('navbar-hidden');
  } else {
    navbar.classList.remove('navbar-hidden');
    navbar.classList.add('navbar-scrolled');
  }

  lastScrollTop = scrollTop;
}

window.addEventListener('scroll', hasScrolled);
