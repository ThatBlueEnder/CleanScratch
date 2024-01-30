// ==UserScript==
// @name         create checker
// @match        *://scratch.mit.edu/*
// @grant        GM_addStyle
// @run-at       document-start
// @version      1.0
// @downloadURL  https://github.com/ThatBlueEnder/CleanScratch/raw/main/create.user.js
// ==/UserScript==
(new MutationObserver(check)).observe(document, {childList: true, subtree: true});
function check(changes, observer) {
    if(document.querySelector('#login-dropdown')) {
        observer.disconnect();
        GM_addStyle('#project-create{display:none!important;}');
    }
}
(new MutationObserver(doublecheck)).observe(document, {childList: true, subtree: true});
function doublecheck(changes, observer) {
    if(document.querySelector('.login-item')) {
        observer.disconnect();
        GM_addStyle('.create{display:none!important;}');
    }
}
(new MutationObserver(triplecheck)).observe(document, {childList: true, subtree: true});
function triplecheck(changes, observer) {
    if(document.querySelector('.account-nav')) {
        observer.disconnect();
        GM_addStyle('.create{display: inline-block!important;}');
    }
}
