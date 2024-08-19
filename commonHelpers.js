import{A as u,S as l,a as f,N as m,P as v,K as b,E as L,C as g,i as h}from"./assets/vendor-C-gZTN3c.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();document.querySelector(".menu-link").addEventListener("click",function(e){e.preventDefault(),document.querySelector(".dropdown-menu").classList.toggle("show")});document.addEventListener("DOMContentLoaded",function(){function e(){document.querySelectorAll(".main-headline, .hero-contact-info").forEach(o=>{const i=o.getBoundingClientRect(),t=window.innerHeight||document.documentElement.clientHeight;i.top<=t-100&&i.bottom>=0?o.classList.add("in-view"):o.classList.remove("in-view")})}window.addEventListener("load",e),window.addEventListener("scroll",e)});document.addEventListener("DOMContentLoaded",function(){new u(".accordion-info-about-me-list",{duration:700,showMultiple:!0,onOpen:e=>{e.querySelector(".ac-trigger").classList.add("btn-roll")},onClose:e=>{e.querySelector(".ac-trigger").classList.remove("btn-roll")}})});const p=document.querySelector(".swiper");new l(p,{direction:"horizontal",loop:!1,speed:600,spaceBetween:50,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0},breakpoints:{768:{speed:600,slidesPerView:1,spaceBetween:40},1440:{speed:600,slidesPerView:1,spaceBetween:50}}});const c=p.swiper,a=document.querySelector(".swiper-button-next"),d=document.querySelector(".swiper-button-prev");function w(){c.isEnd?a.classList.add("swiper-button-disabled"):a.classList.remove("swiper-button-disabled"),c.isBeginning?d.classList.add("swiper-button-disabled"):d.classList.remove("swiper-button-disabled")}w();a.addEventListener("click",()=>{a.classList.contains("swiper-button-disabled")||c.slideNext()});d.addEventListener("click",()=>{d.classList.contains("swiper-button-disabled")||c.slidePrev()});document.addEventListener("keydown",e=>{switch(e.key){case"ArrowLeft":d.classList.contains("swiper-button-disabled")||c.slidePrev();break;case"ArrowRight":a.classList.contains("swiper-button-disabled")||c.slideNext();break}});c.on("slideChange",w);document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".projects-button").forEach(n=>{n.addEventListener("click",()=>{const o=n.getAttribute("data-url");o&&(window.location.href=o)})})});document.addEventListener("DOMContentLoaded",function(){new u(".accordion-container",{showMultiple:!0,duration:300})});const y=async()=>{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!e.ok)throw new Error(e.status);return await e.json()};function E({author:e,avatar_url:n,review:o}){return`<li class="swiper-slide">
    <div class="reviews-item">
    <div class="element">
        <img class="review-section-img" src="${n}" alt="${e}"  />
        <h3 class="reviews-title">${e}</h3>
        <p class="reviews-text">${o}</p>
        </div>
    </div>
  </li>`}function S(e){return e.map(E).join("")}const q=e=>{const n=document.querySelector(".reviews-section"),o=n.querySelector(".swiper-wrapper"),i=n.querySelector(".swiper-reviews");y().then(t=>{const s=S(t);o.insertAdjacentHTML("beforeend",s),new e(i,{slidesPerView:1,autoHeight:!0,speed:600,spaceBetween:16,keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{768:{speed:600,autoHeight:!1,slidesPerView:2,spaceBetween:16},1440:{speed:600,autoHeight:!1,slidesPerView:4,spaceBetween:16}},navigation:{nextEl:n.querySelector(".swiper-button-next"),prevEl:n.querySelector(".swiper-button-prev")}})}).catch(t=>{h.error({title:"Error!",titleSize:"16",titleColor:"#fafafa",message:"Reviews not found",messageSize:"16",messageColor:"#fafafa",backgroundColor:"#1C1D20",theme:"dark",position:"bottomCenter",closeOnEscape:!0,closeOnClick:!0}),i.innerHTML='<p class="reviews-notfound">Not found</p>'})};document.addEventListener("DOMContentLoaded",e=>{l.use([f,m,v,b,L,g]),q(l)});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".covers-section"),n=document.querySelectorAll(".marquee-line");if(!e)return;const o=t=>{t.forEach(s=>{if(s.isIntersecting)for(let r of n)r.classList.add("animate");else for(let r of n)r.classList.remove("animate")})};new IntersectionObserver(o,{threshold:.2}).observe(e)});
//# sourceMappingURL=commonHelpers.js.map
