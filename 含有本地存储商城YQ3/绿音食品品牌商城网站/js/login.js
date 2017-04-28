var a_user,b_pass,c_code
var user = document.getElementById("user")
var password = document.getElementById("password")
var regis = JSON.parse(localStorage.getItem('user_text'));
var checkPassword = function(v) {
	if(regis != null){
		for(var i=0;i<regis.length;i++){
			if(v == regis[i].password && user.value == regis[i].userName){
				document.getElementById("passwordTip").style.display = "none"
				b_pass = 1
			}else{
				document.getElementById("passwordTip").style.display = "block"
				b_pass = 0
			}
		}
	}
}
var checkuserName = function(v){
	if(regis != null){
		for(var i=0;i<regis.length;i++){
			if(v == regis[i].userName){
				login = {
					name:v
				}
				localStorage.setItem("loginName",JSON.stringify(login));
				document.getElementById("user_text").style.display = "none"
				a_user = 1
			}else{
				document.getElementById("user_text").style.display = "block"
				a_user = 0
			}
		}
	}
}
var code_text = "";
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
document.getElementById('resize').onclick = function() {
		var pas = document.getElementById('password').value
		var user = document.getElementById('user').value
		var code = document.getElementById('code').value
		if((pas == "") || (user == "") || code == "") {
			return false;
		}else if(a_user == 1 && b_pass == 1 && c_code==1){
			return window.location.href = "user.html"
		}
	}
	//		var code_text = Math.floor(Math.random()*9000)+1000;
$(".code span").on("click", function() {
	show()
})
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


