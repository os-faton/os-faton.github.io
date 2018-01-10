function LoadClock() {
	var date = new Date();
	var Hours = date.getHours();
	var Minutes = date.getMinutes();
	var Seconds = date.getSeconds();
	
	if (Hours < 10) Hours = "0" + Hours;
	if (Minutes < 10) Minutes = "0" + Minutes;
	if (Seconds < 10) Seconds = "0" + Seconds;
	
	document.getElementById("Clock").innerHTML = Hours + ":" + Minutes + ":" + Seconds;
	
	setTimeout("LoadClock()", 1000);
}
