$(document).ready(function(){
  $('a-box').html('<a-animation begin="mouseenter" attribute="opacity" from=".2" to="1" dur="300"></a-animation>');
  $('a-box').html('<a-animation begin="mouseleave" attribute="opacity" from="1" to=".2" dur="2000"></a-animation>');
  // $('a-box').html('<a-animation begin="click" direction="alternate" attribute="opacity" from=".2" to="1" dur="300"></a-animation>');
});

$(document).ready(function(){
  $('.info').click(function(){
    $('.infocontainer').fadeToggle();
  });

  $('.close').click(function(){
    $('.infocontainer').fadeOut();
  });

  $('.image-trigger').click(function(){
    $('.image-popup').fadeToggle();
    $('.info, .a-enter-vr-button').toggleClass('nodisplay');
  });
});
