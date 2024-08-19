import{S as d,A as w,a as f,N as v,P as m,K as b,E as L,C as g,i as y}from"./assets/vendor-Cg3xXCPt.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();document.querySelector(".menu-link").addEventListener("click",function(e){e.preventDefault(),document.querySelector(".dropdown-menu").classList.toggle("show")});const u=document.querySelector(".swiper");new d(u,{direction:"horizontal",loop:!1,speed:600,spaceBetween:50,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0},breakpoints:{768:{speed:600,slidesPerView:1,spaceBetween:40},1440:{speed:600,slidesPerView:1,spaceBetween:50}}});const i=u.swiper,c=document.querySelector(".swiper-button-next"),l=document.querySelector(".swiper-button-prev");function p(){i.isEnd?c.classList.add("swiper-button-disabled"):c.classList.remove("swiper-button-disabled"),i.isBeginning?l.classList.add("swiper-button-disabled"):l.classList.remove("swiper-button-disabled")}p();c.addEventListener("click",()=>{c.classList.contains("swiper-button-disabled")||i.slideNext()});l.addEventListener("click",()=>{l.classList.contains("swiper-button-disabled")||i.slidePrev()});document.addEventListener("keydown",e=>{switch(e.key){case"ArrowLeft":l.classList.contains("swiper-button-disabled")||i.slidePrev();break;case"ArrowRight":c.classList.contains("swiper-button-disabled")||i.slideNext();break}});i.on("slideChange",p);document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".projects-button").forEach(s=>{s.addEventListener("click",()=>{const n=s.getAttribute("data-url");n&&(window.location.href=n)})})});document.addEventListener("DOMContentLoaded",function(){new w(".accordion-container",{showMultiple:!0,duration:300})});const h=async()=>{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!e.ok)throw new Error(e.status);return await e.json()};function E({author:e,avatar_url:s,review:n}){return`<li class="swiper-slide">
    <div class="reviews-item">
    <div class="element">
        <img class="review-section-img" src="${s}" alt="${e}"  />
        <h3 class="reviews-title">${e}</h3>
        <p class="reviews-text">${n}</p>
        </div>
    </div>
  </li>`}function S(e){return e.map(E).join("")}const q=e=>{const s=document.querySelector(".reviews-section"),n=s.querySelector(".swiper-wrapper"),a=s.querySelector(".swiper-reviews");h().then(t=>{const r=S(t);n.insertAdjacentHTML("beforeend",r),new e(a,{slidesPerView:1,autoHeight:!0,speed:600,spaceBetween:16,keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{768:{speed:600,autoHeight:!1,slidesPerView:2,spaceBetween:16},1440:{speed:600,autoHeight:!1,slidesPerView:4,spaceBetween:16}},navigation:{nextEl:s.querySelector(".swiper-button-next"),prevEl:s.querySelector(".swiper-button-prev")}})}).catch(t=>{y.error({title:"Error!",titleSize:"16",titleColor:"#fafafa",message:"Reviews not found",messageSize:"16",messageColor:"#fafafa",backgroundColor:"#1C1D20",theme:"dark",position:"bottomCenter",closeOnEscape:!0,closeOnClick:!0}),a.innerHTML='<p class="reviews-notfound">Not found</p>'})};document.addEventListener("DOMContentLoaded",e=>{d.use([f,v,m,b,L,g]),q(d)});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".covers-section"),s=document.querySelectorAll(".marquee-line");if(!e)return;const n=t=>{t.forEach(r=>{if(r.isIntersecting)for(let o of s)o.classList.add("animate");else for(let o of s)o.classList.remove("animate")})};new IntersectionObserver(n,{threshold:.2}).observe(e)});
//# sourceMappingURL=commonHelpers.js.map
