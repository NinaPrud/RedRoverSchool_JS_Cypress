// --------задачка за 40 сек сказать, что будет true

// console.log(2 === '2') // false
 
// console.log(4.0 === 4) // true

// console.log('1' + 2 == 3) // false   12

// console.log("a" === 'a') // true

//  //console.log(3 = 3)     // error

// console.log("1" == 1) // true


//------------------ РЕШИТЬ ЗАДАЧУ

// приходит число, его надо перевернуть и вернуть его с минусом, если оно было отриц
// и вернуть без нуля, если в конце в первоначальном числе были нули

//let num = -123 // -321
// let n = 120 // 21


// function reverseNum(x) {
//     return Math.sign(x) *(String(x).split('').reverse().join(''))
// }

// console.log(reverse(-0.123000))


//==============================  МТОДЫ СТРОК =================

// replace(), slice(), includes(), indexOf(),  repeat(), trim()


// -------- переводы из одного типа в др

//----- перевод числа в строку:

//let n = 15.25;

// console.log(String(n));
// console.log(n.toString());
// console.log("" + n);
// console.log(n + "");
// let s = `${n}`
// console.log(n);
// console.log(n.toFixed(1)); // 15.3 - округлит и вернет строку


//----- перевод массива в строку

//  let arr = ['a', 'b', 'c', 1, 2]  
//  console.log(arr.join(''));
 
// ---- parseInt(n)
//  переводит число в начале строки в намбер

// let n = "15.25str"
// console.log(parseInt(n)) // number 15  точка уже не число для него

// // ---- перевод строки в число

// console.log(typeof(1 * '15')) // number


// ---------------- .toUpperCase()  .toLowerCase

// console.log('привет нина'.toUpperCase()); // переводит все буквы в верхний регистр
// console.log('ПРИВЕТ НИНА'.toLowerCase()); // в нижний регистр

// ---------- .concat()
// объединяет текст из двух и более строк и возвращает новую строку

// let str = 'I';
// let str2 = 'am';
// let str3 = ' a student';
// let res = str.concat(' ', str2, str3)  // I am a student
// console.log(res)


// ---------- .padStart(length, otherStr)
// заполняет текущую строку другой строкой
//(несколько раз, если нужно) так что итоговая строка достигает заданной длинны
//заполнение идет с начала текущей строки

// function res(str) {
//     const a  = str.padStart(9, "wood");   // woodTable
//     const b  = str.padStart(13, "wood");  // woodwoodTable
//     const c  = str.padStart(8, "wood");   // wooTable
//     const d  = str.padStart(3, "wood");   // Table
//     const e  = str.padStart(6, "wood");   // wTable
//     return e
// }
// console.log(res('Table'));

//padEnd(length, otherStr) 
//Заполнение осуществляется в начале (слева) текущей строки.

// function res(str){
  
//   const a = str.padEnd(9, 'wood'); 
//   const b = str.padEnd(13, 'wood');
//   const c = str.padEnd(8);   
//   const d = str.padEnd(3, 'wood');
//   const e = str.padEnd(6, 'wood'); 

//   return {a, b, c, d, e};
  
// }
// console.log(res('Table'));



//=========================================================
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/includes
//Метод includes() проверяет, содержит ли строка заданную подстроку, и возвращает,
//соответственно true или false.
//str.includes(searchString[, position])

// searchString Строка для поиска в данной строке.
// position Необязательный
// Позиция в строке, с которой начинать поиск строки  
// searchString, по умолчанию 0.
//console.log('my'.includes('my')); //case sensative


// let str = 'Did you notice the notes you?';
// console.log(str.includes('you')); // true
// console.log(str.includes('not', 9)); // true
// console.log(str.includes('not', 20)); // false
// console.log(str.includes('did')); // false
// console.log(str.includes('+'));//false


// let str = '7890';
// console.log(str.includes('9'));

// let str1 = ';+=.++';

// console.log(str1.includes('++'));
// console.log(str1.includes('+.'));
// console.log(str1.includes('+-'));

//=========================================================

//Метод indexOf() возвращает индекс первого вхождения подстроки в строке.
//str.indexOf(otherStr, [index]),
// //Возвращает -1, если значение не найдено.

// let str = 'A turtle is on the beach .';
// console.log(str.lastIndexOf('turtle')); 

// console.log(str.indexOf('turtle')); 
// console.log(str.indexOf('turtle', 3));

// The indexOf() method is case sensitive.
//console.log('Blue Whale'.indexOf('blue')); //-1

// const str = 'Hello, my deear freind. You are the best'; 
// //console.log(str.indexOf('e', 70));// -1
// let count = 0;
// let position = str.indexOf('e'); //1
// //console.log(position); //1
// while (position !== -1) {
//   count++;
//   position = str.indexOf('e', position + 1)
// }
// console.log(count)


//==============================================================

//lastIndexOf() возвращает индекс последнего вхождения указанного 
//значения в строковый объект String, 
//на котором он был вызван, 
//или -1, если ничего не было найдено. 
//Поиск по строке ведётся от конца к началу, 
//начиная с индекса fromIndex.

//let str = 'canala';
//console.log(str.lastIndexOf('a')); //5
 //console.log(str.lastIndexOf('a', 4)); //3
 //console.log(str.lastIndexOf('a', 3)); //3
 //console.log(str.lastIndexOf('a', 2)); //1
 //console.log(str.lastIndexOf('a', 0)); // -1
//==============================================================

//===========================
//string.substring(index1[, index2])

//Метод substring() возвращает подстроку строки между 
//двумя индексами, 
//или от одного индекса и до конца строки.
//indexA Целое число от 0 до длины строки, 
//определяющее смещение в строке первого символа, 
//который будет включён в результирующую подстроку.
//indexB Необязательный параметр. 
//Целое число от 0 до длины строки,
//определяющее смещение в строке первого символа, который не будет включён в результирующую подстроку.

// let str = 'Helloworld';
// //console.log(str.length);
//  console.log(str.substring(0, 6)); // "Hellow"
// console.log(str.substring(3, 6)); // "low"
// console.log(str.substring(6, 6)); // ""

//Следующий пример использует метод substring() и 
//свойство length для извлечения последних символов из строки. 
//Этот метод может оказаться легче для запоминания, 
//особенно если учесть, что вам не нужно знать начальный и конечный индексы, 
//как это было в примере выше.

// console.log(str.substring(str.length - 3)); 
// console.log(str.substring(str.length - 5));


//==============================================================
// slice()
// str.slice(beginIndex[, endIndex])

// Индекс, с которого начинать извлечение (нумерация начинается с нуля).
// извлекает часть строки и возвращает 
// новую строку без изменения оригинальной строки.
// endIndex
// Индекс, перед которым заканчивать извлечение (нумерация начинается с нуля). 
// Символ по этому индексу не будет включён.

// const str = 'The quick brown fox jumps over the lazy dog.';
// console.log(str.slice(31)); //"the lazy dog."
// console.log(str.slice(4, 19)); //"quick brown fox"
// console.log(str.slice());
// console.log(str.slice(2));//e quick brown fox jumps over the lazy dog.
// console.log(str.slice(-5)); //"dog."
// console.log(str.slice(-9, -5)); //"lazy"
//==============================================================
//.replace() 

/*Метод replace() 
возвращает новую строку с некоторыми или всеми сопоставлениями с шаблоном, 
заменёнными на заменитель. 
Шаблон может быть строкой или регулярным выражением, 
а заменитель может быть строкой или функцией, 
вызываемой при каждом сопоставлении.
*/ 

//выполнится единожды для первого найденного соответствия

 //const p = 'The quick brown fox jumps over the lazy Dog. If the dog reacted, was it really lazy?';
// console.log(p.replaceAll(/dog/gi, 'monkey')); // gi  - учет больших и строчных букв
//console.log(p.replaceAll('dog', 'monkey')) //  так только с маленькой d  изменит
//==============================================================
//split()
//string.split([separator[, limit]])
//Метод split() разбивает объект String на массив строк путём разделения строки указанной подстрокой.
//1

 //let str = '1I do, 2you do, 3they do'; 
//console.log(str.split('do')); 


// console.log(str.split(', '));

//console.log(str.split('o', 2)); 
// console.log(str.split('1')); 
// console.log(str.split(""));
//console.log(str.split(/\d/));

// str = '0     1 2  3    4'; 
// console.log(str.split(/\s*/)); 
 


//=> /\d/ – заменяет символы от 0 до 9 включительно
//=> /\s*/ –  "ноль или более" (*) пробелов (\s)

//===================================================================
// //repeat(), 
// //console.log('abc'.repeat(-1))    // RangeError
// console.log("*****".repeat(10))
// console.log('abc'.repeat(0))     // ''
// console.log('abc'.repeat(1))     // 'abc'
// console.log('abc'.repeat(2))     // 'abcabc'
// console.log('abc'.repeat(3.5))   // 'abcabcabc' (count will be converted to integer)
// //console.log('abc'.repeat(1/0))   // RangeError

//===================================================================
//trim(), trimStart(),trimEnd()
// удаляет пробелы в начале и конце строки
// const orig = '*foo*';
// console.log(orig.trim()); // 'foo
//===================================================================
//The charCodeAt() method returns the Unicode of the character at a specified index (position) in a string.
//The index of the first character is 0, the second 1, ...
//console.log('Hello'.charCodeAt(0))

// var emoji = String.fromCodePoint(0x1F621)
// console.log(emoji)




//======================== ЗАДАЧИ С 45 МИНУТЫ

//1 ----------- //https://www.codewars.com/kata/57cc40b2f8392dbf2a0003ce/train/javascript
 //содержит ли массив элемент
 // .includes()

// let arr = [1,2,3,4,5,]

// function check (a,b) {
//     return a.includes(b);
// }

// console.log(check(arr,5))


// 2 -------- https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
// содержит ли конец строки вырражение
// .endsWith()

// let str = "abc"
// let str1 = "ab"

// function solution(str, ending){
//     return str.endsWith(ending);
//   }

//   console.log(solution(str, "bc"))  // true
//   console.log(solution(str1, "bc"))  // false



// 3--------------- https://www.codewars.com/kata/56f695399400f5d9ef000af5/train/javascript
//   проверть, что второй аргумент  такой же как окончантие первого
// .endsWith()
// еще мщжно .slice()

// function correctTail(body, tail) {
//     return body.endsWith(tail)
// } ;
// либо

// function correctTail(body, tail) {
//     return body[body.length-1] == tail;
// }

// // либо 
// function correctTail(body, tail) {
//     return body.slice(-1) === tail[0]
// }


// console.log(correctTail("Fox", "x")) // true
// console.log(correctTail("Rhino", "o")) // true
// console.log(correctTail("Meerkat", "t")) // true


// ----------- https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
//-----------Remove First and Last Character

//--1) .substring()

// function removeChar(str){
//         return str.substring(1, str.length-1)
// };

//--2) .slice()

// function removeChar(str){
//     return str.slice(1, -1)
// };

//--3) .split() + .pop() + .shift() + .join()

// function removeChar(str){

//     let arr = str.split('')
//     arr.pop()
//     arr.shift()
//     return arr.join('')
// };


//  console.log(removeChar("Prudnikova"))


//-------------https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript
//---------Remove String Spaces

// 1--
// let x = "mnmnmn jkoi          klkkkjkj"
// console.log(x.replaceAll(" ", ""))

//2--
//  но так как в кодворс  replaceAll()  не работает решаем там так: с помощью РЕГУЛЯРНЫХ ВЫРАЖЕНИЙ  / /  И  g (/ / все что внутри этих слешей) (g значит глобально, по всей строке) 

// function noSpace(x){
//     return x.replace(/ /g, '')
// };

// 3--

// function noSpace(x){
//     return x.split(' ').join('')
// };

// console.log(noSpace("mnmnmn jkoi klkkkjkj"))