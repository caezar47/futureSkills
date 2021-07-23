var modal_btn_show = $('[data-toggle="modal"]');
modal_btn_show.on('click', function(e) {
	var modal_data = 			JSON.parse($(this).attr('data-modal') || '{}');
	var id = 					modal_data.id;
	var name = 					modal_data.name;
	var note = 					modal_data.note;
	var img = 					modal_data.img;

	var target = 				modal_data.target;
	var modal = 				$(this).attr('data-target');

	var modal_heading = 		$(modal).find("[data-uni-name]");
	var modal_note = 			$(modal).find("[data-uni-note]");
	var modal_img = 			$(modal).find("[data-uni-img]");


	var modal_form = 			$(modal).find(".azbn7__api__form");
	var modal_form_id = 		$(modal).find("[data-form-id]");
	var modal_form_heading = 	$(modal).find("[data-form-heading]");

	if(target){
		modal_form.prepend('<input type="hidden" name="f[Цель]" data-form-target>');
		var modal_form_target = 	$(modal).find("[data-form-target]");
		modal_form_target.attr({'value':target});
	}

	modal_heading.text(name);
	modal_note.text(note);
	modal_img.attr({'src':img});

	modal_form_id.attr({'value':id});
	modal_form_heading.attr({'value':name});

});
$('.modal__block').on('hidden.bs.modal', function (e) {
	$(this).find("[data-form-target]").remove();
});

/*var basketOpen = $('.informer__modal .btn__item');
basketOpen.on('click', function(e) {
	var btn = $(this);	
	var modal = btn.attr("data-target");	
	btn.closest('.modals').modal('hide');
	$(modal).modal();
	console.log(btn.attr("data-target"));
});
$('.informer__panel.visible--md').closest('.modals').addClass('is--informer')
$('#modal-add-basket').on('hidden.bs.modal', function (e) {
	//if()
	$('body').find('.modals.is--catalog.in').closest('body').addClass('modal-open');
});*/
/*var modal_btn_show = $('.informer__modal .btn__item');
/*var modal_btn_show = $('[data-toggle="modal"]');
modal_btn_show.on('click', function(e) {

	var modal = $(this).attr('data-target');
	var modal_heading = $(modal).find("[data-modal-heading]");
	var modal_heading_value = $(this).attr('data-modal-heading');

	var modal_heading_small = $(modal).find("[data-modal-heading-small]");
	var modal_heading_small_value = $(this).attr('data-modal-heading-small');

	var modal_form_heading = $(modal).find("[data-form-heading]");

	var modal_btn_heading = $(modal).find("[data-btn-heading]");
	var modal_btn_heading_value = $(this).attr('data-btn-heading');

	modal_heading.text(modal_heading_value);
	modal_heading_small.text(modal_heading_small_value);
	modal_form_heading.attr({'value':modal_heading_value});
	modal_btn_heading.text(modal_btn_heading_value);
});*/