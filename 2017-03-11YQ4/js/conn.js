function resize() {
	document.getElementsByTagName("html")[0].style.fontSize = document.body.clientWidth/7.2 + "px"
};
window.onresize = resize;
resize();
