
// ------------- https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript

/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
*/
//  // -- 1

// let str1 = "String"      //-> "SSttrriinngg"
// let str2 = "Hello World" //-> "HHeelllloo  WWoorrlldd"
// let str3 =  "1234!_ "     //-> "11223344!!__  

// function doubleChar(str) {
// let str1 = ""
//     for(let i = 0; i < str.length; i++){
//         str1 += str[i].repeat(2);
//     }

//    return str1
//   }

//  //--2

//const doubleChar = (str) => str.split('').map(el => el + el).join('');

// function doubleChar(str) {
//     let str1 = str.split('').map(el => el + el).join('')
//     return str1
//   }

// console.log(doubleChar(str3))



//--------Is it a palindrome?-------- https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

// Write a function that checks if a given string (case insensitive) is a palindrome.

//  //-- 1 вид:

// function isPalindrome(x) {
//     x = x.toLowerCase()
//     let y = x.split('').reverse().join('');
//     return x === y;
// }

//  //-- 2 вид:

// const isPalindrome = (x) => {
//     return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
//   }

//  //-- 3 вид:

//const isPalindrome = x => x.toLowerCase().split('').reverse().join('') == x.toLowerCase();

//  //-- 4 вид ЦИКЛОМ (почти без методов):
//   function isPalindrome(x) {
//     x = x.toLowerCase();
//     let y = "";
//     for(let i = x.length -1; i >= 0; i--) {
//         y += x[i];
//     }
//     return y === x;
//   }

// // -- 5 вид тоже с while

// function isPalindrome(x) {
//     x = x.toLowerCase()
//     let a = 0
//     let b = x.length
//     while (a < b) {
//       if (x[a] != x[b-1])
//         return false
//       a++
//       b--
//     }
//     return true
//   }

//console.log(isPalindrome("Abba"))


//----------------ПЕреревернуть числа
// знак - оставить, нули отсечь

// 123  // 321
// -123 // -321
// 1200000  // 21
// -0.123000 // -321

// function reverse(x) {
//     let y = "" + Math.abs(x)  //let y = "" + Math.sign(x) * x
//     return Math.sign(x)*(y.split('').reverse().join(''))  //+ или  parsInt() - тожетпереводит в число  и отсекает нули тоже
// }

// console.log(reverse(-0.123000))

// // либо  (оптимальный?)

// function reverseNum(x) {
//     return Math.sign(x) *(String(x).split('').reverse().join(''))
// }

// console.log(reverse(-0.123000))

// либо
// function reverseNum(x) {
//     return Math.sign(x) * parseInt(String(x).split('').reverse().join(''))
// }

// console.log(reverse(-0.123000))

// parsInt  посути не нужн здесь, т.к. * тоже переводит в намбер (!НО ОН ТОЧНО ОТСЕЧЕТ .000)



// ------Simple equation reversal------https://www.codewars.com/kata/5aa3af22ba1bb5209f000037/train/javascript

/*
Given a mathematical equation that has *,+,-,/, reverse it as follows:
solve("100*b/y") = "y/b*100"
solve("a+b-c/d*30") = "30*d/c-b+a"
*/

// function solve(eq){
//     return eq.split("/").join(" / ").split("*").join(" * ").split("+").join(" + ").split("-").join(" - ")
//   .split(" ").reverse().join("")
// }

// console.log(solve("a*b/c+50"))


// // можно еще при помощи регулярных выражений 

// function solve(eq){
//     return eq.split(/([*\+\-\/])/).reverse().join('');
//   }

//   // или этих

//   function solve(eq){
//     return eq.split(/\b/g).reverse().join("");
// }

// // или с помощью цикла

// function solve(eq){
  
//     //needet vars 
//     let op = ""; // operands eg. 100
//     let result = "";
    
//     //iterate over the String
//     for(let c of eq){
    
//         //Detect if the char an Operator like +, - etc. 
//         if (c === "+" || c === "-" || c === "*" || c=== "/"){
//             result = c + op + result;
//             op = "";
//             continue;
//         }
        
//         //Build the Operand (e.g. 100 = 1+0+0)
//         op = op + c;
//     }
  
//     //contact the last op and return
//     return op + result;
    
//   }


// -----Add Length------- https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript
/*
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.
*/

// -- 1 с методами

// function addLength(str) {
//     return str.split(' ').map(el => `${el} ${el.length}`)
// }
// console.log(addLength("apple ban"))

//-- 2 с циклом

// function addLength(str) {
//     var split = str.split(" ");
//     var result = [];
     
//     for (i = 0; i < split.length; ++i) {
//       result.push(split[i] + " " + split[i].length);
//     } 
//     return result;  
//   }



// ------Return String of First Characters--------https://www.codewars.com/kata/5639bdcef2f9b06ce800005b/train/javascript

/*
In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

For example:

"This Is A Test" ==> "TIAT"
Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.

*/

//--- 1 -  методы

// function makeString(s){
//     return s.split(" ").map(word => word[0]).join('');
// }
// console.log(makeString('Организация Объединенных Наций'))

// //-- 2 цикл

// function makeString(s){
//     let arr_words = s.split(" ");
//     let result = "";
//     for (let i=0; i<arr_words.length; i++) {
//       let first_letter = arr_words[i].charAt(0);
//       result += first_letter;
//     }
//     return result;
//   }