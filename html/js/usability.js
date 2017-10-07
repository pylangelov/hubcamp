// SVG Fallback for logo
// ** JS
// For each img tag ends with SVG Replace "svg" by "png"

/*
if(!Modernizr.svg){
  var i=document.getElementsByTagName('img'),j,y;

  for(j = i.length ; j-- ; ){
    y = i[j].src;
    if( y.match(/svg$/) ){
      i[j].src = y.slice(0,-3) + 'png';
    }
  }
}*/


// Sticky header after Hero-Image
// ** jQuery
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  var offsetHeader = $('.hero-image').offset().top;
  var heightHeader = $('.hero-image').height();
  if(scroll > offsetHeader + heightHeader){
  //if (scroll >= 800) {
    $('.nav-custom').addClass('fixed-header');
  } else {
    $('.nav-custom').removeClass('fixed-header');
  }
});


// Hover header
// ** jQuery
$(document).ready(function(){
  $('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
  });
});


// GoTo top Button
// ** jQuery
