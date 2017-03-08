    // overlay menu
    $(document).ready(function(){
       $('nav ul li:nth-child(2) a').click(function(){
          $('#info').fadeToggle('slow').css('display','flex');
           $('#location').hide('slow');
       });
        $('nav ul li:nth-child(3) a').click(function(){
          $('#location').fadeToggle('slow').css('display','flex');
            $('#info').hide('slow');
       });
        $('nav ul li:nth-child(1) a').click(function(){
            $('#info, #location').hide('slow');
       });
    });
    
    // animate it
    $(document).ready(function(){
        $('#home h1').fadeIn(1700);
        $(window).scroll(function(){
            $('#home h1').addClass('animated fadeIn delay-500');  
        });
    });
    
    $(document).ready(function(){
        $('#event_container > h3, #event_container > h4, #main_flyer, .gallery_flyer').addClass('animated fadeInUpShort');  
    });
    
    // smooth scroll (snippet)
	$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop':  $target.offset().top
        }, 700, 'swing', function () {
            window.location.hash = target;
        });
    });
});
    
    // background parallax location
    $(document).ready(function(){
    var movementStrength = 35;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    
    $('#location h3,iframe').mouseover(function(){
        $('#location').css("background-image","none"); 
        $("#location").mousemove(function(e){
                  var pageX = e.pageX - ($(window).width() / 2);
                  var pageY = e.pageY - ($(window).height() / 2);
                  var newvalueX = width * pageX * -1 - 25;
                  var newvalueY = height * pageY * -1 - 50;
                  $('#location').css("background-position", newvalueX+"px     "+newvalueY+"px");
        });
            $('#location h3,iframe').mouseout(function(){
            $('#location').css("background-image","url(http://irradie.com/content/1-home/nav-work.gif)");
        });
    });
});

    // background parallax info
    $(document).ready(function(){
    var movementStrength = 35;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    
        $('#info > div:last-child').mouseover(function(){
        $('#info > div:last-child').css("background-image","url(http://irradie.com/content/1-home/nav-work.gif)");
        $('#info > div:last-child').mousemove(function(e){
                  var pageX = e.pageX - ($(window).width() / 2);
                  var pageY = e.pageY - ($(window).height() / 2);
                  var newvalueX = width * pageX * -1 - 25;
                  var newvalueY = height * pageY * -1 - 50;
                  $('#info > div:last-child').css("background-position", newvalueX+"px     "+newvalueY+"px");
        });
            $('#info > div:last-child').mouseout(function(){
            $('#info > div:last-child').css("background-image","none"); 
        });
    });
        $('#info > div:first-child').mouseover(function(){
        $('#info > div:first-child').css("background-image","url(http://irradie.com/content/1-home/nav-work.gif)");
        $('#info > div:first-child').mousemove(function(e){
                  var pageX = e.pageX - ($(window).width() / 2);
                  var pageY = e.pageY - ($(window).height() / 2);
                  var newvalueX = width * pageX * -1 - 25;
                  var newvalueY = height * pageY * -1 - 50;
                  $('#info > div:first-child').css("background-position", newvalueX+"px     "+newvalueY+"px");
        });
            $('#info > div:first-child').mouseout(function(){
            $('#info > div:first-child').css("background-image","none"); 
        });
    });
});
    
    // background parallax event
    $(document).ready(function(){
    var movementStrength = 35;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
        $('#event_container').mouseover(function(e){
                  var pageX = e.pageX - ($(window).width() / 2);
                  var pageY = e.pageY - ($(window).height() / 2);
                  var newvalueX = width * pageX * -1 - 25;
                  var newvalueY = height * pageY * -1 - 50;
                  $('#event_container').css("background-position", newvalueX+"px     "+newvalueY+"px");
        });
    });
// background parallax (snippet)  
/*    $(document).ready(function() {
    var movementStrength = 25;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $("#location").mousemove(function(e){
              var pageX = e.pageX - ($(window).width() / 2);
              var pageY = e.pageY - ($(window).height() / 2);
              var newvalueX = width * pageX * -1 - 25;
              var newvalueY = height * pageY * -1 - 50;
              $('#location').css("background-position", newvalueX+"px     "+newvalueY+"px");
    });
});*/

    // preloader
    $(window).on('load', function(){ // makes sure the whole site is loaded 
        $('#status').fadeOut(); // will first fade out the loading animation 
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
        $('body').delay(350).css({'overflow':'visible'});
    });

    // google analytics
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-90003506-1', 'auto');
    ga('send', 'pageview');