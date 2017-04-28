$(function () {
	$('.passwd dd input').keyup(function (e) {
		/* 获取到密码输入框
		 * 按下键盘的时候触发函数
		 */
		var index=$(this).parent().index();
		//获取的密码输入框的下标，并且继承上一次的下标
		index++;
		//下标加一
		$('.passwd dd').eq(index).find("input").focus();
		//获取到dd ，并且把 index ，作为dd的下标 ，并且聚焦
		var bool=true;
		//定义一个布尔值
		
		if(e.keyCode==8)
		{
			var index=$(this).parent().index();
			//$(this).val().length=0;
			$(this).value = null;
			$(this).blur();
			$('.passwd dd').eq(index-1).find("input").focus();
			for(var i=0;i<$('.passwd dd').length;i++){
				if(!$('.passwd dd').eq(i).find("input").val()){
					bool=true;
				}
				else{
					bool=false;
					break;
				}
			}
			if(bool){
				$('.passwd dd').eq(0).find("input").focus();
			}
		}
	})
})
