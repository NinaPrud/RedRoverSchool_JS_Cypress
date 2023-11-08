
// ================= Рекурсия

//------- Рекурсия - это вызов Ф. в самой себе

// let count = 0
//  function recursion () {
//     count++
//     console.log(count)
//     if (count > 50) return  //  если не создать условие произойдет зацикливание
//     recursion()
//  }
//  recursion()

// во фронтенде аннимация часто реализованна по средствам рекурсии (ползунки, движения чего либо)
// используется в факториалах и числах фибоначи

//  // ------- факториалы
//  // 1! = 1
//  // 2! = 1 * 2
//  // 3! = 1 * 2 * 3         = 6
//  // 4! = 1 * 2 * 3 * 4     = 24
//  // 5! = 1 * 2 * 3 * 4 * 5 = 120

// // - факториалы без рекурсии

//  function factorial_1(n) {
//     let p = 1;
//     for (let i = 1; i <= n; i++) {
//         p *= i;
//     }
//     console.log(p)
//  }
//  factorial_1(5)

//  // - факториалы с рекурсией (с глобальной переменной) - это плохо

//  let result = 1;
//  function factorial_2 (n) {
//     if (n == 1) return;
//     result *= n;
//     factorial_2(n - 1);
//  }

//  factorial_2(5)
//  console.log(result)

//  // - факториалы с рекурсией (без глобальной переменной) - хорошо 

//  function factorial_3 (n) {
//     return n == 1 ? 1 : n * factorial_3(n - 1);
//  }

//  console.log(factorial_3(5))



// // ------------  последовательноть фибоначчи

// // есть 0, 1 все последующие числа получаются сложением двух предыдущих
// // 0, 1, 1, 2, 3, 5, 8, 13, 21 ...
// // 0  1  2  3  4  5  6   7   8  -   количество шагов

// function fib(n) {

//     if (n == 0) return 0;
//     if (n == 1) return 1;
//         return fib(n - 1) + fib(n -2)
// }
// console.log(fib(8))

// //2 -  вся послед
// m = 0
// k = 8
// while (m <= k) {
//     console.log(fib(m))
//     m++
// }
    




// // ================= Замыкание
// // это когда мы код замыкаем внутри другой Ф. и можем потом использовать для своих целей


// //  глобальные переменные - это плохо, т.к. кто-то может тоже ее использовать и счетчик сломается
// // но без глобальой переменной счетчик тоже не работает
// // что же делать?

// let count = 0
// function countPluss () {
//     count++
//     console.log(count)
// }
// countPluss()  // 1
// countPluss()  // 2
// countPluss()  // 3
// countPluss()  // 4

// function countPluss2 () {
//     let count2 = 0
//     count2++
//     console.log(count2)
// }
// countPluss2()  // 1
// countPluss2()  // 1
// countPluss2()  // 1
// countPluss2()  // 1

// // используем замыкание:

// function counter() {
//     let count = 0
//     return function countPluss() {
//         count++
//         console.log(count)
//     }
// }
//  let counter_1 = counter()
//  let counter_2 = counter()

//  counter_1()
//  counter_1()
// // counter_2()
//  counter_1()
//  counter_1()
//  counter_2()
// // counter_1()
// // counter_2()



// // ------------- мгновенный вызов Ф.

// (function mes() {
//     console.log('Hello!')
// })()




// // -------------- задача с интервью  на замыкание - 1:43  видео

// function generate (seed) { console.log('seed=' + seed)
//     let private = seed;   console.log("private=" + private) 
//     console.log('-----------------')

//     return function (param) {                    
//         private += seed;     console.log("privateNEW = " + private + ' + seed')     
//                              console.log("param=" + param)
//         return private + param 
//     };
// };

// //let a = generate(1)  // (seed)
// let b = generate(2)  // (seed)

// //console.log(a(2))
// console.log(b(3) + b(1) + b(2))      // (param)
//           7 + 6 + 1 + 8 + 2 = 24
//console.log(a(1) + a(2))         // 8  
//console.log(a(1) + a(2) + a(1))  //13


// ============================ методы  массивой

//  создание массива через литераллы
//  let arr = []

// //  создание масссива через конструктор

//  let arr2 = new Array()  //пустой массиы

//   let arr3 = new Array(10) //  массив с ДЛИННОЙ 10 !! - задается длинна

//    let arr4 = new Array(1, 20 ,true, 'str') //  массив с 4 элементами - сразу наполняется


//  console.log(arr, arr2, arr3, arr4)  // [] [] [ <10 empty items> ] [ 1, 20, true, 'str' ]

// // ------------ свойство length

//  let array = [1,2,3,4,56]

// console.log(array[4])   // 56
// console.log(array.at(-1))   //56
// console.log(array[array.length-1])  // 56

// console.log(array.length)  // 5

// array.length = 3   // -  ОБРЕЗАЕТ МАССИВ!!!!
// console.log(array)  // [ 1, 2, 3 ]


// -------------- задачка на ступеньки

// function createSteps(n) {
//     let arr = []
//     for (let i = 0; i < n; i++) {
//         arr.push(' '.repeat(i) + "I")
//     }
//     return arr  
// }

// console.log(createSteps(5).join('\n'))


// // ------------------- slice()  splice()

// //  создать копию массива - slice()   и  spred oper (...)

// let arr1 = ['t', 'e', 's', 't']
// let arr2 = arr1

// arr1[0] = "T"

// console.log(arr1)       // [ 'T', 'e', 's', 't' ]
// console.log(arr2)       // [ 'T', 'e', 's', 't' ]
// console.log('---------------')

// //-----------

// arr = ['t', 'e', 's', 't']
// let arrNew = arr.slice()

// arr[0] = "T"

// console.log(arr)       // [ 'T', 'e', 's', 't' ]
// console.log(arrNew)    // [ 't', 'e', 's', 't' ]
// console.log('---------------')

// //----------

// let arr3 = ['t', 'e', 's', 't']
// let arr4 = [...arr3]

// arr3[0] = "T"

// console.log(arr3)    // [ 'T', 'e', 's', 't' ]
// console.log(arr4)    // [ 't', 'e', 's', 't' ]


// -------------

// let arr = ['t', 'e', 's', 't']

// let arr1 = arr.slice(1,3)
// console.log(arr1)   // [ 'e', 's' ]

// let arr2 = arr.slice(1)
// console.log(arr2)   // [ 'e', 's', 't' ]

// let arr3 = arr.slice(-3, -1)
// console.log(arr3)   // [ 'e', 's' ]


// // -------------  splice()
// // еще и добавляет
// // но изменяет текущий массив, возвращ удаленное

// let arr = ['t', 'e', 's', 't']

// arr.splice(0, 2, 'T', 'E', 'S', 'T')
// console.log(arr)  // [ 'T', 'E', 'S', 'T', 's', 't' ]
// arr.splice(-1, 2, 'T')
// console.log(arr)  // [ 'T', 'E', 'S', 'T', 's', 'T' ]


// ----------------- indexOf()   lastIndexOf()   includes()

//  const arr = 'Hello World'.split('')
// console.log(arr.indexOf('l'))  // 2
// console.log(arr.lastIndexOf('l'))  //9

// let idx = arr.indexOf('l')
// while (idx != -1) {
//     console.log(idx)
//     idx = arr.indexOf('l', idx + 1)  // 2, 3, 9
// }

//----

// if (arr.indexOf('H') === arr.lastIndexOf('H')) {
//     console.log('Unique')
// }

// -----!!!! indexOf()  и lastIndexOf() НЕ НАЙДУТ NaN
//  потому что  в этих методах при поиске используется строгое сравнение,
// а  NaN  никогда не равен себе!!
// поэтому используют метод  includes()


// let arr = [1, 2, NaN]

// console.log(arr.indexOf(NaN))  // -1
// console.log(arr.includes(NaN))  // true


// ----------- find(), findIndex()

// принимают в аргумент колбэкФункцию
// find() - возвращает ПЕРВЫЙ элемент, findIndex() - вщзвращает ПЕРВЫЙ индекс
//   если искомого нет -find()  возвращ undefined,  findIndex() - -1

//  let arr = [40, 29, 45, 60]

//  const isOdd = (element) => element % 2 === 1;

// console.log(arr.find(isOdd))  // 29
// console.log(arr.findIndex((element) => element % 2 === 1)) // 1

// // ---------- filter()

// // возвращвет ВСЕ элементы, удовлетв условию
// //  возвр массив найденныйх элементов, либо Пустой массив, если ничего не найдено

//  console.log(arr.filter(isOdd)) // [ 29, 45 ]
//  console.log(arr.filter((el, i) => el % 2 === 1 && i % 2 === 1)) // 29




// // ------------------------  map () --- forEach()

// // вызывает функцию для КАЖДОГО элемента массива и возвращает результат выполнения функции
// // возвр НОВЫЙ МАССИВ (в данном случае массив с перемноженными элементами)
// либо false/true

//  let arr = [2, 3, 4, 5, 6]

// function squire(n) {
//     return n * n
// }
//  console.log(arr.map(squire))  // [ 4, 9, 16, 25, 36 ]

//  console.log(arr.map(n => n * n))  // [ 4, 9, 16, 25, 36 ]  -   так лучше, выносим ф. только для больших сложных конструкций

//  //   так же как и предыдущие методы может принимать три парамерта: (el, i, arr) 
//  //-  последовательность важна, даже если el или  i  не используется - пишем их

//  console.log(arr.map((el, i, arr) => i % 2 === 1 ? el * el : el))  // [ 2, 9, 4, 25, 6 ]

//  //---------------------

//  // forEach()  ничего НЕ ВОЗВРАЩАЕТ , т.к в нем не предусмотрен return (тогда возвр undefind)
//  console.log(arr.forEach((el, i, arr) => i % 2 === 1 ? el * el : el))  // undefined

//  arr.forEach((el, i, arr) => console.log(i % 2 === 1 ? el * el : el)) 
//  // чтобы увидеть результат console.log во внутрь:
//  // 2
//  // 9
//  // 4
//  // 25
//  // 6

//  //  или положить в переменную, в новый массив

//   let result = []
//   arr.forEach((el, i, arr) => result.push(i % 2 === 1 ? el * el : el))
//   console.log(result)  // [ 2, 9, 4, 25, 6 ]

// //------------
// const arr = [2, 6, 3, 28, 9]
// const newArr = []

// arr.forEach(el => el > 3 ? newArr.push(el) : '')
// console.log(newArr)  // [ 6, 28, 9 ]




// ----------------------- reduce()   reduceRight()
// arr.reduce((acc, el, i, arr) => acc *  el, 1)
//  принимает 4 параметра
// пропмсывается дефолтное начальное значение ( для суммы - 0, для произвед 1)
// (аккумулятор, элемент, индекс, массив)
// кладет в аккумулятор результат функции
// возвращает одно ЧИСЛО - наш аккумулятор
// последние если не нужны можно опускать, но начальные и срединные никогда


//  let arr = [ 4, 9, 16, 25, 36 ]

//  console.log(arr.reduce((sum, el) => sum + el, 0))   // 90
//  console.log(arr.reduce((mult, el) => mult * el, 1)) // 518400
//  console.log(arr.reduce((sum, el, i) => sum + (i % 2 === 1 ? +el : -el), 0)) // -22

// в тестировании используется например для подсчета итоговой суммы в корзине
//  используется для вычсилений и конктинации



//-----------------------------------------------------
// продолже с видео 7.3


// //---------------  .every()------------
// //  принимает   колбэк ф.
// //  что КАЖДЫЙ эл удовлетвор условию
// // вщзвращает true/false

//  const arr = [2, 6, 3, 28, 9, -2]

//   console.log(arr.every(el => el > 0))

// // ------------- .some()
// //  принимает   колбэк ф.
// //  что ХОТЯБЫ ОДИН эл удовлетвор условию
// // вщзвращает true/false

// console.log(arr.some(el => el > 27))



//--------------------------- Ф-и преобразования массивов

// // -------------------------- sort()

// //  массив сортируется  В АЛФАВИТНОМ ПОРЯДКЕ на месте, те изменяется первонач массив ( теряем старые данные)

//  const arr = [2, 6, 28, 56, 10, 1, 103, 1001]
//  const arrStr = ['bb', 'a', 'b', 'z', 'c', 'w', 't']
//  const newArr = [...arr, ...arrStr, 'B', '>']
//  arr.sort()
//  console.log(arr)  // [1, 10, 1001, 103, 2, 28, 56, 6]

//  arrStr.sort()
//  console.log(arrStr)  // ['a', 'b', 'bb', 'c', 't', 'w', 'z']

//  arrStr.sort().reverse()
//  console.log(arrStr)  // ['z', 'w',  't', 'c', 'bb', 'b', 'a']
// newArr.sort()
//  console.log(newArr)  // [ 1, 10,  1001, 103, 2, 28,   56,  6, '>','B', 'a', 'b', 'bb', 'c', 't',  'w', 'z']
// //  по весу символов в таблице ASCII


// ----  сортировка по весу:

// const arr3 = [ 2, 5, 10, 1, 6]
// arr3.sort((a, b) => a - b)  // -  это не минус, а ДИАПАЗОН
// console.log(arr3)   // [ 1, 2, 5, 6, 10 ]
// arr3.sort((a, b) => b - a)
// console.log(arr3)

//  const arrNew = [
//     [1, 25],
//     [2, 2],
//     [1, 2],
//     [1, 205],
//     [3, 4],
//     [1, 0],
//  ];

//  arrNew.sort(([a, b], [c, d]) => a - c).sort()
//  console.log(arrNew)   // [ [ 1, 0 ], [ 1, 2 ], [ 1, 205 ], [ 1, 25 ], [ 2, 2 ], [ 3, 4 ] ] 



// //--------------------------------------- Array.from()--------------

// const arr = Array.from('Java Script', el => '*' + el + '*')
// console.log(arr)

// //--------------------------------------- Array.of()--------------

// const arr2 = Array.of(2, true, 'ffff', undefined, 90)
// console.log(arr2)   // [ 2, true, 'ffff', undefined, 90 ]

// //--------------------------------------- Array.isArray()--------------

// let num = 2
// console.log(Array.isArray(arr2))  // true
// console.log(Array.isArray(num))   // false


// ---------------------------   сравнение массивов

// массиввы равны, только когда ссыллка одна и та же

//  let arr1 = [1, 2, 3]
//  let arr2 = [1, 2, 3]
//  let arr3 = arr1
//  console.log(arr1 == arr2) // false
//  console.log(arr1 == arr3) // true

//  arr3[0] = 11
//  console.log(arr1)   // [ 11, 2, 3 ]

//---------.toString()  и JSON.stringify()
// можно ими сравнивать
// ! НО НЕКОРРЕКТНО работают с  null  и  undefined

// let arr1 = [1, 2, 3]
// let arr2 = [1, 2, 3]

// console.log(arr1.toString() === arr2.toString())  // true
// console.log(JSON.stringify(arr1) === JSON.stringify(arr2))   // true

// let arr4 = [1, null, 3]
// let arr5 = [1, undefined, 3]

// console.log(arr4.toString() === arr5.toString())  // true
// console.log(arr4.toString(), arr5.toString())   // 1,,3 1,,3

// console.log(JSON.stringify(arr4) === JSON.stringify(arr5))   // true
// console.log(JSON.stringify(arr4), JSON.stringify(arr5))  // [1,null,3] [1,null,3]

// // .toString() -  null  и  undefined переводит в пустую строку
// // JSON.stringify() - null  и  undefined переводит в  null


// //-----------  можно еще сравнить длинну и каждый элемент с каждым

// function compareArrays(arr1, arr2) {
//     return arr1.length === arr2.length && arr1.every((el, i) => el === arr2[i])
// }

// console.log(compareArrays(arr4, arr5))  // false
// console.log(compareArrays(arr1, arr2))  // true



//--------------------------------- методы строк --------------------------------------------------------------------------------

// //  в  JS  8 типов данных и 7 из них - это примитивы
// // все, кроме объектов ( массив тоже объект) - это сложный тип данных
// // строка - примитив, поэтому, чтобы применитьк ней методы, ее оборачиваю в "обертку" ( wrapper) под капотом - создается другой об. кот. берет значение примитива, применят методы и возвращает обратно в примитив, а класс-обертка уничтожается

//  let str = 'Stan'
//  let strNew = new String('Stan')

//  console.log(str)        // Stan
//  console.log(strNew)     // [String: 'Stan']

//  console.log(typeof str)     // string
//  console.log(typeof strNew)  // object

//  console.log(str == strNew)  // true
//  console.log(str === strNew) // false

// //  создание через  new  лучше не использовать
// // если нужно что-то точно привести к опред типу, мщжно исп просто слова типа
//  let str = String(1)
//  let num = Number('44')

//  console.log(typeof str, str)   // string 1
//  console.log(typeof num, num)   // number 44

// -------------- padStart()  padEnd()
//  если ружно дополняет до задангой длинны строку другой строкой, с начала или с конца
// padStart(length, otherString)

// let str = 'Nina'
// let str2 = 'Prudnikova'

// let str3 = str.padStart(9, '*')
// console.log(str3)   // *****Nina

// let str4 = str2.padStart(5, '*')
// console.log(str4)   // Prudnikova

// let str5 = str.padEnd(9, '*')
// console.log(str5)   // Nina*****


// //  для красивого вывода ценников используют
// let potStr = 'potato'
// let blbrStr = 'blueberries'

// let potStr1 = potStr.padEnd(20, ' ')
// let blbrStr1 = blbrStr.padEnd(20, ' ')

// console.log(potStr1, '2,00')   // potato               2,00
// console.log(blbrStr1, '4,00')  // blueberries          4,00


// -------------------- indexOf()
// вщзвращает индекс искомого элемента (только первое вхождение)
//  indexOf(что, откуда)
// есле не найдено, то -1

//let str = "potato"
// console.log(str.indexOf('o'))     // 1
// console.log(str.indexOf('o', 2))  // 5
// console.log(str.indexOf('m'))     // -1
// console.log(str.indexOf('tat'))   // 2
// //--------
// // как вывести все индексы искомого элемента

// let arr = []
// let pos = str.indexOf('o')
// let count = 0
// while (pos !== -1) {
//   arr.push(pos)
//   count++
//   pos = str.indexOf('o', pos + 1)
// }

// console.log(arr, count)    // [ 1, 5 ] 2

// // -------------- lastIndexOf()
// //  тоже самое, только с конца



// // ------------------------------- startsWith()
// //  начинаетс яли строка с чего-то
// // регистрозавис
// //  true/false

//str = 'potato white'
// console.log(str.startsWith('po'))  // true
// console.log(str.startsWith('Po'))  // false
//console.log(str.startsWith('white', 7))  // true
 
// --------------------- endsWith()
// // тоже самое с конца


//---------------------- substring()
// показать, что содержит строка с конкого-то индекса

// console.log(str.substring(7))  // white
// console.log(str.substring(7, 9)) // wh
// console.log(str.substring(str.length-3)) // ite

// // ------------------ slice()
// // тоже вырезает, но позволяет работать с отрецательными индексами
// console.log(str.slice(-10,-3))  // tato wh

//---------------------- replace()
// заменяет одно на другое
// только первую

//console.log(str.replace('o', 'O'))  // pOtato white



// //---------------------- replaceAll()
// //  меняет все
// // но работает не во всех песочницах

// console.log(str.replaceAll('o', 'O'))  // pOtatO white

// -------------- regular exprassions

// // c regular expr  можно все поменять (g -  глобально,  i - любой регистр)
// console.log(str.replace(/o/ig, 'O'))  // pOtatO white

// let str2 = '(123) 123-4567'
// console.log(str2.replace(/[0-9]/g, '*'))  // (***) ***-****


// // ------------ split()
// // можно лимитировать

// console.log(str.split('', 4))  // [ 'p', 'o', 't', 'a' ]


// //-------------------- charCodeAt()
// //  возвращает значение элемента по таблице ASCII
// //  принимает индекс элемента
// console.log(str.charCodeAt(0))

//let arr = []
// let strRes = ''

// for( let i = 0; i < str.length; i++) {
//   arr.push(str.charCodeAt(i))
// }
// console.log(arr)
// /*[
//   112, 111, 116,  97,
//   116, 111,  32, 119,
//   104, 105, 116, 101
// ]*/

// // прлучить символ по значению
//  console.log(String.fromCharCode(80))  // P

//  for (let i = 0; i<str.length; i++) {
//   strRes += String.fromCharCode(arr[i])
//  }
//  console.log(strRes)   // potato white
 

