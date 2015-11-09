
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

  // testing waypoints
  // var waypoint = new Waypoint({
  // element: document.getElementById('basic-waypoint'),
  // handler: function() {
  //   console.log('Basic waypoint triggered')

  //   }
  // }, {offset: '100%'});

  $('#test').css('opacity', 0);

  $('#test').waypoint(function() {
      $('#test').addClass('animated fadeInRight');
      console.log('Basic waypoint triggered')

  }, { offset: '50%' });

});




