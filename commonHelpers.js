import{A as E,S as p,a as O,N as M,P as x,K as A,E as B,C as P,i as g}from"./assets/vendor-C-gZTN3c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();document.querySelector(".menu-link").addEventListener("click",function(e){e.preventDefault(),document.querySelector(".dropdown-menu").classList.toggle("show")});document.addEventListener("DOMContentLoaded",function(){function e(){document.querySelectorAll(".main-headline, .hero-contact-info").forEach(s=>{const r=s.getBoundingClientRect(),o=window.innerHeight||document.documentElement.clientHeight;r.top<=o-100&&r.bottom>=0?s.classList.add("in-view"):s.classList.remove("in-view")})}window.addEventListener("load",e),window.addEventListener("scroll",e)});document.addEventListener("DOMContentLoaded",function(){new E(".accordion-info-about-me-list",{duration:300,showMultiple:!0})});const L=document.querySelector(".about-me"),I=L.querySelector(".about-me-swiper"),v=new p(I,{slidesPerView:"auto",loop:!0,navigation:{nextEl:L.querySelector(".swiper-button-next"),loop:!0},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0}),h=L.querySelector(".swiper-button-next");h&&(h.addEventListener("click",function(){v.slideNext()}),document.addEventListener("keydown",function(e){e.key==="ArrowRight"?v.slideNext():e.key==="ArrowLeft"&&v.slidePrev()}));const u=document.querySelector(".projects-section"),k=u.querySelector(".swiper-projects-container");new p(k,{direction:"horizontal",loop:!1,speed:600,spaceBetween:50,pagination:{el:u.querySelector(".swiper-pagination"),clickable:!0},navigation:{nextEl:u.querySelector(".swiper-button-next"),prevEl:u.querySelector(".swiper-button-prev")},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{768:{speed:600,slidesPerView:1,spaceBetween:40},1440:{speed:600,slidesPerView:1,spaceBetween:50}}});const c=k.swiper,f=u.querySelector(".swiper-button-next"),m=u.querySelector(".swiper-button-prev");function q(){c.isEnd?f.classList.add("swiper-button-disabled"):f.classList.remove("swiper-button-disabled"),c.isBeginning?m.classList.add("swiper-button-disabled"):m.classList.remove("swiper-button-disabled")}q();f.addEventListener("click",()=>{f.classList.contains("swiper-button-disabled")||c.slideNext()});m.addEventListener("click",()=>{m.classList.contains("swiper-button-disabled")||c.slidePrev()});document.addEventListener("keydown",e=>{switch(e.key){case"ArrowLeft":m.classList.contains("swiper-button-disabled")||c.slidePrev();break;case"ArrowRight":f.classList.contains("swiper-button-disabled")||c.slideNext();break}});c.on("slideChange",q);document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".projects-button").forEach(t=>{t.addEventListener("click",()=>{const s=t.getAttribute("data-url");s&&(window.location.href=s)})})});document.addEventListener("DOMContentLoaded",function(){new E(".accordion-container",{showMultiple:!0,duration:300})});const N=async()=>{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!e.ok)throw new Error(e.status);return await e.json()};function j({author:e,avatar_url:t,review:s}){return`<li class="swiper-slide">
    <div class="reviews-item">
    <div class="element">
        <img class="review-section-img" src="${t}" alt="${e}"  />
        <h3 class="reviews-title">${e}</h3>
        <p class="reviews-text">${s}</p>
        </div>
    </div>
  </li>`}function D(e){return e.map(j).join("")}const V=e=>{const t=document.querySelector(".reviews-section"),s=t.querySelector(".swiper-wrapper"),r=t.querySelector(".swiper-reviews");N().then(o=>{const n=D(o);s.insertAdjacentHTML("beforeend",n),new e(r,{slidesPerView:1,autoHeight:!1,speed:600,spaceBetween:16,keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{768:{speed:600,autoHeight:!1,slidesPerView:2,spaceBetween:16},1440:{speed:600,autoHeight:!1,slidesPerView:4,spaceBetween:16}},navigation:{nextEl:t.querySelector(".swiper-button-next"),prevEl:t.querySelector(".swiper-button-prev")}})}).catch(o=>{g.error({title:"Error!",titleSize:"16",titleColor:"#fafafa",message:"Reviews not found",messageSize:"16",messageColor:"#fafafa",backgroundColor:"#1C1D20",theme:"dark",position:"bottomCenter",closeOnEscape:!0,closeOnClick:!0}),r.innerHTML='<p class="reviews-notfound">Not found</p>'})};document.addEventListener("DOMContentLoaded",e=>{p.use([O,M,x,A,B,P]),V(p)});(()=>{const e=document.querySelector(".menu-burger"),t=document.querySelector(".js-open-burger"),s=document.querySelector(".js-close-burger"),r=document.querySelectorAll(".burger-menu-nav-link"),o=document.querySelector(".burger-button-link"),n=document.body,i=()=>{if(e){const a=e.classList.contains("is-open");e.classList.toggle("is-open",!a),t.setAttribute("aria-expanded",!a),a?n.classList.remove("no-scroll"):n.classList.add("no-scroll")}},y=()=>{e&&(e.classList.remove("is-open"),t&&t.setAttribute("aria-expanded",!1),n.classList.remove("no-scroll"))};t&&t.addEventListener("click",i),s&&s.addEventListener("click",i),r.forEach(a=>{a.addEventListener("click",y)}),o&&o.addEventListener("click",y),window.matchMedia("(min-width: 768px)").addEventListener("change",a=>{a.matches&&e&&(e.classList.remove("is-open"),t&&t.setAttribute("aria-expanded",!1),n.classList.remove("no-scroll"))})})();const S=document.querySelector(".coopForm");let l=document.querySelector("#email"),d=document.querySelector("#comment");const b=JSON.parse(localStorage.getItem("feedback-form-state"));b&&(l.value=b.email||"",d.value=b.comment||"");function w(e){e.value=e.dataset.fullValue||e.value}function C(e){e.value.length>36&&(e.dataset.fullValue=e.value,e.value=`${e.value.substring(0,36)}...`)}l.addEventListener("focus",()=>w(l));l.addEventListener("blur",()=>C(l));d.addEventListener("focus",()=>w(d));d.addEventListener("blur",()=>C(d));S.addEventListener("submit",async function(e){e.preventDefault(),w(l),w(d);const t=l.value,s=d.value,r={email:t,comment:s};localStorage.setItem("feedback-form-state",JSON.stringify(r));try{(await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).ok?(alert("Success!"),S.reset(),localStorage.removeItem("feedback-form-state")):g.error({title:"Error!",titleSize:"16",titleColor:"#fafafa",message:"Request was not delivered",messageSize:"16",messageColor:"#fafafa",backgroundColor:"#1C1D20",theme:"dark",position:"bottomCenter",closeOnEscape:!0,closeOnClick:!0})}catch{g.error({title:"Error!",titleSize:"16",titleColor:"#fafafa",message:"Request was not delivered",messageSize:"16",messageColor:"#fafafa",backgroundColor:"#1C1D20",theme:"dark",position:"bottomCenter",closeOnEscape:!0,closeOnClick:!0})}});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".covers-section"),t=document.querySelectorAll(".marquee-line");if(!e)return;const s=o=>{o.forEach(n=>{if(n.isIntersecting)for(let i of t)i.classList.add("animate");else for(let i of t)i.classList.remove("animate")})};new IntersectionObserver(s,{threshold:.2}).observe(e)});
//# sourceMappingURL=commonHelpers.js.map
