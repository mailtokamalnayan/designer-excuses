function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function fillData() {
    $.getJSON( "data.json", function( json ) {
      $("h2").html(json.items[ getRandomArbitrary(0, 14) ].excuse );
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