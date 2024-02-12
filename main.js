
// Свайпер слайдер с подключением библиотеки
const swiper = new Swiper(".swiper", {
  // Navigation arrows
  loop: false,
  freeMode: false,
  slidesPerView: "auto",
  spaceBetween: 30,

  breakpoints: {
    600: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
  scrollbar: {
    // горизонтальная полоса
    el: ".slider-scrollbar",
  },
});


// Footer
const readBtn = document.querySelector("#button");
const btn = document.querySelector('#button-second')
const firstText =  document.querySelector('.footer__text')
const secondText = document.querySelector('.footer__text-second')



// Кнопка Read less
readBtn.addEventListener('click', (e)=>{
    e.target.classList.add('none')
    firstText.classList.add('none')
    secondText.classList.remove('none')
    btn.classList.remove('none')

})

// Кнопка Read more
btn.addEventListener('click', (e)=>{
    e.target.classList.add('none')
    readBtn.classList.remove('none')
    firstText.classList.remove('none')
    secondText.classList.add('none')
    window.scrollTo(0, document.body.scrollHeight)
})



// Free shipping 
const shippingLogo = document.querySelector('.free-shipping__logo')
const shippingText = document.querySelector('.free-shipping__text')
const arrowBtn = document.querySelector('#arrow-btn')


// Стрелка для Free shipping
arrowBtn.addEventListener('click', (e)=>{
    e.target.classList.toggle('transform')
    shippingLogo.classList.toggle('none')
    shippingText.classList.toggle('none')
   
})



// Checkout блок
const buyBtn = document.querySelector('.buynow__btn')
const btnCloseCheckout = document.querySelector('.checkout__btn-close')



// Появление блока checkout
buyBtn.addEventListener('click',()=>{
    document.querySelector('.buynow__container').classList.remove('fade-out')
    document.querySelector('.buynow__container').classList.add('fade-in')
})


// Скрытие блока checkout
btnCloseCheckout.addEventListener('click', ()=>{
    document.querySelector('.buynow__container').classList.remove('fade-in')
    document.querySelector('.buynow__container').classList.add('fade-out')
})




// Якорь до футера
document.querySelector('#footer').addEventListener('click', (e)=>{
    e.preventDefault()
    document.querySelector('#ftr').scrollIntoView({behavior:"smooth", block:'center', inline:"nearest"})
    
})



// Открытие меню бургер
document.querySelector('.nav-icon-btn').addEventListener('click',()=>{
    document.querySelector('.burger__container').classList.remove('none')
})




// Закрытие бургер меню

document.querySelector('.burger__menu-close').addEventListener('click', ()=>{
    document.querySelector('.burger__container').classList.add('none')
    
})


// Таймер обратного отсчета
const endTime = new Date();
endTime.setHours(47);
endTime.setMinutes(50);
endTime.setSeconds(40);

function countdown() {
  const now = new Date().getTime();
  const timeLeft = endTime - now;

  // Рассчитываем оставшееся время в часах, минутах и секундах
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Форматируем оставшееся время
  const formattedTime = hours.toString().padStart(2, '0') + ':' +
                        minutes.toString().padStart(2, '0') + ':' +
                        seconds.toString().padStart(2, '0');

  // Выводим оставшееся время в элемент с id "countdown"
  document.querySelector('.timer').textContent = formattedTime;

  // Проверяем, достигнуто ли время окончания акции
  if (timeLeft <= 0) {
    clearInterval(timer);
    // document.querySelector('.timer').textContent = 'Акция завершена!';
  }
}

// Запускаем таймер с интервалом в 1 секунду
const timer = setInterval(countdown, 1000);
