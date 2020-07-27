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

================================task-03========================================