var $html = $('html');
var $ball = $('div');
var $choose = $('form');
var $input = $('#pick-color');

$choose.on('change', function () {
  console.log('works');
  $ball.css('background-color', $input.val());
  $('.ball');
});