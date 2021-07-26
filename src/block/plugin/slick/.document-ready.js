'use strict';
$(function() { 
	var challenge 		= $('[data-slick-challenge]');
	var uni 			= $('[data-slick-uni]');

	var prevArrow = '<button type="button" class="slick-btn  is--prev"><span class="sr-only">Предыдущий слайд</span></button>';
	var nextArrow = '<button type="button" class="slick-btn  is--next"><span class="sr-only">Следующий слайд</span></button>';
	var count = $('.slick-count');

	challenge.slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		infinite: false,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		responsive: [		  
		    {
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
		    },		  
		    {
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
				}
		    },
		    {
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
				}
		    }
		]
	});

   	uni.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
		var i = (currentSlide ? currentSlide : 0) + 1;
		$(this).find(count).html(i + '/' + slick.$dots[0].children.length);
    });
	uni.slick({
		slide: '.card__wrap',
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		prevArrow: $(this).find('.slick-btn.is--prev.is--uni'),
		nextArrow: $(this).find('.slick-btn.is--next.is--uni'),
		draggable: false,
		swipe: false,
		touchMove: false,
		fade: true, 	
	});
	
	/*
	var gallery 		= $('[data-slick-gallery]');
	var gallery_thumb 	= $('[data-slick-gallery-thumb]');
	var banner = $('[data-slick-banner]');
	var banner_white = $('[data-slick-banner-white]');
	var banner_blue = $('[data-slick-banner-blue]');
	var slider = $('[data-slick-slider]');
	var insta = $('[data-slick-insta]');
	var catalog = $('[data-slick-catalog]');
	var catalog_note = $('[data-slick-catalog-note]');
	header.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		draggable: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		swipe: false,
		touchMove: false,
		fade: true, 	
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 7000,
	});
	gallery.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		draggable: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		swipe: false,
		touchMove: false,
		fade: true, 	
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 7000,
  		asNavFor: gallery_thumb
	});
	gallery_thumb.slick({
		slidesToShow: 7,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		infinite: true,
		autoplay: false,
  		asNavFor: gallery,
		focusOnSelect: true,
		responsive: [				  
		    {
				breakpoint: 1023,
				settings: {
					slidesToShow: 5,
				}
		    },				  
		    {
				breakpoint: 998,
				settings: {
					slidesToShow: 4,
				}
		    },			  
		    {
				breakpoint: 500,
				settings: {
					slidesToShow: 2,
				}
		    },
		]
	});

banner_white.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		draggable: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		swipe: false,
		touchMove: false,
		fade: true, 	
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 7000,
	});
	banner_blue.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		draggable: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		swipe: false,
		touchMove: false,
		fade: true, 	
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 7000,
	});

	slider.slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		infinite: true,
		variableWidth: true,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		responsive: [		  
		    {
				breakpoint: 1200,
				settings: {
					variableWidth: false,
					slidesToShow: 3,
					slidesToScroll: 3, 
				}
		    },
		  
		    {
				breakpoint: 992,
				settings: {
					variableWidth: false,
					slidesToShow: 2,
					slidesToScroll: 2, 
				}
		    },
		  
		    {
				breakpoint: 767,
				settings: {
					variableWidth: false,
					slidesToShow: 2,
					slidesToScroll: 2, 
				}
		    },
		    {
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1, 
				}
		    }
		]
	});
	insta.slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		infinite: true,
		variableWidth: true, 
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		autoplay: true,
  		autoplaySpeed: 4000,
		responsive: [		  
		    {
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1, 
				}
		    },
		  
		    {
				breakpoint: 766,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1, 
				}
		    },
		    {
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1, 
				}
		    }
		]
	});
	catalog_note.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		draggable: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		swipe: false,
		touchMove: false,
		fade: true, 	
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 7000,
	});*/
}); 