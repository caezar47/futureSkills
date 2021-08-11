//humb
var humb = $("[data-hamburger]");
var humb_close = $("[data-hamburger-close]");
var collapse = $('.navbar__collapse');
var html = $('html');
humb.on('click',function() {				
	collapse.toggleClass("is--open");
	html.toggleClass("is--open-navbar");
	$(this).toggleClass("is--active");
});	
humb_close.on('click',function() {				
	html.removeClass("is--open-navbar");
	collapse.removeClass("is--open");
	humb_close.removeClass("is--active");
});	
$(document.body).on('click', function(event) {
	if($(event.target).closest('.navbar__block').length == 0){	
		html.removeClass("is--open-navbar");
		collapse.removeClass("is--open");
		humb.removeClass("is--active");
	}		
});


var url = window.location.pathname;
//var url = window.location.href;
$('.navbar__nav a[href="'+url+'"]').parent().addClass('is--active'); 
$('.navbar__nav-bottom a[href="'+url+'"]').parent().addClass('is--active'); 
$('.navbar-aside__nav a[href="'+url+'"]').parent().addClass('is--active'); 
$('.tabs__nav a[href="'+url+'"]').parent().addClass('is--active');

/*
$('[data-azbn-toggle="dropdown"]').on('click', function(e) {
	$(".azbn-dropdown").toggleClass('open');
});	
$('.navbar-aside__dropdown [data-toggle="dropdown"]').on('click', function(e) {
	e.preventDefault();
	e.stopPropagation();
	$(this).parent().siblings().removeClass('open');
	$(this).parent().toggleClass('open');
});
$('.azbn__search-dropdown').on('shown.bs.dropdown', function(e) {
	$('.azbn__search-input').focus();
});
$('.navbar-xs__block').closest('body').addClass('is--navbar-xs-bottom');
$('.banner__block').closest('body').addClass('is--banner');
*/