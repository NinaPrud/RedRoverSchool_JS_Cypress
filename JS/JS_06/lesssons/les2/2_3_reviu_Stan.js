//document.write("Hello!")   //Выполнить(run)/Run without debugging/ выбрать браузер -> в lounch.js прописать "file":"${workspaceFolder}/index.html",
//alert("Как тебя зовут?")


// унарные операторы, явное приведение типов приведение типов

// let num1 = '1'
// let num2 = '5'
// console.log(num1 + num2)  // 15
// console.log(+num1 + +num2) // 6
// console.log(+num1 + num2) // 15
// console.log(Number(num1) + Number(num2)) // 6

// prompt  и  alert  всншда возвращает строку

// alert('Hello')
// let response = prompt('Please, enter the number:', 21)

// alert(response)

//======== преобразования
// --------  строковое


// --------  числовое

// let num;   // indefined
// //console.log(Number(num))    // NaN 

// let num1 = null;          
// //console.log(Number(num1))   // 0

// // -------- логическое

// let test = 0
// let test1 = '0'
// //console.log(Boolean(test))
// // 0, null, undefined, '', NaN- false
// // ' ', '0'  и все остальное - true
// //console.log(Boolean(test1))

// if(false) {
//     console.log('true')
// } else {
//     console.log('false')
// }


// с логикой &&  (слвева на право) интерпритатор ищет ПЕРВОЕ ЛОЖНОЕ условие, если оно надено, дальше ничего не проверяется
// let num = 5;
// if (num >= 7 && num <= 10) {
//     console.log('true')
//    } else {
//     console.log('false')
// }

// // &&
// // T && T == T
// // F && T == F
// // T && F == F
// // F && F == F

// // с логикой || (слвева на право) интерпритатор ищет ПЕРВОЕ ИСТИННОЕ условие, если оно надено, дальше ничего не проверяется
// let num1 = 5;
// if (num1 <= 7 || num1 >= 10) {
//     console.log('true')
//    } else {
//     console.log('false')
//}

// ||
// T || T == T
// F || T == T
// T || F == T
// F || F == F


// console.log(1 && null && 4) // null - (выведет первое ложное значение)
// console.log(null || 3 && 4 || 5) // 4 - (сначала проверит && -  там true, затем перейдет на ||  и выведет первое истинное значениее)
// //  3 & 4 - не найдет ложное и остановиться на 4 и запомнит
// // null || 4 || 5 - выведет 4
// console.log(null || 3 && null || 5) // 5
// console.log(null || 3 && null || undefined) // undefined

// =========== бинарные операторы - это математич (+, -, ** и тд.)

// ========== тернарный оператор  ? :
 
let test = 2
let test2 = 3

if(test < test2) {
    console.log("it's true")
}
else{
    console.log("it's false")
}
//  (условие)     if                       else
     test < test2 ? console.log("it's true") : console.log("it's false")
//3части  услов          правда                           лож
