// JavaScript Document


$(document).ready(function () {
  //read more button css change
  $("#show1").click(function () {
    $(".readmore1").fadeIn("3000");
    alert("Click OK if you are sure you wanna read some really cool facts.")
  });
  $("#show2").click(function () {
    $(".readmore2").fadeIn("3000");
  });
  $("#show3").click(function () {
    $(".readmore3").fadeIn("3000");
  });
  //slidedown
  $("#flip1").click(function () {
    $("#panel1").slideDown("slow");
  });
  $("#flip2").click(function () {
    $("#panel2").slideDown("slow");
  });
  $("#flip3").click(function () {
    $("#panel3").slideDown("slow");
  });
  //animation
  $("section.btn2 button").click(function () {
    $("div.anime").animate({left: '325px'});
    $("p.goaltext").css("visibility", "visible");
    $("img.goal").css("visibility", "visible");
  });

});

//back to top button
var mybutton = document.getElementById("myBtn3");

window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//image slideshow
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}