//Alex Padilla 1.25.17
//Created this to shade element when you hover on them

(function (global){

	var Shadr = function(){

	}

	global.Shadr = Shadr;
})(window);

$(document).ready(function(){

	var zoomrElements = $(".zoomr");

	console.log(zoomrElements);
	zoomrElements.hover(function(){
		var shadr = $(this).find(".shadr");
		var description = $(this).find(".description")
		console.log(description)
		shadr.fadeToggle("fast", "linear");
		description.toggle("fast", "linear");

	})

})






