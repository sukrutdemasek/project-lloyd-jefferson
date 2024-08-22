import{A as q,S as b,a as P,N as A,P as I,K as D,E as N,C as j,i as w}from"./assets/vendor-C-gZTN3c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();document.querySelector(".menu-link").addEventListener("click",function(e){e.preventDefault(),document.querySelector(".dropdown-menu").classList.toggle("show")});document.addEventListener("DOMContentLoaded",function(){function e(){document.querySelectorAll(".main-headline, .hero-contact-info").forEach(s=>{const r=s.getBoundingClientRect(),o=window.innerHeight||document.documentElement.clientHeight;r.top<=o-100&&r.bottom>=0?s.classList.add("in-view"):s.classList.remove("in-view")})}window.addEventListener("load",e),window.addEventListener("scroll",e)});document.addEventListener("DOMContentLoaded",function(){new q(".accordion-info-about-me-list",{duration:300,showMultiple:!0,openOnInit:[0]})});document.querySelector(".first-element-about");const S=document.querySelector(".about-me"),V=S.querySelector(".about-me-swiper"),g=new b(V,{slidesPerView:"auto",loop:!0,speed:600,navigation:{nextEl:S.querySelector(".swiper-button-next"),loop:!0},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0}),C=S.querySelector(".swiper-button-next");C&&(C.addEventListener("click",function(){g.slideNext()}),document.addEventListener("keydown",function(e){e.key==="ArrowRight"?g.slideNext():e.key==="ArrowLeft"&&g.slidePrev()}));const f=document.querySelector(".projects-section"),O=f.querySelector(".swiper-projects-container");new b(O,{direction:"horizontal",loop:!1,speed:600,spaceBetween:50,pagination:{el:f.querySelector(".swiper-pagination"),clickable:!0},navigation:{nextEl:f.querySelector(".swiper-button-next"),prevEl:f.querySelector(".swiper-button-prev")},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{768:{speed:600,slidesPerView:1,spaceBetween:40},1440:{speed:600,slidesPerView:1,spaceBetween:50}}});const a=O.swiper,m=f.querySelector(".swiper-button-next"),p=f.querySelector(".swiper-button-prev");function M(){a.isEnd?m.classList.add("swiper-button-disabled"):m.classList.remove("swiper-button-disabled"),a.isBeginning?p.classList.add("swiper-button-disabled"):p.classList.remove("swiper-button-disabled")}M();m.addEventListener("click",()=>{m.classList.contains("swiper-button-disabled")||a.slideNext()});p.addEventListener("click",()=>{p.classList.contains("swiper-button-disabled")||a.slidePrev()});document.addEventListener("keydown",e=>{switch(e.key){case"ArrowLeft":p.classList.contains("swiper-button-disabled")||a.slidePrev();break;case"ArrowRight":m.classList.contains("swiper-button-disabled")||a.slideNext();break}});a.on("slideChange",M);document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".projects-button").forEach(t=>{t.addEventListener("click",()=>{const s=t.getAttribute("data-url");s&&(window.location.href=s)})})});document.addEventListener("DOMContentLoaded",function(){new q(".accordion-container",{showMultiple:!0,duration:300})});const z=async()=>{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!e.ok)throw new Error(e.status);return await e.json()};function H({author:e,avatar_url:t,review:s}){return`<li class="swiper-slide">
    <div class="reviews-item">
    <div class="element">
        <img class="review-section-img" src="${t}" alt="${e}"  />
        <h3 class="reviews-title">${e}</h3>
        <p class="reviews-text">${s}</p>
        </div>
    </div>
  </li>`}function R(e){return e.map(H).join("")}const $=e=>{const t=document.querySelector(".reviews-section"),s=t.querySelector(".swiper-wrapper"),r=t.querySelector(".swiper-reviews");z().then(o=>{const n=R(o);s.insertAdjacentHTML("beforeend",n),new e(r,{slidesPerView:1,autoHeight:!1,speed:600,spaceBetween:16,keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{768:{speed:600,autoHeight:!1,slidesPerView:2,spaceBetween:16},1440:{speed:600,autoHeight:!1,slidesPerView:4,spaceBetween:16}},navigation:{nextEl:t.querySelector(".swiper-button-next"),prevEl:t.querySelector(".swiper-button-prev")}})}).catch(o=>{w.error({title:"Error!",titleSize:"16",titleColor:"#fafafa",message:"Reviews not found",messageSize:"16",messageColor:"#fafafa",backgroundColor:"#1C1D20",theme:"dark",position:"bottomCenter",closeOnEscape:!0,closeOnClick:!0}),r.innerHTML='<p class="reviews-notfound">Not found</p>'})};document.addEventListener("DOMContentLoaded",e=>{b.use([P,A,I,D,N,j]),$(b)});(()=>{const e=document.querySelector(".menu-burger"),t=document.querySelector(".js-open-burger"),s=document.querySelector(".js-close-burger"),r=document.querySelectorAll(".burger-menu-nav-link"),o=document.querySelector(".burger-button-link"),n=document.body,c=()=>{if(e){const l=e.classList.contains("is-open");e.classList.toggle("is-open",!l),t.setAttribute("aria-expanded",!l),l?n.classList.remove("no-scroll"):n.classList.add("no-scroll")}},v=()=>{e&&(e.classList.remove("is-open"),t&&t.setAttribute("aria-expanded",!1),n.classList.remove("no-scroll"))};t&&t.addEventListener("click",c),s&&s.addEventListener("click",c),r.forEach(l=>{l.addEventListener("click",v)}),o&&o.addEventListener("click",v),window.matchMedia("(min-width: 768px)").addEventListener("change",l=>{l.matches&&e&&(e.classList.remove("is-open"),t&&t.setAttribute("aria-expanded",!1),n.classList.remove("no-scroll"))})})();const k=document.querySelector(".coopForm");let i=document.querySelector("#email"),d=document.querySelector("#comment"),u=document.querySelector(".coopResultMsg"),y=document.querySelector(".modal-footer-overlay"),T=document.querySelector(".modal-footer-close-button"),x=document.body;const h=JSON.parse(localStorage.getItem("feedback-form-state"));h&&(i.value=h.email||"",d.value=h.comment||"");function L(e){e.value=e.dataset.fullValue||e.value}function B(e){e.value.length>36&&(e.dataset.fullValue=e.value,e.value=`${e.value.substring(0,36)}...`)}i.addEventListener("focus",()=>L(i));i.addEventListener("blur",()=>B(i));d.addEventListener("focus",()=>L(d));d.addEventListener("blur",()=>B(d));i.addEventListener("input",function(){i.value===""?(u.textContent="",i.style.removeProperty("border-color")):i.validity.patternMismatch?(u.textContent="Enter your Email correctly.",u.style.color="#e74a3b",i.style.borderColor="#e74a3b"):(u.textContent="Success!",u.style.color="#3cbc81",i.style.borderColor="#3cbc81")});k.addEventListener("submit",async function(e){e.preventDefault(),L(i),L(d);const t=i.value,s=d.value;if(!t||!s){w.error({title:"Error!",titleSize:"16",titleColor:"#fafafa",message:"Both fields are required.",messageSize:"16",messageColor:"#fafafa",backgroundColor:"#1C1D20",theme:"dark",position:"bottomCenter",closeOnEscape:!0,closeOnClick:!0});return}const r={email:t,comment:s};localStorage.setItem("feedback-form-state",JSON.stringify(r));try{(await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).ok?(x.classList.add("no-scroll"),y.classList.remove("hidden"),u.textContent="",i.style.removeProperty("border-color"),k.reset(),localStorage.removeItem("feedback-form-state")):w.error({title:"Error!",titleSize:"16",titleColor:"#fafafa",message:"Request was not delivered",messageSize:"16",messageColor:"#fafafa",backgroundColor:"#1C1D20",theme:"dark",position:"bottomCenter",closeOnEscape:!0,closeOnClick:!0})}catch{w.error({title:"Error!",titleSize:"16",titleColor:"#fafafa",message:"Request was not delivered",messageSize:"16",messageColor:"#fafafa",backgroundColor:"#1C1D20",theme:"dark",position:"bottomCenter",closeOnEscape:!0,closeOnClick:!0})}});T.addEventListener("click",E);document.addEventListener("keydown",function(e){e.key==="Escape"&&E()});y.addEventListener("click",function(e){e.target===y&&E()});function E(){y.classList.add("hidden"),x.classList.remove("no-scroll")}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".covers-section"),t=document.querySelectorAll(".marquee-line");if(!e)return;const s=o=>{o.forEach(n=>{if(n.isIntersecting)for(let c of t)c.classList.add("animate");else for(let c of t)c.classList.remove("animate")})};new IntersectionObserver(s,{threshold:.2}).observe(e)});(function(){const e=localStorage.getItem("selectedColor");e&&document.body.classList.add(e)})();document.addEventListener("DOMContentLoaded",()=>{const e=document.body,t=document.querySelector(".color-div"),s=document.querySelectorAll(".color-button");document.querySelector(".icon-paint-brush");const r=["red","green","blue","brick","rain","orange"],o=()=>{r.forEach(n=>e.classList.remove(n))};s.forEach((n,c)=>{n.addEventListener("click",v=>{v.stopPropagation(),o();const l=r[c];e.classList.add(l),t.classList.add("collapsed"),t.classList.remove("open"),localStorage.setItem("selectedColor",l)})})});
//# sourceMappingURL=commonHelpers.js.map
