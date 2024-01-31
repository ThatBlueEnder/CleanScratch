// ==UserScript==
// @name         kahoot mini
// @match        *://scratch.mit.edu/*
// @match        *://impact.codeninjas.com/*
// @version      1.0
// @noframes
// @downloadURL  https://github.com/ThatBlueEnder/CleanScratch/raw/main/kahoot.user.js
// ==/UserScript==
document.body.insertAdjacentHTML('beforeend', '<iframe id="kahoot-tab" src="https://kahoot.it/" style=" all: initial; display: none; z-index: 9999; position: fixed; width: 100vw;height: 100vh;"></iframe>');
document.body.insertAdjacentHTML('beforeend', '<img id="kahoot-button" onclick="if(document.getElementById(\'kahoot-tab\').style.display===\'none\'){document.getElementById(\'kahoot-tab\').style.display=\'initial\';}else{document.getElementById(\'kahoot-tab\').src=\'https://kahoot.it/\';document.getElementById(\'kahoot-tab\').style.display=\'none\';}" src="https://kahoot.it/favicon.ico" style=" all: initial; z-index: 9999; position: fixed; left: 0; bottom: 0; height: 16px; border-top-right-radius: 4px; background: white;">');
