// ==============================================task-01==============================================
// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };
// // Напиши скрипт, який, для об'єкта user, послідовно:
// // додає поле mood зі значенням 'happy'
// user.mood = 'happy'

// // замінює значення hobby на 'skydiving'
// user.hobby = 'skydiving'

// // замінює значення premium на false
// user.premium = false

// // виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of
// const keys = Object.keys(user)
// for(let key of keys){
//     console.log(`${key}: ${user[key]}`)
// }

// ============================================task-02========================================
// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті.
// Функція повертає число - кількість властивостей.

// const countProps = function (obj) {
//   return Object.values(obj).length
// };

// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// ==============================================task-03======================================

// Напиши функцію findBestEmployee(employees), яка приймає об'єкт
// співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач).
// Співробітники і кількість виконаних завдань містяться як властивості
// об'єкта в форматі "ім'я":"кількість задач".

// const findBestEmployee = function (employees) {
//   let bestResult = 0;
//   let bestEmpName;
//   for (const key in employees) {
//     if (employees[key] > bestResult) {
//         bestResult = employees[key]
//         bestEmpName = key;
//     }
//   }
//   return `Найпродуктивніший співробітник ${bestEmpName}`;
// };

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux

// ========================================task-04========================================
// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат.
// Функція рахує загальну суму зарплати працівників і повертає її.
// Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".
// =======================ex1=====================================
// const countTotalSalary = function (employees) {
//   let totalSalary=0
//   for(const key in employees){
//       totalSalary += employees[key]
//   }
//   return totalSalary
// };

// ===========================ex2===================================
// const countTotalSalary = function (employees) {
//     let totalSalary=0
//     let salariesArr = Object.values(employees)

//     for(let salary of salariesArr){
//         totalSalary += salary
//     }
//     return totalSalary
//   };

// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400

// ==========================================task-5=============================================
// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості.
// Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроїд", price: 400, quantity: 7 },
//   { name: "Захоплення", price: 1200, quantity: 2 },
// ];
// ===============================ex1=======================================
// const getAllPropValues = function (arr, prop) {
//   let propArr = [];
//   for (let elem of arr) {
//     if (prop in elem) {
//       propArr.push(elem[prop]);
//     }
//   }
//   return propArr
// };

// ================================ex2==================================
// const getAllPropValues = function (arr, prop) {
//     let propArr = [];
//     for (let elem of arr) {
//         if(elem[prop]){
//             propArr.push(elem[prop])
//         }
//     }
//     return propArr
//   };

// console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []

// ===========================================task-06===================================

// // Напиши функцію calculateTotalPrice(allProdcuts, productName),
// // яка отримує масив об'єктів та ім'я продукту (значення властивості name).
// // Повертає загальну вартість продукту (ціна * кількість).

// // Викличи функції для перевірки працездатності твоєї реалізації.

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроїд", price: 400, quantity: 7 },
//   { name: "Захоплення", price: 1200, quantity: 2 },
// ];
// // ==========================ex1=========================================
// const calculateTotalPrice = function (allProdcuts, productName) {
//   let totalPrice = 0;
//   for (let product of allProdcuts) {
//     let { name, price, quantity } = product;
//     if (name === productName) {
//       totalPrice = price * quantity;
//     }
//   }
//   return totalPrice
// };
// ==============================ex-2========================================
// const calculateTotalPrice = function (allProdcuts, productName) {
//   let totalPrice = 0;
//   for (let product of allProdcuts) {
//     for (let key in product) {
//       if (product[key] === productName) {
//         totalPrice = product.price * product.quantity;
//       }
//     }
//   }
//   return totalPrice;
// };

// console.log(calculateTotalPrice(products, "Радар")); // 5200

// console.log(calculateTotalPrice(products, "Дроїд")); // 2800

// ===================================================task-07===================================================
// // Типів транзацкій всього два.
// // Можна покласти або зняти гроші з рахунку.

// const Transaction = {
//   DEPOSIT: "deposit", //type
//   WITHDRAW: "withdraw",
// };

// // Кожна транзакція - це об'єкт з властивостями: id, type і amount

// const account = {
//   id: 0,
//   // Поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
//   transactions: [],

//   // Метод створює і повертає об'єкт транзакції. Приймає суму amount і тип type транзакції.
//   createTransaction(amount, type) {
//     this.id += 1;
//     return {
//       //   id: Date.now(),
//       id: this.id,
//       type,
//       amount,
//     };
//   },

//   //    Метод відповідає за додавання суми до балансу. Приймає суму танзакції.
//   //    Викликає createTransaction для створення об'єкта транзакції після чого додає його в історію транзакцій
//   deposit(amount) {
//     this.balance += amount;
//     const depositTransaction = this.createTransaction(
//       amount,
//       Transaction.DEPOSIT
//     );
//     this.transactions.push(depositTransaction);
//     return console.log(
//       `Сума операції: + ${amount} кредитів. Залишок коштів на Вашому рахунку: ${this.balance} кредитів`
//     );
//   },

//   //    Метод відповідає за зняття суми з балансу. Приймає суму танзакції.
//   //    Викликає createTransaction для створення об'єкта транзакції, після чого додає його в історію транзакцій.

//   //    Якщо amount більше, ніж поточний баланс, виводь повідомлення
//   //    про те, що зняття такої суми не можливо, недостатньо коштів.
//   withdraw(amount) {
//     if (this.balance >= amount) {
//       this.balance -= amount;
//       const withdrawTransaction = this.createTransaction(
//         amount,
//         Transaction.WITHDRAW
//       );
//       this.transactions.push(withdrawTransaction);
//       return console.log(
//         `Сума операції: - ${amount} кредитів. Залишок коштів на Вашому рахунку: ${this.balance} кредитів`
//       );
//     } else {
//       return console.log(
//         `Зняття суми: ${amount} кредитів не можливо, недостатньо коштів на рахунку`
//       );
//     }
//   },

//   //    Метод повертає поточний баланс
//   getBalance() {
//     return `Сума Вашого поточного балансу: ${this.balance} кредитів`;
//   },

//   // Метод шукає і повертає об'єкт транзакції по id
//   getTransactionDetails(id) {
//     for (let transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//   },

//   //    Метод повертає кількість коштів певного типу транзакції з усієї історії транзакцій
//   getTransactionTotal(type) {
//     let transTotalSum = 0;
//     for (let transaction of this.transactions) {
//       if (transaction.type === type) {
//         transTotalSum += transaction.amount;
//       }
//     }
//     return `Загальна сума операцій ${type} : ${transTotalSum} кредитів`;
//   },
// };

// account.deposit(100);
// account.deposit(200);
// account.deposit(300);
// account.deposit(400);

// account.withdraw(50);
// account.withdraw(100);
// account.withdraw(200);
// account.withdraw(700);

// console.log(account.getTransactionTotal("deposit"));
// console.log(account.getTransactionTotal("withdraw"));
// console.log(account.getBalance());

// console.log(account.getTransactionDetails(4));
