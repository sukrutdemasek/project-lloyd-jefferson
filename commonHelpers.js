(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".accordion-btn").forEach((r,n)=>{const o=r.nextElementSibling;n===0?o.style.display="block":o.style.display="none",r.addEventListener("click",()=>{o.style.display==="block"?o.style.display="none":(document.querySelectorAll(".ac-content").forEach(e=>{e.style.display="none"}),o.style.display="block")})})});
//# sourceMappingURL=commonHelpers.js.map
