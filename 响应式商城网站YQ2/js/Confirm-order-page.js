
var reduce = function(){
	var a = $('.content-main table');
	var c = $('content-main table').eq(0);
	var b = $('.content-main table').eq(1);	
	var num = document.getElementById("prd_num_01");
	var reduce = document.getElementById("reduce_01");
	var count = parseInt(num.value);
	if(count <= 1){
		reduce.setAttribute("disabled","disabled");
		return;
	}
	num .value = --count;
}
var add = function(){
	var num = document.getElementById("prd_num_01");
	var reduce = document.getElementById("reduce_01");
	var count = parseInt(num.value);
	if( count > 1 ){
		reduce.removeAttribute("disabled");
	}
	num.value = ++count;
}

