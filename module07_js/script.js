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
// let itemArray = categories.querySelectorAll('.item')
// console.log(`У списку ${categories.children.length} категорії`);
// itemArray.forEach(elem =>{
//     console.log(`Категорія: ${elem.querySelector('h2').textContent}. Кількість елементів:${elem.querySelector('ul').children.length}`);
// })

// ===============================task-02==========================================
const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
  ];
//   Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li, 
//   після чого вставить всі li за одну операцію в список ul.ingredients. 
//   Для створення DOM-вузлів використовуй document.createElement().
  let ingredientsRef = document.querySelector('.ingredients')
  ingredients.forEach(elem=>{
    //   console.log(ingredients);
  })