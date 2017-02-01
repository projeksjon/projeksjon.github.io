$(document).ready(function(){
  $('.button-toggle').click(function(e){
    e.preventDefault();
    $('.navbar-menu').toggleClass('active');
  });
});