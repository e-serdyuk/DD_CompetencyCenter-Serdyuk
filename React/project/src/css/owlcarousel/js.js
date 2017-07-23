$(document).ready(function(){

    $(".cross").hide();
    $(".menu_burg").hide();
    $(".hamburger").click(function() {
        $(".menu_burg").slideToggle("slow", function() {
            $(".hamburger").hide();
            $(".cross").show();
        });
    });

    $(".cross").click(function() {
        $(".menu_burg").slideToggle("slow", function() {
            $(".cross").hide();
            $(".hamburger").show();
        });
    });



  var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
 
        },
        1400:{
            items:4,
            nav:true,
 
        }
    }
});


$('.owl-nav').on('click',function(){

    owl.trigger('stop.owl.autoplay')
  setTimeout(function(){owl.trigger('play.owl.autoplay',[1000])}, 5000);
    
})

$('.tab2').on('click',function(){

    owl.trigger('stop.owl.autoplay')
 
    
})
$('.tab1').on('click',function(){

    owl.trigger('stop.owl.autoplay')
 
    
})


});