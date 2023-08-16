$(document).ready(function(){

    // OWL Carousel Banner
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay:true,
        autoplayTimeout:4000,
        smartSpeed:750,
        autoplayHoverPause:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })

});