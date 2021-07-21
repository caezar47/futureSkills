/*var btn = $('.radio__btn');
btn.on('click', function(e) {
	e.preventDefault();
	var btn_data = $(this).data("elem");
	var list = $(document).find($('.radio__list'));
	$(document).find(btn).removeClass('is--checked');
	$(this).addClass('is--checked');
	console.log(btn_data);
	
	list.each(function(){
		$(this).removeClass('is--hidden');
		var status = $(this).data("status");
		if(status != btn_data){
			$(this).addClass('is--hidden');
		}
		if(btn_data == 'all'){
			$(this).removeClass('is--hidden');
		}
	});
});*/