
// let str = 'Hello, Nina! How are you?'

// let newObject = {}

// for (let i = 0; i < str.length; i++) {
//     newObject[i + 1] = str[i] 
// }
// delete newObject[25]



// let obj = {}

// obj.name = "Nina"
// obj[1] = 37
// obj.age = 37
// obj[3] = 33
// obj[2] = 32

// console.log(obj)

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




// ---------------------------------------------Объекты---- for in-----------------------------------------------------

// // https://www.codewars.com/kata/577ff15ad648a14b780000e7 /  Welcome!
// // -- 1
// let langBase = {
//   english: 'Welcome',
//   czech: 'Vitejte',
//   danish: 'Velkomst',
//   dutch: 'Welkom',
//   estonian: 'Tere tulemast',
//   finnish: 'Tervetuloa',
//   flemish: 'Welgekomen',
//   french: 'Bienvenue',
//   german: 'Willkommen',
//   irish: 'Failte',
//   italian: 'Benvenuto',
//   latvian: 'Gaidits',
//   lithuanian: 'Laukiamas',
//   polish: 'Witamy',
//   spanish: 'Bienvenido',
//   swedish: 'Valkommen',
//   welsh: 'Croeso'
// }

// function greet(language) {

//     for (let key in langBase) {
//       if (language == key) {
//         return langBase[key]
//       }
//     }
//     return 'Welcome'
//   }

// console.log(greet('irish'))

// // --2

// function greet2(language) {
 
//   return langBase[language] || "Welcome";
// }

// console.log(greet2('irish'))



