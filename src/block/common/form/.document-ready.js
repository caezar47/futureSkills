/*var form_panel = $(".form__panel");
var phone = $(".form__control[type='tel']");
var file = $('.form__file-input');
var file_name = $('.form__file-name');
var input = $(".form__control");
var reset = $(".form__reset");
var filterBtn = $(".filter__dropdown-btn");
var filterBlock = $("[data-filter-map]");

var $range = $(".js-range-slider");

var dropdown = $(".form__dropdown-input");
var dropdown_collapse = $(".form__dropdown-collapse");

phone.mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
form_panel.validationEngine(
	'attach', {
		promptPosition : "bottomLeft",
		//scrollOffset: 200,		
		scroll: false
}); 
input.on("input", function () {
	//$(this).siblings('.form__result').addClass('is--open');
	//$(this).siblings('.form__clear').addClass('is--active');
});
file.on('change', function(e) {
    $(this).siblings('.form__file-name').html($(this).val().replace(/.*(\/|\\)/, ''));
});
reset.on('click', function(e) {
    file_name.html(file_name.data('heading'));
});
dropdown.on('click', function(e) {
    $(this).siblings(dropdown_collapse).toggleClass("is--open");
    $(this).toggleClass("is--open");
});

filterBtn.on('click', function(e) {
	$(filterBlock).toggleClass('is--close');
	$(this).toggleClass('is--close');
});

$range.ionRangeSlider({
    step: 1,
});*/