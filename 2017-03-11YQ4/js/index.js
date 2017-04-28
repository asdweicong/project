$(function(){
	/*var winW = $(document).width();
	var constant = winW/640;
	$("body,html").css({"font-size":constant*100+"%"})*/
	var winW = $(window).width();
	var a = /*Math.floor();*/winW/7.5;
	$("body,html").css({"font-size":a})
	$(window).resize(function(){
		var winW = $(document).width();
		var a = Math.floor(winW/7.5);
		$("body,html").css({"font-size":a})
	})
	$(".header .title").css({"left":"1.55rem","right":"1.55rem"})
})


