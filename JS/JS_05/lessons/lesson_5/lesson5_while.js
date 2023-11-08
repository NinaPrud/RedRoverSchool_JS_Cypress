//==========================while

// let i = 0
// while (i < 3) {
//     console.log(i);   //012
//     i++
// }

// let j = 7
// while (j != 0) {
//     console.log(j);  //7654321
//     j--
// }

// let k = 7
// while (k != 0) {
//     k--
// }
// console.log(k);      //0



// const arr = [1, 2, 3, 4, 5]

// let ind = 0
// while (ind < arr.length) {
//     console.log(arr[ind]);
//     ind++
// }


//================= do ... while
// // даже если условие фолс, один раз выполнится
// т.е. do  выполняется до тех пор пока while  правдивое


// let k = 0; 
// do {
//     console.log(k);
//     k++;
// } while (k > 3)

// // простой while  если условие фолс не выполниться совсем

// let g = 0
// while (g > 3) {
//     console.log(g)
//     g++
// }



// //================ break;  continue
// // Директива break  полностью прекращает выполнение цикла

// // continue ==> прерывает текущую итерацию циклов и 
// // продолжает выполнение цикла со следующей итерации

// for (let i = 0; i <= 10; i++){
//   if (i == 7) break;
//   console.log(i);                // 0 1 2 3 4 5 6 
// }

// console.log('********************************')

// for (let j = 0; j <= 10; j++){
//   console.log(j);                // 0 1 2 3 4 5 6 7
//   if (j == 7) break; 
// }


// // continue == "пропускай и иди дальше"

// for ( let i = 0; i <= 10; i++) {
//   if (i % 2 == 0) continue;       // выведе все числа, кроме тех,
//   console.log(i)                  // кот деляться на 2 без остатка
// }

// !!! Нельзя использовать break/continue  справа от оператора "?" (тернарный оператор)
//============ тернарный оператор (ternary operator)
//-------syntax:
//         if          else
// условие ? выражение 1 : выражение 2

// выдаст ошибку если
// let a = 7;
// (a > 5) ? console.log(a) : continue;

// //  так сработает
//  let a = 7;
//  (a > 7) ? console.log(a) : console.log("hi")


//========== inner loops ==== вложенные циклы

// 1         // line == 1
// 12        // line == 2
// 123       // line == 3
// 1234      // line == 4
// 12345     // line == 5

// можно делать как раньше с добавление к пустой строке в одинарном цикле с console.log внутри
// а можно использовать вложенные циклы

// for (let line = 1; line <= 5; line++) {  // 1-ый for отвечает за количество строк
//   let str = "";
//    for (let numInLine = 1; numInLine <= line; numInLine++) {
//    str = str + numInLine                 // 2 - ой for  отвечает за наполнение этой строки
//    }

//    console.log(str)
//   }


// // в обратном порядке

// for (let i = 5; i >= 1; i--) {
//   let str = "";
//   for (let j = 1; j <= i; j++){
//     str += j;
//   }
//     console.log(str);
// }

// чтобы рисовать разные фигуры, добавляем break
// тогда он будет пропускать либо строки, либо обрезать символы
// смотря в какой цикл ставить break
// мoжно и с continue

// for (let line = 1; line <= 6; line++) {
//   let str = "";
//   for (let num = 1; num <= line; num++) {
//     if (line == 3) break;
//     str += num;
//   }
//   console.log(str)
// }
// console.log('*************************')
// for (let line = 1; line <= 6; line++) {
//   let str = "";
//   for (let num = 1; num <= line; num++) {
//     str += num;
//   }
//   if (line == 3) break;
//   console.log(str)
// }


// //========== как достать элемент из вложенного массива
// //                    
// //                       _0_1_
// //            __0____1_____2___
// //         0            1         2     3
// let arr = [1, ["a", "b", [5, 7]], 3, "Hello"]
// console.log(arr[0])        // выведет 1
// console.log(arr[1][2][1])  // выведет 7
// console.log(arr[3][1])     // выведет e  // внутри строки к элементу обратились


//========== как проверить пустой массив

// let arr2 = [];

// if (arr2.length == 0) {
//   console.log("Пусто!")
// }

