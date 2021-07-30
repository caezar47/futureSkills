var topPos = $(document).scrollTop();		
var snb = $('.navbar__block');	
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
}
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