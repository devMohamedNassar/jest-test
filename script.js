'use strict'

function updateFontSize(){
    const h1 = document.querySelector('h1');
    let currentFontSize = parseInt(getComputedStyle(h1).fontSize);;
    const timer = setInterval(increaseFontSize, 1000);
    function increaseFontSize (){
        h1.style.fontSize = ++currentFontSize + 'px';
        if(currentFontSize >= 100) clearInterval(timer);
    }
    increaseFontSize();
}

try {
    module.exports = updateFontSize;
} catch {}