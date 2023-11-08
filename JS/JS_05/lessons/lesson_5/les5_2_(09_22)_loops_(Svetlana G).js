// оращаемся с внутренними элементами массива с помощью циклов
// let arr = ['mama', 'my', [1, 2, null, undefined, true, 'c', 'vav'], 'cpapac', 'abc'];
// console.log(arr[2][0])    // выведет цифру 1
// console.log(arr[2], arr[0])   //выведет [ 1, 2, null, undefined, true, 'c', 'vav' ] mama   -второй и нулевой элементы 
// console.log(arr[2] + arr[0])   //         1,2,,,true,c,vavmama
// console.log(arr[2][6][1])     // выведет а

// for (let i = 0; i < arr.length; i++) { //идем по элементам массива
//     for (let j = 0; j < arr[i].length; j++) {  // идем по элементам элементов массива, т.е по буквам или вложенным массивам
//         if (arr[i][j] == 'c') {
//             console.log(arr[i]);
//             //break                 //  с break cpapac  покажет только один раз, без - два
//         }


//     }
// }

//-------------------------

// let column = 5;
// let row = 3;
// for (let i = 0; i <= column; i++) {
//     for (let j = 0; j < row; j++) {
//         console.log(i + "." + j);
//     }
// }

//==================== задачи

// ----------You only need one - Beginner	https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript

//решение
// function check(a, x) {
//     for(let i = 0; i < a.length; i++) {
//       if (a[i] == x) {
//         return true;
//       }
//     }
//     return false;

//   }

//-------------- Calculate average	https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

let array = [2, 3];
//let array = []
let num = 0;

if (array.length == 0) {
    console.log("0");
} else {

    for (let i = 0; i < array.length; i++) {
        num += array[i];
    }

    let average = num / array.length;

    console.log(average);
}

// function findAverage(array) {
//     let num = 0;
//     if (array.length == 0) {
//       return "0";
//     } else {
  
//       for (let i = 0; i < array.length; i++) {
//           num += array[i];
//       }
  
//       let average = num / array.length;
  
//       return average;
//     }
//   }


// ---- max diff - easy------    https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095/train/javascript
// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.
// lst contains integers, that means it may contain some negative numbers
// if lst is empty or contains a single element, return 0
// lst is not sorted

// function maxDiff(list) {
//     if (list.length <= 1)
//     return 0;
  
//   let maxList = list[0];
//   let minList = list[0];
  
//   for (let i = 1; i <list.length; i++) {
//     if (maxList < list[i]) {
//       maxList = list[i];
//     }
//     if (minList > list[i]) {
//       minList = list[i];
//     }
//    }
//     return maxList - minList;
//   };
// вывести разницу между максимальным и мин знач в массиве
// при этом проверить, что в массиве больше одного элемента
let list = [1, 45, 0, 89, 1]
if (list.length <= 1){
    console.log("0");
}
  let maxList = list[0];
  let minList = list[0];
  
  for (let i = 1; i <list.length; i++) {
    if (maxList < list[i]) {
      maxList = list[i];
    }
    if (minList > list[i]) {
      minList = list[i];
    }
   }
   console.log (maxList - minList);
  
    
    