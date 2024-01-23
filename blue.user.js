// ==UserScript==
// @name         blue
// @match        *://*/*
// @grant        GM_addStyle
// ==/UserScript==
GM_addStyle('*{user-select: none;}');
document.body.addEventListener('dragstart', event => {
  event.preventDefault();
});
document.body.addEventListener('drop', event => {
  event.preventDefault();
});
