var responsiveSlider = function () {

    var slider = document.getElementById("slider");
   
    var sliderWidth = slider.offsetWidth;
   
    var slideList = document.getElementById("slideWrap");
   
    var count = 1;
   
    var items = slideList.querySelectorAll("li").length;
   
    var prev = document.getElementById("prev");
   
    var next = document.getElementById("next");
   
   
   
    window.addEventListener("resize", function () {
   
     sliderWidth = slider.offsetWidth;
   
    });
   
   
   
    var prevSlide = function () {
   
     if (count > 1) {
   
      count = count - 2;
   
      slideList.style.left = "-" + count * sliderWidth + "px";
   
      count++;
   
     } else if ((count = 1)) {
   
      count = items - 1;
   
      slideList.style.left = "-" + count * sliderWidth + "px";
   
      count++;
   
     }
   
    };
   
   
   
    var nextSlide = function () {
   
     if (count < items) {
   
      slideList.style.left = "-" + count * sliderWidth + "px";
   
      count++;
   
     } else if ((count = items)) {
   
      slideList.style.left = "0px";
   
      count = 1;
   
     }
   
    };
   
    
   
    next.addEventListener("click", function () {
   
     nextSlide();
   
    });
   
   
   
    prev.addEventListener("click", function () {
   
     prevSlide();
   
    });
   
   
   
    setInterval(function () {
   
     nextSlide();
   
    }, 5000);
   
   };
   
   
   
   window.onload = function () {
   
    responsiveSlider();
   
   };
   
   
  //  var myIndex = 0;
  //  carousel();
   
  //  function carousel() {
  //    var i;
  //    var x = document.getElementsByClassName("mySlides");
  //    for (i = 0; i < x.length; i++) {
  //      x[i].style.display = "none";  
  //    }
  //    myIndex++;
  //    if (myIndex > x.length) {myIndex = 1}    
  //    x[myIndex-1].style.display = "block";  
  //    setTimeout(carousel, 2000); // Change image every 2 seconds
  //  }
   
  //  //Manual Slideshow
  //  var slideIndex = 1;
  //  showDivs(slideIndex);
   
  //  function plusDivs(n) {
  //    showDivs(slideIndex += n);
  //  }
   
  //  function showDivs(n) {
  //    var i;
  //    var x = document.getElementsByClassName("mySlides");
  //    if (n > x.length) {slideIndex = 1}
  //    if (n < 1) {slideIndex = x.length}
  //    for (i = 0; i < x.length; i++) {
  //      x[i].style.display = "none";  
  //    }
  //    x[slideIndex-1].style.display = "block";  
  //  }

