'use strict';
$(function() { 
	var header 			= $('[data-slick-header]');
	var challenge 		= $('[data-slick-challenge]');
	var ch_adv 			= $('[data-slick-challenge-adv]');
	var ch_adv_thumb 	= $('[data-slick-challenge-adv-thumb]');
	var ch_item 		= $('[data-slick-challenge-item]');
	var ch_card 		= $('[data-slick-challenge-card]');
	var uni 			= $('[data-slick-uni]');
	var gallery 		= $('[data-slick-gallery]');
	var gallery_thumb 	= $('[data-slick-gallery-thumb]');

	var prevArrow = '<button type="button" class="slick-btn  is--prev"><span class="sr-only">Предыдущий слайд</span></button>';
	var nextArrow = '<button type="button" class="slick-btn  is--next"><span class="sr-only">Следующий слайд</span></button>';
	var count = $('.slick-count');


	header.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		draggable: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		swipe: false,
		touchMove: false,
		fade: true, 	
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 8000,
	});

	/*setTimeout(function () {
        header.addClass('is--active');
    }, 600); */
	var params1 = {
        container: document.getElementById('lottie1'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: './js/lottie1.json',
    };
	var params2 = {
        container: document.getElementById('lottie2'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: './js/lottie2.json',
    };
	var params3 = {
        container: document.getElementById('lottie3'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: './js/lottie3.json',
    };

    var anim1 = lottie.loadAnimation(params1);
    var anim2 = lottie.loadAnimation(params2);
    var anim3 = lottie.loadAnimation(params3);

	
    //anim3.play(); 
    header.on('init', function() {
    	//alert('1');
    	anim1.goToAndPlay(0, true);
    });
	anim1.goToAndPlay(0, true);
    header.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
        if(currentSlide == 0){
        	anim1.goToAndPlay(0, true);
        }
        if(currentSlide == 1){
        	anim2.goToAndPlay(0, true);
        }
        if(currentSlide == 2){
        	anim3.goToAndPlay(0, true);
        }
    });

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

	
	gallery.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
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
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		infinite: true,
		autoplay: false,
  		asNavFor: gallery,
		focusOnSelect: true,
	});
	
	ch_adv.slick({		
  		responsive: [	
			{
				breakpoint: 99999,
				settings: "unslick"
		    },	
			{
				breakpoint: 767,
				settings:{
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: false,
					draggable: false,
					pauseOnFocus: false,
					pauseOnHover: false,
					swipe: false,
					touchMove: false,
					fade: true, 	
					autoplay: false,
			  		asNavFor: ch_adv_thumb,
				}
		    }

		]
	});
	ch_adv_thumb.slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		infinite: true,
		autoplay: false,
  		asNavFor: ch_adv,
		focusOnSelect: true,
	});

   	ch_item.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
		var i = (currentSlide ? currentSlide : 0) + 1;
		$(this).find(count).html(i + '/' + slick.$dots[0].children.length);
    });
	ch_item.slick({
		slide: '.card__item',
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		infinite: false,
		dots: true,
		prevArrow: $(this).find('.slick-btn.is--prev.is--ch-item'),
		nextArrow: $(this).find('.slick-btn.is--next.is--ch-item'),
		responsive: [		  
		    {
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
		    },	
		    {
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					variableWidth: false,
				}
		    }
		]
	});
	ch_card.slick({		
  		responsive: [	
			{
				breakpoint: 99999,
				settings: "unslick"
		    },	
			{
				breakpoint: 767,
				settings:{
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: false,
					arrows: false,
					dots: false,
					variableWidth: true,
				}
		    }

		]
	});
	/*
	var banner = $('[data-slick-banner]');
	var banner_white = $('[data-slick-banner-white]');
	var banner_blue = $('[data-slick-banner-blue]');
	var slider = $('[data-slick-slider]');
	var insta = $('[data-slick-insta]');
	var catalog = $('[data-slick-catalog]');
	var catalog_note = $('[data-slick-catalog-note]');

   

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
					breakpoint: 768,
					settings: "unslick"
			    }	  
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