var reduces = document.querySelectorAll("#reduce")
var prd_nums = document.querySelectorAll("#prd_num")
var adds = document.querySelectorAll("#add")
var moneys = document.querySelectorAll('#money')
var num_moneys = document.querySelectorAll(".num_money")
var checked_boxs = document.querySelectorAll("table tbody tr td:nth-child(1) input")
var checked_All_00 = document.getElementById('checked_All_00')
var checked_All_01 = document.getElementById('checked_All_01')
var delete_selfs = document.querySelectorAll('.delete_self')
var delete_trs = document.querySelectorAll(".delete_tr")
var longs = reduces.length
var SHOP_CAR = localStorage.getItem("SHOP_CAR","productList")
console.log(JSON.stringify(SHOP_CAR).length)
for(var i = 0; i < longs; i++) {
	delete_selfs[i].index = i
	reduces[i].index = i
	adds[i].index = i
	prd_nums[i].index = i
	checked_boxs[i].index = i
		//单个删除
	 var delProduct = function(id){
	 	if(confirm("亲，您确定要狠心删除这个商品吗?")){
	 		var tr = document.getElementById("tr_"+id);
	 		tr.remove();
	 		longs--
	 		var carData = ShopCar.delProductById(id);
	 		console.log(id)
	 	}
	 	show()
	 }
	//排列删除操作
	
	 var delProductList = function(){
	 	var boxs = document.querySelectorAll("#box");
	 	var pIdList = [];
	 	for(var i =0;i<boxs.length;i++){
	 		if(boxs[i].checked){
	 			pIdList.push(boxs[i].value);
	 		}
	 	}
	 	if(pIdList.length<=0){
	 		alert("亲,请选择需要删除的商品!");
	 		return;
	 	}
	 	if(confirm("亲，您确定要狠心选中商品吗?")){
		 	for (var i = 0; i < pIdList.length; i++) {
		 		var tr = document.getElementById("tr_"+pIdList[i]);
	 			tr.remove();
		 		var carData = ShopCar.delProductById(pIdList[i]);
		 	}
		 	document.getElementById("all_num").innerHTML = 0
			document.getElementById("all_money").innerHTML = 0 + ".00"
			document.getElementById("All_product_num").innerHTML = 0
		 	show()
	 	}
	 }

		//減少
	reduces[i].onclick = function() {
//			var a = $("tbody tr").eq(this.index).find("#prd_num").val()
//			alert(a)
			var nums = prd_nums[this.index].value
			var mons = moneys[this.index].innerHTML
			if(nums > 1) {
				nums--
			}
			prd_nums[this.index].value = nums
			var sums = +parseInt(nums) * parseInt(mons)
			num_moneys[this.index].innerHTML = sums
//			var carData = ShopCar.updateProduct(id,nums)
			
			show()
			show03()
		}
//	alert(objs.length)
		//增加
	adds[i].onclick = function() {
			var nums = prd_nums[this.index].value
			var mons = moneys[this.index].innerHTML
			if(nums < 99) {
				nums++
			}
			prd_nums[this.index].value = nums
			var sums = +parseInt(nums) * parseInt(mons)
			num_moneys[this.index].innerHTML = sums
//			var carData = ShopCar.updateProduct(id,nums)
			show()
			show03()
		}
		//值得改變
	prd_nums[i].onchange = function() {
			var nums = prd_nums[this.index].value
			var mons = moneys[this.index].innerHTML
			if(/^[1-9]+[0-9]*$/.test(nums)) {
				if(nums > 99) {
					nums = 99;
				}
				prd_nums[this.index].value = nums
				var sums = +parseInt(nums) * parseInt(mons)
				num_moneys[this.index].innerHTML = sums
			} else {
				prd_nums[this.index].value = 1
				num_moneys[this.index].innerHTML = moneys[this.index].innerHTML
			}
			show()
			show03()
		}
		//单选
	var checked_long = 0
	checked_boxs[i].onclick = function() {
		var checked_boxs = document.querySelectorAll("table tbody tr td:nth-child(1) input")
		if(checked_boxs[this.index].checked == true) {
			checked_long++
			if(checked_long == longs) {
				checked_All_00.checked = true
				checked_All_01.checked = true
			}
		} else {
			checked_long--
			checked_All_00.checked = false
			checked_All_01.checked = false
		}
		show()
	}
}
//全选一
checked_All_00.onclick = function() {
		var checked_boxs = document.querySelectorAll("table tbody tr td:nth-child(1) input")
		if(this.checked == true) {
			checked_All_01.checked = true
			for(var q = 0; q < longs; q++) {
				console.log(longs)
				checked_boxs[q].checked = true
			}
		} else {
			checked_All_01.checked = false
			for(var q = 0; q < longs; q++) {
				checked_boxs[q].checked = false
			}
		}
		show()
	}
	//全选二
checked_All_01.onclick = function() {
		var checked_boxs = document.querySelectorAll("table tbody tr td:nth-child(1) input")
		if(this.checked == true) {
			checked_All_00.checked = true
			for(var q = 0; q < longs; q++) {
				checked_boxs[q].checked = true
			}
		} else {
			checked_All_00.checked = false
			for(var q = 0; q < longs; q++) {
				checked_boxs[q].checked = false
			}
		}
		show()
	}
	//计算数量 和 总价
var show = function() {
	var all_money = 0
	var all_num = 0
	var prd_nums = document.querySelectorAll("#prd_num")
	var num_moneys = document.querySelectorAll(".num_money")
	var checked_boxs = document.querySelectorAll("table tbody tr td:nth-child(1) input")
	for(var i = 0; i < longs; i++) {
		num_moneys[i].innerHTML = parseInt(moneys[i].innerHTML) * parseInt(prd_nums[i].value)
		if(checked_boxs[i].checked == true) {
			all_num = all_num + parseInt(prd_nums[i].value)
			all_money = all_money + parseInt(num_moneys[i].innerHTML)
		}
	}
	document.getElementById("all_num").innerHTML = all_num
	document.getElementById("all_money").innerHTML = all_money + ".00"
	document.getElementById("All_product_num").innerHTML = longs
}
show()

var show03 = function(){
	if(localStorage.getItem("SHOP_CAR") != null && localStorage.getItem("SHOP_CAR")!= undefined){
		var ShopCar =localStorage.getItem("SHOP_CAR")
		ShopCar = JSON.parse(ShopCar)
		for(var q = 0; q<$("tbody tr").length;q++){
			console.log(ShopCar.productList[q].number)
			console.log($("tbody tr").eq(q).find("#prd_num").val())
			if($("tbody tr").eq(q).find("#prd_num").val() > 99){
				$("tbody tr").eq(q).find("#prd_num").val(99)
			}
			ShopCar.productList[q].number = parseInt($("tbody tr").eq(q).find("#prd_num").val())
		}
		localStorage.setItem("SHOP_CAR",JSON.stringify(ShopCar))
	}
}
show03()