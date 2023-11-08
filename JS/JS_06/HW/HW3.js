/*
Home Work #3
Материал к прочтению:
https://learn.javascript.ru/ifelse
https://learn.javascript.ru/switch
https://learn.javascript.ru/while-for
https://learn.javascript.ru/array


https://www.w3schools.com/js/js_switch.asp
https://www.w3schools.com/js/js_loop_for.asp
https://www.w3schools.com/js/js_arrays.asp



--------------Задания на закрепление (можно и нужно обсуждать в группе):

// + -------------  1 - Напишите программу калькулятора со switch, обработайте возможные ошибки ввода 
*/
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



//+---------!!!!!!!    2 -Попробуйте внедрить в свою программу с кофе вложенный if

// см. coffee3


// + -------------  3 - При помощи цикла for выведите чётные числа от 2 до 10

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




/*
 + -----------Задача с интервью
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

/*
 + ------------- Креативное задание*(не показываем решение до понедельника):
Имеется зашифрованное предложение 

“Y br o br u br        br a br R br e br        br t br h br e br        br B br e br s br t br       br Q br A br        br e br v br e br R br”
мы знаем, что оно означает “You are the best QA ever”.
Нам нужно придумать программу дешифратор.
*/

// let str = 'Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr'  // здесь с шагом 3 добавили br
// let result = ''
// ---- 1 способ
// for (let i = 0; i < str.length; i++) {
//     if (!(str[i] === 'b' && str[i + 1] === 'r' || str[i] === 'r' && str[i - 1] === 'b')) {
//         result += str[i]
//     }
// }

// ----- 2 способ


// for (let i = 0; i < str.length; i+=3) {
//     result += str[i]
// }
//  console.log(result)


/*
    + ------------Задачка посложнее* 
 Придумайте свой собственный шифр, а также программу, которая будет шифровать и затем дешифровщик к нему

 */

// let mes = "Hello, my name is Nina"
// let result = ''

// for (let i = 0; i < mes.length; i++) {
//     if (mes[i] === 'a' || mes[i] === 'i' || mes[i] === 'o' || mes[i] === 'e') {
//         result += mes[i] + 'kr'
//     } else {
//         result += mes[i] + "dz"
//     }
// }
// console.log(result)

// let mes2 = 'Hdzekrldzldzokr,dz dzmdzydz dzndzakrmdzekr dzikrsdz dzNdzikrndzakr'
// let result2 = ''

// for (let i = 0; i < mes2.length; i++) {
//     if (mes2[i] === 'd' && mes2[i + 1] === 'z' || mes2[i] === 'z' && mes2[i - 1] === 'd') {
//         result2 = result2
//     } else if (mes2[i] === 'k' && mes2[i + 1] === 'r' || mes2[i] === 'r' && mes2[i - 1] === 'k') {
//         result2 = result2
//     } else {
//         result2 += mes2[i]
//     }
// }
// console.log(result2)

// let mes3 = "Hello, my name is Nina"
// let result3 = ''

// for (let i = 0; i < mes3.length; i++) {
//     if (mes3[i] === ' ' || mes3[i] === ',') {
//         result3 += 'lulu'
//     } else {
//         result3 += mes3[i]
//     }
// }
// console.log(result3)

// let mes4 = 'HellolulululumylulunameluluisluluNina'
// let result4 = ''

// for (let i = 0; i < mes4.length; i++) {
//     if (mes4[i] === 'l' && mes4[i + 1] === 'u') {
//         result4 = result4 + ' '
//     } else if (mes4[i] === 'u' && mes4[i - 1] == 'l') {
//         result4 = result4 + ' '
//     }
//     else {
//         result4 += mes4[i]
//     }
// }
// console.log(result4)

// ------------------  от Нали шифр

// let message = 'Work smarter, not harder! Be on time'
// let keyWord = 'Open your shop in the morning'

// let encriptedMessage = ''

// for (let i = 0; i < message.length; i++) {
//     for (let e = 0; e < keyWord.length; e++) {
        
//         if (i == e) {
//             encriptedMessage = encriptedMessage + message[i] + keyWord[e]
//             keyWord += keyWord[e]
//         }
//     }
// }
// console.log('keyword = ' + keyWord)
// console.log('================')
// console.log('Encripted message = '+ encriptedMessage)
// console.log('================')

// let decriptdMessage = ''

// for (let i = 0; i < encriptedMessage.length; i+=2) {
//     decriptdMessage +=encriptedMessage[i]
// }
// console.log('The message = ' + decriptdMessage)


/* Домашнее задание от Татьяны Волк

Нарисовать елочку и ромб  с помощью циклов 
*/

// // елочка

//  let  n = 5

// for (let i = 1; i <= n; i++) {
//     let str = ''
//     for(let j = n; j >= i; j--){
//         str += " "    
//     }
//     for (let k = 1; k <= i; k++) {
//         str += "*"
//     }
//     for (let l = 2; l <= i; l++) {
//         str += "*"
//     }
    
//     console.log(str)
// }
// console.log('-------------------------------')

// // ромб

// for (let i = 1; i <= n; i++) {
//     let str =''
//     for (let s = n - i; s >= 1; s--) {
//        str += " "
       
//     }
//     for (let l = 1; l <= i; l++) {
//         str += l
//     }
//     for(let k = i - 1; k >= 1; k--)  {
//         str += k 
//     }
    
//     console.log(str)
// }
 
// for (let i = n - 1; i >= 1; i--) { // i = 4, 3, 2, 1
//     let str = ""

//     for (let s = n - i; s >= 1; s--) {
//         str += " "
//      }

//     for (let k = 1; k <= i; k++) {
//         str += k 
//     }

//     for (let l = i - 1; l >= 1; l-- ) {
//         str += l
//     }

//     console.log(str)
// }

// console.log('-------------------------------')

// // тоже ромб

// for (let i = 1; i <= n; i++) {
//     let str =''
//     for (let s = n - i; s >= 1; s--) {
//        str += " "
       
//     }
//     for (let l = 1; l <= i; l++) {
//         str += "-"
//     }
//     for(let k = i - 1; k >= 1; k--)  {
//         str += "+" 
//     }
    
//     console.log(str)
// }

 
// for (let i = n - 1; i >= 1; i--) { // i = 4, 3, 2, 1
//     let str = ""

//     for (let s = n - i; s >= 1; s--) {
//         str += " "
//      }

//     for (let k = 1; k <= i; k++) {
//         str += "+"
//     }

//     for (let l = i - 1; l >= 1; l-- ) {
//         str += "-"
//     }

//     console.log(str)
// }

