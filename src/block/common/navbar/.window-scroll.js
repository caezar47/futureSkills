var topPos = $(document).scrollTop();		
var docH = $(window).height();		
var snb = $('.navbar__block');	
var footer = $('.footer__block');
var footerPos = footer.offset().top;

var announce = $('.section__img.is--index-announce');
//console.log(topPos);
if(announce.length > 0) {
	var announcePos = $('.section__content.is--index-announce').offset().top;
	if(topPos + 480 > announcePos) {
		announce.addClass('is--visible');
	}
}
//section__content  is--index-announce
if(snb.hasClass('is--scroll')) {
	if(topPos > 150) {
		snb.addClass('is--hidden');
	} else {
		snb.removeClass('is--hidden');
	}
	if(topPos > 300) {
		snb.addClass('is--scrolled');
	} else {
		snb.removeClass('is--scrolled');
	}
	if(topPos + docH > footerPos) {
		snb.addClass('is--opacity');
	} else {
		snb.removeClass('is--opacity');
	}
}

if(snb.hasClass('is--index')) {
	var projects = $('.section__content.is--index-projects');
	var projectsPos = projects.offset().top;
	if(topPos > 150) {
		snb.addClass('is--hidden');
	} else {
		snb.removeClass('is--hidden');
	}
	if(topPos > projectsPos) {
		snb.addClass('is--scrolled');

	}else{
		snb.removeClass('is--scrolled');
	}
	if(topPos + docH > footerPos) {
		snb.addClass('is--opacity');
	} else {
		snb.removeClass('is--opacity');
	}
}
/*
var dde = $('html');
dde.on('mousemove', function(e){
 	var ow = dde.offsetWidth; 
  	var oh = dde.offsetHeight; 

	dde.css('--mouseX', e.clientX * 100 / ow + "%");
	dde.css('--mouseY', e.clientY * 100 / oh + "%");
});*/
/*	
if(snb.hasClass('fixed')) {
	if(topPos <= 400) {
		snb.removeClass('fixed');
	}
} else {
	if(topPos > 400) {
		snb.addClass('fixed'); 
	}
} 
if(snb.hasClass('scroll-navbar')) {
	if(topPos <= 500) {
		snb.removeClass('scroll-navbar');
	} 
} else {
	if(topPos > 500) {
		snb.addClass('scroll-navbar');
	} 
}*/