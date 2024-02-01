// ==UserScript==
// @name         kahooty
// @version      1.0
// @match        *://kahoot.it/*
// @grant        GM_addStyle
// ==/UserScript==
GM_addStyle('[class^=theme__Background] {background: none !important}');
GM_addStyle('[class^=background__Background] {background: none !important}');
GM_addStyle('[class^=collaboration-navigation__PageMainContent] {background: none !important}');
GM_addStyle('[class^=theme__ScrollWrapper]::-webkit-scrollbar {display: none;}');
GM_addStyle('[class^=theme__ScrollWrapper] {-ms-overflow-style: none; scrollbar-width: none;}')
