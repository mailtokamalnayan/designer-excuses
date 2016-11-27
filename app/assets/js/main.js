function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function fillData() {
    $.getJSON( "data.json", function( json ) {
        var index = getRandomArbitrary(0, 99);
      $(".excuse").html(json.items[ index ].excuse );
      $(".number").html( index + 1 );
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