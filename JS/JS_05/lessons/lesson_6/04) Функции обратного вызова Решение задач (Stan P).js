// // //
// // //---------------  функции можно переприсваивать

// // const printMessage = function(param) {                    //function exprition
// //     console.log(`Спешу всем сказать ${param}`);
// // }

// // printMessage("привет!")

// // console.log(typeof printMessage)   // можно посмотреть тип - данной переменной присвоен тип function

// // // мщжно переприсвоить данную функцию в другую переменную
// // let a = 1;
// // let b = a;
// // console.log(b) //1

// // // так и с функцией

// // const newMessage = printMessage;

// // newMessage("ПРИВЕТ!")

// //----------------- мщжно в функци. передавать другую функцию

// // function sum (num1, num2) {
// //     return num1 + num2;
// // }

// // console.log(sum(10,20))  //30

// // колл бэк функция (ф. которая передается  как аргумент ф другую функцию
// // для выполнения какого-то действия) 
// //- или анонимная функция

// function sum(num1, num2) {
//     return function () {
//         return num1 + num2;
//     }
// }

// console.log(sum(10, 20))    //[Function (anonymous)]

// const newSum = sum(10, 20);

// console.log(newSum);        //[Function (anonymous)]
// console.log(newSum());     // 30

// //------
// // обычный вид
// const calc = function (num1, num2, operator) {
//     if (operator.toLowerCase() == "add") {      // toLowerCase() -  метод, кот. перводит все в нижний регистр
//         return num1 + num2;
//     }
//     if (operator.toLowerCase() == "sub") {
//         return num1 - num2;
//     }
// }

// console.log(calc(1, 5, "Add"));

// // тоже с использ callback функций (обратного вызова)

// const calc1 = function (num1, num2, callback) {
//     return callback(num1, num2);

// }

// const add = function (num1, num2) {         // можно и чере декларейшион, даже лучше
//     return num1 + num2;
// }

// const sub = function (num1, num2) {
//     return num1 - num2;
// }

// console.log(calc1(2, 6, add));       // 8

// // т.е работает одна ф., но методы вытаскиваются из др. ф-й

// // можно и так:

// console.log(calc1(2, 6, function (num1, num2) {         // вместо edd  в третий аргумент передать запись функции
//     return num1 + num2;
// })); 

// ============================= задачи

//-----47:45---Debug Basic Calculator----https://www.codewars.com/kata/56368f37d464c0a43c00007f/train/javascript
/*

 Debug a function called calculate that takes 3 values. 
The first and third values are numbers. 
The second value is a character. 
If the character is "+" , "-", "*", or "/", 
the function will return the result of the corresponding mathematical function on the two numbers. 
If the string is not one of the specified characters, the function should return null.
calculate(4,"/",0) //should return null
*/

// var calculate = function calculate(a, o, b) {
//     var result = 0;

//     if (o === "+") {
//         return a + b;
//     }
//     if (o === "-") {
//         return a - b;
//     }

//     if (o === "/" && b != 0) {
//         return a / b;
//     }
//     if (o === "*") {
//         return a * b;
//     }
//     if (o === "/" && b === 0) {
//         return null;
//     }
//     if (o != "/" || o != "*" || o != "+" || o != "-") {
//         return null;
//     }

//     return result;
// }

// console.log(calculate(2, "+", 4)); //Should return 6
// console.log(calculate(6, "-", 1.5)); //Should return 4.5
// console.log(calculate(-4, "*", 8)); //Should return -32
// console.log(calculate(49, "/", -7)); //Should return -7
// console.log(calculate(8, "m", 2)); //Should return null
// console.log(calculate(4, "/", 0)) //should return nul


//---55:17------Count of positives / sum of negatives--------https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

/*
Дан массив целых чисел.
Возвращает массив, где первый элемент — это количество положительных чисел, 
а второй элемент — сумма отрицательных чисел. 
0 не является ни положительным, ни отрицательным.
Если вход представляет собой пустой массив или имеет значение null, верните пустой массив.
Пример
Для ввода [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
вы должны вернуть [10, -65].

*/

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
// let n = null;
// let zero = [];

function sumCount(arr) {
    let sum = 0;
    let count = [];
        if (arr == null || arr.length == 0) {
        return [];
    }
    else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {             
                count.push(arr[i]);          
            }
            else if (arr[i] < 0) {
                sum += arr[i];
            }
        }
        return [count.length, sum];
    }
}
//                                          // даже у пустого массива есть длинна!!! она равна 0
// console.log(sumCount(zero))

// function sumCount2(arr) {
//     let sum = 0;
//     let count = 0;
// // let a = [0,0]
//     if (arr == null || arr.length == 0) {
//         return [];
//     }
//     else {
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] > 0) {             
//                 count++;   // a[0]++       
//             }
//             else if (arr[i] < 0) {
//                 sum += arr[i];  //a[1] += arr[i]
//             }
//         }
//         return [count, sum];     // return a
//     }
// }
// console.log(sumCount2(zero))


//-----------1:19--------------Grasshopper - Debug-------------------https://www.codewars.com/kata/55cb854deb36f11f130000e1/train/javascript
/*
Чтобы перевести фаренгейты в градусы Цельсия:

celsius = (fahrenheit - 32) * (5/9)
*/


function weatherInfo (temp) {
    var c = convertToCelsius(temp)
    if (c <= 0) {
      return (c + " is freezing temperature")
    }
    else {
      return (c + " is above freezing temperature")
      }
  }
  
  function convertToCelsius (temperature) {
    var celsius = (temperature - 32) * (5/9)
    return celsius
  }
//   console.log(weatherInfo(32))

//-----------------Jaden Casing Strings---------------https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript

//----1:40 примерно