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
        $("div.anime").animate({ left: '325px'});
        $("p.goaltext").css("visibility", "visible");
        $("img.goal").fadeIn("6000");
    });

});

//Get the button
var mybutton = document.getElementById("myBtn3");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}