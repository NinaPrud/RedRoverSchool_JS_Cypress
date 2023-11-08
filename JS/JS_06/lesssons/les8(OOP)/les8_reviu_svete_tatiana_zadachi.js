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

//--------------------------------endsWith()----------------

// https://www.codewars.com/kata/56f695399400f5d9ef000af5/train/javascript

//1
// function correctTail(body, tail){

//   let sub = body.substr(body.length-1)

//   if (sub == tail) {
//     return true
//   }
//   else {
//     return false
//   }
// }

// // 2
// function correctTail2(body, tail){

//   let sub = body.split('').pop()

//   if (sub == tail) {
//     return true
//   }
//   else {
//     return false
//   }
// }
// console.log(correctTail2('Fox', 'x'))

//3 

// function correctTail3(body, tail){

//     return body.endsWith(tail)
// }
// console.log(correctTail3('Fox', 'x'))

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