import Swiper from 'swiper';
import {
  Autoplay,
  Navigation,
  Pagination,
  Keyboard,
  EffectFade,
  Controller,
} from 'swiper/modules';


const fetchReviews = async () => {
  const res = await fetch('https://portfolio-js.b.goit.study/api/reviews');
  if (!res.ok) {
    throw new Error(res.status);
  }
  return await res.json();
};

function createLiItem({ author, avatar_url, review }) {
    return `<li class="swiper-slide">
    <div class="reviews-item">
    <div class="element">
        <img class="review-section-img" src="${avatar_url}" alt="${author}"  />
        <h3 class="reviews-title">${author}</h3>
        <p class="reviews-text">${review}</p>
        </div>
    </div>
  </li>`;
}

function createUlList(arrReviews) {
    return arrReviews.map(createLiItem).join('');
}


export const reviewsSwiper = Swiper => { 
    const section = document.querySelector('.reviews-section');

        const reviewsBox = section.querySelector('.swiper-wrapper');
       
        fetchReviews().then(data => { 

            const ulList = createUlList(data);
            reviewsBox.insertAdjacentHTML('beforeend', ulList);

            const reviewsSlider = section.querySelector('.swiper-reviews');
  

            const swiper = new Swiper(reviewsSlider, {
                slidesPerView: 1,
                autoHeight: true,
                speed: 0,
                keyboard: {
                    enabled: true,
                    onlyInViewport: false,
                },                
                breakpoints: {
                    768: {
                        speed: 600,
                        autoHeight: false,
                        slidesPerView: 2,
                        spaceBetween: 16,
                    },
                    1440: {
                        speed: 600,
                        autoHeight: false,
                        slidesPerView: 4,
                        spaceBetween: 16,
                    },
                },
                navigation: {
                    nextEl: section.querySelector('.swiper-button-next'),
                    prevEl: section.querySelector('.swiper-button-prev'),
                },
    
            });       


        }).catch(err => {
            reviewsBox.innerHTML = '<p class="reviews-notfound">Not found</p>';
      });
}


document.addEventListener('DOMContentLoaded', event => {
    Swiper.use([
        Autoplay,
        Navigation,
        Pagination,
        Keyboard,
        EffectFade,
        Controller,
    ]);
    reviewsSwiper(Swiper);
});