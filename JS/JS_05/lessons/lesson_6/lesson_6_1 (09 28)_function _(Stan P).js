// print("Nina")

// function print(n) {
//     console.log(n);
// }

// print(555)

//function print() {
//     console.log("Hi!");
// }

// print()

// // const print = function() {
// //     console.log("Hi!");
// // };
// print([4])

//---------------------------------------------------

// function checkEven(num) {          // функция проверки на четность
//     console.log(num % 2 ? "false" : "true"); //т.к. 0 это false, а все остальные цифры  true
//   //console.log(num %2 == 0) ? true : false // тоже самое 

// }

// Мщжно использовать с циклами
//   let arr = ([2, 4, 5, 7, 10])

//  for (let i = 0; i <arr.length; i++){
//     checkEven(arr[i]);
//  }
//-------------------------------------------------
// function checkEven(num) {
//     return num % 2 == 0 ? "even четное" : "odd нечетное";

// }

// //let arr = ([2, 4, 5, 7, 10])
// for (let i = 0; i <arr.length; i++){
//     console.log(`${arr[i]} -  ${checkEven(arr[i])}`)

//     }

//     // НАЗВАНИЕ ФУЕНКЦИИ ДОЛЖНО БЫТЬ УНИКАЛЬНОЕ

//--------------------------------------------------------

// let name = "Jhon"
// function printMessage() {
//     let name = "Anna";      // это закоментить, то выведет хелло джон
//     return "Hello, " + name;
// }
// console.log(printMessage());
// console.log(name)          // т.к. name  только в зоне видимости функции (в блоке кода)

//если объявить name за пределами функции так же , то консоль лог увидит ее

//----------------------функция может переприсвоить глобальную переменную

// let name = "Jhon"
// console.log(name)              //  Jhon
// console.log(printMessage());     // Hello, Jhon

// function printMessage() {

//     return name = "Hello, " + name;
// }

// console.log(name)               // здесь тоже будет    Hello, Jhon   

//поэтому нужно быть оккуратным с этим

// let name = "Jhon"
// console.log(name)              //  Jhon
// console.log(printMessage());     // Hello, Anna

 //function printMessage() {
//     let name = "Anna"
//     return name = "Hello, " + name;
// }

// console.log(name)                 //  Jhon

//здесь не переприсвоила, т.к. ф. взяла локальную переменную Анна, а глобального Джона не трогала

//-------------- вызов функции можно присваивать в переменную

// let str = printMessage()
// console.log(str)

//--- есле не делать return, то результатом ф. будет indefined
//--- return нужен чтобы вернуть(передать) результат функции туда ( в место), где мы ее вызовем
//--- можно и console.log (без return) , но тогда только один раз в ф., а потом просто вызывать ее (два консоля дадут indefined)

// function decl  видит функцию везде
// а  function declar  только если она сверху

  //print()             //  ошибка 'print' before initialization
//  const print = function(){
//     console.log("Hello!")
//  }
//  print()             // Hello!


//===============ПЕРЕЗАПИСЫВАНИЕ ГЛОБ ПЕРЕМ
//-----1--когда локал:

// function count() {
//     let num = 10;     //работает только с локал в пределах ф. и каждый раз стират код после вызова
//     num++
//     console.log(num);
// }
// count();  // 11
// count();  // 11
// count();  // 11

//-----2--когда глобал:

// let num = 10;

// function count() {
//     num++               // ф. перезапишет глобальную переменную              
//     console.log(num);
// }
// count();  // 11
// count();  // 12
// count();  // 13

//----3--- когда глобал + локал:

// let num = 10;

// function count() {
//     let num = 10;      // в приор лок поэтому НЕ перезапишн  
//     num++                         
//     console.log(num);
// }
// count();  // 11
// count();  // 11
// count();  // 11

// ФУНКЦИИ НУЖНЫ, ЧТОБЫ УБРАТЬ ОДНОТИПНЫЕ ДЕЙСТВИЯ ИЗ ПРОГРАММЫ!


//==============ПАРАМЕТРЫ===============

// function sum(num1, num2) {       // ПАРАМЕТРЫ  на вводе
//     return num1 + num2;
// }

// console.log(sum(10, 20) + sum(30, 50));    // АРГУМЕНТЫ  на вызове  (значения параметров)
// //console.log(sum(30, 50));

// function count(num1, num2, operator) {
//     switch (operator) {
//         case "+":
//             return num1 + num2;  // return означает верни И ПРЕРВИ выполнение функции
//             break;  // поэтому break  после return не нужен! мы сюда просто не доходим
//         case "-":
//             return num1 - num2;
//             break;

//     }
// }

// console.log(count(10, 20, "+"))

// ----------или так можно

// function count(num1, num2, operator) {
//     let result
//     switch (operator) {
//         case "+":
//             result = num1 + num2;  
//             break;                     // break  нужен
//         case "-":
//             result = num1 - num2;
//             break;
//     }
//     return result;              //  и обязательно return  !!! иначе будет undefined
// }

// console.log(count(10, 20, "+"))

// //лучше первый вариант - короче

//----------------если забыть один аргумент------------------------
//  фуекция отработает, но результат будет не то, что ожидаем:

// function sum(num1, num2) {
//     return num1 + num2;         // 10 + indefined = NaN
// }

// console.log(sum(10));

//----------  если лишние арг задать - обрежет их:

// function sum(num1, num2) {
//     return num1 + num2;         
// }

// console.log(sum(10, 20, 50, 80));   // 30 = 10 +20 , а два последних обрежет
 
//------------ можно задавать значения по умолчанию:
// тогда не будет NuN  если забыли аргумент

// function sum(num1 = 0, num2 = 0) {
//     return num1 + num2;
// }
// console.log(sum(10));   // будет 10 ( 10 + 0 = 10)
// console.log(sum());   // будет 0 ( 0 + 0 = 0)

//  NuN  может привести к обрушению кода!!!!

//-------- зарезервированное слово arguments 
// нужно, когда мы не знаем сколько будет аргументов

// function sum() {
//     let sum = 0
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }
// console.log(sum(10, 3, 10))



// let arr = [10, 20, 30, 40, 50];
// let result = sum(...arr)   // оператор ... спред - переделывает массив в последовательность чисел
// console.log(result)


//=================  Стрелочная функция =====
// подпадает под те же ограничения, что экспрешион
// т.е. ЕЕ НУЖНО ОБЪЯВЛЯТЬ ДО ТОГО, КАК БУДЕМ ЕЮ ПОЛЬЗОВАТЬСЯ !!!

// //1
// function sum(num1, num2) {     // обычная
//     return num1 + num2;
// }
// //2
// const sum1 = (num1, num2) => {  //стрелочная
//     return num1 + num2
// }
// //3
// const sum2 = (num1, num2) => num1 + num2  // стрелочная упрощенный вид (когда одна строчка в теле кода)

// console.log(sum(10, 20));   // 30
// console.log(sum1(10, 20));  // 30
// console.log(sum2(10, 20));  // 30

// //-------  если один парам можно без скобок
// //1
// function getPow(num) {    
//     return num ** 2;      
// }
// //2
// const newGetPow = num => num ** 2;   

// console.log(getPow(10));     // 100
// console.log(newGetPow(10));  // 100


