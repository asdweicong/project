$(function(){	
			var current = 0;
			//定义记录当前定时器的索引号
			var cursor  = 0;
			//获取所有的图片切换圆点
		 	var list = $("#ul_on > li");  //获取当前5个圆点的li元素
			//遍历所有的图片切换圆点
			list.each(function(index,element){
				$(this).mouseover(function(){
						//为当前图片切换圆点的li元素添加class
						$(this).addClass("on");
						list.not(this).removeClass("on");
						//实现图片轮换效果，获取banner图片的li元素，取出相应下标的banner图进行显示
						$("#ul_banner > li").eq(index).fadeIn(200);
						//把其他的图片都进行隐藏(淡出效果)
						$("#ul_banner >li").not($("#ul_banner >li").eq(index)).fadeOut(300);
						//设置当前圆点的索引号
						cursor = index;
						current = index;
				})		
			})
			/****实现自动轮播banner图****/
			//定时器setInterval(a,b):执行a函数代码，可以进行具体的定时设置，b参数是设置时间，隔多久时间再进行执行a函数
			setInterval(function(){
				//第三步:当cursor>=5时，重置cursor
				if(cursor >=list.length){
					//重置cursor值，让它从第一张开始显示
					cursor = 0;
				}	
				//通过cursor计数器，设置对应的li元素触发它的onmouseover事件
				//第一步:当cursor=4时，即最后一张图片
				list.eq(cursor).trigger("mouseover");
				//每次执行该函数时，cursor加一，触发下一张图片的mouseover事件
				//alert(cursor);
				//cursor = cursor + 1;
				//第二步:cursor自增后，cursor=5
				cursor++;
				
				},2000)		
			/****实现左右箭头，完成图片切换****/
			$(".prev").click(function(){
				if(current <0){
					current = list.length;	//list.length == 5
				}			
				//当用户点击上一张箭头时，希望看到的是上一张图片，而不是当前图片
				current--;
				//获取当前索引号对应的图片li元素，再触发它的onmouseover事件
				list.eq(current).trigger("mouseover");
			})	
			$(".next").click(function(){
				if(current>=list.length){
					current = -1;	
				}
				//当用户点击下一张箭头时，希望看到的是下一张图片，而不是当前图片
				current++;
				//alert(current);
				list.eq(current).trigger("mouseover");	
			})
		})