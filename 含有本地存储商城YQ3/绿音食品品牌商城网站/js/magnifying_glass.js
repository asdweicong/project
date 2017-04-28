$("#box").html("<img />");
$("#box").css({
	"display": "none"
})
$("#box img").attr("src", "img/com_details/big_img01.png").css({
	"position": "absolute"
})
$("#smll_box").mouseover(function() {
	$("#box").stop(true, true).fadeIn(300)
	$("#box1").stop(true, true).fadeIn(300)
})
$("#smll_box").mouseout(function() {
	$("#box").stop(true, true).fadeOut(300)
	$("#box1").stop(true, true).fadeOut(300)
})
$("#smll_box").mousemove(function(e) {
	var imgX = e.pageX;
	var imgY = e.pageY;
	var smllLeft = $("#smll_box").offset().left;
	var smllTop = $("#smll_box").offset().top;
	var box1Left = imgX - smllLeft - $("#box1").innerWidth() / 2
	var box1Top = imgY - smllTop - $("#box1").innerHeight() / 2
	if(box1Left < 0) {
		box1Left = 0;
	} else if(box1Left > ($("#smll_box").innerWidth() - $("#box1").innerWidth())) {
		box1Left = $("#smll_box").innerWidth() - $("#box1").innerWidth();
	}
	if(box1Top < 0) {
		box1Top = 0;
	} else if(box1Top > ($("#smll_box").innerHeight() - $("#box1").innerHeight())) {
		box1Top = $("#smll_box").innerHeight() - $("#box1").innerHeight()
	}
	$("#box1").css({
		left: box1Left + "px",
		top: box1Top + "px"
	})
	var percent = $("#box img").innerWidth() / $("#smll_box img").innerWidth();
	var box1W = $("#box1").innerWidth();
	var box1H = $("#box1").innerHeight();
	$("#box").css({
		"width": 300 + "px",
		"height": 300 + "px"
	})
	$("#box img").css({
		left: -box1Left * percent + "px",
		top: -box1Top * percent + "px"
	})
})