// ---------------- https://www.codewars.com/kata/5413759479ba273f8100003d/train/javascript

// reverse использовать нельзя

// // 1.
// let array = [1,2,3]

// reverse = function(array) {
//     let arr = [];
//     for (i = 0; i < array.length; i++){
//       arr[i] = array[(array.length -1) - i]

//     }
//     return arr;
//   }
//   console.log(reverse(array))

//   //2 .map

//   reverse = function(array) {
//     return array.map((c, i) => array[array.length - 1 - i]);
//   }
//   console.log(reverse(array))


// ----------------------- https://www.codewars.com/kata/53dc54212259ed3d4f00071c	

// написать функция, по нахождению суммы всех элементов массива
// если массив пустов - вернуть 0


// function sum (numbers) {
//     while ( numbers.length == 0) {
//         return 0
//     }

//     let result = numbers.reduce((sum, e) => sum += e, 0);
//     return result;
// };

//https://www.codewars.com/kata/5a87449ab1710171300000fd/train/javascript

// 1



// function tidyNumber(n) {
//     let str = String(n)
//     let arr = str.split('')
//     let result
//      if (arr.length == 1) {
//          result = true;
//      } else {
//              for (i = 0; i < arr.length -1; i++) {
//                 if (arr[i] > arr[i + 1]) {
//                   result = false;
//                   break;
//                 } else {
//                   result = true;
//                 }
//              } 
//     } 
 
//   return result;
// }

// 2

// const tidyNumber = n =>
//   String(n).split('').sort().join('') == n

//или 

// function tidyNumber(n){
//     let result = String(n).split('').sort().join('') == n
//     return result
//   }
// console.log(tidyNumber(586697587))
// console.log(tidyNumber(102))
// console.log(tidyNumber(12345))
// //3

// const tidyNumber = n =>
//   [...`${n}`].sort().join(``) == n;




// // 4
// const tidyNumber = n => n.toString().split``.every((e, i, a) => !i || e >= a[i - 1]);

// console.log(tidyNumber(102))

//  console.log(tidyNumber(586697587))
//  console.log(tidyNumber(12345))
//  console.log(tidyNumber(1))


// -------------------- ПЕРЕВЕРНУТЬ ЧИСЛА

//   345 -> 543
// -234 ->  -432

// function convert(num) {
//     let str = "" + Math.abs(num)
//     return Math.sign(num) * (str.split('').reverse().join('')); // return Math.sign(num) * (+str.split('').reverse().join(''));  - не знаю зачем +
// }

// console.log(convert(-2345))






