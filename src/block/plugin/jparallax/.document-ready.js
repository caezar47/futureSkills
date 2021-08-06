var glow = $('[data-glow]');
var glowX = glow.attr('data-glow-x');
var glowY = glow.attr('data-glow-y');


if (glow.length > 0) {

var target = $(".section__wrap");
target
      .children('[data-glow]')
      .parallax(
          { mouseport: target },
          { }
      );
}