// JavaScript Document

//digital clock
function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";
  
  if(h == 0){
      h = 12;
  }

  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
  setTimeout(showTime, 1000);
};
showTime();

//Display Date, Time, and Timezone
function displayDate(){
  document.getElementById("demo").innerHTML = Date();
}

//jQuery things
$(document).ready(function () {

  //Landing h1 fadeIn
  $("div.landing h1").fadeOut(1);
  $("div.landing h1").removeClass('hidden');
  $("div.landing h1").fadeIn(3000);

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
  $("section.btn2 button").click(function() {
    $("div.anime").animate({left: '325px'});
    $("p.goaltext").css("visibility", "visible");
    $("img.goal").css("visibility", "visible");
  });
});

//back to top button
var mybutton = document.getElementById("myBtn3");

window.onscroll = function(){
  scrollFunction()
};

function scrollFunction(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//image slideshow;laskdjf;alskdjfa;lsdkjfa;lsdkjfa;lsdkjf
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n){
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n){
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length){
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
