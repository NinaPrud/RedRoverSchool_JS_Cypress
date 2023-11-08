
// =============  вложенный if

// let login = true

// let course1 = 'js'
// let course2 = 'java'
// let course = course2
// let region = 'usa'

// if (login == true) {
//     if (course == course1) {
//         console.log('Welcome!')
//         if (region.toUpperCase() != 'USA') console.log('Wake up early!')
//     }
//     else {
//         console.log('Go to java!')
//     }
// }
// else {
//     console.log("Login is not correct!")
// }



//======================== SWITCH =======================
// switch(expression){
//     case x:
//         code block
//         break;
//     case y:
//         code block
//         break;
//     default:
//         code block;
// }

// let day = 10

// switch (day) {
//     case 1:
//         console.log('Monday')
//         break;
//     case 2:
//         console.log('Tuesday')
//         break;
//     case 3:
//         console.log('Wednesday')
//         break;

//     default:
//         console.log('Another day')
// }

// можно без break и default если надо


// ================ STRING  длина строкиб индекс буквы(символов) =============

// ---- length
//  от одного начинается

// let phrase = "Hello wOlrd!"
// let space = ''

// console.log(phrase.length)
// console.log(space.length)

// // ---- index
// //  с нуля считает

// console.log(phrase[11])
// console.log(space[0])
// console.log(phrase[0])
// console.log(phrase[7])

// // string.toLowerCase()
// console.log(phrase.toLowerCase())
// //string..toUpperCase()
// console.log(phrase.toUpperCase())


// ========== Arrays ==============
//тип данных у массива - объект!
// разные типы данных мщжет хранить

// ----------- объявление массива

// let myArr = []
// let arr = new Array()

// //console.log(myArr, arr)
// //console.log(typeof myArr, typeof arr)

// let five = 5
// let arr1 = ['a', five, 'k', null, ['s', true], 1, 2, undefined]
// //console.log(arr1)

// const letters = ['a', 's', 'f', 'd', 'c', 'f', 'l']

// console.log(letters.length)
// console.log(letters[0])
// console.log(letters[letters.length-1])
// console.log(letters.at(-2))
// console.log(letters.at(1))
// console.log(letters[10])
// console.log(letters.at(-10))


// =================== FOR LOOP ===============


// for (начало; условие; шаг) {
//     ... тело цикла...
// }

// for ( let i = 0; i <= 3; i++) {
//     console.log(i)
// }

/* начало let i = 0     Выполняется один раз при входе в цикл
*  условие i <=3        Проверяряется перед каждой итерацией циклаю
*                       Если оно вычисляется в  false, цикл останавливается.
*                       тело  console.log(i) Выполняется снова и снова, пока
*                       условие вычисляется в  true.
*   шаг i++             Выполняется после тела цикла на каждой итерации
*                       перед проверкой условия.
*/

// ------- repeat string

// let str = "+/ "
// let newStr = ""

// for(let i = 0; i < 7; i++) {
//     newStr += str
//     console.log(newStr)
//     //console.log(i + '       ' + newStr)
//     //console.log(str + i)
// }
// //console.log(newStr)

// ---------- find sum

// let sum = 0
// for(let i = 1; i <= 10; i++) {
//     sum += i
//     //console.log(sum)
// }

// console.log(sum)

// -------- exponentiat

// let num = 5 // ^3
// let result = 1
// for(let i = 1; i <=3; i++) {
//     result = result * num
// }
// console.log(result)



// -------- str.length

let str2 = "Hello!"
let result
for(let i = 1; i <= str2.length; i+=2) {
    result = i
    console.log(result)
}


