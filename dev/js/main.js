
$(document).ready(function() {

  // navigation toggles dropdown on mobile
  // based on http://codepen.io/bradfrost/pen/sHvaz
  $('body').addClass('js');

  var $menu = $('#menu');
  var $menulink = $('.menu-link');
  var $navlink = $('nav a');

  $menulink.click(function() {
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
    return false;
  });
  $navlink.click(function(event) {
    var $lastclick = $('nav a.active');
    var $target = $( event.target );
    $lastclick.toggleClass('active');
    $target.toggleClass('active');
    return false;
  });


  //JS slow scroll to target
  var $linkToAnchor = $('nav a[href^=#]');

  $linkToAnchor.click( function(event) {

    var target = $($(this).attr("href"));
    console.log("target: ", target);

    if( target.length ) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: target.offset().top
      }, 800);
    }
  });

//using waypoint/animate.css to animate items in About Us block
// disabled for small screens
if ($(this).width() > 480) {
  $('#about-slide1').css('opacity', 0);
  $('#about-slide3').css('opacity', 0);
  $('#about-slide4').css('opacity', 0);
  $('#about-slide5').css('opacity', 0);

  $('#about-slide1').waypoint(function() {
      $('#about-slide1').addClass('animated fadeInLeft');
  }, { offset: '50%' });

  $('#about-slide3').waypoint(function() {
      $('#about-slide3').addClass('animated fadeInUp');
  }, { offset: '50%' });

  $('#about-slide4').waypoint(function() {
      $('#about-slide4').addClass('animated fadeInUp');
  }, { offset: '50%' });

  $('#about-slide5').waypoint(function() {
      $('#about-slide5').addClass('animated fadeInUp');
  }, { offset: '50%' });
   }
});




