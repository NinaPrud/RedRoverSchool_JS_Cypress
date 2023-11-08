
//const obj = {a: 'a', b: 123, c: true, d: {1: 1, 2: 2, 3: 3,},}  //  через литералы

// кключ всегда строка, но можно изображать и без кавычек
// значение - любой тип данных

// let newObj = new Object();   //  с помощью конструктора ( слово  new   и  Object())
// newObj = obj// переприсваивания нет, присваивается ссылка на уже существ объект

// console.log(obj)
// // console.log(newObj)

// console.log(obj.a)
// console.log(obj.e)    // undefined
// obj.e = "Test"
// console.log(obj)     // { a: 'a', b: 123, c: true, d: { '1': 1, '2': 2, '3': 3 }, e: 'Test' }
// console.log(obj.e)     // Test
// console.log(newObj)  // { a: 'a', b: 123, c: true, d: { '1': 1, '2': 2, '3': 3 }, e: 'Test' }
// //  они имеют одинаковый адрес
//  console.log(obj == newObj)  // true

//  //  а если сделать:
  //   const obj2 = {a: 'a', b: 123, c: true, d: {1: 1, 2: 2, 3: 3,},};
  //const newObj2 = {a: 'a', b: 123, c: true, d: {1: 1, 2: 2, 3: 3,},};

//   console.log(obj2 == newObj2) // false
  // они одинаковые, но они НЕ СРАВНИМЫ!!
  //потому что у них разный адрес!!!!

  // ОБЪЕКТЫ И МАССИВЫ НЕ СРАВНИВАЮТСЯ

//   // копировать или клонировать О мщжно при помощи метода assing(куда, что)
//   const obj3 = {a: 'a'}
//   const obj4 = {b: 'b'}
//   const testObj = {}
//   Object.assign(testObj, obj3, obj4)  // { a: 'a', b: 'b' }
//   console.log(testObj)


// обращение кключам с двойными(и тд) словами  и цифрами

//  let obj = {"sur name": "Prud", 123: 4, "job": undefined};
// // console.log(obj["sur name"])
// console.log(obj["123"])

// ключ 123  в объекте это строка, но сам синтаксис языка позволяет там опускать кавыкчи для ключей (можно делать, можно нет), но обращаться только с кавычками!



// спрсить есть ли ключ в объекте

// ----------  key in object

// console.log("123" in obj);  // true
// console.log("144" in obj); // false
 
// //  еслси мы обратимся к несуществ. ключу
// console.log(obj.name)  // undefined   -  т.к. ключа нет
// // нам вернется undefined
// //  но так же undefined вкрнется , если ключу присвоено значение undefined
// console.log(obj.job)  // undefined    - т.к. значение такое

// поэтому обращаясь просто console.log(obj.key) и получая undefined
// мы не знаем, есть ключ или нет
//лучше проверять с помощью  in  - console.log(key in obj)

//  так же можно исп цикл с in для перебора

// const obj = {apple: 12, plum: 10, grape: 15};

// for (let key in obj) {
//     if (key == 'plum') {
//     console.log(`${key} --- $${obj[key]} `)
//     }
// }          // plum --- $10 

//  из массива можно сделать объект

// let arr = ["cv", 'fd', 'df'];

// console.log({...arr})        // { '0': 'cv', '1': 'fd', '2': 'df' }

// нумерует ключи с нуля


// удалять с помощью   delete

// //  если нужно задать ключ переменной, то надо брать ее в []

// let firstName = 'Anna'
// let lesson = 'JavaScript'

// const obj = {
//     firstName: firstName,
//     lesson: lesson,
// }
// console.log(obj)   // { firstName: 'Anna', lesson: 'JavaScript' }

// const obj2 = {
//     [firstName]: firstName,
//     lesson: lesson,
// }
// console.log(obj2)   // { Anna: 'Anna', lesson: 'JavaScript' }


//-----------  методы объектов

// они статические

// Object.keys()  // массив ключей (строк)
// Object.values() // массив значений
// Object.entries() // массив всего вместе

// const subj = {1: 'JS', 5: 'Java', 3:'English', 4: 'SQL',}

// console.log(Object.values(subj));       // [ 'JS', 'Java', 'English', 'SQL' ]
// // все выдается не сортированное в объекте
// //  чтобы отсортировать , добавим .sort()

// console.log(Object.values(subj).sort());   // [ 'English', 'JS', 'Java', 'SQL' ]

//  console.log(Object.keys(subj).sort((a, b) => a - b));  // [ '1', '3', '4', '5' ]



//--------------- ЗАДАЧКИ

// arr = [1, 2, 4]
// a = arr[0];
// b = arr[1];
// c = arr[2];

// [a, b, c] = [1, 2, 3]  // или можно так
// d = a + b // 1 + 2 = 3 // d = 3



// //  ------------ подорожание на 20%

// let fruits ={'apple': 8, 'banana': 6, 'orange': 7, 'plum': 9};

// //console.log(fruits);


// const arr = Object.entries(fruits)
// console.log(arr);

// const newArr = arr.map(([key, value]) => [key, +(value * 1.2).toFixed(2)])
// console.log(newArr);

// fruits = Object.fromEntries(newArr)

// console.log(fruits)



//  -------- посчитать кол-во букв в фразе   сколько каких букв, символов в фразе)

//  const str = "Hellow world!"

//   const obj = {};

//   for (let letter of str) {
//     if (letter in obj) {
//         obj[letter]++;
//     } else {
//         obj[letter] = 1;
//     }

//   }
//   console.log(obj)