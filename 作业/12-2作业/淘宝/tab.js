/*
var navs = document.getElementById("tab").getElementsByTagName("li");
var cons = document.getElementById("tab").getElementsByTagName("img");
for (var i = 0 ; i < navs.length ; i++ ) {
	navs[i].onmouseover = function () {
		for (var i = 0 ; i < navs.length ; i++ ) {
			if (this == navs[i]) {
				navs[i].className = "select";
				cons[i].className = "show";
			} else {
				navs[i].className = "";
				cons[i].className = "";
			}
		}	
	}
}
*/
function change (NavId) {
	var navs = document.getElementById(NavId).getElementsByTagName("li");
	var cons = document.getElementById(NavId).getElementsByTagName("img");
	for (var i = 0 ; i < navs.length ; i++ ) {
		navs[i].onmouseover = function () {
			for (var i = 0 ; i < navs.length ; i++ ) {
				if (this == navs[i]) {
					navs[i].className = "select";
					cons[i].className = "show";
				} else {
					navs[i].className = "";
					cons[i].className = "";
				}
			}
		}
	}
	for (var i = 0 ; i < navs.length ; i++ ) {
		navs[i].index = i;
		navs[i].onmouseout = function () {
			// 下边四句是为了在鼠标移开时恢复到默认的状态
			navs[this.index].className = "none";
			cons[this.index].className = "none";
			navs[0].className = "select";
			cons[0].className = "show";
		}
	}
}
change ("tab");
