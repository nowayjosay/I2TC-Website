(function () {
  var menuBtn = document.querySelector('.menu-btn');
  var mobileNav = document.querySelector('.mobile-nav');
  var menuIconOpen = document.querySelector('.menu-icon-open');
  var menuIconClose = document.querySelector('.menu-icon-close');

  if (!menuBtn || !mobileNav) return;

  menuBtn.addEventListener('click', function () {
    var isOpen = mobileNav.classList.toggle('open');
    menuBtn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    if (menuIconOpen && menuIconClose) {
      menuIconOpen.style.display = isOpen ? 'none' : 'block';
      menuIconClose.style.display = isOpen ? 'block' : 'none';
    }
  });

  // Close mobile menu when a link is clicked
  var links = mobileNav.querySelectorAll('a');
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      mobileNav.classList.remove('open');
      if (menuIconOpen && menuIconClose) {
        menuIconOpen.style.display = 'block';
        menuIconClose.style.display = 'none';
      }
      menuBtn.setAttribute('aria-label', 'Open menu');
    });
  });
})();
