var CommandLine = document.getElementById("CommandLine"),
	Terminal = document.getElementById("Terminal");

CommandLine.onkeypress = function(e) {
	if (e.keyCode == 13) {
		if (this.value.match("append")) {
			Terminal.value += this.value.split("~>")[1];
		} if(this.value.match("clear")) {
			Terminal.value = "";
		} if (this.value.match("color")) {
			Terminal.style.background = this.value.split(" ")[1];
			Terminal.style.color = this.value.split(" ")[2];
		} if (this.value.match("echo")) {
			Terminal.value += this.value.split("~>")[1] + "\n";
		} if (this.value.match("help")) {
			Terminal.value += "\nappend~> - вывод текста на текущей строке;\n" +
				"clear - очистка консоли от текста;\n" +
				"color \%bg \%fg - указывает цвет фона и текста\n" +
				"echo - вывод текста с новой строки;\n\n";
		}
	}
};

Terminal.value = "ОС \"Фатон 1\". Версия 0.9;\nВыпущена: 07.01.2018:12:43;\nАгент пользователя: " + navigator.userAgent + ";\n\nВведите команду \"help\" для получения справки по командам;";
