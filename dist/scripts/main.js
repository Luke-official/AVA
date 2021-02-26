//Initialize AOS animation
AOS.init();

/*
function(event) {
  var $anchor = $(this);
  $('html, body').stop().animate({
    scrollTop: $($anchor.attr('href')).offset().top - 0
  }, 1500, 'easeInOutExpo');
  event.preventDefault();
}
*/


//Smooth scrolling when a#more is clicked
document.querySelectorAll('a[href^="#more"] , a[href^="#experiences"] , a[href^="#tour"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


/*Prevent background image from resize on scrolling
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
*/

//Change background-color of navbar on collapse or scroll
document.addEventListener("DOMContentLoaded", function () {
    var btnMenu = document.querySelectorAll('[data-target="#collapsedNav"]');
    var navbar = document.getElementById("nav");


  
    // If menu is opened nav change bg
    btnMenu[0].addEventListener("click", () => {
      if ((navbar.style.background = "transparent")) {
        navbar.style.background= "linear-gradient(90deg, rgba(4, 4, 46, 0.94) 0%, rgba(2, 27, 68, 0.94) 100%)";
      } else {
        navbar.style.background = "transparent";
      }
    });
  
    // Check the user scroll 
    window.addEventListener("scroll", () => {
      var startchange = 400; // When this value is reached navbar change
      var scrolled = window.scrollY; // Take Y value of user scroll 
  
      if (scrolled >= startchange) {
        navbar.style.background = "linear-gradient(90deg, rgba(4, 4, 46, 0.94) 0%, rgba(2, 27, 68, 0.94) 100%)";
      } else {
        navbar.style.background = "transparent";
      }
    });
  });


  //Get and set src from iframe to modal
  var videoLink = document.getElementById('videoLink');
  var videoModal = document.getElementById('videoModal');
  var videoFrame = document.getElementById('modalFrame');
 
  videoLink.addEventListener("click", function() {

    var source = this.childNodes[1].firstChild.nextSibling.src;
    videoFrame.src = source;
    
  });

  //Remove src when btn-close is triggered
  document.getElementById('close').addEventListener('click', function(e){
    videoFrame.src = '';

  });