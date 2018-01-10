var DirectoryContent = document.getElementById("DirectoryContent");
var FList = document.getElementById("FileList");
var flstm = null;
var Terminal = document.getElementById("Terminal");

function Exception(e) {
	Terminal.value += "Файловая система не работает: " + e;
}

function GetArray(l) {
	return Array.prototype.slice.call(l || [], 0);
}

function Read(f) {
	flstm.root.getFile(f, {}, function(e) {
		e.file(function(fl) {
			var r = new FileReader();
			
			r.onload = function(b) {
				DirectoryContent.innerText = this.result;
			};
			
			r.readAsText(fl);
		}, Exception);
	}, Exception);
}

function Result(es) {
	var fr = new FileReader();
	var frag = document.createDocumentFragment();
	
	es.forEach(function(e, i) {
		var type = e.isDirectory ? "D" : "F";
		
		var elem = document.createElement("li");
		
		elem.innerHTML = [ type, "<span>", e.name, "</span>" ].join("");
		
		elem.onclick = function(ev) {
			ev.preventDefault();
			
			Read(e.name);
		};
		
		frag.appendChild(elem);
	});
	
	FList.appendChild(frag);
}

DirectoryContent.style.display = "inline-block";
DirectoryContent.style.height = "100%";
DirectoryContent.style.width = "66%";

FList.style.display = "inline-block";
FList.style.height = "100%";
FList.style.width = "33%";

navigator.webkitPersistentStorage.requestQuota(128 * 1024 * 1024, function(b) {
	window.webkitRequestFileSystem(window.PERSISTENT, b, function(fs) {
		flstm = fs;
		
		var r = fs.root.createReader();
		var es = [];
		
		var readEntries = function() {
			r.readEntries(function(rslt) {
				if (!rslt.length) {
					Result(es.sort());
				} else {
					es = es.concat(GetArray(rslt));
					
					readEntries();
				}
			}, Exception);
		};
		
		readEntries();
	}, Exception);
}, Exception);
