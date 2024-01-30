// ==UserScript==
// @name         auto save
// @match        *://scratch.mit.edu/*
// @grant        GM_addStyle
// @version      1.0
// @downloadURL  https://github.com/ThatBlueEnder/CleanScratch/raw/main/autosave.user.js
// ==/UserScript==
(new MutationObserver(check)).observe(document, {childList: true, subtree: true});
function check(changes, observer) {
    if(document.querySelector('div[class^=save-status_save-now]')) {
        document.querySelector('div[class^=save-status_save-now]').click();
    }
}
