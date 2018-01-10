var BootSector = function() {
        this.Kernel = document.body;
};

BoorSector.prototype.LoadHyperTextData = function(htext) {
        if (htext.match("script")) 
                BootSector.Kernel.innerHTML += "";
        }
        
        BootSector.Kernel.innerHTML += htext;
};

BootSector.prototype.LoadTextData = function(text) {
        BootSector.Kernel.innerText += text;
};
