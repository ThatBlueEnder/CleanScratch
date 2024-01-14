// ==UserScript==
// @name         users
// @match        https://scratch.mit.edu/users/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==
GM_addStyle('#content{display:none;}');
(new MutationObserver(check)).observe(document, {childList: true, subtree: true});
function check(changes, observer) {
    if(document.querySelector('.user-name')) {
        observer.disconnect();
        if(window.location.pathname.startsWith("/users/"+document.querySelector(".user-name").textContent+"/")){
            GM_addStyle('#content{display:revert;}');
        }
    }
}