var glow = $('[data-glow]');
var uni = $('[data-slick-uni]');
var gallery = $('[data-slick-gallery]');
var glowX = glow.attr('data-glow-x');
var glowY = glow.attr('data-glow-y');


if (glow.length > 0 && uni.length < 1 && gallery.length < 1) {
var target = $(".section__wrap");
target
      .children('[data-glow]')
      .parallax(
          { mouseport: target, decay: 0.5 },
          { }
      );
}