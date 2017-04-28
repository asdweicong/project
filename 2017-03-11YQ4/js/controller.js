angular.module('myApp',['ionic'])
.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
		$stateProvider
//		.state('app', {
//				url: '/app',
//				abstract: true,
//				templateUrl: 'templates/tabs.html',
//			})
			.state('guide',{
				templateUrl:'./template/guide.html',
				controller:"guideCrl"
			})
			.state('home', {
				templateUrl:'./template/home.html',
				controller:"homeController"
			})
			.state('car', {
				cache:false,
				templateUrl:'./template/car.html',
				controller:'carController'
			})
			.state('login', {
				templateUrl:'template/login.html',
				controller:"loginController"
			})
			.state('my_order', {
				templateUrl:'template/my_order.html',
				controller:'myoderController'
			})
			.state('order', {
				templateUrl: 'template/order.html',
				controller: 'orderController'
			})
			.state('pro_categories', {
				templateUrl: 'template/pro_categories.html',
				controller: 'pro_cateController'
			})
			.state('pr_detail', {
//				url:'pr_details',
				templateUrl: 'template/pro_detail.html',
				controller: 'pro_detailController'
			})
			.state('pro_list', {
				templateUrl: 'template/pro_list.html',
				controller: 'pro_listController'
			})
			.state('register', {
				templateUrl: 'template/register.html',
				controller: 'registerController'
			})
			.state('search', {
				templateUrl: 'template/search.html',
				controller: 'searchController'
			})
			.state('user', {
				templateUrl: 'template/user.html',
				controller: 'userController'
			})
})
/*************************************
 * stateCrl*
 * ***********************************/
.controller('stateCrl',function($scope,$state,$timeout,$ionicHistory){
	$state.go('guide')
	$scope.back = function(){
		$ionicHistory.goBack()
	}
})
/*************************************
 * guideCrl*
 * ***********************************/
.controller('guideCrl',function($scope,$state,$http,$ionicSlideBoxDelegate){
//	document.getElementsByClassName("footer_text")[0].style.display = "none"
	$scope.changeSlide = function(index){
	 	var num = $ionicSlideBoxDelegate.slidesCount();
	 	var slide_a = document.getElementsByTagName('a');
	 	if(index>=num-1){
	 		$ionicSlideBoxDelegate.enableSlide(false);
	 		slide_a[num-1].style.display="block";
	 	}
	 	var hei = slide_a[num-1].offsetHeight;
	 	slide_a[num-1].style.lineHeight=hei-4+"px" 
	}
	$scope.guideArr = [{"img":"img/guide_1.png"},{"img":"img/guide_2.png"},{"img":"img/guide_3.png"}];
})
/*************************************
 * homeController*
 * ***********************************/
.controller('homeController',function($scope,$timeout,$state){
	$scope.moreBool = true
	$scope.loadMore = function(){
		$timeout(function(){
			angular.element(document.querySelectorAll('.preferential_products')).eq(0).append('<div class="item-divider">没有更多了<div>');
			$scope.moreBool = false;
			angular.element(document.querySelectorAll('.preferential_products')).eq(0).append('<div class="button_img"><a ui-sref="pro_categories"><img src="img/homepage/full_big02.png" /></a></div>');
		},1000)
	}
	$scope.search=function(){
		$timeout(function(){
			document.getElementById("search-input").focus()
		},500)
	}
})
/*************************************
 * searchController*
 * ***********************************/
.controller('searchController',function($scope,$http,$state){
	$http.get("get.json").success(function(data) {
        $scope.search = data.search
 	});
})
/*************************************
 * userController*
 * ***********************************/
.controller('userController',function($scope,$http,$state){
//	document.getElementsByClassName("footer_text")[0].style.display = "block"
})
/*************************************
 * loginController*
 * ***********************************/
.controller('loginController',function($scope,$state){
//	document.getElementsByClassName("footer_text")[0].style.display = "none"
	var number_user = 0
	var phone_true = 0
	var password_true = 0
	$scope.phone_p = function(){
		var phone = document.getElementById("phone").value
		var user_text = JSON.parse(localStorage.getItem("user_text"))
		if(user_text != null){
			for(var i =0 ;i<user_text.length ;i++){
				console.log(user_text[i].phone_p,phone)
				if(user_text[i].phone_p == phone){
					console.log("账号存在")
					number_user = i
					phone_true = 1
				}else{
					alert("该账号不存在")
					console.log("该账号不存在")
				}
			}
		}
	}
	$scope.password_p = function(v){
		var passd = document.getElementById("password").value
		var user_text = JSON.parse(localStorage.getItem("user_text"))
		if(user_text != null){
			for(var i =0 ;i<user_text.length ;i++){
				console.log(user_text[i].password_p)
				console.log(i , number_user)
				if(user_text[number_user].password_p == passd){
					console.log("密码正确")
					password_true = 1
				}else{
					console.log("密码错误")
				}
			}
		}
	}
	$scope.denglu =  function(){
		if(password_true == 1 && phone_true == 1){
			console.log("登录成功")
			$state.go('home')
		}
		if(phone_true == 0){
			alert("该账号不存在")
		}
	}
})
/*************************************
 * registerController*
 * ***********************************/
.controller('registerController', function($scope,$state){
//	document.getElementsByClassName("footer_text")[0].style.display = "none"
	var user_text = []
	var phone_true,pas_true
	//获取phone的值
	$scope.phone_p = function(){
		var phone = document.getElementsByClassName("phone")[0].value
		var reg = /1[3|5|7|8][0-9]{9}$/
		if(reg.test(phone)){
			phone_true = 1
			console.log("输入号码合法")
		}else{
			phone_true = 0
			alert("输入号码不合法")
			console.log("输入号码不合法")
		}
	}
	//获取password的值
	$scope.password_p = function(value){
		var password_p = document.getElementsByClassName("password")[0].value
		var reg = /^[a-z0-9_-]{6,12}$/;
		if(reg.test(password_p)){
			pas_true = 1
			console.log("输入密码合法")
		} else {
			pas_true = 0
			alert("请输入六到十二位密码")
			console.log("请输入六到十二位密码")
		}
	}
	$scope.zhuce =  function(){
		var user_text = JSON.parse(localStorage.getItem("user_text"))
		var phone = document.getElementsByClassName("phone")[0].value
		var password_p = document.getElementsByClassName("password")[0].value
		var label_t = document.getElementsByClassName("label_t")[0].checked
		var code = document.getElementsByClassName("code")[0].value
		var number_phone = 0
		if(user_text != null){
			for(var i=0 ;i<user_text.length;i++){
				if(phone != user_text[i].phone_p){
					number_phone ++
					console.log(number_phone)
				}
			}
			if(phone_true == 1 && pas_true == 1 && number_phone == user_text.length && label_t == true && code.length == 4){
				$state.go("login")
				storage(phone,password_p)
			}
		}
		if(code.length != 4){
			alert("请输入四位验证码")
		}
		if(label_t == false){
			alert("请勾选协议")
		}
		if(user_text == null){
			console.log(123456)
			if(phone_true == 1 && pas_true == 1 && label_t == true && code.length == 4){
				$state.go("login")
				storage(phone,password_p)
			}
		}
	}
	//加入本地存储函数
	function storage(phone,password){
		var content = {
			phone_p:phone,
			password_p:password
		}
		user_text.push(content)
		localStorage.setItem("user_text",JSON.stringify(user_text));
	}
})
/*************************************
 * myoderController*
 * ***********************************/
.controller('myoderController',function($scope,$state,$http){
//	document.getElementsByClassName("footer_text")[0].style.display = "none"
	$http.get("get.json").success(function(data){
        $scope.my_order = data.my_order
 	});
 	var col_text = document.querySelectorAll(".my_order .cont_top .col")
 	for(var i=0;i<col_text.length;i++){
 		col_text[i].index = i
 		col_text[i].onclick = function(){
 			for(var i=0;i<col_text.length ;i++){
 				col_text[i].className = "col"
 			}
 			col_text[this.index].className = "col shop_on"
 		}
 	}
})
/*************************************
 * pro_listController*
 * ***********************************/
.controller('pro_listController',function($scope,$state,$http,$ionicHistory,$timeout){
	$scope.pro_list = []
	$http.get("get.json").success(function(data) {
        $scope.pro_list = data.pro_list
   });
   var col_text = document.querySelectorAll(".pro_list .cont_top .col")
   for(var i=0;i<col_text.length;i++){
   		col_text[i].index = i
   		col_text[i].onclick = function(){
   			for(var j=0;j<col_text.length;j++){
   				col_text[j].className = "col"
   			}
   			col_text[this.index].classList = "col shop_on"
   		}
   }
   $scope.addCar = function($this){
   		var src,h1,new_price,old_price
   		for(var i=0;i<$scope.pro_list.length;i++){
   			if(i == $this){
   				src = $scope.pro_list[$this].src
	   			h1 = $scope.pro_list[$this].h1
	   			new_price = $scope.pro_list[$this].new_price
	   			old_price = $scope.pro_list[$this].old_price
   			}
   		}
   		storage(src,h1,new_price,old_price,1,false)
   		var asd = JSON.parse(localStorage.getItem("car_list"))
   }
   
   var car_list = []
   old_list = JSON.parse(localStorage.getItem("car_list"))
   if(old_list != null){
		for(var i=0;i<old_list.length;i++){
			car_list.push(old_list[i])
		}
   }
   function storage(src,h2,price,old_price,number,checked){
		var content = {
			src:src,
			h2:h2,
			price:price,
			old_price:old_price,
			number:number,
			checked:checked
		}
		car_list.push(content)
		localStorage.setItem("car_list",JSON.stringify(car_list));
	}
	$scope.moreBool = true
	$scope.loadMore = function(){
		$timeout(function(){
			console.log(123456789)
			angular.element(document.querySelectorAll('.list')).eq(0).append('<div class="item-divider">没有更多了<div>');
			$scope.moreBool = false;
		},1000)
	}
})
/*************************************
 * pro_detailController*
 * ***********************************/
.controller('pro_detailController', function($scope,$state,$http,$stateParms) {
	console.log($stateParms.proId)
//	document.getElementsByClassName("footer_text")[0].style.display = "none"
	$scope.pro_list = []
	$http.get("get.json").success(function(data) {
        $scope.pro_list = data.pro_list
   });
   var col_text = document.querySelectorAll(".pro_list .cont_top .col")
   for(var i=0;i<col_text.length;i++){
   		col_text[i].index = i
   		col_text[i].onclick = function(){
   			for(var j=0;j<col_text.length;j++){
   				col_text[j].className = "col"
   			}
   			col_text[this.index].classList = "col shop_on"
   		}
   }
   $scope.reduce = function() {
   		var pro_value = document.getElementById("pro_value").value
   		if(pro_value > 1 && pro_value < 99){
   			pro_value --
   		}
   		document.getElementById("pro_value").value = pro_value
		document.getElementsByClassName('pro_value')[0].value = pro_value
   		
   		console.log(pro_value,document.getElementById("pro_value").value,document.getElementsByClassName('pro_value')[0].value)
	};
	
	$scope.add = function(v){
		var pro_value = document.getElementById("pro_value").value
		if(pro_value >= 1 && pro_value < 99){
   			pro_value ++
   		}
		document.getElementById("pro_value").value = pro_value
		document.getElementsByClassName('pro_value')[0].value = pro_value
   		console.log(pro_value,document.getElementById("pro_value").value,document.getElementsByClassName('pro_value')[0].value)
	};
	var old_number = 0
	$scope.focusVal = function(v){
		old_number = document.getElementById("pro_value").value
   		console.log(old_number)
	};
	$scope.inputVal = function() {
		var pro_value = document.getElementById("pro_value").value
   		console.log(pro_value)
		if(isNaN(pro_value) || pro_value > 99 || pro_value < 1) {
			document.getElementById("pro_value").value = old_number
		} else {
			document.getElementById("pro_value").value = pro_value
		}	
	};
   $scope.addCar = function($this){
   		var src,h1,price,old_price
   		src = document.getElementsByClassName("pro_img")[0].getElementsByTagName("img")[0].src
   		h1 = document.getElementsByClassName("text_h2")[0].innerHTML
   		price = document.getElementsByClassName("new_price")[0].innerHTML
   		old_price = document.getElementsByClassName("old_price")[0].innerHTML
   		var number = document.getElementById("pro_value").value 
   		var asd = JSON.parse(localStorage.getItem("car_list"))
   		storage(src,h1,price,old_price,number,false)
   }
   
   var car_list = []
   old_list = JSON.parse(localStorage.getItem("car_list"))
   if(old_list != null){
		for(var i=0;i<old_list.length;i++){
			car_list.push(old_list[i])
		}
   }
   function storage(src,h2,price,old_price,number,checked){
		var content = {
			src:src,
			h2:h2,
			price:price,
			old_price:old_price,
			number:number,
			checked:checked
		}
		car_list.push(content)
		localStorage.setItem("car_list",JSON.stringify(car_list));
	}				
})

/*************************************
 * pro_cateController*
 * ***********************************/
.controller('pro_cateController',function($scope,$http,$state,$timeout){
	$scope.search=function(){
		$timeout(function(){
			document.getElementById("search-input").focus()
		},500)
	}
	$http.get("get.json").success(function(data) {
        $scope.sortlist = data.sortlist;
        $scope.list_pro001 = data.list_pro001;
        $scope.list_pro002 = data.list_pro002;
        $scope.list_pro003 = data.list_pro003;
        $scope.list_pro004 = data.list_pro004;
        $scope.list_pro005 = data.list_pro005;
        $scope.list_pro006 = data.list_pro006;
        $scope.list_pro007 = data.list_pro007;
        $scope.list_pro008 = data.list_pro008;
        $scope.list_pro009 = data.list_pro009;
   });
	var first_List = function(){
		var arr = document.getElementsByClassName("sortright");
	        for (var i = 0; i < arr.length; i++) {
	            arr[i].style.display = " none";
	        }
	        arr[0].style.display = " block";
	        arr[0].style.color = "#FF0000";
	}
	first_List();
	var ar = document.getElementsByClassName("ng-binding");
	$scope.sortselect = function($index) {
        var ar = document.getElementsByClassName("listleft");
        for (var i = 0; i < ar.length; i++) {
            ar[i].style.backgroundColor = "#e2e0de";
            ar[i].style.color = "#000000";
            console.log(i)
        }
        ar[$index].style.backgroundColor = "#fff";
        ar[$index].style.color = "#FF0000";
        var arr = document.getElementsByClassName("sortright");
        for (var i = 0; i < arr.length; i++) {
            arr[i].style.display = " none";
        }
        arr[$index].style.display = " block";
    };
})
/*************************************
 * orderController*
 * ***********************************/
.controller('orderController', function($scope,$state, $ionicSideMenuDelegate,$ionicPopup,$ionicModal,$ionicActionSheet) {
//	document.getElementsByClassName("footer_text")[0].style.display = "none"
		$scope.sideMenu = function() {
			$ionicSideMenuDelegate.toggleLeft()
		}
		$scope.share = function() {
            $ionicActionSheet.show({
                titleText: "<h4>付款详情</h4>",
                cancelText: "<img src='img/close.png' class='close'>",
                template:"123655656",
                buttons: [
	            	{ text: "<span class='class'>定单信息</span><span>宫品海参</span>" },
	            	{ text: "<span class='pay_accound'>支付宝账号</span><span>123****8911</span>" },
	            	{ text: "<span>付款方式</span><span>建设银行储蓄卡(6666)</span>" },
	            	{ text: "<span class='black'>需付款</span><span class='black'>2664.00元</span>" },
	            	{ text: "<i class='dater_pay'>确认付款</i>" }
	            ],
	            buttonClicked: function(){
                     $scope.popup = $ionicPopup.confirm({
						title:'支付成功',
						template:"<img src='img/success.png ' class='success_img'/>",
						okText:'继续购物>',
						okType:'button-royal',
						cancelText:'订单详情>',
						cancelType:'button-assertive'
					}).then(function(res){
						if(res){
							console.log("你点击了确定按钮")
//								angular.element(document.querySelectorAll('button')).remove()
//								return window.location.href = "./template/pro_list.html"
								$state.go('pro_list')
						}else{
							console.log("你点击了取消按钮")
							$scope.popup = $ionicPopup.confirm({
								title:'支付失败',
								template:"<img src='img/error.png ' class='error_img'/><p>银行卡余额不足</p>",
								okText:'继续购物>',
								okType:'button-royal',
								cancelText:'订单详情>',
								cancelType:'button-assertive'
							})
//							.than(function(ress){
//								if(ress){
//									console.log(123456)
//								}else{
//									console.log(14556)
//								}
//							})
						}
					})
					return true;
                },
                destructiveButtonClicked: function(){
                    return true;
                }
            });
  	  };
})

/*************************************
 * carController*
 * ***********************************/
.controller('carController', function($scope,$http,$state,$filter) {
//	document.getElementsByClassName("footer_text")[0].style.display = "block"
	$scope.car_list = [];
	$scope.allarr = [{checked:false}]
	var text_car = JSON.parse(localStorage.getItem("car_list"))
	$scope.car_list = text_car
	if(text_car != null){
		for(var i=0;i<text_car.length;i++){
//			console.log($scope.car_list[i])
		}
	}
//	$http.get("get.json").success(function(data){
//		$scope.car_list = data.car_list
//	})
	$scope.allChecked = function(v){
		if(v){
			$scope.allarr.checked = true
			for(var i=0;i<$scope.car_list.length;i++){
				$scope.car_list[i].checked = true
			}
		}else{
			$scope.allarr.checked = false
			for(var i=0;i<$scope.car_list.length;i++){
				$scope.car_list[i].checked = false
			}
		}
		sum()
	}
	$scope.checked_text = function(v){
		for(var i=0;i<$scope.car_list.length;i++){
			if($scope.car_list[i].checked){
				$scope.allarr.checked = true
			}else{
				$scope.allarr.checked = false
				break;
			}
		}
		sum()
	}
	
	var sum = function(){
		var sum_number = 0
		var sum_price = 0
		var sum_sum = 0
		for(var i=0;i<$scope.car_list.length;i++){
			if($scope.car_list[i].checked){
				sum_price = parseInt($scope.car_list[i].price)
				sum_number = parseInt($scope.car_list[i].number)
				sum_sum += sum_number * sum_price
			}
		}
		document.getElementById("all_price").innerHTML = sum_sum + ".00"
		console.log(sum_sum)
	}
	/*************数值改变函数*********************/
	var number_change = function(list,$index){
		for(var i=0;i<text_car.length;i++){
			text_car[$index].number = list.number
		}
		localStorage.setItem("car_list",JSON.stringify(text_car));
//		console.log(localStorage.getItem("car_list"))
	}
	$scope.reduce = function(list,$index) {
		if(list.number <= 1){
			return;
		}
		list.number--;
		number_change(list,$index)
		sum()
	};
	
	$scope.add = function(list,$index){
		if(list >= 99) {
			return;
		}
		list.number++
		number_change(list,$index)
		sum()
	};
	var old_number = 0
	$scope.focusVal = function(list,$index){
		old_number = list.number 
	};
	$scope.inputVal = function(list,$index) {
		var num = list.number
		console.log(num)
		if(isNaN(num) || num > 99 || num < 1) {
//			console.log('isNam')
			list.number = old_number;
		} else {
//			console.log('ok')
			list.number = list.number
		}
		number_change(list,$index)
		sum()
	};
	$scope.remove_text = function($index){
		if(confirm("你确定要删掉这个商品吗？")){
  			text_car.splice($index,1)
  			if($scope.car_list.length == 0){
				$scope.allarr.checked = false
			}
  			localStorage.setItem("car_list",JSON.stringify(text_car));
  		}
		sum()
		var asd = 0 
		for(var i=0;i<$scope.car_list.length;i++){
			if($scope.car_list[i].checked == true){
				asd ++
			}
			if(asd == $scope.car_list.length){
				$scope.allarr.checked = true
			}
		}
	}
	var asdasd = 0 
	for(var i=0;i<$scope.car_list.length;i++){
		if($scope.car_list[i].checked == true){
			asdasd ++
		}
		if(asdasd == $scope.car_list.length){
			$scope.allarr.checked = true
		}
	}
})


