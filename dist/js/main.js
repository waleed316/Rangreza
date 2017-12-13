$(document).ready(function(){
    // Set speed
    var speed = 500;            //Fade Speed
    var autoswitch = true;      // Auto Slider Option
    var autoswitch_speed = 4000 //Auto Slide Speed


    // add initial active class
    $('.inner-slider').first().addClass('active');

    // Hide all slides
    $('.inner-slider').hide();

    // Show first class
        $('.active').show();
    // 

    // Next Slide Handler 
        $('#next').on('click',nextSlide);
    // 

    // Prev Slide Handler 
    
        $('#prev').on('click',prevSlide);
    // 
    
    // Auto Switch Handler
        if(autoswitch == true){
        setInterval(nextSlide,autoswitch_speed);
        }
    // 

    // Switch Function next slide
        function nextSlide(){
            $('.active').removeClass('active').addClass('oldActive');
            if($('.oldActive').is(':last-child')){
                $('.inner-slider').first().addClass('active');
            }
            else{
                $('.oldActive').next().addClass('active');
            }
            $('.oldActive').removeClass('oldActive');
            $('.inner-slider').fadeOut(speed);
            $('.active').fadeIn(speed);
        }
    //  

    // Switch Function Prev Slide
        function prevSlide(){
            $('.active').removeClass('active').addClass('oldActive');
            if($('.oldActive').is(':first-child')){
                $('.inner-slider').last().addClass('active');
            }
            else{
                $('.oldActive').prev().addClass('active');
            }
            $('.oldActive').removeClass('oldActive');
            $('.inner-slider').fadeOut(speed);
            $('.active').fadeIn(speed);
        }
    // 
});