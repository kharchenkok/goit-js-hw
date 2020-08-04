// ===========================task-01===================================
// Напиши скрипт, який виконає наступні операції.

// Порахує і виведе в консоль кількість категорій в ul#categories,
// тобто елементів li.item. Вийде 'У списку 3 категорії.'.

// Для кожного елемента li.item в списку ul#categories,
// знайде і виведе в консоль текст заголовка елемента (тега h2)
// і кількість елементів в категорії (всіх вкладених в нього елементів li).

// Наприклад, для першої категорії вийде:

// Категорія: Тварини
// Кількість елементів: 4

// let categories = document.querySelector('#categories')
// const itemArray = categories.querySelectorAll('#categories .item')
// console.log(`У списку ${itemArray.length} категорії`);
// itemArray.forEach(elem =>{
//     console.log(`Категорія: ${elem.children[0].textContent}. Кількість елементів:${elem.children[1].children.length}`);
// })

// ==========================================task-02==================================================
// let ingredientsRef = document.querySelector('#ingredients')
// const ingredients = [
//     'Картопля',
//     'Гриби',
//     'Часник',
//     'Помідори',
//     'Зелень',
//     'Приправи',
//   ];
//   Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li,
//   після чого вставить всі li за одну операцію в список ul.ingredients.
//   Для створення DOM-вузлів використовуй document.createElement().

// =================ex-1=============================
// let markup = []
// let markup = ingredients.map(elem=>{
//   let newItem = document.createElement('li')
//   newItem.textContent = elem;
//   return newItem
// })
// ingredientsRef.append(...markup)

// ==================ex-2==============================
// let fragment = document.createDocumentFragment()
// ingredients.forEach(elem=>{
//   let newItem = document.createElement('li')
//   newItem.textContent = elem;
//   fragment.append(newItem)
// })
// ingredientsRef.append(fragment)

// =======================================task-03===============================================
// Використовуй масив об'єктів images для створення тегів img вкладених в li.
// Для створення розмітки використовуй шаблонні рядки і insertAdjacentHTML().

// Всі елементи галереї повинні додаватися в DOM за одну операцію вставки.
// Додай мінімальне оформлення галереї флексбоксами або грід через   css-класи.
// const images = [
//   {
//     url:
//       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];

// const galleryReff = document.querySelector('#gallery')

// let markup = images.reduce((acc,image) =>{
//   acc.push(`<li><img class="gallery-img" src = "${image.url}" alt="${image.alt}"/></li>`)
//   return acc
// },[])
// console.log(markup);
// galleryReff.insertAdjacentHTML('afterbegin', markup.join(' '))

// galleryReff.classList.add('gallery-list')

// ====================================task-04============================================

// Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати значення лічильника на 1.

// Створи змінну counterValue в якій буде зберігається поточне значення   лічильника.
// Створи функції increment і decrement для збільшення і зменшення значення   лічильника.
// Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу

// let incrementBtn = document.querySelector('[data-action="increment"]')
// let decrementBtn = document.querySelector('[data-action="decrement"]')
// let value = document.querySelector('#value')

// let counterValue = 0

// let increment = function(){ // робота з даними 
//     updateCurrentValue('increment')
//     updateHtmlValue()
// }
// let decrement = function(){
//     updateCurrentValue('decrement')
//     updateHtmlValue()

// }
// let updateCurrentValue = function(str){ // робота з даними
//     if(str === 'increment'){
//         counterValue +=1
//     }else{
//         counterValue -=1
//     }
// }
// let updateHtmlValue = function(){  //робота з DOM  - виносимо в окрему функцію
//     value.textContent = counterValue

// }

// incrementBtn.addEventListener('click', increment)
// decrementBtn.addEventListener('click', decrement)

// =====================================task-05=======================================
// Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input),
// підставляє його поточне значення в span#name-output. якщо інпут порожній,
//  в спані повинен відображатися рядок 'незнайомець'.

// let inputName = document.querySelector('#name-input')
// let outputName = document.querySelector('#name-output')

//  let showUserName = function(){
//    inputName.value === ''? outputName.textContent = 'незнайомець' : outputName.textContent = inputName.value
//  }
//  inputName.addEventListener('input', showUserName)

// =======================================task-06=======================================
// Напиши скрипт, який би при втраті фокуса на інпут, перевіряв
// його вміст на правильну кількість символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символів"
// />
// Скільки символів має бути в інпут, вказується в його атрибуті data-length.
// Якщо введена відповідна кількість, то border інпут стає зеленим,   якщо неправильне - червоним.
// Для додавання стилів, використовуй CSS-класи valid і invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const inputText = document.querySelector("#validation-input");
const checkLength = document.querySelector('[data-length="6"]');
let addClass = "";
let removeClass = "";

let checkInputValid = function () {
  let inputValue = inputText.value.length;
  let checkValue = Number(checkLength.dataset.length);
  if (inputValue !== checkValue) {
    addClass = "invalid";
    removeClass = "valid";
  } else {
    addClass = "valid";
    removeClass = "invalid";
  }

  inputText.classList.add(addClass);
  inputText.classList.remove(removeClass);
};





inputText.addEventListener("change", checkInputValid);
// // inputText.addEventListener('blur', checkInputValid)

// =========================================task-07======================================
// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і
// змінює інлайн-стиль span#text оновлюючи властивість font-size.
// В результаті при перетягуванні повзунка змінюватиметься розмір тексту.
// <input id="font-size-control" type="range" />
//     <br />
//     <span id="text">Абракадабра!</span>

// const inputRange = document.querySelector('#font-size-control')
// const text = document.querySelector('#text')

// let fontSizeControl = function(){
// text.style.fontSize=Number(inputRange.value)+'px'
// }

// inputRange.addEventListener('input', fontSizeControl)

// ==================================task-08=============================================
// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає кнопку Створити,
// після чого рендериться колекція. При натисканні на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає 1 параметр amount - число.
// Функція створює стільки div, скільки вказано в amount і додає їх в div#boxes.

// Кожен створений div:

// Має випадковий rgb колір фону
// Розміри найпершого div - 30px на 30px
// Кожен наступний div після першого, повинен бути ширше і вище попереднього на   10px
// Створи функцію destroyBoxes(), яка очищає div#boxes.
// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Створити</button>
//   <button type="button" data-action="destroy">Очистити</button>
// </div>
// <div id="boxes"></div>

// const controlsWrapper = document.querySelector("#controls");
// const inputNumber = controlsWrapper.querySelector("input");
// const renderBtn = controlsWrapper.querySelector('[data-action="render"]');
// const destroyBtn = controlsWrapper.querySelector('[data-action="destroy"]');
// const boxes = document.querySelector("#boxes");

// let createBoxes = function (amount) {
//   amount = Number(inputNumber.value);
//   if (amount <= inputNumber.max) {
//     let x = 30;
//     let markup = "";
//     for (let i = 1; i <= amount; i += 1) {
//       const getBackgroundColor = `rgb(${Math.round(
//         Math.random() * 255
//       )},${Math.round(Math.random() * 255)},${Math.round(
//         Math.random() * 255
//       )})`;
//       x += 10;
//       markup += `<div class="newBox" style="width:${x}px; height:${x}px; background-color:${getBackgroundColor}"></div>`;
//     }
//     boxes.innerHTML = markup;
//   } else {
//     alert("Введіть число до 100");
//   }
// };

// let deleteBoxes = function () {
//   inputNumber.value = "";
//   boxes.innerHTML = "";
// };

// renderBtn.addEventListener("click", createBoxes);
// // inputNumber.addEventListener("change", createBoxes);
// destroyBtn.addEventListener("click", deleteBoxes);
