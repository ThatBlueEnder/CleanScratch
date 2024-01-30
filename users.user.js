// ==UserScript==
// @name         users checker
// @match        *://scratch.mit.edu/users/*
// @grant        GM_addStyle
// @run-at       document-start
// @version      1.0
// @downloadURL  https://github.com/ThatBlueEnder/CleanScratch/raw/main/users.user.js
// ==/UserScript==
(new MutationObserver(check)).observe(document, {childList: true, subtree: true});
function check(changes, observer) {
    if(document.querySelector('.user-name')) {
        observer.disconnect();
        if(!window.location.pathname.startsWith("/users/"+document.querySelector(".user-name").textContent+"/")){
            GM_addStyle('#content{display:none;}');
        }
    }else if(document.querySelector('#login-dropdown')) {
        observer.disconnect();
        GM_addStyle('#content{display:none;}');
    }
}
