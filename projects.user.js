// ==UserScript==
// @name         projects
// @match        https://scratch.mit.edu/projects/*
// @grant        GM_addStyle
// @run-at       document-start
// @version      1.0
// @downloadURL  https://github.com/ThatBlueEnder/CleanScratch/raw/main/projects.user.js
// ==/UserScript==
GM_addStyle('#view{display:none;}');
(new MutationObserver(check)).observe(document, {childList: true, subtree: true});
function check(changes, observer) {
    if(document.querySelector('.title').querySelector('form')) {
        observer.disconnect();
        GM_addStyle('#view{display:revert; display: inline-block;}');
    }
}
