$(document).ready(function() {
	$.getScript("js/sheng.js", function(respons, status, xhr) {
		console.log(status)
		if(status == "success") {
			for(var i = 0; i < sheng.length; i++) {
				$("<option/>").val(sheng[i].ProID).text(sheng[i].name).appendTo("#sheng");
			}
		}
	})
	$("#sheng").change(function() {
		var val = $(this).val();
		$.getScript("js/city.js", function(responsd, status, xhr) {
			$("#city >option:gt(0)").remove();
			if(status == "success") {
				var Array = [];
				for(var i = 0; i < city.length; i++) {
					if(city[i].ProID == val) {
						Array.push(city[i]);
					}
				}
				for(var i = 0; i < Array.length; i++) {
					$("<option/>").val(Array[i].CityID).text(Array[i].name).appendTo("#city");
				}
			}
		})
	})
	$("#city").change(function() {
		var val = $(this).val();
		console.log(val)
		$.getScript("js/xian.js", function(responsd, status, xhr) {
			$("#xian >option:gt(0)").remove();
			if(status == "success") {
				var Array = [];
				for(var i = 0; i < xian.length; i++) {
					if(xian[i].CityID == val) {
						Array.push(xian[i]);
					}
				}
				for(var i = 0; i < Array.length; i++) {
					$("<option/>").val(Array[i].Id).text(Array[i].DisName).appendTo("#xian");
				}
			}
		})
	})
})