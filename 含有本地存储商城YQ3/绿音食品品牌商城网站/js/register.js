$(function() {
	$("[data-toggle='popover']").popover();
});
var regis = JSON.parse(localStorage.getItem('user_text'));
var user_true = 0 ;
var pas_true = 0 ;
var pass_true = 0 ;
var phone_true = 0 ;

var checkuserName = function(v){
	if(regis != null){
		for(var i=0;i<regis.length;i++){
			if(v == regis[i].userName){
				document.getElementById("user_text").style.display = "block"
				user_true = 0
			}else{
				document.getElementById("user_text").style.display = "none"
				user_true = 1
			}
		}
	}
}
var checkPassword = function(v) {
	var reg = /^[a-z0-9_-]{6,12}$/;
	if(reg.test(v)) {
		document.getElementById("passwordTip").style.display = "none"
		pas_true = 1
	} else {
		document.getElementById("passwordTip").style.display = "block"
		pas_true = 0
	}
}
var checkPassword_p = function(v) {
	var a = document.getElementById('password').value
	if(v == a) {
		document.getElementById("passwordTip_p").style.display = "none"
		pass_true = 1
	} else {
		document.getElementById("passwordTip_p").style.display = "block"
		pass_true = 0
	}
}
var Phone = function(v) {
	var reg = /1[3|5|7|8][0-9]{9}$/
	if(reg.test(v)) {
		document.getElementById("phoneTip").style.display = "none"
		phone_true = 1
	} else {
		document.getElementById("phoneTip").style.display = "block"
		phone_true = 0
	}
	if(regis != null){
		for(var i=0;i<regis.length;i++){
			if(v == regis[i].phone){
				document.getElementById("phone_text").style.display = "block"
				phone_true = 0
			}else{
				document.getElementById("phone_text").style.display = "none"
				phone_true = 1
			}
		}
	}
}
$("#codeTip").css("display","none")
var checkcode = function(v){
	if(v == code_text){
		c_code = 1
		$("#codeTip").css("display","none")
	}else{
		$("#codeTip").css("display","block")
		c_code = 0
	}
}
var user_text = []
if(regis != null){
	for(var i=0;i<regis.length;i++){
		user_text.push(regis[i])
	}
}
document.getElementById('resize').onclick = function() {
	var user = document.getElementById('userName').value
	var pas = document.getElementById('password').value
	var pass = document.getElementById('password_p').value
	var phone = document.getElementById('phone').value
	var code = document.getElementById('code').value
	var bool = document.getElementById('checkedd').checked
	if(bool == true){
		document.getElementById('checked_box').style.display = 'none'
	}else{
		document.getElementById('checked_box').style.display = 'block'
	}
	storage(user,pas,pass,phone)
	if(user_true==1 && pas_true == 1 && pass_true == 1 && phone_true == 1 && c_code == 1 && bool == true){
		return window.location.href = "login.html"
	}
}

var show = function() {
	var str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	var n = 4;
	code_text = ""
	for(var i = 0; i < n; i++) {
		var rand = Math.floor(Math.random() * str.length);
		code_text += str.charAt(rand);
	}
	$(".code span").text(code_text)
}
show()
$(".code span").on("click", function() {
	show()
})
function storage(name,password,password_ed,phone){
	var content = {
		userName:name,
		password:password,
		password_ed:password_ed,
		phone:phone,
	}
	user_text.push(content)
	localStorage.setItem("user_text",JSON.stringify(user_text));
}
