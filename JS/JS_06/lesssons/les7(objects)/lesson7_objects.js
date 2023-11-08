//  возврат к массивам
// ----------- сравнение массивов
// мы не можем сравнить массивы, как строки, 
// чтобы их сравнить нужно привести к строке

// let arr = ['a', 's', 'b']
// let arr1 = [1, 2, 3]
// let arr2 = [1, 2, 3]
// let arr4 = [1, 3, 3]

// //  так не верно
// console.log(arr1 == arr2) // false
// console.log(arr > arr1)   // true

//  нужно перевести в стринг
//1
// console.log(arr.toString() < arr1.toString()) // true ????????
// console.log(arr.toString() < arr1.toString()) // false ????????

//  console.log(arr1.toString() === String(arr2)) //true
// console.log(String(arr1) === arr4.toString()) // false
// console.log(typeof arr1.toString()) // string
// console.log(arr1.toString())  // 1,2,3
// console.log(String(arr2))  // 1,2,3



// //2 JSON.stringify()

// - переводит в строку вмести со скобками

// console.log(JSON.stringify(arr1)) // '[1,2,3]'
// console.log(typeof JSON.stringify(arr1)) // string

// console.log(JSON.stringify(arr1) === JSON.stringify(arr2)) //  true


// let a = arr1.toString()
// let b = JSON.stringify(arr1)
// console.log(a + " " + b)  // 1,2,3 [1,2,3]
// console.log(a == b)  //false
// console.log(a[0])  // 1
// console.log(b[0])  // [
// console.log(a.length) // 5
// console.log(b.length)  // 7

// // ---------------------------------------

// проверки
// let a
// let arr = []
// let newArr = [1, 2 , 3]
// console.log(Boolean(arr), '/', Boolean(newArr), '/', Boolean(a))  // true / true / false
// console.log(Number(...arr), '/', Number(...newArr), '/', Number(a))  // 0 / 1 / NaN



// ===============================================  objects  ( не ООП, а представители класса объект) ===============================


// {key : value} - property
//  обявление 
// const a = {}
// const b = new Object()

// const person = {
//     name: "Ivan",
//     surname: "Petrov",
//     age: 33,
//     'job': "QA engineer",
//     isAdmin: false,
// }

// ДЛЯ ОБЪЕКТА
// ключ пишется без кавычек (но можно ис ними), но это строка
// значение любоЙ тип данных, но если это строка, то в кавчках
// разделяютя ключ: значения :
// свойства - запятой ( в конце можно ствить или нет)

//ДЛЯ JSON
// // ключи тоже в двойных кавычках
// // запятая в конце не ставиться

// const person2 = {
//     id: '02',
//     personalInfo: {
//         name: {
//             first: 'Jane',
//             last: 'Dow',
//         },
//         dob: '01/01/1990',
//         age: 33,
//         contactInfo: {
//             phone: '+375295000000',
//             email: null,
//             address: {
//                 city: 'Boston',
//                 state: "M",
//             },
//         },
//     },
//     purchases: [null],
//     salary: undefined,
// }

// console.log(person2.personalInfo.contactInfo)
// console.log(person2.personalInfo['contactInfo'])  //  так тоже можно, но ключ в кавычках тогда
// console.log(person2.personalInfo['name'].last)


// let user = {
//     name: 'Nina',
//     age: 30,
//     'high school': true,
// }

//  ключ может состоять из нескольких слов, но тогда он ОБЯЗАТЕЛЬНО должен быть в кавычках
//  и обращение к нему в массиве и кавычках
//  ключ должен быть оригинальный (если два одинаковых ключа - первый перезатрется вторым)

//  console.log(user['high school'])  // true

// //----  можно изменять значения

//  console.log(user)    // { name: 'Nina', age: 30, 'high school': true }

//  user.name = 'Vova'
//  console.log(user)    // { name: 'Vova', age: 30, 'high school': true }

//  // ---  добавлять своиства

//  user.adress = {
//     city: 'Minsk',
//     country: 'RB'
//  }

//  user.message = 'Hi!'

//  console.log(user)
/*
{
 name: 'Vova',
 age: 30,
 'high school': true,
 adress: { city: 'Minsk', country: 'RB' },
 message: 'Hi!'
}
*/

// // --------   оператор  delete

//  delete user.adress.country  //  удалили свойство  country
//  console.log(user)    



// // ---------  дабавление свойств

// const user1 = {}
// console.log(user1)

// user1.name = 'Bob'
// console.log(user1)

// user1.children = ['Maria', 'Nike']
// console.log(user1)

// let carModel = 'BMV'
// let carModel2 = 'Mini'

// user1.car = carModel
// console.log(user1)   // { name: 'Bob', children: [ 'Maria', 'Nike' ], car: 'BMV' }
// user1[carModel2] = 1
// console.log(user1)   // { name: 'Bob', children: [ 'Maria', 'Nike' ], car: 'BMV', Mini: 1 }


// // ------------ создание объекта с помощь пременных

//  let name1 = 'Anna'
//  let age = 17

//  const person3 = {
//     [name1]: age,   // Anna: 17
//     name1: name1,   // name1: 'Anna'
//     age: age  ,     // age: 17
//  }

//console.log(person3)


// //  -------- Обращение к свойствам объекта

// const customers = [
//     {
//         id: '01',
//         personalInfo: {
//             name: { first: 'John', last: 'Dow' },
//         },
//     },
//     {
//         id: '02',
//         personalInfo: {
//             name: { first: 'Jane', last: 'Dow' },
//             dob: '01/01/1990',
//             'contactInfo': {
//                 phone: '+12345678',
//                 email: [1, 2, 3],
//                 address: null,
//             },
//         },
//         purchases: [null, 1],
//     },
// ]

// //// 1.  Свойства 1-го уровня -  array elements
// console.log(customers.length)  // 2
// console.log(customers[0])      // { id: '01', personalInfo: { name: { first: 'John', last: 'Dow' } } }
// console.log(customers[1])
// console.log(customers[2])     // undefined

//// 2.  Свойства 2-го уровня - from array to object
// console.log(customers[0].id)     // 01
// console.log(customers[0]['id'])  // 01

// //// 3.  Свойства 3-го уровня 
// console.log(customers[1].personalInfo.name)
// console.log(customers[1].personalInfo.dob)
// console.log(customers[1]['personalInfo']['dob'])

// //// 4.  Свойства 4-го уровня 
// console.log(customers[1].personalInfo.name.first)                    // Jane
// console.log(customers[1].personalInfo.contactInfo.email[2])          // 3
// console.log(customers[1]['personalInfo']['contactInfo']['email'][2])  // 3



// ----------------  Проверка существования свойства

// //--------- с  undefinide 

// let user = {
//     newKey: 'MY Key',
// }

// console.log(user)
// console.log(user.newKey)  // MY Key
// console.log(user.age)    // undefined

// console.log(user.name === undefined)   // true
// user.name = 'Nina'
// console.log(user.name !== undefined)  // true
// console.log(user.name)    // Nina


//  массив так тоже можно

// let a = [0, 1, 2]
// console.log(a[0])
// console.log(a[3])
// console.log(a[3] === undefined)


// // ---------------  через оператор  in  -----  ключ обязательно в кавычки 

// let obj = {
//     name: 'Anna',
//     age: 37,
//     info: {
//         age1: {
//             after: 38,
//             before: 37
//         }

//     }
// }

// console.log('name' in obj)      // true
// //console.log(name in obj)       // ReferenceError: name is not defined
// console.log('age' in obj)        // true
// console.log('age1' in obj)       // false
// console.log('age1' in obj.info)  // true
// console.log('after' in obj.info.age1) // true

//console.log(undefined in obj)   // false



// ================================   цикл  for  ... in =======================

// //   for in  используется для итерации по объекту

//  let obj = {
//     name: 'John',
//     age: 37,
//     isAdmin : true
//  }

//for(let key in obj) {
//   //          ключ       значение этого ключа
//   console.log(key + ":" + obj[key])
//}

// for(let key in obj) {
//     //    значение этого ключа
//     console.log(obj[key])
//  }

// for (let key in obj) {
//     console.log(key)    // выведет только ключи
// }


 //  вместо key можно что угодно

//--------------------------
//  let salaries = {
//     Anna: 100,
//     Bob: 200,
//     Mary: 300
//  }

//  let sum = 0
//  for (let key in salaries) {
//     sum += salaries[key]
//  }

//  console.log(sum)  // 600

//-----------------------------

// let obj = {
//     w: 200,
//     h: 300,
//     t: "menu"
// }

// let result = 0
// for (let k in obj) {
//     if (typeof obj[k] == 'number') {
//         result +=obj[k]*2
//     }
// }
// console.log(result)  // 1000


// ===============================  Методы массивов
// Object.keys, values, entries
// Для простых объектов доступны следующие методы

// Object.keys(obj)  - возврвщает массив ключей
// Object.values(obj) - возврвщает массив значений
// Object.entries(obj) - возврвщает массив пар [ключ, значение].


// let salaries = {
//         Anna: 100,
//         Bob: 200,
//         Mary: 300,
//         others: {
//             John: 500,
//             Nina: 1000
//         }
// }

// console.log('Keys: ', Object.keys(salaries))
// console.log('Values: ', Object.values(salaries))
// console.log(Object.entries(salaries))

//-----------------------

// for ( let i of Object.entries(salaries)) {
//     console.log(i)
// }

// for (let i of Object.entries(salaries.others)) {
//     console.log(i)
// }



//---------------------------------
//https://www.codewars.com/kata/57ed4cef7b45ef8774000014/train/javascript

//1

function boredom(staff){
    let arr = Object.values(staff)
    let boreCount = 0
    arr.forEach(el => {if(el == 'accounts') boreCount += 1})
    arr.forEach(el => {if(el == 'finance') boreCount += 2})
    arr.forEach(el => {if(el == 'canteen') boreCount += 10})
    arr.forEach(el => {if(el == 'regulation') boreCount += 3})
    arr.forEach(el => {if(el == 'trading') boreCount += 6})
    arr.forEach(el => {if(el == 'change') boreCount += 6})
    arr.forEach(el => {if(el == 'IS') boreCount += 8})
    arr.forEach(el => {if(el == 'retail') boreCount += 5})
    arr.forEach(el => {if(el == 'cleaning') boreCount += 4})
    arr.forEach(el => {if(el == 'pissing about') boreCount += 25})
    
    if(boreCount <=80) return'kill me now'
    if(boreCount >= 100) return 'party time!!'
    return 'i can handle this'
  }
//   console.log(boredom({tim: 'change', jim: 'accounts',
//   randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
//   laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
//   mr: 'finance' }))

  //2 ---- ???????????????????????????????????????

  function boredom2(staff) {
    let teams = { 'accounts'      : 1,
                  'finance'       : 2 ,
                  'canteen'       : 10, 
                  'regulation'    : 3, 
                  'trading'      : 6, 
                  'change'        : 6,
                  'IS'            : 8,
                  'retail'        : 5,
                  'cleaning'      : 4,
                  'pissing about' : 25}

      let  score = Object.keys(staff)
                      .map(key=>teams[staff[key]])
                      .reduce((a,b) => a+b, 0);
    
                   
  return score <= 80 ? 'kill me now' : (score > 100 ? 'party time!!' : 'i can handle this');            
  }

  console.log(boredom2({tim: 'change', jim: 'accounts',
  randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
  laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
  mr: 'finance' }))



    


    

