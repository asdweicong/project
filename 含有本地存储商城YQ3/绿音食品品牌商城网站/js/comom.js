var obj = localStorage.getItem("loginName");
var register = JSON.parse(obj);
if(register != null){
	var use = document.querySelectorAll(".header .top .mg .left")
	use[0].innerHTML = "尊敬的" + register.name +"用户"+ "<a href='login.html' onclick='tuichu()' style='margin:0 15px'>安全退出</a>"
	var tuichu = function(){
		localStorage.setItem("loginName",null)
	}
}
var addShopCar = function() {
	var i = parseInt(Math.random() * (1 - 6) + 6);
	var product = products[i];
//	console.log(product)
	ShopCar.addProduct(product);
}