
//====================== for of    разница   for in

// for of - перебирает ЭЛЕМЕНТЫ, и быстрее, до индекса не доберемся!

// for in -  для работы с объектами, работает с индексами,
// делает определенныее проверки(есть ли у элемента свойства, и не выходим ли мы за размер 2 в 32 -2) - поэтому скорость ниже
// поэтому для больших массивов не рекомендуется
// и в принципе для массивов если не нужен доступ к индексу

// вывод - для массивов -  for of (элем)  и  for (индекс)
//       -  для объектов - for in


// ================================   оператор нулевого слияния  ??


//  let name;
//  //name = name ?? "Guest"
//  //name = name || "Guest"  // Guest
//  name = name || 0   //  не сработает с if, потому что false, 0 просто с консолью
//  //name = name ?? 0 
//  console.log(name)

//  if(name) {
//     console.log(name)  
//  }


// ===================================== математические функции

// ---------------- Math.abs()
//let num = -10

// console.log(Math.abs(num))  // 10 - abs - убирает знак - берет только абсолют(модуль)
// console.log(Math.abs(null)) // 0
// console.log(Math.abs(''))  // 0
// console.log(Math.abs([]))  // 0

// с объектом не работает, с массивом тольакр если один элемент

// ----------- Math.pow() -- вщзведение в степень

// console.log(Math.pow(num, 2)) // 100
// console.log(num ** 2)  // 100

//--------- Math.sqrt()  -- квадр корень

// num = 25
// console.log(Math.sqrt(num))  // 5
// console.log(num ** (1/2))  // 5

//                                              +   -  0
//--------- Math.sign()- вщзвращает знак числа (1, -1, 0)


// let num = 2
// console.log(Math.sign(num))


// -------------- Math. round(),  .floor(),  .ceil(),   trunc()

// floor -  округление к полу (к наименьшему ЦЕЛОМУ числу)

// let num = 6.9999999
// console.log(Math.floor(num)) // 6
// num = - 6.9999999
// console.log(Math.floor(num)) // -7

// // ceil  -  щкругление к потолку (к большму ЦЕЛОМУ числу)
// num = 6.00000001
// console.log(Math.ceil(num))  // 7

// round  -  обычное математическое округление

// let num = 6.49
// console.log(Math.round(num))  // 6
// num = 6.5
// console.log(Math.round(num))  // 7

// trunc -  просто отрезает дробную часть 
// let num = 6.49
// console.log(Math.trunc(num))  // 6
// num = 6.5
// console.log(Math.trunc(num))  // 6



// ----------  .toFixed()

// num.toFixed(param)  - округляет до нужного кол знаков по матиматич принципу
//                    !! - и возвращает СТРОКУ

 //let num = 6.9793
// console.log(num.toFixed(2))  // 6.98

// console.log(num.toFixed(2) + 10) // 6.9810
// console.log(Number(num.toFixed(2)) + 10)  // 16.98
// console.log(num.toFixed(2) * 1 + 10)   // 16.98
// console.log(+num.toFixed(2) + 10)    // 16.98



//--------  parseInt()    parseFloat()
// достают из строки Целое число и Дробное число соответственно

// let tr = '5615.73-som'
// console.log(parseInt(tr))  // 5615
// console.log(parseFloat(tr))  // 5615.73


//-------------------------------------------------

// let a = 'a', b = 'b'
// console.log(b + a + b/a + a)  // baNaNa

//  a = 0, b = 7
// console.log(b + a + b/a + a) // Infinity
 // a = 0, b = -7
//console.log(b + a + b/a + a) // -Infinity

//----------------------------------------------------

//==============================================  Методы  console

// let a = 'Nina'

// console.error(a) // подсветит красным в консоли браузера (или консоль отладки здесь)
// console.warn(a)  // подсветит желтым в консоли браузера (или консоль отладки здесь)

// for(let i = 0; i <=10; i++) {
//     if (i == 5) {
//         console.error(i)      // warn(i)
//     }
//     else {
//         console.log(i)
//     }
// }

//------------ стилизация

//console.log(`Hello, %cNina`, 'color: blue; font-size: 23px')   // применит стили в консоле браузера и здесь в консоле отладки

// ---------- тайминг
// let result = 0

// console.time('timer1')
// for(let i= 0; i < 1000000; i++) {
//     result++
// }
// console.timeEnd('timer1')    // timer1: 2.096ms

// выведет (в выходные данные даже) время выполнения данной операции- default: 2.101ms

//--------------- tabel
// let arr = ['java', 'script', 1, true]

// console.table(arr)  //  выведет в виде таблицы  (сюда тоже) - для объектов удобно
// // 
/*
┌─────────┬──────────┐
│ (index) │  Values  │
├─────────┼──────────┤
│    0    │  'java'  │
│    1    │ 'script' │
│    2    │    1     │
│    3    │   true   │
└─────────┴──────────┘
*/
// let ob = {
//     name:'Nina',
//     surname: 'Prudnikova',
//     age: 37
// }

// console.table(ob)

/*
┌─────────┬──────────────┐
│ (index) │    Values    │
├─────────┼──────────────┤
│  name   │    'Nina'    │
│ surname │ 'Prudnikova' │
│   age   │      37      │
└─────────┴──────────────┘
*/


// ======================================= СОРТИРОВКА
// ------------ сортировка пузырьком 
// (расставить элементы по возрастанию)

//let arr = [12, 46, 2, 39.1, 39, 645]
// console.log(arr)
// for(let i = 0; i < arr.length-1; i++) {
//     let temp
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//         }
//     }
// }

// console.log(arr)


//----------------------------- min  max

// console.log(Math.min(...arr))
// console.log(Math.max(...arr))
// // -------------
// let min = arr[0]
// for( let i = 0; i < arr.length; i++) {
//     if (min > arr[i]) {
//         min = arr[i]
//     }
// }
// console.log(min)
// //-----------
// let max = min = arr[0]
// for( let i = 0; i < arr.length; i++) {
//     if (min > arr[i]) {
//         min = arr[i]
//     }
//     if (max < arr[i]) {
//         max = arr[i]
//     }
// }
// console.log(min, max)


