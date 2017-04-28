var lis = document.querySelectorAll('#evaluation')
var li = lis[1].getElementsByTagName("li")
var img01 = li[0].getElementsByTagName("img")
var img02 = li[1].getElementsByTagName("img")
var img03 = li[2].getElementsByTagName("img")
for(var i=0;i<lis.length ;i++){
	li[i].index = i
	for(var j=0;j<img01.length ;j++){
		img01[j].index = j
		img02[j].index = j
		img03[j].index = j
		img01[j].onclick  = function(){
			var t = this.index
			for(var w = 0;w<img01.length ;w++){
				img01[w].src = "img/com_details/white_star.png"
			}
			for(var w = 0;w<t+1;w++){
				img01[w].src = "img/com_details/Yellow_star.png"
			}
		}
		img02[j].onclick  = function(){
			var t = this.index
			for(var w = 0;w<img01.length ;w++){
				img02[w].src = "img/com_details/white_star.png"
			}
			for(var w = 0;w<t+1;w++){
				img02[w].src = "img/com_details/Yellow_star.png"
			}
		}
		img03[j].onclick  = function(){
			var t = this.index
			for(var w = 0;w<img01.length ;w++){
				img03[w].src = "img/com_details/white_star.png"
			}
			for(var w = 0;w<t+1;w++){
				img03[w].src = "img/com_details/Yellow_star.png"
			}
		}
	}
}