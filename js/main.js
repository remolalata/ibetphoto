$(document).ready(function() {
  $('.media').hover(function (){
    $('.overlay').addClass('show-overlay');
  }, function() {
    $('.overlay').removeClass('show-overlay');
  })
});
