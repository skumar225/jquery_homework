$(document).ready(function() {

$("#form-one").on("submit", function (e) {

e.preventDefault();

var evenColor = $("#color-input").val();



$("tbody tr:nth-child(even), tfoot tr").css("background-color", evenColor);
$("#color-input").val("");

});

//Odd Form

$("#form-two").on("submit", function (e) {

e.preventDefault();

var oddColor = $("#color-input2").val();



$("tbody tr:nth-child(odd)").css("background-color", oddColor);
$("#color-input2").val("");

});

});