var lis = document.querySelectorAll('#evaluation')
var li = lis[0].getElementsByTagName("li")
var img1 = li[0].getElementsByTagName("img")
var img2 = li[1].getElementsByTagName("img")
var img3 = li[2].getElementsByTagName("img")
for(var i=0;i<lis.length ;i++){
	li[i].index = i
	for(var j=0;j<img1.length ;j++){
		img1[j].index = j
		img2[j].index = j
		img3[j].index = j
		img1[j].onclick  = function(){
			var t = this.index
			for(var w = 0;w<img1.length ;w++){
				img1[w].src = "img/com_details/white_star.png"
				img2[w].src = "img/com_details/white_star.png"
				img3[w].src = "img/com_details/white_star.png"
			}
			for(var w = 0;w<5;w++){
				img1[w].src = "img/com_details/Yellow_star.png"
			}
		}
		img2[j].onclick  = function(){
			var t = this.index
			for(var w = 0;w<img1.length ;w++){
				img1[w].src = "img/com_details/white_star.png"
				img2[w].src = "img/com_details/white_star.png"
				img3[w].src = "img/com_details/white_star.png"
			}
			for(var w = 0;w<3;w++){
				img2[w].src = "img/com_details/Yellow_star.png"
			}
		}
		img3[j].onclick  = function(){
			var t = this.index
			for(var w = 0;w<img1.length ;w++){
				img1[w].src = "img/com_details/white_star.png"
				img2[w].src = "img/com_details/white_star.png"
				img3[w].src = "img/com_details/white_star.png"
			}
			for(var w = 0;w<2;w++){
				img3[w].src = "img/com_details/Yellow_star.png"
			}
		}
	}
}
