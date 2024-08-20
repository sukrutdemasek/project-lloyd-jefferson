import iziToast from 'izitoast';
import Swiper from 'swiper';
import {
  Autoplay,
  Navigation,
  Pagination,
  Keyboard,
  EffectFade,
  Controller,
} from 'swiper/modules';

// отримання з API відгуків //
const fetchReviews = async () => {
  const res = await fetch('https://portfolio-js.b.goit.study/api/reviews');
  if (!res.ok) {
    throw new Error(res.status);
  }
  return await res.json();
};

// створюємо один елемент відгуку //
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

// створення списку відгуків //
function createUlList(arrReviews) {
  return arrReviews.map(createLiItem).join('');
}

// основний скрипт по відгукам //
export const reviewsSwiper = Swiper => {
  const section = document.querySelector('.reviews-section');
  const reviewsBox = section.querySelector('.swiper-wrapper');
  const reviewsSlider = section.querySelector('.swiper-reviews');

  fetchReviews()
    .then(data => {
      const ulList = createUlList(data);
      reviewsBox.insertAdjacentHTML('beforeend', ulList);

      const swiper = new Swiper(reviewsSlider, {
        slidesPerView: 1,
        autoHeight: false,
          speed: 600,
         spaceBetween: 16,
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
    })
    .catch(err => {
      iziToast.error({
        title: 'Error!',
        titleSize: '16',
        titleColor: '#fafafa',
        message: `Reviews not found`,
        messageSize: '16',
        messageColor: '#fafafa',
        backgroundColor: '#1C1D20',
        theme: 'dark',
        position: 'bottomCenter',
        closeOnEscape: true,
        closeOnClick: true,
      });

      reviewsSlider.innerHTML = '<p class="reviews-notfound">Not found</p>';
    });
};

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
