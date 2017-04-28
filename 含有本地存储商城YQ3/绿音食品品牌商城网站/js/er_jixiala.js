var maxheight = 200;
var height_ = 0;
var bool = 1;
var ul_obj = document.getElementById("ul_list");

function slideDown(obj, speed) {
	height_ += 10;
	if(height_ <= maxheight) {
		obj.style.height = height_ + "px";
		obj.style.display = "block";
		setTimeout(slideDown, speed, obj, speed);
	} else {
		height_ = 0;
	}
	if(height_ == maxheight) {
		bool = 2;
	}
}

function slideUp(obj, speed) {
	height_ += 10;
	if(height_ <= maxheight) {
		obj.style.height = maxheight - height_ + "px";
		obj.style.display = "block";
		setTimeout(slideUp, speed, obj, speed)
	} else {
		obj.style.display = "none";
		height_ = 0;
		bool = 1;
	}
}
//		document.getElementById("down").onmousemove = function() {
//			if(bool == 1) {
//				bool = 0;
//				slideDown(ul_obj, 10);
//			}
//		}
//		document.getElementById("down").onmouseout = function() {
//		
//			if(bool == 2) {
//				bool = 0;
//				slideUp(ul_obj, 10);
//			}
//		}
document.getElementById("down").onclick = function() {
	if(bool == 1) {
		bool = 0;
		slideDown(ul_obj, 10);
	}
	if(bool == 2) {
		bool = 0;
		slideUp(ul_obj, 10);
	}
}