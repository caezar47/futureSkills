
var phone=$(".form__control[type='tel']");phone.mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
$("img").addClass("img-responsive");
var modal_btn_show=$('[data-target="#modal-university"]');modal_btn_show.on("click",function(a){var t=JSON.parse($(this).attr("data-modal")||"{}"),i=(t.id,t.name),e=t.note,d=t.img,s=t.team,l=$(this).attr("data-target"),m=$(l).find("[data-uni-name]"),n=$(l).find("[data-uni-note]"),r=$(l).find("[data-uni-img]"),c=$(l).find("[data-uni-team-group]"),o=$(l).find("[data-uni-team]");if(s.length){c.addClass("is--visible");for(var _=0;_<s.length;_++){var g='<div class="card__item  is--team"><div class="card__img  is--team"><img src="'+s[_].img+'" class="img-responsive" alt=""></div><div class="card__group  is--team"><h6 class="card__heading  is--team">'+s[_].name+'</h6><p class="card__label  is--team">'+s[_].label+'</p><p class="card__tel  is--team"><a href="tel:'+s[_].tel+'">'+s[_].tel+'</a></p><p class="card__email  is--team"><a href="mailto:'+s[_].email+'">'+s[_].email+"</a></p></div></div>";o.append(g)}}m.text(i),n.text(e),r.attr({src:d})}),$(".modal__block").on("hidden.bs.modal",function(a){$(this).find("[data-uni-team]").empty()});
var humb=$("[data-hamburger]"),humb_close=$("[data-hamburger-close]"),collapse=$(".navbar__collapse"),html=$("html");humb.on("click",function(){collapse.toggleClass("is--open"),html.toggleClass("is--open-navbar"),$(this).toggleClass("is--active")}),humb_close.on("click",function(){html.removeClass("is--open-navbar"),collapse.removeClass("is--open"),humb_close.removeClass("is--active")}),$(document.body).on("click",function(a){0==$(a.target).closest(".navbar__block").length&&(html.removeClass("is--open-navbar"),collapse.removeClass("is--open"),humb.removeClass("is--active"))});var url=window.location.pathname;$('.navbar__nav a[href="'+url+'"]').parent().addClass("is--active"),$('.navbar__nav-bottom a[href="'+url+'"]').parent().addClass("is--active"),$('.navbar-aside__nav a[href="'+url+'"]').parent().addClass("is--active"),$('.tabs__nav a[href="'+url+'"]').parent().addClass("is--active");
$("[data-selectize-default]").selectize({sortField:"text",lockOptgroupOrder:!0});
"use strict";$(function(){$("[data-slick-header]");var i=$("[data-slick-challenge]"),s=$("[data-slick-challenge-adv]"),e=($("[data-slick-challenge-adv-thumb]"),$("[data-slick-challenge-group]")),t=($("[data-slick-challenge-item]"),$("[data-slick-challenge-item-thumb]"),$("[data-slick-challenge-card]")),n=$("[data-slick-uni]"),o=$("[data-slick-gallery]"),l=$("[data-slick-gallery-thumb]"),a=$(".slick-count");i.slick({slidesToShow:4,slidesToScroll:1,arrows:!0,dots:!1,infinite:!1,prevArrow:'<button type="button" class="slick-btn  is--prev"><span class="sr-only">Предыдущий слайд</span></button>',nextArrow:'<button type="button" class="slick-btn  is--next"><span class="sr-only">Следующий слайд</span></button>',responsive:[{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:767,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]}),n.on("init reInit afterChange",function(i,s,e,t){var n=(e||0)+1;$(this).find(a).html(n+"/"+s.$dots[0].children.length)}),n.on("init reInit",function(i,s,e,t){$(".section__wrap").children("[data-glow]").parallax({mouseport:$(".section__wrap"),decay:.5},{})}),n.slick({slide:".card__wrap",slidesToShow:1,slidesToScroll:1,dots:!0,prevArrow:$(this).find(".slick-btn.is--prev.is--uni"),nextArrow:$(this).find(".slick-btn.is--next.is--uni"),draggable:!1,swipe:!1,touchMove:!1,fade:!0}),o.on("init reInit",function(i,s,e,t){$(".section__wrap").children("[data-glow]").parallax({mouseport:$(".section__wrap"),decay:.5},{})}),o.slick({slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!1,draggable:!1,pauseOnFocus:!1,pauseOnHover:!1,infinite:!1,swipe:!1,touchMove:!1,fade:!0,autoplay:!0,speed:350,autoplaySpeed:5e3,asNavFor:l}),l.slick({slidesToShow:4,slidesToScroll:1,arrows:!1,dots:!1,infinite:!1,autoplay:!1,asNavFor:o,focusOnSelect:!0}),$(document).width()<768&&s.on("init reInit afterChange",function(i,s,e,t){var n=(e||0)+1;$(this).find(a).html(n+"/"+s.$dots[0].children.length)}),s.slick({responsive:[{breakpoint:99999,settings:"unslick"},{breakpoint:767,settings:{slide:".card__item",slidesToShow:1,slidesToScroll:1,dots:!0,infinite:!1,prevArrow:$(this).find(".slick-btn.is--prev.is--ch-adv"),nextArrow:$(this).find(".slick-btn.is--next.is--ch-adv")}}]}),e.on("init reInit afterChange",function(i,s,e,t){var n=(e||0)+1;$(this).find(a).html(n+"/"+s.$dots[0].children.length)}),e.slick({slide:".slide--group",slidesToShow:1,slidesToScroll:1,infinite:!1,dots:!0,draggable:!1,pauseOnFocus:!1,pauseOnHover:!1,swipe:!1,touchMove:!1,autoplay:!1,prevArrow:$(this).find(".slick-btn.is--prev.is--ch-item"),nextArrow:$(this).find(".slick-btn.is--next.is--ch-item")}),t.slick({responsive:[{breakpoint:99999,settings:"unslick"},{breakpoint:1199,settings:{slidesToShow:1,slidesToScroll:1,infinite:!1,arrows:!1,dots:!1,variableWidth:!0}}]})});