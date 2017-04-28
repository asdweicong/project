window.onload = function(){ 
	var box = document.getElementById('box'); 
	var pointer = document.getElementById('pointer'); 
	var imglist = box.getElementsByTagName('img') 
	var pointerList = pointer.getElementsByTagName('dd'); 
	box.innerHTML = box.innerHTML+box.innerHTML; 
	var liW = window.innerWidth;
	var n = -liW; 
	for(var i=0;i<imglist.length;i++){
		box.getElementsByTagName("li")[i].style.width= liW +"px";
	}
	box.style.width = liW*imglist.length+"px"; 
	var timer = null; //调用轮播函数
	timer = setInterval(function(){ 
	  	scroll(box,n,pointerList); 
	},3000); 
	box.onmouseover = function(){ 
	  clearInterval(timer); 
	} 
	pointer.onmouseover = function(){ 
		clearInterval(timer); 
   	} 
	box.onmouseout = function(){ 
		timer = setInterval(function (){ 
			scroll(box,n,pointerList); 
		},3000); 
	} 
	 	//设置页码的点击事件 
   	for(var i=0;i<pointerList.length;i++){ 
		pointerList[i].index=i;//设置一个参数，用下面调用某个页码 
		pointerList[i].onclick=function (){ 
   			for(var j=0;j<pointerList.length;j++){ 
    			pointerList[j].className='';//清空激活的class 
	   		} 
	   		move(box,n*(this.index));//移动图片 
	   		this.className='on';//激活点击的页码 
		} 
   	} 
	  
} 

	function scroll(box,n,page){  
	 	if(box.offsetLeft<=-box.offsetWidth/2){ 
	 		
	  		box.style.left = "0px";//重新从头开始 
	  		console.log('0'); 
	 	} 
	 	if(box.offsetLeft%n!=0){ 
	
	 	} 
	 	else{ 
	  		pageScroll(box,n,page); //点击方框
	  		move(box,n+box.offsetLeft); 
	 	} 
	} 
	

	function pageScroll(box,n,page){ 
	 	var index = Math.abs(box.offsetLeft/n); 
	 	for(var i=0;i<page.length;i++){ 
	  		page[i].className=''; 
	 	} 
	 	if(index<page.length-1){ 
	  		page[index+1].className='on'; 
	 	} 
	 	else{ 
	  	page[0].className='on'; 
	 	} 
	} 

	function move(ele,target){ 
	 	clearInterval(ele.timer); 
		ele.timer = setInterval(function () { 
		 	var step = (target-ele.offsetLeft)/10; 
		  	step = step>0?Math.ceil(step):Math.floor(step); 
		  	if(target==ele.offsetLeft){ 
		   		clearInterval(ele.timer); 
		  	} 
		  	else{ 
		   		ele.style.left = ele.offsetLeft + step + "px"; 
		  	} 
	 	},30); 
	} 