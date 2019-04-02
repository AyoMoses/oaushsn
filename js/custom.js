var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("wordSlide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  for (i =0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active","");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}
// END OF WORD SLIDER JS

// FONT-FACE OBSERVER AND FONT-FAILED 
var html = document.documentElement;
var script = document.createElement("script"); //Dynamically creates a <script> to add the Font Face Observer to the page
script.src = "fontfaceobserver.js";
script.async = true;

script.onload = function () {
    var roboto = new FontFaceObserver("Roboto");
    var merriweather = new FontFaceObserver("Merriweather"); //Creates observers for both Robot and Merriweather fonts
    var timeout = 2000;

    Promise.all([
        roboto.load(null, timeout),
        merriweather.load(null, timeout)
    ]).then(function () {
        html.classList.add("fonts-loaded"); //When both fonts are loaded, adds d fonts-loaded class to the <html> element
    }).catch(function (e) {
        html.classList.add("fonts-failed"); //When font loading fails, adds the fonts-failed class to the <html> element
    });
};
document.head.appendChild(script);


// FIXED MODAL SCRIPT
var button = document.getElementById('open');
var close = document.getElementById('close');
var modal = document.getElementById('modal');

button.addEventListener('click', function (event) {
  event.preventDefault();
  modal.style.display = 'block';
});

close.addEventListener('click', function (event) {
  event.preventDefault();
  modal.style.display = 'none';
});