const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]");function o(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}e.addEventListener("click",(function(){t.style.backgroundColor=o(),e.disabled=!0,d.disabled=!1;let a=setInterval((()=>{t.style.backgroundColor=o()}),1e3);d.addEventListener("click",(()=>{d.disabled=!0,e.disabled=!1,clearInterval(a)}))})),d.disabled=!0;
//# sourceMappingURL=01-color-switcher.b39a84ae.js.map
