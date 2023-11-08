//=========== объявление массива
// 1 ----------через литералы

// let arr = [];
// const arr1 = [1, 2, 3,]  // можно  с запятой, а можено и без  на конце
// console.log(arr1.length);

// 2 ------------- через вызов конструктора
//let arr = new Array()
// let arr = new Array(10);  // зарезервированное слово new  и Array  10 - это количество элементов
// console.log(arr.length);   // 10
// console.log(arr);        // [ <10 empty items> ] тоже самое что 10 indefind

 //let arr = new Array(10, 2 , 3 , "str", null, 2);
// console.log(arr.length);   //5
// console.log(arr);     // [ 10, 2, 3, 'str', null ]

// arr1.length = 3   // обрезает до 3 - х
// console.log(arr); 
// arr1.length = 0   // очищает
// console.log(arr); 

// обращение к элементам

// console.log(arr[0]); 
// console.log(arr[arr.length -1]);   // к последнему
// console.log(arr.at(-1));          // то же самое

// =================== методы массивов

// ! во всех методах работае строгое сравнение (===)

//-------------- .pop(), .push()
//                -1     +n    с конца 


 //let arr = new Array(10, 2 , 3 , "str", null, 2);


 //arr.push('string', 10, 65, true, {1: "sr", 2:"st"});
// //console.log(arr);
// console.log(arr.push(100));  // тоже изменит массив, но вернет количество элементов
// //console.log(arr);
// arr.pop()  //  только один элемент удалит
//  arr.pop(4444444444)  // // все равно  только один элемент удалит
//  console.log(arr);

// let arr = new Array(10, "str", true, 10, [2, 4, 5]);
// console.log(arr)           // [ 10, 'str', true, 10, [ 2, 4, 5 ] ]
// console.log(arr[4].pop())  // 5
// console.log(arr)           // [ 10, 'str', true, 10, [ 2, 4 ] ]
// arr[4].pop()
// console.log(arr)            // [ 10, 'str', true, 10, [ 2 ] ]



//-----------------.shift(), .unshift()
//                   -1      +n    с начала           рабтают медленнее


// let arr = ["string", 10, 65, true, [2, 4, 5]]; 

// arr.unshift(1, 2, 3)
// console.log(arr)            // [ 1, 2, 3, 'string', 10, 65, true, [ 2, 4, 5 ] ]
// arr.shift()
// console.log(arr)           // [ 2, 3, 'string', 10, 65, true, [ 2, 4, 5 ] ]

// console.log(arr.shift()) ;  // 2  - возвращает элемент, кот. удален
// console.log(arr)            // [ 3, 'string', 10, 65, true, [ 2, 4, 5 ] ]


//--------------------- .concat()
// объединяет массивы


// let arr = ["string", 10, 65, true, [2, 4, 5]]; 
// let arr1 = [2, 3, 4, 5];
// let arrStr = ['wr', 'rt', 're'];

// let newArr = arrStr.concat(arr,arr1);  // [arrStr arr arr1] - soderzhimoe ih po-poriadky
// console.log(newArr);
//  newArr = arrStr.concat(arr1,arr);
// console.log(newArr);
//  newArr = arr1.concat(arr,arrStr);
// console.log(newArr);


//----------------- .reverse()

// разворачивает в обратном порядке массив  
// (МЕНЯЯ ИСХОДНЫЙ МАССИВ!!!!! НУЖНО СОЗДАВАТЬ КОПИЮ, если хочешь его сохранить)
// причем не переприсваиванием

//  let arr = [2, 3, 4, 5, "str",];
// // let arr2 = [2, 3, 4, 5, "str",];
//  let arr1 = arr
//  arr1.reverse();

//  console.log(arr1);     // [ 'str', 5, 4, 3, 2 ]
 //console.log(arr);     //  [ 'str', 5, 4, 3, 2 ]
// console.log(arr2);    //  [ 2, 3, 4, 5, 'str' ]


//--------------- .split(separator)  

// рассекает строку и помещает ее в массив

//let str = "Hello world";
//let str = "111"

//const arr = str.split(" ");  // [ 'Hello', 'world' ]
//const arr = str.split("")    // ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
//const arr = str.split()       // [ 'Hello world' ]
// const arr = str.split(1)       // [ '', '', '', '' ]
// console.log(arr)


//------------------- .join(separator)

//  из массива в строку

// let arr = [111, 111]
// console.log(arr)       // [ 111, 111 ]
// // let str = arr.join()
// // console.log(str)       // 111,111

// let str = arr.join("/")
// console.log(str)           // 111/111



// let str = "Привет Нина!"
// console.log(str)                // Привет Нина!
// let arr = str.split(" ");
// console.log(arr)                // [ 'Привет', 'Нина!' ]
// str = arr.join(", ")
// console.log(str)               //  Привет, Нина!


//-------------------- .slice([start], [end])
//                              вкл    невкл
// let str = 'Hello world!'
// const arr = str.split('');
// console.log(arr)                // ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!']
// // const newArr = arr.slice(2, 5)
// // console.log(newArr)            // [ 'l', 'l', 'o' ]

// // const newArr = arr.slice(2)
// // console.log(newArr)              // ['l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!']

// // const newArr = arr.slice(-6)
// // console.log(newArr)              // [ 'w', 'o', 'r', 'l', 'd', '!' ]

// const newArr = arr.slice()       // создаст копию массива ( именно содержимого, без периприсваивания!)
// console.log(newArr)              // ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!']



//------------------  .splice(index, deleteCount, el1, el2, ... elN )
//                          c эл(вкл)     кол-во элем      заменят этими

//  добавлять, удалять и заменять  эл.



// let arr = ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!']

// // let arr2 = arr.splice(1, 3, "E", "L", "L")
// // console.log(arr2)     // [ 'e', 'l', 'l' ]  вщзвращает то, что удалил

// // arr.splice(1, 3, "E", "L", "L");
// // console.log(arr)           // ['H', 'E', 'L', 'L', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!']
 
// arr.splice(5, 0, "!!!!!!!!!!!!")
// console.log(arr)
// arr.splice(5,1)       
// console.log(arr)

// мщжно с минусовыми элементами (-1 это последнтй и тд)

// let arr = [1, 2, 3, 7];
// arr.splice(3, 0, 4, 5, 6)  
// console.log(arr)            // [1,2,3,4,5,6,7]

// let arr = [1, 2, 3, 3, 7];
// arr.splice(3, 1, 4, 5, 6)  
// console.log(arr)              // [1,2,3,4,5,6,7]


//-------------- .indexOf()   .lastIndexOf()   .includes()




//     .indexOf   ищет вхождение элемента и возвращает индекс этого вхождения
//    .indexOf(item, fromIndex)
// если элемент не находится, метод возвращает -1


 //let arr = "Hello World!".split('');
// console.log(arr);

// let index = arr.indexOf('l',4);  // будет искать только один раз начиная с обозначченного индекса
// console.log(index)              //9

// let ind = arr.indexOf("k")
// console.log(ind)        //  -1


//________________

// let arr = "Hello World!".split('');
//  console.log(arr);

//  let i = arr.indexOf('l');  // первое вхождение

//  while (i != -1) {
//     console.log(i);
//     i = arr.indexOf('l', i + 1);     // 2 3 9
//  }



// ------- .lastIndexOf() 



// бежит с конца слова
// т.е от обозначенного элемента и до начала

// let arr = "Hello World!".split('');
// console.log(arr);

// let index = arr.lastIndexOf('l');  //  9
// console.log(index)  


//---------.includes()


//    .includes(item)
//  сщщбщает ответ  true/false  и проверят входит ли искомый элемнет в наш массив

//  let arr = "Hello World!".split('');
// console.log(arr);

// let index = arr.includes('l');  //  true
// console.log(index)
// index = arr.includes('k')
// console.log(index)         // false


// ---- NaN никогда себе не равно
//  console.log(NaN == NaN)   // false
//  console.log(NaN === NaN)  // false

//  //  но  .includes его находит:
//  arr.push(NaN)
//  console.log(arr.includes(NaN))   // true
 //  ни .find() ни .indexOf()  такого результата не даст


 //---------------- .find()     .findIndex()



 // .find(function(elem, index, array) {...}));
 // вернет ПЕРВЫЙ найденнвй в массиве элемент,
 // кот. подходит под заданное условие в передаваемой функции
 //но если такого усл НЕТ возвр undefined

 //const arr = [2, 3, 4, 8, 10, 11];       // 3
 // найдем в массиве нечетное число

 //num % 2 != 0   

//  console.log(arr.find(x => x % 2 != 0))   // undefined если нету нечетных, 
//                                         // если есть, то возвр ПЕРВОЕ!! 


// //  .findIndex()



// // вернет первый найденнвй в массиве ИНДЕКС элемента,
// // кот. подходит под заданное условие в передаваемой функции
// //но если такого усл НЕТ возвр -1

// console.log(arr.findIndex(x => x % 2 != 0))   // 1

// console.log(arr.find((x, i) => i % 2 != 0 && x % 2 == 0));  // 8  indeex нечетный (3) элемент четный (8) выводит элемент



//---------- .filter()



// возв новый массив отфильтр элементов, кот. будут возвр в колбэк функции
// .filter(function(elem, index, array) =>{...}));

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// //нужно получить все нечетные числа

// const arrOdd = arr.filter(el => el % 2 != 0);
// console.log(arrOdd);     // [ 1, 3, 5, 7, 9 ]



// const arr1 = [1, 'str', null, 4, true, 6, NaN, 8, 9]
// // найти элем, кот явл строкой
//  const newArr = arr1.filter(el => typeof el == "string")
//  console.log(newArr)    // [ 'str' ]




//--------------- .every()     .some()



//  ВСЕ (every)/  ХОТЯБЫ КАКОЙ-ТО(.some) элементы должны соответствовать условию,
// кот мы передаем в колбек функции

//   const arr = [1, 8, 9, 0, 5, -2]
//   // проверка, что все ел в массиве не отрицательные

//   console.log(arr.every(el => el >= 0));  // false
//   console.log(arr.some(el => el >=0));    // true


//===============Продолжение  7.2 (10/06) Методы массивов Часть II (Stan P.)

// (элемент, индекс, массив)
// колбэк функция, кот. передается как аргумент в другую функцию




// ------------- forEach()------



// позволяет применить функцию колбэк (кот. в нем находится) ко всем элементам массива
// НО данная функция ничего не возвращает

// например, поменять знак у каждого элемента массива, и вывести это на экран:

//const arr = [-1, -8, -9, -2, 0, -5];

// const changeSign = function(el) {
//     console.log(-el)     // унарный оператор "-"  для смены знака
// }

//const changeSign = el => console.log(-el)

//changeSign(arr[0])    // 1  
 
//arr.forEach(changeSign)   // 1 8 9 2 -0 5

// arr.forEach(function(el) {   // тоже самое
//     console.log(-el)     
// } )                          // 1 8 9 2 -0 5

//arr.forEach(el => console.log(-el))  // тоже  со стрел безымянной функцией 

//arr.forEach((el, i) => i % 2 == 0 ? console.log(-el): console.log(' '));


// возвести каждый элемент в куб

//  const arr = [-1, -8, -9, -2, 0, -5];

// // //arr.forEach(el => console.log(el ** 3));

// // arr.forEach((el, i, newArr) =>  i % 2 != 0 ? console.log((el ** 2) + newArr.length) : console.log(" ")) ;

//   arr.forEach((el, i, newArr) => i % 2 != 0 ? console.log("Odd") : console.log("Even"));  // только индекс задкйствован, аррэй мщжно опустить
// //arr.forEach((el, i)
// //arr.forEach((_, i)
// важна последоватедбность ЭЛЕМЕНТ  ИНДЕКС  МАССИВ


//----------------- .sort()




// возвращает отсортированный массив (исходный тряется) 

// const arr = ["Anna", "Steve", "Jane", "Serg"];

// в алфавитн (если без параметров)
// console.log(arr.sort());    //  [ 'Anna', 'Jane', 'Serg', 'Steve' ]  

// // в обоатном
// console.log(arr.sort().reverse());   // [ 'Steve', 'Serg', 'Jane', 'Anna' ] 
// //            сортирую  разворач

// !!!!!!!!   но числа вв иде строк отсортирует:

// let arr =  ['5','8','6','6','9','7','5','8','7']// бфло
// console.log(arr)
// arr.sort()
// //['5', '5', '6','6', '7', '7', '8', '8', '9'] стало
//     console.log(arr)
    
   
  

// для сортировки чисел алфавит не подходит
// поэтому надо указать длоп параметры (отсортируй от меньшего к большему от большего к меньщ)

// const arrNum = [1, 30, 23, 24, 65, 10, 9, 3, 2];

// console.log(arrNum.sort())                 // [1, 10, 2, 23, 24, 3, 30, 65, 9]

// console.log(arrNum.sort((a, b) => a - b))  // [1, 2, 3, 9, 10, 23, 24, 30, 65]

// console.log(arrNum.sort((a, b) => b - a)); // [65, 30, 24, 23, 10, 9, 3, 2, 1]

// console.log(arrNum.sort((a, b) => b - a)[0]) // 65 максимальный элемент в массиве

// console.log(arrNum.sort((a, b) => a - b)[0])  // мин




// ------------- .map()



// вoзвращает МАССИВ результата применения колбэк функции


//  напрмер, хочу узнать длинну каждого элемента

// const arr = ["JavaScript", "Java", "Python", "English", "SQL"];

// console.log(arr.map(el => el.length)); // [ 10, 4, 6, 7, 3 ]  массив с длинной каждого элемента

// //   изменить первый и последний элементы (т.е индексы нужны)

// console.log(arr.map((el, i, arr) => i == 0 || i == (arr.length -1) ? `**${el}**` : el));
// // [ '**JavaScript**', 'Java', 'Python', 'English', '**SQL**' ] 


// возвести каждый элемент в квадрат

// const arr = [1, 3, 6, 8];

// const newArr = arr.map(el => el ** 2);
// console.log(newArr);   // [ 1, 9, 36, 64 ]


// перевести элемент строку в число
// например, когда инфо пришло с сайта (а она приходит в строках, а мне дальше нужны числа для работы)

// const arrStr = ["1", "3", "6", "8"];

// //const arrNum = arrStr.map(el => Number(el)); // либо +el
// //console.log(arrNum);   // [ 1, 3, 6, 8 ]
// const arrNum = arrStr.map(Number);  //  тоже самое, т.к. map  работает с каждым элементом и так
// console.log(arrNum)    ///  [ 1, 3, 6, 8 ]



//---------------- .reduce()   .reduceRight



// зсдесь ЧЕТЫРЕ ПАРАМЕТРА !!!!  -  на первом месте аккумулятор, дальше все как обычно
//.reduce((accumulator, el, index, array) => {....}, [initial value])

// исп. для вычесления какого-то единого значения на основе всего массива
// ВОЗВРАЩАЕТ ОДНО ЗНАЧЕНИЕ

// const arrNum = [1,2,3,4,5,6,7,8,9,10];

// // пример 1 получим сумму элементов массива:

// const result = arrNum.reduce((sum, el) => sum + el, 0); // sum += el  // 0 значит - "для суммы пускай будет 0"

// console.log(result);      // 55

// лучше всегда инициализировать начальное значение аккумулятора, 
//т.к бывают сбои если этого не делать ( если приходят одинаковые массивы они могут попадать в один и тот же участок памяти)


// пример 2 - итог перемножения всех элементов

// const arrN = [1,2,3,4,5,6,7,8,9,10];

//  const result = arrN.reduce((prod, el) => prod * el, 1);    // можно писать acc, item
//  console.log(result);     


// пример 3 - посчитать среднее по массиву:

//раньше так

// const arrN = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// for(let i = 0; i < arrN.length; i++) {
//     sum += arrN[i];
// }
// console.log(sum / arrN.length)    // 5.5

// //   с методом так

// console.log(arrN.reduce((acc, el, i, arr) => i === (arr.length -1) ? (acc + el) / arr.length : acc + el, 0))  // 5.5
// console.log(arrN.reduce((acc, el, i, arr) => acc + el / arr.length, 0))  //5.5
// console.log(arrN.reduce((acc, el) => acc + el, 0) / arrN.length)     // 5.5

// --- .reduceRight()  работает так же , но проходит С КОНЦА массива, а не с начала




// ========   статические методы


//------------- Array.from()


//  сoздание массива на основе передаваемого объекта или значения ( перебираемая сущность, строка чаще всего)
//1
// const arr = Array.from("JavaScript")   //  обязательно указать параметр

// console.log(arr)     // ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

 
//2   .fill()
// const arr = Array.from(Array(20).fill(0))  // массив из 20-ти нулей

// console.log(arr)

// //3  .keys()
//  const arr = Array.from(Array(20).keys())  // let n    Array(n + 1)
//  console.log(arr)   // массив от 0 до 19


// 4  
// заполнить массив числами от 10 до 25
// 1:44 на видео

// let start = 10;
// let finish = 25;

// const arr = Array.from(Array(finish - start + 1).fill(start)).map((el, i) => el + i);
// console.log(arr);

//map  встроен в from
// const arr = Array.from(Array(finish - start + 1).fill(start), (el, i) => el + i);
// console.log(arr);


// 5 -   заполнить массив можно при помощи   спред + Array().keys 

//console.log([...Array(11).keys()]);  // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 


// --------------- Array.of()

// const arr = Array.of(10, 15, 34, 76, "Anna", null, NaN);

// console.log(arr)


//---------------- Array.isArray()

// вернет либо true,  либо  false  по результатам проверки какой аргумент передается

// let arr = Array.of(10, 15, 34, 76, "Anna", null, NaN);
// console.log(Array.isArray(arr));    // true

// arr = null;
// console.log(Array.isArray(arr));    // false

// arr = []
// console.log(Array.isArray(arr));   // true

// arr = true;
// console.log(Array.isArray(arr));    // false