// ==UserScript==
// @name         blue
// @match        *://*/*
// @grant        GM_addStyle
// @version      1.0
// @downloadURL  https://github.com/ThatBlueEnder/CleanScratch/raw/main/blue.user.js
// ==/UserScript==
GM_addStyle('*{user-select: none;}');
document.body.addEventListener('dragstart', event => {
  event.preventDefault();
});
document.body.addEventListener('drop', event => {
  event.preventDefault();
});
