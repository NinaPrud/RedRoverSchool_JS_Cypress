/* 1. Задача про Палиндром. 

Палиндром — слово, предложение или последовательность символов, которая абсолютно одинаково читается как в привычном направлении, 
так и в обратном. К примеру, “Anna” — это палиндром, а “table” и “John” — нет.
Дана строка; нужно написать функцию, которая позволяет вернуть значение true, 
если строка является палиндромом, и false — если нет. При этом нужно учитывать пробелы и знаки препинания.*/

// let isPalindrome = function(str) {
//    let str2 = str.split('').reverse().join('')
//     if (str.toLowerCase() === str2.toLowerCase()) return true
//     return false
// }

// console.log(isPalindrome('Anna'))

// ---------------------------------------------
//https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

// ---------------- Квадрат(n) Сумма

//Написать функцию квадратной суммы, чтобы она возводила в квадрат каждое переданное ей число, а затем суммировала результаты.
//Например, for [1, 2, 2]он должен возвращаться 9, потому что


// function squareSum(numbers){
//     return numbers.reduce((count, num) => count + num**2, 0)
//   }

//   console.log(squareSum([2,2]))



//-------------------------------------------------

//https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript
// Sum Arrays
// Write a function that takes an array of numbers and returns the sum of the numbers. 
//The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// function sum (numbers) {
//     return numbers.reduce((sum, num) => sum + num, 0) 
//  };


// -------------------------------------------------------------------------

// function threeInOne(arr){
//     let result = []
//    let copyArr = arr.slice()
//    for(let i = 0; i < copyArr.length; i+=3) {

//     result[i] = copyArr.slice(0,3).reduce((sum,num)=> sum += num, 0)
//    }
//    return result

//   }

//   console.log(threeInOne([1,2,3,4,5,6]))

//-----------------------------some()-includes()-indexOf()-----------------------------

// https://www.codewars.com/kata/57cc40b2f8392dbf2a0003ce/train/javascript
//No Loops 2 - You only need one
/*
You will be given an array a and a value x. 
All you need to do is check whether the provided array contains the value, without using a loop.
Array can contain numbers or strings. x can be either. Return true if the array contains the value, 
false if not. With strings you will need to account for case. */


// // 1 вар  - .some()
// function check(a,x){
//     return a.some((y) => y == x)
//   };
// //вар - .inqludes()
//   function check2(a,x){
//     return a.includes(x)
//   };

//   // 3  вариант -  indexOf() -  исчет элемент и возвращает индекс
// function check3(a, x){
//     return a.indexOf(x) >= 0
//   };


// //   console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 46))
// //   console.log(check2([80, 117, 115, 104, 45, 85, 112, 115], 45))
// //   console.log(check3([80, 117, 115, 104, 45, 85, 112, 115], 45))
//   console.log(check2(['ggg', '123', 45], 'ggg' ))
//   console.log(check(['ggg', '123', 45], 'ggg' ))
//   console.log(check3(['ggg', '123', 45], 'ggg' ))


//---------------------------------indexOf()---reverse()--------------------

//https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript
//A wolf in sheep's clothing
/* Wolves have been reintroduced to Great Britain.
 You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. 
Fortunately, you are good at spotting them.
Warn the sheep in front of the wolf that it is about to be eaten. 
Remember that you are standing at the front of the queue which is at the end of the array:
[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". 
Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
Note: there will always be exactly one wolf in the array.*/

// // вар 1

// function warnTheSheep(queue) {
//     const position = queue.reverse().indexOf('wolf');
//     return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
//   }

// // вар2

// function warnTheSheep2(queue) {
//     let x = queue.length - (queue.indexOf('wolf') + 1)  // queue.length-1 - queue.indexOf('wolf') // 4 - (1 + 1) = 2
//     if (queue[queue.length - 1] == 'wolf') {
//         return "Pls go away and stop eating my sheep"
//     } else {
//         return `Oi! Sheep number ${x}! You are about to be eaten by a wolf!`
//     }
// }


// console.log(warnTheSheep2(['wolf', "sheep", "sheep", "sheep"]))
// console.log(warnTheSheep(['wolf', "sheep", "sheep", "sheep"]))
// console.log(warnTheSheep2(['wolf']))
// console.log(warnTheSheep(['wolf']))



// //----------------------------------- reverse() ---------------

// // https://www.codewars.com/kata/56f699cd9400f5b7d8000b55/train/javascript

// // My head is at the wrong end!
// // перевернуть во всех приходящих массивахиз трех элементов голову и хвост (0 с 2)
// function fixTheMeerkat(arr) {
//     return arr.reverse()
// }
// console.log(fixTheMeerkat(["tail", "body", "head"]))
// console.log(fixTheMeerkat(["lower legs", "torso", "upper legs"]))


// // -------------------- split()- reverse()- join()

// // Дан массив из строк
// // нужно вернуть массив с перевернутыми в нем элементами(строками) 
// //- каждый элемент на том же месте, но буквы в нем перевернуты

// let arr1 = ["tail", "body", "head", "legs"]

// function revEltmArr(arr) {

//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].split('').reverse().join('')
//     }
//     return arr
// }
// console.log(revEltmArr(arr1))

//------------------------------------String(num)-----split()--reverse()-----mup(Number)-------------------
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

// Преобразовать число в перевернутый массив цифр
// Учитывая случайное неотрицательное число, вы должны вернуть цифры этого числа в массиве в обратном порядке.

// let n = 12345

// // 1 вар
// function digitize(n) {
//     let arr = String(n).split('').reverse()

//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = Number(arr[i])
//     }
//     return arr
// }

// console.log(digitize(n))

// // 2 вар 
// function digitize2(n) {
//     return String(n).split('').map(Number).reverse()
// }

// console.log(digitize2(n))

// 3 вар

// function digitize3(n) {
//     let arr = []
//     let str = n.toString()
//     for (let i= str.length-1; i >= 0; i--){
//         arr.push(Number(str[i]))
//     }
//     return arr
// }
// console.log(digitize3(n))


// // -------------- задачка на ступеньки  (push(), repeat(), join())

// function createSteps(n) {
//    let arr = []
//    for (let i = 0; i < n; i++) {
//        arr.push(' '.repeat(i) + "I")
//    }
//    return arr  
// }

// console.log(createSteps(5).join('\n'))


// //------------- indexOf()  lastIndexOf()
// const arr = 'Hello World'.split('')

// if (arr.indexOf('H') === arr.lastIndexOf('H')) {
//    console.log('Unique')
// }



//---------------------------------------------filter

//https://www.codewars.com/kata/55edaba99da3a9c84000003b/train/javascript

// вернуть массив чисел ( из массива  numbers), которые делятся на  divisor

//  function divisibleBy(numbers, divisor) {
//     return numbers.map(el => el % divisor == 0)
//  }


// console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2))


//--------------------------------slice()--------------------

//https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
// Get the Middle Character
/*Вам дадут слово. Ваша задача — вернуть средний символ слова.
 Если длина слова нечетная, вернуть средний символ.
  Если длина слова четная, верните средние 2 символа.*/

// --1

// let s = 'testing'
// //let s = 'test'
// function getMiddle(s) {
//     return s.slice((s.length - 1) / 2, s.length / 2 + 1)
// }
// console.log(getMiddle(s))

// //--- 2 

// function getMiddle2(s)
// {
//   return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }

// // - 3
// function getMiddle3(s) {
//     let middle = s.length / 2;
//     return (s.length % 2) 
//       ? s.charAt(Math.floor(middle))
//       : s.slice(middle - 1, middle + 1);
//   }

//-----------------------------------------------forEach-----filter---includes--length-------

// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
//Vowel Count
//  посчитать сколько гласных в строке ( гласные : a e i o u)

//-1
// function getCount(str) {
//     let sum = 0
//     str.split('').forEach(el => {
//         if (el == 'a' || el == 'e' || el == 'i' || el == 'o'|| el == 'u') {
//             sum += 1
//           }
//     })
//     return sum
// }
//     console.log(getCount('abracadabrauieo'))



// //- 2   
// function getCount2(str) {
//     return str.split('').filter(c => "aeiou".includes(c)).length;
// }

// console.log(getCount2('abracadabrauieo'))


// //-----------------------split- reverse--join----------

// // https://www.codewars.com/kata/57a55c8b72292d057b000594//train/javascript
// // Перестановка слов в строке

// function reverseStr(string){
//   return string.split(' ').reverse().join(' ')
// }
// console.log(reverseStr('Hi There.'))


//------------------------------sort-----split-spred--join--------------------

// // https://www.codewars.com/kata/52aeb2f3ad0e952f560005d3/ Sort the gift code
// // отсортировать буквы в строке по алфавиту

// //-- 1
// function sortGiftCode(code){
//   return code.split('').sort().join('')
// }

// console.log(sortGiftCode('pqksuv'))

// //--2

// function sortGiftCode2(code){
//   return [...code].sort().join('')
// }

// console.log(sortGiftCode2('pqksuv'))



//-----------------------------includes--------------------------

// https://www.codewars.com/kata/5813d19765d81c592200001a / Don’t give me five

// let start = 4
// let end = 17
// // -- 1
// let sum = 0
// let str
// for (let i = start; i <= end; i++) {
//   str = i +""
//   if (!(str.includes('5'))) sum++
//   }

// console.log(sum)


// // - 2

// function dontGiveMeFive(start, end){
//   let count = 0
//   for (let i = start; i <= end; i++) {
//     if (!i.toString().includes('5')){
//         count++ 
//     }
//   }
//   return count;
// }




// function dontGiveMeFive(start, end){
//   if (start <= 5  && end >= 5 ){
//        return end - start
//   }else return end - start + 1;
// }

//--------------------------------

// // https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

// // из пришедшего числа получить перевернутый массив с числами


// function digitize(n) {
//   let arr = n.toString().split('').reverse().map(Number)

//   return arr
// }
// console.log(digitize(35231))


// // https://www.codewars.com/kata/57277a31e5e51450a4000010/train/javascript

// function firstToLast(str,c){
//   if (str.indexOf(c) == -1) return -1
//   return Math.abs(str.indexOf(c) - str.lastIndexOf(c))
// }

// function firstToLast(str,c){
//   if (str.indexOf(c) == -1) return -1
//   return str.lastIndexOf(c) - str.indexOf(c)
// }

// -----------------------------------------
// https://www.codewars.com/kata/58dbdccee5ee8fa2f9000058/train/javascript
//Do you speak "English"?

// function spEng(sentence){
//     return sentence.toLowerCase().includes('english')
// }

// console.log(spEng("eglish"))
// console.log(spEng("4english"))


// //--------------------------------------------------------------
// //https://www.codewars.com/kata/55d410c492e6ed767000004f/train/javascript
// // заменить гласные [a,e,i,o,u]на их порядковый номер

// // -- 1
// function vowel2index(str) {
//     console.log(str)
//    let newStr = ""
//    for(let i = 0; i <str.length; i++){
//      if ('aeiou'.includes(str[i].toLowerCase())) {
//        newStr += i + 1
//      } else {newStr += str[i]}
//    }
//      return newStr
//   }

//   //--2 

//   function vowel2index2(str) {
//     return str.replace(/[aeiou]/ig, (m, i) => i + 1);
//  }

//  console.log(vowel2index('Codewars is the best site in the world'))
//  console.log(vowel2index2('Codewars is the best site in the world'))


//-------------------------------------------
// // https://www.codewars.com/kata/57fe50d000d05166720000b1/train/javascript

// // посчитать все буквы в s, кот совпадают  с 'sabbatical'  плюс val, happiness  (доожно быть больше 22)

// function sabb(s, val, happiness){
//     let str = 'sabbatical'
//     let result = val + happiness
//     for (let i = 0; i < s.length; i++){
//       if(str.includes(s[i].toLowerCase())) {
//         result += 1
//       }
//     }
//     return result > 22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.'
//   }

//   console.log(sabb('Can I have a sabbatical?', 5, 5))
//   console.log(sabb('Why are you shouting?', 7, 2))
//   console.log(sabb('What do you mean I cant learn to code??', 8, 9))
//   console.log(sabb('Please calm down', 9, 1))

//--------------------------------------------------------------
//https://www.codewars.com/kata/57b9fc5b8f5813384a000aa3/train/javascript
//Fruit string calculator


// function calculate(string) {
//     let arr = string.split(' ')
//     if (arr[5] == 'gains') return +arr[2] + +arr[6]
//     return +arr[2] - +arr[6]
//   }


//  function calculate2 (string){
//      return string.split(' ')
//            .map(x => parseInt(x))
//            .filter(x => !isNaN(x))
//            .reduce((acc, x) => string.indexOf('loses') !== -1 ? acc - x : acc + x )
//  }
//  console.log(calculate("Panda has 48 apples and loses 4"));
//  console.log(calculate2("Jerry has 34 apples and gains 6"));

//-------------------------------------------------------------------------------


// //https://www.codewars.com/kata/5a4ff3c5fd56cbaf9800003e/train/javascript
// //  удадить последний элемент не меняя исходный массив

//  let arr = [1, 2, 3, 4, 5]
// //1

// function withoutLast(arr) {

//   let arr2 = [...arr]
//   arr2.pop();

//   return arr2;
// }
// console.log(withoutLast(arr))
// //2
// function withoutLast2(arr) {
//   return arr.slice(0,-1);
// }
// console.log(withoutLast2(arr))

//------------------------------------------
//https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
//1
// function removeChar(str){
//   return str.slice(1, -1)
//  };

//  console.log(removeChar('eloquent'))

//  //2
// function removeChar2(str){
//  let arr =  str.split('')
//  arr.pop()
//  arr.shift()
//  let str2 = arr.join('')
//   return str2
// };

// console.log(removeChar2('eloquent'))

//------------------------------------------------
// https://www.codewars.com/kata/56f695399400f5d9ef000af5/train/javascript

// function correctTail(body, tail){

//   let sub = body.substr(body.length-1)

//   if (sub == tail) {
//     return true
//   }
//   else {
//     return false
//   }
// }

// //----------------------------------------------------------
// // https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript
// //  повторить каждый элемент строки
// //1
// function doubleChar(str) {
//   let str2 = ''
//   for (let i = 0; i < str.length; i++){
//     str2 += str[i].repeat(2)
//   }
//   return str2
// }
// //2
// function doubleChar2(str) {
//   return str.split('').map(el => el + el).join('')
// }

// console.log(doubleChar("Adidas"))
// console.log(doubleChar2("Adidas"))


// //-----------------------------------------------------------

// // https://www.codewars.com/kata/5c374b346a5d0f77af500a5a/train/javascript
// // Closest elevator

// function elevator(left, right, call) {
//   if (Math.abs(call - left) < Math.abs(call - right)) {
//     return "left"
//   } else return "right"
// }

//-----------------------------------------------------------------
// // https://www.codewars.com/kata/5808e2006b65bff35500008f/train/javascript
// //Find the position!
// //Получив букву, верните ее положение в алфавите.

// //1
// function position(letter){
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   return 'Position of alphabet: ' + (alphabet.indexOf(letter.toLowerCase()) + 1);
// }

// //2
// function position2(letter){
//   let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//   let res = 0
//   for (let i = 0; i < str.length; i++) {
//     if (letter.toUpperCase() == str[i]) {
//       res += i + 1
//     }
//   }
//    return `Position of alphabet: ${res}`
//  }

//  //3

//  function position3(letter) {
//   return `Position of alphabet: ${letter.toLowerCase().charCodeAt(0) - 96}`
// }

// console.log(position('C'))
// console.log(position2('a'))
// console.log(position3('Z'))


//--------------------------------------------------

// // https://www.codewars.com/kata/59706036f6e5d1e22d000016
// // Love vs friendship.

// // Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.
// // The input will always be made of only lowercase letters and will never be empty.

// //1
// function wordsToMarks(string){
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz'
//   let result = 0
//   for(let i = 0; i < string.length; i++) {
//     for (let j = 0; j < alphabet.length; j++) {
//       if (string[i] == alphabet[j]) {
//         result += j + 1
//       }
//     }
//   }
//   return result
// }

// console.log(wordsToMarks("attitude"))

// //2 
// function wordsToMarks2(string){
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   let result = 0;
//   string.split('').forEach((el) => {
//     result += alphabet.indexOf(el) + 1;
//   });
//   return result;
// }

// console.log(wordsToMarks2("attitude"))

// //3

// const wordsToMarks3 = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)


// console.log(wordsToMarks3("attitude"))


//----------------map---
//https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript
// Invert values

// //1
// function invert(array) {
//    return array.map(el => el * -1);  // el => -el
// }

// console.log(invert([1,-2,3,-4,5]))  // [ -1, 2, -3, 4, -5 ]

// //2 (for)

// function invert2(array) {
//    for(let i = 0; i < array.length; i++){
//      array[i] *= -1;
//    }
//     return array;
//  }


//------.sort()--.reduce()
// https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript
//Beginner - Reduce but Grow

/* Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 */

function grow(x) {
   return x.sort((a, b) => a - b).reduce((mult, el) => mult * el, 1)  // можно без sort
}

//console.log(grow([4, 3, 2, 1, 4])) // 96

//----------------------------------------------------
// https://www.codewars.com/kata/5732d3c9791aafb0e4001236/train/javascript
// methods of Math---round() ceil() and floor()


function roundIt(n) {

   let arr = n.toString().split('.')

   if (arr[0].length < arr[1].length) {
      return Math.ceil(n)
   }
   if (arr[0].length > arr[1].length) {
      return Math.floor(n)
   }
   if (arr[0].length == arr[1].length) {
      return Math.round(n)
   }
}

//console.log(roundIt(34.5))

/*  (3.45) , 4);
    (34.5) , 34);
    (34.56) , 35);
 */


// ------------------------------

function movie(card, ticket, perc) {
   let cardTicket = 0
   let simpleTicket = 0
   let count = 1
   do {
simpleTicket += ticket * count
cardTicket += card + ticket * perc + (ticket * perc) * perc 
                     /*500 + 15 * 0.90 + (15 * 0.90) * 0.90 + (15 * 0.90 * 0.90) * 0.90 */ 
      count++
   } while (cardTicket == simpleTicket)

   return count
};


/* assert.strictEqual(movie(500, 15, 0.9), 43)
    assert.strictEqual(movie(100, 10, 0.95), 24)*/


// --------------------------sort------indexOf-----------

// // https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript

// // 1
// function stray(numbers) {
//    numbers.sort()
//   if(numbers[0] === numbers[1]) return numbers[numbers.length-1]
//   return numbers[0]
// }

// // 2 

// function stray(numbers){
//    for (let i in numbers){
//       if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
//    }
//  }

//  // 3  ????????????????????????

//  const stray = nums => nums.reduce((a, b) => a ^ b);

 //-------------------sort--join--spred-------------

// https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript

// 1
function isSortedAndHow(array) {
   let arrAs = [...array].sort((a,b) => a-b) 
   let arrDes = [...array].sort((a,b) => b-a)
   
   if (array.join('') == arrAs.join('')) return 'yes, ascending'
   if (array.join('') == arrDes.join('')) return 'yes, descending'
   return 'no'
 }

 // 2

 const isSortedAndHow = a => {
   const s = a.join``;
   return s === a.sort((x, y) => x - y).join`` ? 'yes, ascending' :
          s === a.sort((x, y) => y - x).join`` ? 'yes, descending' : 'no';
 }

 // 3
 function isSortedAndHow(array) {
   switch (JSON.stringify(array)) {
     case JSON.stringify(array.sort((a, b) => a - b)): return 'yes, ascending'; 
     case JSON.stringify(array.sort((a, b) => b - a)): return 'yes, descending'; 
     default: return 'no';
   }
 }