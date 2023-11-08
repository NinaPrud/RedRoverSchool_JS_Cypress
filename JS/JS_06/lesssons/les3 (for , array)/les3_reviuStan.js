// Татьяна ---- 

// Если приходят буквы а и б в одинаковом регистр - вывести 1
// Если приходят е буквы (хотябы одна) - вывести -1
// Если обе буквы, но в разных регистрах - вывести 0

// let a = 'H'
// let b = "9"

// if (a.toLowerCase() === a.toUpperCase() || b.toLowerCase() === b.toUpperCase()){    //  проверка, что пришли НЕ буквы
//     console.log('-1')
// }
// else if (a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()) {   // проверка, что а и b  в одинаковом регистре
//     console.log('1')
// } else {
//     console.log('0')
// }




//--------------- вложенный if

// let num = 5 // заранее определено, что цыфры могут быть от 1 до 5

// if(num < 3) {
//     if(num == 1) {
//         console.log('One')
//     } else {
//         console.log('Two')
//     }
// } else if (num < 5) {
//     console.log('3-4')
// } else {
//     console.log('Five')
// }

// console.log('Doing')



//------------ switch

// let num1 = 5
// let num2 = 10

// switch (num1 + num2) {
//     case 1:
//         console.log('One');
//         break;
//     case 2:
//         console.log('Two');
//         break;
//     case 3:
//         console.log('Three');
//         break;
//     case 2 + 2:
//         console.log('Four');
//         break;
//     case 2 + 3:
//         console.log('Five');
//         break;
//     default:
//         console.log('Somerthing else')

// }

// let month = 11;

// switch (month) {
//     case 12:
//     case 1:
//     case 2:
//         console.log('Winter')
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log('Spring')
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log('Summer')
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log('Fall')
//         break;
//     default:
//         console.log('Error')
// }

// switch (true) {
//     case month == 1 || month == 2 || month == 12:
//         console.log('Winter')
//         break;
//     case month == 3 || month == 4 || month == 5:
//         console.log('Spring')
//         break;
//     case month == 6 || month == 7 || month == 8:
//         console.log('Summer')
//         break;
//     case month == 9 || month == 10 || month == 11:
//         console.log('Fall')
//         break;
//     default:
//         console.log('Error')
// }

//----------------- array


// let arr = [1, 2, 5, , {q:19}, [[1, 2], 78, 44, true]]
// console.log(arr[3])   //undefined

// console.log(arr[5]) // [ [ 1, 2 ], 78, 44, true ]
// console.log(arr[5][0]) // [ 1, 2 ]
// console.log(arr[5][0][1]) // 2
// console.log(arr[5][0][1], arr[4]) // 2 { q: 19 }

// const myArr = [1, 2, 3]
// // myArr = [2, 3] - перезаписать const нельзя, но можно изменить конкретный элемент
// console.log(myArr)  // [ 1, 2, 3 ]
// myArr[0] = true
// console.log(myArr)  // [ true, 2, 3 ]
// myArr[4] = false
// console.log(myArr)  // [ true, 2, 3, <1 empty item>, false ]
// console.log(myArr[3])  // undefined
// console.log(myArr.at(-1)) // false
// console.log(myArr[myArr.length-1])

// можно менять длинну массива и обнулять (строки нельзя)

// const arr2 = [15, 2, 3, 4,]
// console.log(arr2.length) // 4
// arr2.length = 10
// console.log(arr2.length) // 10
// console.log(arr2) // [ 15, 2, 3, 4, <6 empty items> ]
// arr2.length = 1
// console.log(arr2) // [ 15]  -  все остально утеряно безвозвратно ( обрезалось)
// // arr2 = [] - так с const  нельзя
// arr2.length = 0
// console.log(arr2) // []  - обнулился

// // лучше так не делать!


//-------------------- loops

//--------------- while -----do while

//let str = 'Hello';
// // console.log(str[0])
// // console.log(str[1])
// // console.log(str[2])
// // console.log(str[3])
// // console.log(str[4])
// let index = 0
// //console.log(str[index])

// // while (index < str.length) {
// //     console.log(str[index]);
// //     index++;
// // }
// // console.log('End')

// //  выполнится хотябы один раз - в этом разница (даже если условие неверное)
// do {
//     console.log(str[index]);
//     index++;
// } while (index < 0)
// console.log('End')

// --------- for
//разница с while  в том, что index - локальная переменная и меньше строчек сам код

// for(let index = 0; index < str.length; index++) {
//     console.log(str[index])
// }
// console.log('End')

