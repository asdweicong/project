$('#address_on li').click(function(){
	$('#address_on li').removeClass('on')
	$(this).addClass('on')
})
document.getElementById("select_box").onclick = function() {
	if(document.getElementById("select_none").style.display == "block"){
		document.getElementById("select_none").style.display = "none"
	}else{
		document.getElementById("select_none").style.display = "block"
	}
}
var a,b,c
var shengshe = function(){
	a = $("#sheng").find ("option:selected").text()
	document.getElementById("asd").innerHTML = a
}
var cityci = function(){
	b = $("#city").find("option:selected").text()
	document.getElementById("asd").innerHTML = a + b
}
var xianxi = function(){
	c = $("#xian").find("option:selected").text()
	document.getElementById("asd").innerHTML = a + b + c
}

var user_text = []
var create_table = function(asd,phone,mobie_hone,detailed_address,postcode,userName){
	var td1 = "<td>"+userName+"</td>"
	var td2 = "<td>"+asd+"</td>"
	var td3 = "<td>"+detailed_address+ "</td>"
	var td4 = "<td>" +postcode+ "</td>"
	var td5 = "<td>" +phone+ "</td>"
	var td6 = "<td><a href=''>修改</a><span class='span'>删除</span><span>设为默认地址</span></td>"
	var tr = "<tr>"+td1+""+td2+""+td3+""+td4+""+td5+""+td6+"</tr>"
	$("table tbody").append(tr)
}

var p_true = 0,
	mobie_true = 0
var phone_phone = function(v){
	var reg = /1[3|5|7|8][0-9]{9}$/
	if(reg.test(v)){
		$("#phone_phone").css("display","none")
		p_true = 1 
	}else{
		$("#phone_phone").css("display","block")
		p_true = 0
	}
}
var code_text = function(v){	
	if(v.length != 6){
		document.getElementById('postcode_code').style.display = "block"
	}
}
var mobie_ho = function(v){
	var reg = /^8{0,8}&/
	var regs =/\d{11}|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$/ 
	if(regs.test(v)){
		$('#mobie_ho').css("display","none")
		mobie_true = 1
	}else{
		$('#mobie_ho').css("display","block")
		mobie_true = 0
	}
}
var baocun = function(){
	var asd = document.getElementById("asd").innerHTML
	var phone = document.getElementById("phone").value
	var mobie_hone = document.getElementById("mobie_hone").value
	var detailed_address = document.getElementById("detailed_address").value
	var postcode = document.getElementById("postcode").value
	var userName = document.getElementById("userName").value
	if(p_true == 1 && mobie_true == 1 && asd.length>6 && detailed_address != null && postcode.length == 6 &&userName != null){
		create_table(asd,phone,mobie_hone,detailed_address,postcode,userName)
		storage(asd,phone,mobie_hone,detailed_address,postcode,userName)
	}
	if(regis != null){
		for(var i=0;i<regis.length;i++){
			user_text.push(regis[i])
		}
	}
	show()
}

function storage(asd,phone,mobie_hone,detailed_address,postcode,userName){
	var content = {
		asdd:asd,
		phonee:phone,
		mobie_honee:mobie_hone,
		detailed_addresss:detailed_address,
		postcodee:postcode,
		userNamee:userName
	}
	user_text.push(content)
	localStorage.setItem("address",JSON.stringify(user_text));
}

var show = function(){
	var regis = JSON.parse(localStorage.getItem('address'));
	console.log(regis)
	if(regis != null){
		for(var i=0;i<regis.length;i++){
			create_table(regis[i].asdd,regis[i].phonee,regis[i].mobie_honee,regis[i].detailed_addresss,regis[i].postcodee,regis[i].userNamee)
		}
	}
	var span = document.querySelectorAll("span.span")
	var trs = document.querySelectorAll("table tbody tr")
	for(var i=0;i<span.length;i++){
		span[i].index = i
		trs[i].index = i
		span[i].onclick = function(){
			var address = []
			trs[this.index].remove()
			var x = this.index
			console.log(x)
			regis.splice(x,1)
			address = JSON.stringify(regis); //将JSON对象转化成字符串
			localStorage.setItem("address", address) //用localStorage保存转化好的的字符串
		}
	}
}
show()

$("#table tr td:nth-child(6) span:nth-child(3)").click(function(){
//	$("#table tr td:nth-child(6) span:nth-child(3)").css("display","none")
	$("#table tr td:nth-child(6) span:nth-child(3)").css("opacity","0")
	$(this).css("display","inline-block")
	$(this).css("opacity","1")
})
$("#table tr td:nth-child(6) span:nth-child(3)").hover(function(){
	$(this).css("display","inline-block")
	$(this).css("opacity","1")
})
