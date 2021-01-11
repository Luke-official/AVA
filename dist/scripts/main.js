//Initialize AOS animation
AOS.init();

//Smooth scrolling when a#more is clicked
document.querySelectorAll('a[href^="#more"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

//Prevent background image from resize on scrolling
var breakpoint = 991;
var bgHeight = function() {
    $('#bgImg').css('height', $(window).height() + 'px');
}; bgHeight();
var windowWidth = $(window).height();
$(window).on('resize', function() {
    if ((($(this).width() <= breakpoint) && ($(this).width() != windowWidth))
        || ($(this).width() > breakpoint)) {
        bgHeight();
    }
    windowWidth = $(window).width();
});


//Change background-color of navbar on collapse or scroll
document.addEventListener("DOMContentLoaded", function () {
    var btnMenu = document.querySelectorAll('[data-target="#collapsedNav"]');
    var navbar = document.getElementById("nav");
  
    // If menu is opened nav change bg
    btnMenu[0].addEventListener("click", () => {
      if ((navbar.style.backgroundColor = "transparent")) {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.50)";
      } else {
        navbar.style.backgroundColor = "transparent";
      }
    });
  
    // Check the user scroll 
    window.addEventListener("scroll", () => {
      var startchange = 400; // When this value is reached navbar change
      var scrolled = window.scrollY; // Take Y value of user scroll 
  
      if (scrolled >= startchange) {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.50)";
      } else {
        navbar.style.backgroundColor = "transparent";
      }
    });
  });

  // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
} 
