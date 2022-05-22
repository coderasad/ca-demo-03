(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        

        $('.menu-open').click( function (){  
            $('.body-left-bar').toggleClass('activee');  
            $('.menu-open').toggleClass('toggle');  
                  
        });

       // li a active
        // Hamburger-menu
        $('.hamburger-menu, .main-menu li a').on('click', function () {
            $('.hamburger-menu .line-top').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');
            $('.main-menu').toggleClass('open');
        });

        //03. Smoot Scroll Effect
        $('.main-menu ul li a').bind('click', function (event) {
            var $anchor = $(this);
            var headerH = '70';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1200, 'easeInSine');
            event.preventDefault();
        });

        /* sticky-menu start*/
        //05. sticky header
        function sticky_header() {
            var wind = $(window);
            var sticky = $('.top-header');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll < 30) {
                    sticky.removeClass('sticky');
                } else {
                    sticky.addClass('sticky');
                }
            });
        }
        sticky_header();
        /* sticky-menu ends*/

        //jQuery smooth-scoll
        $('body').scrollspy({
            terget: '.main-menu',
            offset: 95
        });
        //jQuery smooth-scoll
        // slick
        $('.slider1').slick({
            margin: 30,
            variableWidth: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 1500,
            cssEase: 'linear',
        });        
        $('.slider2').slick({
            margin: 30,
            variableWidth: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 1500,
            cssEase: 'linear',
            initialSlide: 0,
            rtl: true,
        });

        // slick
		$('.brand-acivee').slick({
			centerMode: true,
			centerPadding: '85px',
			margin: 30,
			arrows: false,
	        autoplay: true,
	        autoplaySpeed: 0,
	        speed: 1000,
	        cssEase: 'linear',
			slidesToShow: 6,
			responsive: [
			  {
				breakpoint: 991,
				settings: {
				  arrows: false,
				  centerMode: true,
				  centerPadding: '80px',
				  slidesToShow: 4
				}
			  },
			  {
				breakpoint: 767,
				settings: {
				  arrows: false,
				  centerMode: true,
				  centerPadding: '80px',
				  slidesToShow: 1
				}
			  }
			]
		});
    //07. mobile app screenshot
    $('.pepole-cont-box-active').owlCarousel({
        dots: true,
        loop: true,
        nav: true,
        navText: ['<i class="far fa-angle-left"></i>', '<i class="far fa-angle-right"></i>'],
        margin: 50,
        smartSpeed: 300,
        stagePadding: 20,
        responsive: {
            0: {
                items: 1
            },
            375: {
                items:1
            },
            768: {
                items: 2
            },
            992: {
                items:3
            }
        }
    });

    var width = $('.pepole-cont-box-active .owl-dots').width();
    var total = width + 40 + "px";
    $('.pepole-cont-box-active .owl-nav').width(total);

    /*  counter start*/
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
       

    /* -- testimonial-active Carousel */
    $(".pricing-active").owlCarousel({
        items: 3,
        nav: true,
        dots: false,
        loop: true,
        navText: ['<i class="far fa-angle-left"></i>', '<i class="far fa-angle-right"></i>'],
        margin: 40,
        stagePadding:20,
        // autoplay: true,
        // autoplayTimeout: 3000,
        smartSpeed: 1000,
        responsiveClass: true,
        responsive: {
            320: {
                items: 1,

            },
            768: {
                items: 2,

            },
            992: {
                items: 3,

            }
        }


    });

    /* -- testimonial-active Carousel */
    $(".special-active").owlCarousel({
        items: 3,
        nav: true,
        dots: false,
        loop: true,
        navText: ['<i class="far fa-angle-left"></i>', '<i class="far fa-angle-right"></i>'],
        responsiveClass: true,
        responsive: {
            320: {
                items: 1,
                stagePadding: 50,
                margin: 15,
            },
            576:{
                items: 2,
            },
            768: {
                items: 2,

            },
            992: {
                items: 3,
                margin: 40,
            },
            1200: {
                items: 3,
                margin: 60,
            }
        }


    });

    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="fas fa-angle-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
      });   
     

        




    });

  
  


}(jQuery));	