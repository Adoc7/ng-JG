
var position = $(window).scrollTop(); 
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if ($('header').width() <= 992 ){
  if(scroll > position) {
      $('nav').stop(false,false).animate({top:'-70px'},"fast");
      console.log('scrollDown');
   
  } else {
       
       $('nav').stop(false,false).animate({top:'0'},"fast");
       console.log('scrollUp');

  }
 
}
position = scroll;

}); 

// Text en arc
    $('.phrase').arctext({ radius: 800 });

// PArallax

var parallaxBox = $('#parallax-container');
var strength = 0.2,
isMobile = false;

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
 isMobile = true;
}


function parallaxMove (parallaxContainer, x, y, boxWidth, boxHeight) {
  $(parallaxContainer).find('.parallax-layer').each(function() {
    var depth = $(this).data('depth');
    var moveX = ((boxWidth / 2) - x) * (strength * depth);
    var moveY = ((boxHeight / 2) - y) * (strength * depth);

    $(this).css({transform: "translate3d(" + moveX + "px, " + moveY + "px, 0)"});
    $(this).removeClass('is-out');
  });
}


function resetParallaxPosition (parallaxContainer) {
  $(parallaxContainer).find('.parallax-layer').each(function() {
    $(this).css({ transform: "translate3d( 0, 0, 0 )"});
    $(this).addClass('is-out');
  });
  event.stopPropagation();
}

if(!isMobile) {

  parallaxBox.mousemove(function(event) {
    event.stopPropagation();
    event = event || window.event;
    var x = Math.floor(event.clientX - $(this).offset().left),
    y = Math.floor(event.clientY - $(this).offset().top),
    boxWidth = $(this).width(),
    boxHeight = $(this).height();

    parallaxMove(this, x, y, boxWidth, boxHeight);

  });

  parallaxBox.mouseleave(function(event) {
    if( !$(event.target).is($(this))) {
      resetParallaxPosition(this);
    }
  });

} else if(isMobile) {
  var elem = document.getElementById("view3d");

  window.addEventListener("deviceorientation", function(event) {
    event.stopPropagation();
    event = event || window.event;

    var rotatedY =  Math.min(Math.max(parseInt(Math.floor(event.gamma)), -45), 45),
    rotatedX = Math.min(Math.max(parseInt(Math.floor(event.beta)), -45), 45),
    boxWidth = parallaxBox.width(),
    boxHeight = parallaxBox.height();

    var moveX = ((boxWidth/2) * rotatedY) / 45;
    var moveY = ((boxWidth/2) * rotatedX) / 45;
    
    parallaxMove(parallaxBox, moveX, moveY, boxWidth, boxHeight);

  });
}

         $(document).ready(function(){

      
             /// Déplacement dans la page au clic

            $('.js-scrollTo').on('click', function() { // Au clic sur un élément
               var page = $(this).attr('href'); // Page cible
               var speed = 750; // Durée de l'animation (en ms)
               var speed = 750; // Durée de l'animation (en ms)
               $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
               return false;
            });


            // MODAL
            $('.modal').each(function(){
                var src = $(this).find('iframe').attr('src');
                $(this).on('click', function(){
                $(this).find('iframe').attr('src', '');
                $(this).find('iframe').attr('src', src);
                 });
                });

            /// Rendre visible au clic
            // Lire plus
            var temps_montre = 2000;   
              afficher_div_vente_masque = function(){
                $("#btve").hide()
                  $("#vente").slideDown().show(temps_montre)
                 
               }
               afficher_div_reserv_masque = function(){
                $("#btre").hide()
                  $("#reserv").slideDown().show(temps_montre)
                
               }
               //toggle
               var timer=3000;
               
          




/// Disparition du menu après clic
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggler:visible').click();
    });
    $('.dropdown-menu  a').click(function(){
      $('.dropdown-menu:visible').click();
      $('.navbar-toggler:visible').click();
    });
    $(document).click(function (e) {
      $('.navbar-collapse').collapse('hide');
    });
});