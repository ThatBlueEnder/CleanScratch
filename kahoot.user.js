// ==UserScript==
// @name         kahoot mini
// @match        *://scratch.mit.edu/*
// @match        *://impact.codeninjas.com/*
// ==/UserScript==
document.body.insertAdjacentHTML('beforeend', '<iframe id="kahoot-tab" src="https://kahoot.it/" style=" all: initial; display: none; z-index: 9999; position: absolute; left: 32px;  top: 32px;  border-radius: 8px;width: calc(100vw - 64px);height: calc(100vh - 64px);"></iframe>');
document.body.insertAdjacentHTML('beforeend', '<img id="kahoot-button" onclick="if(document.getElementById(\'kahoot-tab\').style.display===\'none\'){document.getElementById(\'kahoot-tab\').style.display=\'initial\';}else{document.getElementById(\'kahoot-tab\').src=\'https://kahoot.it/\';document.getElementById(\'kahoot-tab\').style.display=\'none\';}" src="https://kahoot.it/favicon.ico" style=" all: initial; z-index: 9999; position: absolute; left: 0; bottom: 0; height: 16px; border-top-right-radius: 4px; background: white;">');
