'use strict';
$(function() { 
	var header 			= $('[data-slick-header]');
	var challenge 		= $('[data-slick-challenge]');
	var ch_adv 			= $('[data-slick-challenge-adv]');
	var ch_adv_thumb 	= $('[data-slick-challenge-adv-thumb]');
	var ch_group 		= $('[data-slick-challenge-group]');
	var ch_item 		= $('[data-slick-challenge-item]');
	var ch_item_thumb 	= $('[data-slick-challenge-item-thumb]');
	var ch_card 		= $('[data-slick-challenge-card]');
	var uni 			= $('[data-slick-uni]');
	var gallery 		= $('[data-slick-gallery]');
	var gallery_thumb 	= $('[data-slick-gallery-thumb]');

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
   	uni.on('init reInit', function(event, slick, currentSlide, nextSlide) {
   		$(".section__wrap").children('[data-glow]').parallax( { mouseport: $(".section__wrap"), decay: 0.5 }, {});
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

	
   	gallery.on('init reInit', function(event, slick, currentSlide, nextSlide) {
   		$(".section__wrap").children('[data-glow]').parallax( { mouseport: $(".section__wrap"), decay: 0.5 }, {});
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
		variableWidth: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		//infinite: true,
		autoplay: false,
  		asNavFor: ch_adv,
		focusOnSelect: true,
	});

   	ch_group.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
		var i = (currentSlide ? currentSlide : 0) + 1;


		//console.log(slick);
    });

	ch_group.slick({
		slide: '.slide--group',
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		dots: true,
		draggable: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		swipe: false,
		touchMove: false,
		autoplay: false,
		prevArrow: $(this).find('.slick-btn.is--prev.is--ch-item'),
		nextArrow: $(this).find('.slick-btn.is--next.is--ch-item'),
		/*customPaging: function(slick, index) {
	      var d = $(slick.$slides[index]).find('[data-thumb]').data('thumb'); 
	      var d = $(slick.$slides[index]).data('thumb'); 
	      return '<a>'+d+'</a>';
	    },*/
	});

   	ch_group.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
	    var currentSlide = ch_group.slick('slickCurrentSlide') + 1;
		var allSlide =  ch_group.slick("getSlick").slideCount;
		//if (allSlide > 1) {
			ch_group.find(count).html(currentSlide + '/' + allSlide);
		//}
    });

	ch_item.slick({
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
			  		asNavFor: ch_item_thumb,
					//infinite: false,
					arrows: false,
				}
		    }
		],
	});
	ch_item_thumb.slick({	
		responsive: [	
			{
				breakpoint: 99999,
				settings: "unslick"
		    },	
			{
				breakpoint: 767,
				settings:{					
					variableWidth: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
					//infinite: false,
					autoplay: false,
			  		asNavFor: ch_item,
					focusOnSelect: true,
				}
		    }
		],	
	});

	ch_card.slick({		
  		responsive: [	
			{
				breakpoint: 99999,
				settings: "unslick"
		    },	
			{
				breakpoint: 1199,
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

	/*header.slick({
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
    });*/
}); 