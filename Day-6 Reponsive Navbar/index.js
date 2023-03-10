function toggleNav() {
    var navLinks = document.getElementById("nav-link-section");
    navLinks.classList.toggle("show");
    
  }

  var menuIcon = document.getElementById("icon-menu");
menuIcon.addEventListener("click", toggleNav);
