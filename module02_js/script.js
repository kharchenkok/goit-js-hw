// ===============================task-01===============================================


// const logItems = function (array) {
// //   let newArr = [...array]; // щоб не працювати з  оригінальним масивом
//   for (let i = 0; i < array.length; i += 1) {
//     let itemNumber = array.indexOf(array[i]) + 1;
//     console.log(`${itemNumber} - ${array[i]}`);
//   }
// };

// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// =================================task-02==========================================

// const calculateEngravingPrice = function (message, pricePerWord) {
//   let wordsArr = message.split(" ");
//   return wordsArr.length * pricePerWord;
// };

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120

// ===============================task-03========================================

// const findLongestWord = function (string) {
//   let wordsArr = string.split(" ");
//   let longestWord = wordsArr[0];
//   for (let word of wordsArr) {
//     word.length > longestWord.length ? (longestWord = word) : "";
//   }
//   return longestWord;
// };

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'

// ======================================task-04========================================

// const formatString = function (string) {
//   if (string.length >= 40) {
//     return string.slice(0, 40) + "...";
//   } else {
//     return string;
//   }
// };

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//   ),
// );
// // вернется форматированная строка

// =======================================task-05===========================================
// const checkForSpam = function (message) {
//     let newMessage = message.toLowerCase()
//   if (
//     newMessage.includes("spam") ||
//     newMessage.includes("sale")
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// ==================================task-06================================================

// let input;
// const numbers = [];
// let total = 0;

// while (input !== null) {
//   input = prompt("Введіть,будь ласка, число");

//   if (Number.isNaN(Number(input))) {
//     alert("Було введено не число, спробуйте ще раз");
//     continue;
//   } else if (input !== null) {
//     numbers.push(Number(input));
//   }
// }

//     if (numbers.length > 0) {
//       for (let number of numbers) {
//         total += number;
//       }
//       alert(`Загальна сума введених чисел ${total}`);
//     } else {
//       alert("Скасовано користувачем");
//     }
  

// // const getTotalSum = function (inputNumbers) {
// //   if (inputNumbers.length > 0) {
// //     for (let number of inputNumbers) {
// //       total += number;
// //     }
// //     alert(`Загальна сума введених чисел ${total}`);
// //   } else {
// //     alert("Скасовано користувачем");
// //   }
// // };

// // getTotalSum(numbers);

// =================================task-07=================================

// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// const isLoginValid = function (login) {
//   if (login.length >= 4 && login.length <= 16) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const isLoginUnique = function (allLogins, login) {
//   if (allLogins.includes(login)) {
//     return false;
//   } else {
//     return true;
//   }
// };

// const addLogin = function (allLogins, login) {
//   if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
//     logins.push(login);
//     return `Логін "${login}" успішно доданий!`;
//   } else if (!isLoginValid(login)) {
//     return "Помилка! Логін повинен бути від 4 до 16 символів";
//   } else if (!isLoginUnique(allLogins, login)) {
//     return `Такий логін "${login}" вже використовується!`;
//   }
// };

// console.log(addLogin(logins, "Ajax")); // 'Логін успішно доданий!'
// console.log(addLogin(logins, "robotGoogles")); // 'Такий логін вже використовується!'
// console.log(addLogin(logins, "Zod")); // 'Помилка! Логін повинен бути від 4 до 16 символів'
// console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Помилка! Логін повинен бути від 4 до 16 символів'
