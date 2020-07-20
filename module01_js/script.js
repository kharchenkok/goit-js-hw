// ==========================task-01============================================
// const name = 'Генератор захисного поля'
// let price = 1000

// console.log(`Обрано "${name}", ціна за штуку ${price} кредитів`);
// // price = 2000
// price +=price
// console.log(`Обрано "${name}", ціна за штуку ${price} кредитів`);

// ======================================task-02======================================

// const total = 100;
// const ordered = 130;
// if(ordered <= total){
//     console.log("Замовлення оформлено, з вами зв'яжеться менеджер");
// }else{console.log("На складі недостатньо товарів!")}

// =======================================task-03=========================================
// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;
// const userPassword = prompt(`Enter your password`)

// // ============= if-else =====================================================
// // if (userPassword === null){
// //     message='Скасовано користувачем!'
// //     alert(message)
// // }else if(userPassword === ADMIN_PASSWORD){
// //     message='Ласкаво просимо!'
// //     alert(message)
// // }else {
// //     message='Доступ заборонений, невірний пароль!'
// //     alert(message)
// // }
// // console.log(userPassword);
// // =========================switch=============================================
// switch (userPassword) {
//     case null:
//         message='Скасовано користувачем!'
//         alert(message)
//         break;
//     case ADMIN_PASSWORD:
//         message='Ласкаво просимо!'
//         alert(message)
//         break;

//     default:
//         message='Доступ заборонений, невірний пароль!'
//         alert(message)
//         break;
// }

// ====================================task-04=====================================
// const credits=23580
// const pricePerDroid= 3000
// let userOrder = prompt('Вкажіть кількість дроїдів, яку Ви бажаєте придбати')
// let totalPrice = userOrder*pricePerDroid
// if (userOrder!==null){
//  if(!isNaN(userOrder)){
//     if(totalPrice>credits){
//         alert ('Недостатньо коштів на рахунку!')
//     }else{
//         let userBalance = credits-totalPrice
//         alert(`Ви купили ${userOrder} дроїдів, на рахунку залишилося ${userBalance} кредитів.`)
//     }
//  }else{alert('Введіть, будь ласка, число')}
// }else{alert('Скасовано користувачем!')}

// ========================================task-05=================================
// let userCountry = prompt('Вкажіть Вашу країну для доставки')
// let price
// if (userCountry!==null){
//     if(isNaN(userCountry)){
//     switch (userCountry.toLowerCase()) {
//             case 'китай':
//                 price=100
//                 alert(`Доставка в ${userCountry} буде коштувати ${price} кредитів`)
//                 break;
//             case 'чилі':
//                 price=250
//                 alert(`Доставка в ${userCountry} буде коштувати ${price} кредитів`)
//                 break;
//             case 'австралія':
//                 price=170
//                 alert(`Доставка в ${userCountry} буде коштувати ${price} кредитів`)
//                 break;
//             case 'індія':
//                 price=80
//                 alert(`Доставка в ${userCountry} буде коштувати ${price} кредитів`)
//                 break;
//             case 'ямайка':
//                 price=120
//                 alert(`Доставка в ${userCountry} буде коштувати ${price} кредитів`)
//                 break;
            
//             default:
//                 alert('У вашій країні доставка недоступна')
//                 break;
// }} else{alert('Ви ввели число')}
// }else { alert('Скасовано користувачем')}

// =======================================task-06=========================================

// let input;
// let total = 0;
// do{
//     input=prompt('Введіть,будь ласка, число')
//     if(isNaN(input)){
//     alert(`"${input}" не число. Введіть,будь ласка, число`)
//     }else{
//         total += Number(input);
//         alert(`Загальна сума введених чисел ${total}`);
//     }
// }while(input!==null)