/******************************************首页banner轮播效果*********************/

(function(){
	$(document).ready(function(){
		
		$("a").attr("data-ajax","false");
		$(".ui-loader").remove();
		//alert(123456);
		$(window).resize(function(){
			var winW = $(window).innerWidth();
			$(".index_banner .bd li").css({"width":winW+"px"});
		})
		/*首页轮播图滑动效果*/
		var len = $(".index_banner .bd li").length;
		var winW = $(window).innerWidth();
		var list_dot = 0;//用于设置圆点的切换
		var bool = true;
		var num = 0;//用于菜单的效果，偶数隐藏 。奇数显示。
		$(".index_banner .bd ul").css({"width":len*winW+"px"});
		$(".index_banner .bd li").css({"width":winW+"px"});
		$(".index_banner .bd li").on("swipeleft",function(){
			alert(123465679);
			if(bool){
				
				bool=false;
				$(".index_banner .bd ul").animate({marginLeft:-winW+"px"},function(){
					$(".index_banner .bd ul li").eq(0).appendTo(".index_banner .bd ul");
					$(".index_banner .bd ul").css({"margin-left":0});
					bool=true;
				});
			
				list_dot++;
				if(list_dot > len-1){
					list_dot = 0;
				}
				$(".index_banner .hd dl dd").removeClass("on").eq(list_dot).addClass("on");
			}
		})	
		$(".index_banner .bd li").on("swiperight",function(){
			alert(12300);
			if(bool){
				
				bool=false;
				$(".index_banner .bd ul li").eq(len-1).prependTo(".index_banner .bd ul");
				$(".index_banner .bd ul").css({"margin-left":-winW+"px"}).animate({marginLeft:0},function(){bool=true;});
			
				list_dot--;
				if(list_dot < 0){
					list_dot = len-1;
				}
				$(".index_banner .hd dl dd").removeClass("on").eq(list_dot).addClass("on");
			}
		})
		setInterval(function(){
			if(bool){
				bool=false;
				$(".index_banner .bd ul").animate({marginLeft:-winW+"px"},function(){
					$(".index_banner .bd ul li").eq(0).appendTo(".index_banner .bd ul");
					$(".index_banner .bd ul").css({"margin-left":0});
					bool=true;
				});
				
			list_dot++;
			if(list_dot > len-1){
				list_dot = 0;
			}
			$(".index_banner .hd dl dd").removeClass("on").eq(list_dot).addClass("on");
				
			}		
		},2500)
	//	console.log($('.header .nav ul li dl').outerWidth(true))
		$('.header .nav ul').css('marginLeft',"-100%")
		$(".navbar img").click(function(){
//			var b = 640;//定义一个常量 用于设置内容的左边距
			num ++;
			var sum = $('.header .nav ul').css('marginLeft')
			console.log(sum)
			if($(this).hasClass('active')){
				$('.content').animate({marginLeft:sum},700)
				$('.header .nav ul').animate({marginLeft:"-100%"},700)
				$(this).removeClass('active')
			}else{
				$('.header .nav ul').height($(".content").innerHeight())
				$('.header .nav ul').animate({marginLeft:"0"},700)
				$('.content').animate({marginLeft:-parseFloat(sum)+"px"},700)
				$(this).addClass('active')
			}
//  		if(num%2 !=0){
//  			$(".header .nav ul li dl").css({"height":a + "px"});
//  			$(".header .nav dl").fadeIn(500);
//				$(".content").css({"margin-left":b + "px"});
//				bool = false;
//  		}else if(num%2 == 0){
//  			$(".content").css({"margin-left":0});
//  			$(".header .nav dl").fadeOut(500);
//  			//slideUp() 和 slideDown() 
//  		}
    		
		});
	});
})()

