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
})
