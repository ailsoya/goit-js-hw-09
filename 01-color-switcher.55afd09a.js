const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]");function r(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}e.addEventListener("click",(function(){t.style.backgroundColor=r(),e.disabled=!0,d.disabled=!1,timerId=setInterval((()=>{t.style.backgroundColor=r()}),1e3),d.addEventListener("click",(()=>{d.disabled=!0,e.disabled=!1,clearInterval(timerId)}))})),d.disabled=!0;
//# sourceMappingURL=01-color-switcher.55afd09a.js.map