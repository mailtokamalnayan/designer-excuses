function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function fillData() {
    $.getJSON( "data.json", function( json ) {
      $(".excuse").html(json.items[ getRandomArbitrary(0, 99) ].excuse );
      $(".number").html( getRandomArbitrary(0, 99) );
    });
}
$(function() {
    fillData();
});
$('button').click(function(e) {
    e.preventDefault();
    fillData();
});
$(window).keypress(function(e) {
  if (e.keyCode == 0 || e.keyCode == 32) {
    fillData();
  }
});