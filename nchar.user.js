// ==UserScript==
// @name         nchar
// @match        *://*.makecode.com/*
// @match        *://*.makecode.microbit.org/*
// @version      1.0
// @downloadURL  https://github.com/ThatBlueEnder/CleanScratch/raw/main/nchar.user.js
// ==/UserScript==
(new MutationObserver(check)).observe(document, {childList: true, subtree: true});
  function check(changes, observer) {
      document.querySelectorAll('textarea:not([class*=\"monaco\"]').forEach(input => {
          input.setAttribute('maxlength', '30');
      });
      document.querySelectorAll('input:not([type=\'url\'])').forEach(input => {
          input.setAttribute('maxlength', '30');
      });
}
