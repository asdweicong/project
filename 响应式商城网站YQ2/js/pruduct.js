
var reduce = function(){
	var num = document.getElementById("prd_num");
	var reduce = document.getElementById("reduce");
	var count = parseInt(num.value);
	if(count <= 1){
		reduce.setAttribute("disabled","disabled");
		return;
	}
	num .value = --count;
}

var add = function(){
	var num = document.getElementById("prd_num");
	var reduce = document.getElementById("reduce");
	var count = parseInt(num.value);
	if( count > 1 ){
		reduce.removeAttribute("disabled");
	}
	num.value = ++count;
}

