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
document.querySelectorAll('a[href^="#more"]','a[href^="#experiences"]').forEach(anchor => {
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



const formModalSendBtn = document.getElementById('submit-form');
formModalSendBtn.addEventListener('click', validateForm());

function validateForm (){
  let field = document.getElementsByClassName('form-control');

  field.addEventListener('input', () => {

    let value = field.value;
    let trimmed = value.trim()
    
    if (trimmed == "") {
      field.classList.add("is-valid");
    } else {
      field.classList.add("is-invalid");
    }
    console.log(trimmed)

  });
}


