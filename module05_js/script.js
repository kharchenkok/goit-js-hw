// ===================================task-01===================================================
// Напиши функцію-конструктор Account, яка створює об'єкт з властивостями login і email.
// В prototype функції-конструктора добав метод getInfo(),
// який виводить в консоль значення полів login і email об'єкта який його викликав.
// const Account = function({login,email}){
// this.login = login;
// this.email = email;
// }

// Account.prototype.getInfo = function(){
//     console.log(`Login: ${this.login}, Email: ${this.email}`);
// }

// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });

// // console.log(mango);
// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com

// =========================================task -02===================================

// // Напиши клас User для створення користувача
// //  з наступними властивостями:
// // name - рядок
// // age - число
// // followers - число
// // Добав метод getInfo(), який, виводить
// // рядок: User ${ім'я} is ${вік} years old and has ${кількість фоловерів} followers
// class User {
//     constructor({name = "",age = 0,followers = 0}){
//     this.name = name;
//     this.age =age;
//     this.followers = followers;
//     }
//     getInfo(){
//         console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
//     }
// }

// const mango = new User({
//   name: 'Mango',
//   age: 2,
//   followers: 20,
// });

// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User({
//   name: 'Poly',
//   age: 3,
//   followers: 17,
// });

// poly.getInfo(); // User Poly is 3 years old and has 17 followers

// ================================task-03========================================
// // Напиши клас Storage, який буде створювати об'єкти для управління складом товарів.
// // При виклику буде отримувати один аргумент - початковий масив товарів,
// // і записувати його у властивість items.

// // Додай методи класу:

// // getItems() - повертає масив поточних товарів
// // addItem(item) - отримує новий товар і додає його до поточних
// // removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних
// class Storage{
//     constructor(itemsArr){
//         this.items = itemsArr
//     }
//     getItems(){
//         return this.items
//     }
//     addItem(item){
//         return this.items.push(item)
//     }
//     removeItem(item){
//         if (this.items.includes(item)){
//             this.items.splice(this.items.indexOf(item),1)
//         }
//         return this.items
//     }
// }

// const storage = new Storage([
//   'Нанітоіди',
//   'Пролонгер',
//   'Залізні жупи',
//   'Антигравітатор',
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

// storage.addItem('Дроїд');
// console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

// storage.removeItem('Пролонгер');
// console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]

// ================================task-04===============================================
// // Напиши клас StringBuilder.
// // На вхід він отримує один параметр - рядок, який записує у властивість _value.

// // Додай класу наступний функціонал:

// // Геттер value - повертає поточне значення поля _value
// // Метод append(str) - отримує параметр str (рядок) і додає його в кінець _value
// // Метод prepend(str) - отримує параметр str (рядок) і додає його на початок _value
// // Метод pad(str) - отримує параметр str (рядок) і додає його на початок і в кінець _value

// class StringBuilder {
//   constructor(someString) {
//     this._value = someString;
//   }
//   get value() {
//     return this._value;
//   }
//   append(str) {
//     return (this._value += str);
//   }
//   prepend(str) {
//     return (this._value = str + this._value);
//   }
//   pad(str) {
//     return (this._value = str + this._value + str);
//   }
// }

// const builder = new StringBuilder(".");

// builder.append("^");
// console.log(builder.value); // '.^'

// builder.prepend("^");
// console.log(builder.value); // '^.^'

// builder.pad("=");
// console.log(builder.value); // '=^.^='
