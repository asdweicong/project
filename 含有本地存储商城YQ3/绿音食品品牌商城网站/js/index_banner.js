window.onload = function() {
		var box = document.getElementById('box');
		var pointer = document.getElementById('pointer');
		var imglist = box.getElementsByTagName('img')
		var pointerList = pointer.getElementsByTagName('dd');
		var n = -window.innerWidth;
		for(var i = 0; i < imglist.length; i++) {
			imglist[i].style.width = -n + "px"
		}
		box.innerHTML = box.innerHTML + box.innerHTML; //增加一倍的图片用于循环 
		box.style.width = imglist[0].offsetWidth * imglist.length + "px";
		var timer = null; //调用轮播函数
		timer = setInterval(function() {
			scroll(box, n, pointerList);
		}, 2500);
		box.onmouseover = function() {
			clearInterval(timer); //鼠标经过的时候清除计时器
		}
		pointer.onmouseover = function() {
			clearInterval(timer); //鼠标经过的时候清除计时器
		}
		box.onmouseout = function() {
			timer = setInterval(function() {
				scroll(box, n, pointerList); //鼠标移开的时候添加计时器
			}, 2500);
		}
		for(var i = 0; i < pointerList.length; i++) {
			pointerList[i].index = i;
			pointerList[i].onclick = function() {
				for(var j = 0; j < pointerList.length; j++) {
					pointerList[j].className = ''; //清空激活的class 
				}
				move(box, n * (this.index)); //移动图片 
				this.className = 'active'; //激活点击的页码 
			}
		}
	}
	/** 
	 * 循环滚动函数 
	 * @param {Object} box     
	 * @param {Object} n 
	 */
function scroll(box, n, page) {
	if(box.offsetLeft <= -box.offsetWidth / 2) {
		box.style.left = "0px"; //重新从头开始 
	}
	if(box.offsetLeft % n != 0) {
		//因为在我们切换浏览器标签页或者切换去其他软件界面的时候， 
		//会影响到setInterval,有时候setInterval会增加好几秒，在这里我们必须加一个判断 
		//只有当它走完了一个整个的图片宽度时，我们才进行下一次滚动。 
	} else {
		pageScroll(box, n, page);
		move(box, n + box.offsetLeft);
	}
}
/** 
 * 滚动页码函数 
 * @param {Object} box 
 * @param {Object} n 
 * @param {Object} page 
 */
function pageScroll(box, n, page) {
	var index = Math.abs(box.offsetLeft / n);
	for(var i = 0; i < page.length; i++) {
		page[i].className = '';
	}
	//判断是不是最后一页，是最后一页的话+1要变成0； 
	if(index < page.length - 1) {
		page[index + 1].className = 'active';
	} else {
		page[0].className = 'active';
	}
}
/** 
 * 变速移动 
 * @param {Object} ele 
 * @param {Object} target 
 */
function move(ele, target) {
	clearInterval(ele.timer);
	ele.timer = setInterval(function() {
		var step = (target - ele.offsetLeft) / 10;
		step = step > 0 ? Math.ceil(step) : Math.floor(step);
		if(target == ele.offsetLeft) {
			clearInterval(ele.timer);
		} else {
			ele.style.left = ele.offsetLeft + step + "px";
		}
	}, 35);
}

