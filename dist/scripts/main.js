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
      if ((navbar.style.background = "transparent")) {
        navbar.style.background= "linear-gradient(90deg, rgba(4,6,101,0.7876284302783614) 0%, rgba(69,137,252,0.7680205871411064) 100%)";
      } else {
        navbar.style.background = "transparent";
      }
    });
  
    // Check the user scroll 
    window.addEventListener("scroll", () => {
      var startchange = 400; // When this value is reached navbar change
      var scrolled = window.scrollY; // Take Y value of user scroll 
  
      if (scrolled >= startchange) {
        navbar.style.background = "linear-gradient(90deg, rgba(4,6,101,0.7876284302783614) 0%, rgba(69,137,252,0.7680205871411064) 100%)";
      } else {
        navbar.style.background = "transparent";
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

