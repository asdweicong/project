 $(function(){
 	$("[data-toggle='popover']").popover();
});
 	
	 	 var bool = false;//定义一个布尔值为假
	 	 var click = $("#login").click(function(){
	 	 	var bool = true;//点击登录按钮触发布尔值为真
	 	 })
	 	
		var checkuserName = function(v){
			
			var reg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
			if(reg.test(v)){
				 $('#userNameTip').popover('hide');//如果输入的值符合要求，提示语隐藏
			}else{
				 $('#userNameTip').popover('show');//如果输入的值不符合要求，提示语显示出来
			}
		}
		var checkPassword = function(v){
			var reg = /^[a-z0-9_-]{6,12}$/;
			if(reg.test(v)){
				 $('#passwordTip').popover('hide');//如果输入的值符合要求，提示语隐藏
			}else{
				 $('#passwordTip').popover('show');//如果输入的值不符合要求，提示语显示出来
			}
		}
		
		//检查表单元素是否有填写，有填写就可以提交表单
		//返回true表示提交表单，false不提交
		var checkLogin = function(){
			var userNamev = document.getElementById("userName").value;
			var passwordv = document.getElementById("password").value;
			
			 if(userNamev == '' && passwordv == ''){
			 	return false;
			 }
			//获取复选框，checked表示是否勾选，勾选返回true，否则返回false
			var isAutoLogin = document.getElementById("isAutoLogin").checked;
			setCookie(userNamev,passwordv,isAutoLogin);//调用setCookie函数
			return true;
			
		}
		
		//设置cookie
		var setCookie = function(userName,password,isAutoLogin){
			if(isAutoLogin){
				var now= new Date();//获取当前时间；
				now.setMinutes(now.getMinutes()+10);//设置过期时间
				var exp = "expires="+ now.toUTCString();//拼装过期时间
				document.cookie="userName="+userName+";"+exp+";path/";//收取username
				document.cookie="password="+password+";"+exp+";path/";//收取password
				document.cookie="isAutoLogin=true;"+exp+";path/";//收取点击了记住我
			}else{
				document.cookie="userName=";//重置为空
				document.cookie="password=";//重置为空
				document.cookie="isAutoLogin=";//重置为空
			}
		}
		
		//获取cookie
		
		var loadCookie = function(){
			if(document.cookie.length > 0){//判断cookie的长度是否为空
				var cookies = document.cookie.split(";");//分离数据
//				for(var i=0;i<cookies.length;i++){
//					alert(cookies[i]);
//				}
				var userNames = cookies[0].split("=");//获取收取到username=value
				var passwords = cookies[1].split("=");//获取收取到password=value
				var isAutoLogin = cookies[2].split("=");//获取收取到是否点击了记住我isAutoLogin=value
				
				document.getElementById("userName").value=userNames[1];//获取value
				document.getElementById("password").value=passwords[1];//获取value
				document.getElementById("isAutoLogin").checked=isAutoLogin[1];//获取value
			}
		}
