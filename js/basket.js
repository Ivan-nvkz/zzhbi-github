'use strict';

document.addEventListener('DOMContentLoaded', () => {
   // Корзина  start ==========================================================================

   // Александр рабочий  ==========================================================================

   // let cart = {
   //    'Плита ребристая ': {
   //       "name": "blabla",
   //       "count": 3,
   //    },
   //    'Плита ': {
   //       "name": "gdggdrggr",
   //       "count": 3,
   //    },
   // };



   // document.addEventListener('click', function (event) {
   //    if (event.target.classList.contains('plus')) {
   //       plusFunction(event.target.dataset.idName);
   //       // console.log(event.target.dataset.idName);
   //    }
   //    if (event.target.classList.contains('minus')) {
   //       minusFunction(event.target.dataset.idName);
   //       // console.log(event.target.dataset.idName);
   //    }
   // });


   // const plusFunction = function (idName) {   // увеличить количество товара
   //    cart[idName]['count']++;
   //    renderCart();
   // };


   // const minusFunction = function (idName) {       // уменьшить количество товара
   //    if (cart[idName]['count'] - 1 == -1) {
   //       // deleteFunction(idName);
   //       return true;
   //    }
   //    cart[idName]['count']--;
   //    renderCart();
   // };


   // const deleteFunction = function (idName) {       // удалить товар
   //    // delete cart[idName];
   //    renderCart();
   // };

   // const renderCart = function () {
   //    console.log(cart);
   // };
   // renderCart();
   // Александр рабочий  ==========================================================================

   // Корзина  end   ==========================================================================





   // Счетчик  рабочий     ===================

   const counterInput = document.querySelector('.counter__input');
   const btnMinus = document.querySelector('.minus');
   const btnPlus = document.querySelector('.plus');
   const cartProductPrice = document.querySelector('.cart-product__price');
   const cartProductAmount = document.querySelector('.cart-product__amount');
   const btnDeletes = document.querySelectorAll('.cart-product__controls-btn');
   const summaryNumber = document.querySelector('.summary-number');
   const summaryNumberSum = document.querySelector('.summary-number__sum');
   const summaryNumberDiscont = document.querySelector('.summary-number__discont');   // скидка
   const summaryTotal = document.querySelector('.summary-bottom__number-total');   // итого

   summaryNumberSum.innerText = summaryNumberSum.textContent + ' Р';
   summaryNumberDiscont.innerText = summaryNumberDiscont.textContent + ' Р';
   summaryTotal.innerHTML = (parseInt(summaryNumberSum.textContent) - parseInt(summaryNumberDiscont.textContent) + ' Р');

   btnMinus.addEventListener('click', function () {
      if (counterInput.value > 1) {
         let counterInputValue = --counterInput.value;
         cartProductAmount.innerText = (counterInputValue * cartProductPrice.textContent);
         summaryNumber.innerText = (counterInput.value + ' шт');
         summaryNumberSum.innerText = (counterInputValue * (cartProductPrice.textContent) + ' Р');
         summaryTotal.innerText = ((counterInputValue * cartProductPrice.textContent) - parseInt(summaryNumberDiscont.textContent) + ' Р');
      }
   });

   btnPlus.addEventListener('click', function (e) {
      let counterInputValue = ++counterInput.value;
      cartProductAmount.innerText = (counterInputValue * (cartProductPrice.textContent));
      summaryNumber.innerText = (counterInput.value + ' шт');
      summaryNumberSum.innerText = (counterInputValue * (cartProductPrice.textContent)) + ' Р';
      summaryTotal.innerText = ((counterInputValue * cartProductPrice.textContent) - parseInt(summaryNumberDiscont.textContent) + ' Р');



      btnDeletes.forEach(btnDelete => {
         btnDelete.addEventListener('click', function () {
            counterInput.value = 1;
            cartProductAmount.innerText = cartProductPrice.textContent;
            summaryNumber.innerText = (counterInput.value + ' шт');
            summaryNumberSum.innerText = cartProductAmount.textContent + ' Р';
            summaryTotal.innerText = (parseInt(cartProductPrice.textContent) - parseInt(summaryNumberDiscont.textContent)) + ' Р';
         });
      });
   });
   // Счетчик  рабочий     ===================





   // Счетчик вебакадеми ==============================================================================

   // Код на один счетчик ==============================================================

   // const buttonMinus = document.querySelector('[data-action="minus"]');
   // const buttonPlus = document.querySelector('[data-action="plus"]');
   // const counterInput = document.querySelector('[data-counter="input"]');

   // buttonMinus.addEventListener('click', function () {

   //    if (counterInput.value > 1) {
   //       let counterInputValue = --counterInput.value;
   //    }



   //    console.log(789);
   // });

   // buttonPlus.addEventListener('click', function () {
   //    let counterInputValue = ++counterInput.value;

   //    console.log(counterInputValue);
   // });

   // Код на один счетчик ==============================================================


   // Код на все счетчики ==============================================================

   // Добавляем прослушку на всем окнем  

   // window.addEventListener('click', function (event) {

   //    // Объявляем переменную для счетчика
   //    let counter;

   //    // Проверяем клик строго по кнопкам плюс или минус 
   //    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {

   //       // Находим обертку счетчика 
   //       const counterBox = event.target.closest('.count__box');

   //       // Находим инпут с числом  счетчика 
   //       counter = counterBox.querySelector('[data-counter="input"]');
   //    }



   //    //  Проверяем является ли элемент по которому кликнули  кнопкой плюс 
   //    if (event.target.dataset.action === 'plus') {

   //       counter.value = ++counter.value;
   //    }

   //    //  Проверяем является ли элемент  по которому кликнули кнопкой минус 
   //    if (event.target.dataset.action === 'minus') {

   //       if (counter.value > 1) {
   //          counter.alue = --counter.value;
   //       }

   //    }


   // });






   // Код на все счетчики ==============================================================


   //  Корзина ====================


   // Создаём корзину ========================================================
   // ==============================================================================
   // Div внутри корзины, в который мы добавляем товары
   // const cartWrapper = document.querySelector('.basket-page__cart');
   // // const cartWrapper = document.querySelector('.catalog__card-items');

   // // console.log(cartWrapper);

   // // Отслеживаем клик на странице

   // window.addEventListener('click', function (event) {



   //    // Проверяем что клик был совершен по кнопке "Добавить в корзину"
   //    if (event.target.hasAttribute('data-cart')) {

   //       event.preventDefault();

   //       // Находим карточку с товаром, внутри котрой был совершен клик

   //       const card = event.target.closest('.catalog__item-card ');

   //       // Собираем данные с этого товара и записываем их в единый объект productInfo
   //       const productInfo = {
   //          id: card.dataset.id,
   //          imgSrc: card.querySelector('.card__images').getAttribute('src'),
   //          title: card.querySelector('.card__title').innerText,
   //          size: card.querySelector('.card__description-size').innerText,
   //          weight: card.querySelector('.card__description-weight').innerText,
   //          volume: card.querySelector('.card__description-volume').innerText,
   //          price: card.querySelector('.card__price').innerText,
   //          // counter: card.querySelector('[data-counter="input"]'),
   //          // counter: card.querySelector('cart-product__count'),
   //       };

   //       // console.log(productInfo);

   //       const cartProductHTML = `

   //                      <div class="cart-product">
   //                         <div class="cart-product__title">${productInfo.title} </div>
   //                         <div class="cart-product__count">
   //                            <div class="count">
   //                               <div class="count__box">
   //                                  <button class="cart-product__button plus" data-id-name="Плита ребристая "
   //                                     data-action="plus">+</button>
   //                                  <input class="counter__input" type="number" value="1" min="1" max="100"
   //                                     data-counter="input">
   //                                  <button class="cart-product__button minus" data-id-name="Плита ребристая "
   //                                     data-action="minus">-</button>
   //                               </div>
   //                            </div>
   //                         </div>
   //                         <div class="cart-product__price-box">
   //                            <div class="cart-product__price">${productInfo.price} </div><span
   //                               class="cart-product__price-money">Р</span>
   //                         </div>
   //                         <div class="cart-product__amount-box">
   //                            <div class="cart-product__amount">16000</div><span
   //                               class="cart-product__price-money">Р</span>
   //                         </div>
   //                         <div class="cart-product__controls">
   //                            <button type="button" class="cart-product__controls-btn">
   //                               <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
   //                                  <circle cx="15" cy="15" r="11.75" stroke="#7A8396" stroke-width="1.5" />
   //                                  <path d="M20 10L15 15M15 15L10 20M15 15L20 20M15 15L10 10" stroke="#7A8396"
   //                                     stroke-width="1.5" />
   //                               </svg>
   //                            </button>
   //                         </div>
   //                      </div>

   //       `;

   //       // Отобразим товар в корзине
   //       cartWrapper.insertAdjacentHTML('beforeend', cartProductHTML);


   //       console.log();
   //    }







   // });
   //  Корзина ====================








   // console.log();
   // console.log(buttonPlus);

   // Счетчик вебакадеми ==============================================================================






















});  