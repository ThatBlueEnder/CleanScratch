// ==UserScript==
// @name         blue
// @match        *://*/*
// @grant        GM_addStyle
// @version      3.0
// @downloadURL  https://github.com/ThatBlueEnder/CleanScratch/raw/main/blue.user.js
// ==/UserScript==
GM_addStyle('*{user-select: none;} html,body{overscroll-behavior: none !important;}');
document.body.addEventListener('dragstart', event => {
  event.preventDefault();
});
document.body.addEventListener('drop', event => {
  event.preventDefault();
});
var meta = document.createElement('meta');
meta.name = "viewport";
meta.content = "user-scalable=no";
document.head.appendChild(meta);
