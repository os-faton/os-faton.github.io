var Progress = document.getElementById("Progress");

function BootLoader() {
	Progress.innerHTML = "Loading data...";
}

setTimeout("BootLoader()", 1000);
setTimeout(function() {
	Progress.innerHTML += "<br/>Loading resouces...<br/>";
}, 2000);
setTimeout(function() {
	Progress.innerHTML += "Loading UI / UX...<br/>";
}, 3000);
setTimeout(function() {
	Progress.innerHTML += "Loading programs...<br/>";
}, 4000);
setTimeout(function() {
	Progress.innerHTML += "Cache all data...<br/>";
}, 5000);
setTimeout(function() {
	Progress.innerHTML += "Generating link to desktop...<br/>";
}, 6000);
setTimeout(function() {
	Progress.innerHTML += "Link are generated<br/>";
}, 7000);
setTimeout(function() {
	window.location.href = "desktop.html";
}, 8000);

clearTimeout();
