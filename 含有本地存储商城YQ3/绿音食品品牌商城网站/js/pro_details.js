$(".comment .title span").eq(0).addClass("span")
	$(".comment .title span").click(function(){
		$(".comment .title span").removeClass("span")
		$(this).addClass("span")
		if($(this).index() == 0){
			$(".product_details").css("display","block")
			$(".comment_details").css("display","none")
		}else{
			$(".product_details").css("display","none")
			$(".comment_details").css("display","block")
		}
	})
	$(".pro_intro div:nth-child(7) span").eq(0).css("border","1px solid red").css("color","red")
	$(".pro_intro div:nth-child(7) span").click(function(){
		$(".pro_intro div:nth-child(7) span").css("border","1px solid #666").css("color","black")
		$(".pro_intro div:nth-child(7) span").eq($(this).index()).css("border","1px solid red").css("color","red")
	})

$(".choose dl dd img").click(function(){
	var src = $(this).attr("src")
	$(".choose ul li img").attr("src",src)
})
var show = function() {
	$("#box").html("<img />");
	$("#box").css({
		"display": "none"
	})
	$("#smll_box").mouseover(function() {
		var src = $(".choose ul li img").attr("src")
		$("#box img").attr("src", src).css({
			"position": "absolute"
		})
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
			/*var percentX=box1Left / ($("#smll_box").innerWidth()-$("#box1").innerWidth());
			var percentY=box1Top / ($("#smll_box").innerHeight()-$("#box1").innerHeight());
			$("#box img").css({left:-percentX * ($("#box img").innerWidth() - $("#box").innerWidth()) + "px",top:-percentY * ($("#box img").innerHeight() - $("#box").innerHeight()) + "px"})*/

		/*$("#box img").css({left:-box1Left*3+"px",top:-box1Top*3+"px"})*/
		var percent = $("#box img").innerWidth() / $("#smll_box img").innerWidth();
		var box1W = $("#box1").innerWidth();
		var box1H = $("#box1").innerHeight();
		$("#box").css({
			"width": percent * box1W + "px",
			"height": percent * box1H + "px"
		})
		$("#box img").css({
			left: -box1Left * percent + "px",
			top: -box1Top * percent + "px"
		})
	})
}
show()
var pro_num = document.getElementById("prd_num").value
pro_num = parseInt(pro_num)

document.getElementById("prd_num").onchange = function() {
	if(/^[1-9][0-9]*$/.test(this.value)) {
		if(this.value < 99) {
			document.getElementById("prd_num").value = this.value
		}
	} else {
		document.getElementById("prd_num").value = 1
	}
//	addShopCar()
}
document.getElementById("reduce").onclick = function() {
	var pro_num = document.getElementById("prd_num").value
	pro_num = parseInt(pro_num)
	if(pro_num > 1) {
		pro_num--;
		document.getElementById("prd_num").value = pro_num
	}
//	addShopCar()
}
document.getElementById("add").onclick = function() {
		var pro_num = document.getElementById("prd_num").value
		pro_num = parseInt(pro_num)
		if(pro_num < 99) {
			pro_num++;
			document.getElementById("prd_num").value = pro_num
		}
//		addShopCar()
	}
	//添加购物车操作
var addShopCar = function() {
	var num = document.getElementById("prd_num").value;
	console.log(num)
	//随机创建需要购买的商品对象
	var i = parseInt(Math.random() * (1 - 6) + 6);
	var product = products[i];
//	console.log(product)
	product.number = parseInt(num);
	//添加商品到购物车
	ShopCar.addProduct(product);
}