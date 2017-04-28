$(function(){
	$('.form dl dd input').keyup(function(e){
		var index = $(this).parent().index()
		index++;
		$('.form dl dd').eq(index).find('input').focus()
		if(e.keyCode == 8){
			var index = $(this).parent().index()
			$(this).val().length = null
			$(this).blur
			$('.form dl dd').eq(index-1).find('input').focus()
			if(!index==1){
				$('.form dl dd').eq(0).find('input').focus()
			}
		}
	})
	$("#confirm_payment").click(function(){
		var a = $('.form dl dd input')
		for(var i=0;i<a.length;i++){
			var b = a[i].value
			if(b.length == 0){
				$('.popup_window2').css("display","block").css("z-index","100")
				$('.popup_window1').css("display","none")
				$(".mg").css("z-index","-1")
				$(".warpe").fadeIn(10);
			}else{
				$('.popup_window1').css("display","block").css("z-index","100")
				$('.popup_window2').css("display","none")
				$(".mg").css("z-index","-1")	
				$(".warpe").fadeIn(10);
			}
			
		}
	})
	$(".band ul li").click(function(){
		$(".band ul li").removeClass("on")
		$(this).addClass("on")
	})
})
$("#img001").click(function(){
	$(".warpe").fadeOut(10);
	$('.popup_window1').css("display","none")
})
$("#img002").click(function(){
	$(".warpe").fadeOut(10);
	$('.popup_window2').css("display","none")
})
