var productLoad = function() {
	if(!ShopCar.isEmpty()) {
		return;
	};
	var carData = ShopCar.getProductList();
	var productList = carData.productList;
	var tbody = document.getElementById("products");
	for(var i in productList) {
		var tr = document.createElement("tr");
		tr.setAttribute("class" , "delete_tr");
		tr.setAttribute("id","tr_"+productList[i].id);
		//复选框
		var td1 = document.createElement("td");
		var lable = document.createElement("label");
		lable.setAttribute("class","c-checkbox");
		var a1 = document.createElement("a")
		a1.setAttribute("href","pro_details.html");
		var img = document.createElement("img");
		a1.appendChild(img)
		img.setAttribute("src","img/" + productList[i].img);
		var input = document.createElement("input");
		input.setAttribute("value",productList[i].id);
		input.setAttribute("type","checkbox")
		input.setAttribute("id","box")
		var span = document.createElement("span");
		lable.appendChild(input);
		lable.appendChild(span);
		td1.appendChild(lable);
		td1.appendChild(a1);
		tr.appendChild(td1);
		
		var td2 = document.createElement("td");
		var a2 = document.createElement("a");
		a2.setAttribute("href","pro_details.html")
		var a2chlid = document.createTextNode(productList[i].name)
		a2.appendChild(a2chlid);
		var span2 = document.createElement("span")
		var size = document.createTextNode(productList[i].size);
		span2.appendChild(size);
		td2.appendChild(a2);
		td2.appendChild(span2);
		tr.appendChild(td2);
		
		var td3 = document.createElement("td");
		var strike = document.createElement("strike");
		var strike_text = document.createTextNode("￥"+productList[i].old_price)
		strike.appendChild(strike_text);
		var p1 = document.createElement("p");
		var span3 = document.createElement("span");
		var mon = document.createTextNode(productList[i].new_price);
		var aa = document.createTextNode("￥")
		span3.setAttribute("id","money");
		span3.appendChild(mon);
		p1.appendChild(aa);
		p1.appendChild(span3);
		var selects = document.createElement("select");
		var option1 = document.createElement("option");
		var option2 = document.createElement("option");
		var option3 = document.createElement("option");
		var option4 = document.createElement("option");
		var optine_text1 = document.createTextNode("我的优惠券");
		var optine_text2 = document.createTextNode("我的优惠券");
		var optine_text3 = document.createTextNode("我的优惠券");
		var optine_text4 = document.createTextNode("我的优惠券");
		option1.appendChild(optine_text1);
		option2.appendChild(optine_text2);
		option3.appendChild(optine_text3);
		option4.appendChild(optine_text4);
		selects.appendChild(option1);
		selects.appendChild(option2);
		selects.appendChild(option3);
		selects.appendChild(option4);
		td3.appendChild(strike);
		td3.appendChild(p1);
		td3.appendChild(selects);
		tr.appendChild(td3);
		
		var td4 = document.createElement("td");
		var div4 = document.createElement("div");
		div4.setAttribute("class","input-group input-in");
		var span_4_1 = document.createElement("span");
		span_4_1.setAttribute("class","input-group-btn");
		var button1 = document.createElement("button");
		button1.setAttribute("class","btn btn-default button-but");
		button1.setAttribute("type","button");
		button1.setAttribute("id","reduce");
		button1.setAttribute("style","outline: none;");
		button1.setAttribute("onclick","reduceProduct("+productList[i].id +")");
		var button1text = document.createTextNode("-");
		button1.appendChild(button1text);
		span_4_1.appendChild(button1);
		div4.appendChild(span_4_1);
		
		var input_4 = document.createElement("input");
		input_4.setAttribute("type","text")
		input_4.setAttribute("class","form-control text-num");
		input_4.setAttribute("value",productList[i].number);
		input_4.setAttribute("id","prd_num");
		input_4.setAttribute("style","outline: none;");
		input_4.setAttribute("onchange","changeProduct("+productList[i].id +")");
		div4.appendChild(input_4);
		
		var span_4_2 = document.createElement("span");
		span_4_2.setAttribute("class","input-group-btn");
		var button2 = document.createElement("button");
		button2.setAttribute("class","btn btn-default button-but");
		button2.setAttribute("type","button");
		button2.setAttribute("id","add");
		button2.setAttribute("style","outline: none;");
		button2.setAttribute("onclick","addProduct("+productList[i].id +")");
		var button1text = document.createTextNode("+");
		button2.appendChild(button1text);
		span_4_2.appendChild(button2);
		div4.appendChild(span_4_2);
		td4.appendChild(div4);
		tr.appendChild(td4)
		
		var td_5 = document.createElement("td");
		var p_5 = document.createElement("p");
		var span_5 = document.createElement("span");
		span_5.setAttribute("class","num_money");
		var span5_text = document.createTextNode(productList[i].new_price);
		var p_5_text = document.createTextNode("￥")
		span_5.appendChild(span5_text)
		p_5.appendChild(p_5_text)
		p_5.appendChild(span_5);
		td_5.appendChild(p_5);
		tr.appendChild(td_5);
		
		var td_6 = document.createElement("td");
		var a_6 = document.createElement("a");
		var a_6text = document.createTextNode("移入我的愿望单")
		a_6.appendChild(a_6text);
		var span_6 = document.createElement("span");
		span_6.setAttribute("class","delete_self");
		span_6.setAttribute("onclick","delProduct("+productList[i].id +")");
		var span_6text = document.createTextNode("删除");
		span_6.appendChild(span_6text);
		td_6.appendChild(a_6);
		td_6.appendChild(span_6)
		tr.appendChild(td_6)
		
		tbody.appendChild(tr);
	}
}
productLoad();
