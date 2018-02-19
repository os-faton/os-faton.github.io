var CodeLine = document.getElementById("CodeLine"),
	CommandLine = document.getElementById("CommandLine"),
	Terminal = document.getElementById("Terminal");

CodeLine.onkeypress = function(e) {
	if (e.keyCode == 13) {
		run(this.value);
	}
};

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
		} if (this.value.match("goto")) {
			window.location.href = this.value.split(" ")[1];
			
			if (this.value.split(" ")[1].match("css/")) {
				window.location.href = "404.html";
			} if (this.value.split(" ")[1].match("fonts/")) {
				window.location.href = "404.html";
			} if (this.value.split(" ")[1].match("js/")) {
				window.location.href = "404.html";
			}
		} if (this.value.match("help")) {
			Terminal.value += "\nappend~> - вывод текста на текущей строке;\n" +
				"clear - очистка консоли от текста;\n" +
				"color \%bg \%fg - указывает цвет фона и текста\n" +
				"echo~> - вывод текста с новой строки;\n" +
				"kosmos: - программа на языке прогрммирования \"Космос\";\n\n";
		} if (this.value.match("kosoms")) {
			run(this.value.split(":")[1]);
		} if (this.value.match("news")) {
			Terminal.value += "\nЧто нового?\n    • Появилась возможность запускать свои программы с помощью языка программирования \"Космос\". Подробнее на https://neubauten-software.github.io/kosmos.api.html;\n    • Навигация по браузеру: для этого достаточно ввести команду: \"goto\";    • Операционную систему можно добавить на рабочий стол;\n    • Операционная система получила возможность автономного режима — больше не надо выходить в интернет";
		}
	}
};

Terminal.value = "ОС \"Фатон 1\". Версия 1;\nВыпущена: 20.02.2018:00:00;\nАгент пользователя: " + navigator.userAgent + ";\n\nВведите команду \"help\" для получения справки по командам;\nВведите команду \"news\" для получения информации по функциям ПО\n";
