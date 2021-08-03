var modal_btn_show = $('[data-target="#modal-university"]');
modal_btn_show.on('click', function(e) {
	var modal_data = 			JSON.parse($(this).attr('data-modal') || '{}');
	var id = 					modal_data.id;
	var name = 					modal_data.name;
	var note = 					modal_data.note;
	var img = 					modal_data.img;
	var team = 					modal_data.team;

	var modal = 				$(this).attr('data-target');

	var modal_heading = 		$(modal).find("[data-uni-name]");
	var modal_note = 			$(modal).find("[data-uni-note]");
	var modal_img = 			$(modal).find("[data-uni-img]");
	var modal_team_group = 		$(modal).find("[data-uni-team-group]");
	var modal_team = 			$(modal).find("[data-uni-team]");

	if(team.length) {
		modal_team_group.addClass('is--visible');
		for(var i = 0; i < team.length; i++) {
			var content = '<div class="card__item  is--team"><div class="card__img  is--team"><img src="'+team[i].img+'" class="img-responsive" alt=""></div><div class="card__group  is--team"><h6 class="card__heading  is--team">'+team[i].name+'</h6><p class="card__label  is--team">'+team[i].label+'</p><p class="card__tel  is--team"><a href="tel:'+team[i].tel+'">'+team[i].tel+'</a></p><p class="card__email  is--team"><a href="mailto:'+team[i].email+'">'+team[i].email+'</a></p></div></div>'
			modal_team.append(content);
		}
	}

	modal_heading.text(name);
	modal_note.text(note);
	modal_img.attr({'src':img});

});
$('.modal__block').on('hidden.bs.modal', function (e) {
	$(this).find("[data-uni-team]").empty();
});
//$('#modal-challenge').modal();

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