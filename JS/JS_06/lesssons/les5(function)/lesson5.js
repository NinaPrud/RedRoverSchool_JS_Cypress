

// ================ Option 1: Funtion declaration ========

// function name (params1, params2 ...) {
//     code block
//     return  //  не обязательно (можно consоle.log)
// }



// ============ Option 2: function expression =======

//let name = function (params1, params2 ...) {
    //     code block
    //     return  //  не обязательно
    // }


// ============ Option 3: arrow functions ====

// let name = (params1, params2 ...) => expression  // можно с {}

// клгда фуекция начинает работать

//1-  по событию (например пользователь кликнул на кнопку)
// 2- при вызове функции из кода
// 3 - при самовызове (по таймеру например)

// return -  возвращает и выходит из функции (как break)
// функия не всегда что-то возвращает (т.е. return  не применим)


// function sum (a, b) {
//     let result = a + b
//     return result
// }

// let sum2 = function (a, b) {
//     let result = a - b
//     console.log(result)
// }

// console.log(sum(10, 5))

// sum2(10, 5)

// let result = sum(2, 3) + 10
// console.log(result)

//--------------------

// function sum3 (a, b) {
//     let result = a + b
//     print(result)
// }

// sum3(16, 5)

// function print (arg) {
//     console.log(arg)
// }
// //print(20)

//------ !!!!!
// function declaration   может вызываться в ЛЮБОМ месте кода
// даже раньше, чем ее задекларировали

// при объявлении через переменную или стрелочной ф так не получится,
// они видят только то, что ниже

// ---------------- дефолтные значения

// function sum4 (a, b = 7) {
//     a = 8
//     let result = a + b
//     return result
// }
// console.log(sum4())    // 15

// function sum5 (a, b = 7) {
//     let result = a + b
//     return result
// }
// console.log(sum5(8))     // 15
// console.log(sum5(8, 10)) // 18

//--------------------------------
// при перезаписывании выведет последнее
// даже если консоль каньше последней!

// function num(a = 7) {
//     return a
// }

// console.log(num())  //  5

// function num(a = 5) {
//     return a
// }

// return  можно записывать с ()
// return (
//        code
//        block
// 

// НАЗВАНИЕ ФУНКЦИИ ДОЛЖНО НАЧИНАТЬСЯ С ГЛАГОЛА !! (по правилам хорошего тона)
// get...
// read...
// click...
// calck...
// creat...
// show...
// check...



