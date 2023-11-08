/*
------------Задача с интервью
У вас есть массив со скобками, предположим 
[ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] . Количество элементов и последовательность может быть разной.
Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).
*/

// let arr2 = ['(', '(', ')', ')', ')', ')', '(', '(']
// let result1 = 0
// let result2 = 0
// for(let i = 0; i < arr2.length; i++) {
//     if(arr2[i] === '(') result1 += 1
//     if(arr2[i] === ')') result2 += 1
// }
// console.log(`( = ${result1}`)
// console.log(`) = ${result2}`)
// if(result1 == result2) {
//     console.log('Количество скобок одинаковое')
// }else {
//     console.log('Количество скобок разное')
// }

//===================================================================================================


//-------------- Напишите программу калькулятора со switch, обработайте возможные ошибки ввода 

// let num1 = '10'
// let num2 = '1'
// let operator = '/'
// let result

// switch (operator) {
//     case '+':
//         result = 1 * num1 + 1 * num2
//         if (isNaN(result)) {
//             console.log('Введите числа')
//         } else {
//             console.log(`${num1} ${operator} ${num2} = ${result}`)
//         }
//         break;

//     case '-':
//         result = num1 - num2
//         if (isNaN(result)) {
//             console.log('Введите числа')
//         } else {
//             console.log(`${num1} ${operator} ${num2} = ${result}`)
//         }
//         break;

//     case '*':
//         result = num1 * num2
//         if (isNaN(result)) {
//             console.log('Введите числа')
//         } else {
//             console.log(`${num1} ${operator} ${num2} = ${result}`)
//         }
//         break;

//     case '/':
//         result = num1 / num2
//         if (isNaN(result)) {
//             console.log('Введите числа')
//         } else if (num2 == 0) {
//             console.log('На ноль делить нельзя!')
//         } else {
//             console.log(`${num1} ${operator} ${num2} = ${result}`)
//         }
//         break;

//     default:
//         console.log('Выберите математическую операцию!')

// }
//==========================================================================================
// + ------------- - При помощи цикла for выведите чётные числа от 2 до 10

// // -- 1 способ только с циклом - САМЫЙ ПРОСТОЙ

// for (let i = 2; i <= 10; i+=2) {
//     console.log(i)
// }

// // -- 2 способ  с циклом  и if

// for(let i = 2; i <= 10; i++) {
//     if(i % 2 == 0) console.log(i)
// }

// // --- 3 способ - если есть массив и из него выбираем нужное
// let arr1 = [2, 3, 4, 5, 6, 7, 8, 9, 10]
// for(let i = 0; i < arr1.length; i+=2) {
//     console.log(arr1[i])
// }

// // --- 4 способ - если есть массив и из него выбираем нужное   с if

// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) console.log(arr[i])
// }

//===========================================================================
/*
-------------- Креативное задание*(не показываем решение до понедельника):
Имеется зашифрованное предложение 

“Y br o br u br        br a br R br e br        br t br h br e br        br B br e br s br t br       br Q br A br        br e br v br e br R br”
мы знаем, что оно означает “You are the best QA ever”.
Нам нужно придумать программу дешифратор.
*/

// let str = 'Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr'
// let result = ''

// for (let i = 0; i < str.length; i++) {
//     if (!(str[i] === 'b' && str[i + 1] === 'r' || str[i] === 'r' && str[i - 1] === 'b')) {
//         result += str[i]
//     }
// }
// console.log(result)



// -----------------   c  codewors  toUpperCase() || toLowerCase()


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


//------------------------------------------------
// задача с codewors найти иголку в стоге сена
// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c     A needle in the Haystack

// let haystack = ['3', '123124234', undefined, 'needle','world', 'hay', 2, '3', true, false];
// 1
// function findNeedle(haystack) {
//     for (let i = 0; i < haystack.length; i++) {
//       if (haystack[i] === 'needle') {
//         return "found the needle at position " + i
//       }
//     }
//   }

// 2
//   function findNeedle(haystack) {
//     for (let i in haystack){
//       if (haystack[i] === 'needle') {
//         return 'found the needle at position '+ i
//       }
//     }
//   }
// 3
//   function findNeedle(haystack) {
//     return "found the needle at position " + haystack.indexOf("needle")
//   }

//   console.log(findNeedle(haystack))


//   //-----------------
//   // https://www.codewars.com/kata/5a2b703dc5e2845c0900005a   Can we divide it (if)

//   function isDivideBy(number, a, b) {
//     if (number % a == 0 && number % b == 0) {
//       return true
//     }
//     return false
//   }
//   console.log(isDivideBy(-10, -2, -5))


// --------------------------------------
// ----- https://www.codewars.com/kata/5601409514fc93442500010b   How good are you


// function betterThanAverage(classPoints, yourPoints) {
//     classPoints[classPoints.length] = yourPoints
//     let sum = 0
//     for(let e of classPoints) { 
//         sum += e
//     }         //console.log(`${sum} / ${classPoints.length-1} =`,sum/classPoints.length-1)
//     return sum / classPoints.length-1 < yourPoints  
// }  

// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 50))


//----------------------------------------------------------

// https://www.codewars.com/kata/57241e0f440cd279b5000829   Sum of multiples

// function sumMul(n, m) {
//     if (n <= 0 || m <= 0) {
//         return 'INVALID'
//     } else {
//         let sum = 0
//         for (let x = n; x < m; x++) {
//             if (x % n == 0) {
//                 sum += x
//             }
//         }
//         return sum
//     }
// }
// console.log(sumMul(2, 10))

// // --  или так

// function sumMul2(n, m) {
//     if (m <= 0 || n <= 0) { return 'INVALID' }
//     let sum = 0;
//     for (let i = 0; i < m; i += n) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(sumMul2(2, 10))



// // https://www.codewars.com/kata/570a6a46455d08ff8d001002   No zeros for heroes

// //  1450 -> 145
// //  960000 -> 96
// //  1050 -> 105
// // -1050 -> -105
// //  0

//  function noBoringZeros(n) {
 
//   while (n != 0 && n % 10 == 0) {
//      n = n / 10
//   }
//   return n
// }

// console.log(noBoringZeros(0))


// ----------------------------------------------------
//https://www.codewars.com/kata/calculate-two-peoples-individual-ages
//hint: in the end use => return [age2, age1]


// function getAges(sum,difference){
//   if (sum < 0 || difference < 0){
//     return null};
// let age2 = (sum - difference)/2;
// let age1 = sum - age2;
//   if (age1 < 0 || age2< 0)
//     return null;
// return [age1, age2] 
  
// };

// // https://www.codewars.com/kata/55225023e1be1ec8bc000390/train/javascript
// //Jenny's secret message

// function greet(name){
//     if(name === "Johnny")
//       return "Hello, my love!";
    
//     return "Hello, " + name + "!";
    
//   }

//   console.log(greet('Nina'))



//   // https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
//   // Opposites Attract

//   function lovefunc(flower1, flower2){
//     if (flower1 % 2 == 0 && flower2 % 2 != 0 || flower1 % 2 != 0 && flower2 % 2 == 0) {
//       return true
//     }
//     return false
//   }

// // 2 вар
//   let lovefunc2 = (flower1, flower2) => (flower1 + flower2) % 2 != 0

//   console.log(lovefunc(2,1))
//   console.log(lovefunc2(2,1))


//   // ---------------------------------------------------
//   // https://www.codewars.com/kata/534ea96ebb17181947000ada/train/javascript
//   // Breaking chocolate problem

//   function breakChocolate(n,m) {
//     if ( n < 1 || m < 1) return 0
   
//     return n * m - 1
//   }

// console.log(breakChocolate(1, 1))
// ---------------------------------------------

// https://www.codewars.com/kata/554003323fd6af1c4200004e/train/javascript
// This is odd
/* 
Create a function that checks if a number is odd.
Expect negative and decimal numbers too. Remember... all negative numbers can also be either odd or even.
Decimal numbers always return false
Example:
isOdd(2)--> false
isOdd(5)--> true
isOdd(4)--> false
isOdd(-17)--> true
isOdd(-7.0)--> true
isOdd(-7.1)--> false
isOdd(4.23)--> false
isOdd(5.0)-->true
isOdd(5.23)--> false*/

function isOdd(n) {
    if (n/Math.trunc(n) != 1) {
      return false
    }
    if (n % 2 != 0) {
      return true
    }
    return false
  }

  //-----------------------------------------------
// https://www.codewars.com/kata/is-n-divisible-by-x-and-y/train/javascript
// Is n divisible by x and y?

// Create a function that checks if a number n is divisible by two numbers x AND y. 
// All inputs are positive, non-zero numbers.

  function isDivisible(n, x, y) {
    return n % x == 0 && n % y == 0
 }

// ------------------------------------------
// https://www.codewars.com/kata/students-final-grade/train/javascript
// Student's Final Grade

function finalGrade (exam, projects) {
    if (exam > 90 || projects > 10 ) return 100
    if (exam > 75 && projects >= 5 ) return 90
    if (exam > 50 && projects >= 2 ) return 75
    return 0
  }

let finalGrade2 = (exam, projects) => {
    switch (true) {
         case (exam > 90 || projects > 10):
            return 100
         case (exam > 75 && projects >= 5):
             return 90;
         case (exam > 50 && projects >= 2):
            return 75
         default: return 0;     
   }
}

  console.log(finalGrade(76, 5))
  console.log(finalGrade2(76, 5))
 

  //---------------------------------------
// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/javascript
// I love you, a little , a lot, passionately ... not at all


//1
function howMuchILoveYou(nbPetals) {
  let x = nbPetals % 6
  let result = ''
  switch (x) {
     case 1:
        result += "I love you"
        //console.log(x)
        break;
     case 2:
        result += "a little"
        // console.log(x)
        break;
     case 3:
        result += "a lot"
        // console.log(x)
        break;
     case 4:
        result += "passionately"
        // console.log(x)
        break;
     case 5:
        result += "madly"
        //console.log(x)
        break;
     default:
        result += "not at all"
     //console.log(x)
  }
  return result
}

//2 

function howMuchILoveYou2(nbPetals) {
  return ['not at all', 'I love you', 'a little', 'a lot', 'passionately', 'madly'][nbPetals % 6]
}

//3 

function howMuchILoveYou3(nbPetals) {
  let phrase = {    
    0: "not at all",
    1: "I love you",
    2: "a little",
    3: "a lot",
    4: "passionately",
    5: "madly"
  }
  return phrase[nbPetals%6]
}

console.log(howMuchILoveYou(0))
console.log(howMuchILoveYou2(0))
console.log(howMuchILoveYou3(0))