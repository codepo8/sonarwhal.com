!function(){"use strict";Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this,n=this;if(!document.documentElement.contains(t))return null;do{if(n.matches(e))return n;n=n.parentElement}while(null!==n);return null});var e=function(e){e.setAttribute("aria-expanded","true")},t=function(e){e.setAttribute("aria-expanded","false")},n=function(n){var o=n.target;if(-1!==o.className.indexOf("button--details")){var l=o.closest(".rule-result--details"),r="true"===l.getAttribute("aria-expanded"),i=o.getAttribute("data-rule");r?(t(l),o.innerHTML="open details",o.setAttribute("title","show "+i+"'s result details")):(e(l),o.innerHTML="close details",o.setAttribute("title","close "+i+"'s result details"))}},o=function(e,t){return t.length-e.length===t.indexOf(e)},l=function(){o("/scanner/",window.location.href)&&(window.location.href=window.location.href)},r=function(e){var t="hidden-clipboard",n=document.getElementById(t);if(!n){var o=document.createElement("textarea");o.id=t,o.style.position="fixed",o.style.top=0,o.style.left=0,o.style.width="1px",o.style.height="1px",o.style.padding=0,o.style.border="none",o.style.outline="none",o.style.boxShadow="none",o.style.background="transparent",document.querySelector("body").appendChild(o),n=document.getElementById(t)}n.value=e,n.select(),document.execCommand("copy")},i=document.querySelector(".permalink-copy"),a=function(){var e=document.querySelector(".scan-overview__body__permalink").textContent;r(e.trim())};window.addEventListener("popstate",l,!1),i.addEventListener("click",a),function(){document.getElementById("results-container").addEventListener("click",n,!1)}(),function(){for(var e=document.querySelectorAll("code"),t=0;t<e.length;t++)hljs.highlightBlock(e[t])}()}();