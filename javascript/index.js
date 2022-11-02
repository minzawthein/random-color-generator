(function ()  { 
    var generatorButton = document.getElementsByClassName('generator')[0],
        copyButton = document.getElementsByClassName('copy-code')[0],
        hexaCode = document.getElementById('color-code'),
        lengthsOfColorCode = 6;
    
    generatorButton.addEventListener('click', function() {
        var generatedCode = "#";
        for(var i=0; i < lengthsOfColorCode; i++) {
            var codes = ["0", "1", "2", "3","4", "5","6","7","8","9",'a','b','c','d','e','f'];
            var arrayCode = Math.floor(Math.random() * codes.length);
            generatedCode += codes[arrayCode];
        }       

        setColorCode(generatedCode);
        localStorage.setItem('colorCode',generatedCode)
    },false );

    copyButton.addEventListener('click', function(){
        navigator.clipboard.writeText(hexaCode.innerText);
    },false);

    window.addEventListener("load" , function() {
        if(this.localStorage.colorCode){
        setColorCode(this.localStorage.getItem('colorCode'));
        }
    },false);

    function setColorCode(savedHexaCode) {
        document.body.style.backgroundColor = savedHexaCode;
        hexaCode.innerText = savedHexaCode;
    }   
}());