document.onclick = function() {
	var menu = document.getElementsByClassName("Menu");
	
	for (var i in menu) {
		document.querySelector(".App").removeChild(menu[i]);
	}
};

document.oncontextmenu = function() {
	return false;
};

document.querySelector(".App").oncontextmenu = function(e) {
	var menu = document.createElement("div");
	
	menu.className = "Menu";
	
	menu.innerHTML = "<li>Stop</li>";
	
	menu.style.display = "inline-block";
	menu.style.position = "absolute";
	menu.style.right = 0;
	menu.style.top = "20px";
	
	if (!menu) {
		this.appendChild(menu);
	} else {
		this.removeChild(menu);
	}
};
