/*When the user submits the form, the todo should be added to the DOM 
(you can use li)

When the user checks the box next to the todo, it should add a class 
of "completed" which strikes through the todo (check out the text-decoration 
property in CSS)

When the user unchecks a box, the class of completed should be removed

When the user clicks the remove button, the todo should be removed 
from the DOM. Make sure that the correct todo is removed from the DOM 
(if you remove the 5th todo, make sure that one is deleted) */

$(document).ready(function () {

	$("#todo").on("submit", function (e) {

		e.preventDefault();

		var newItem = $("#add").val();

		$(".main-list").append("<li class = 'items'>" + newItem + "<input id='check' type='checkbox'><button>Remove</button></li>"); 
		$("#add").val("");
	});
	
	$('body').on("click", "input[type=checkbox]", function(){  

		$(this).parent().toggleClass("strikeout");

		
	});

	$('body').on("click", "button", function () {

		$(this).parent().remove("li");
	});

	
});
