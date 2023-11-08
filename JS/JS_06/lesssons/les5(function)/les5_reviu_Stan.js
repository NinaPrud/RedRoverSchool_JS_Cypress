// ===================== зоны видимости

// function getName () {
//     function getHi () {
//         return 'Hi'
//     }
//     return getHi() + 'JS'
// }

// //console.log(getName())
// //console.log(getHi())     // getHi is not defined

// // ---------------------------------------

// console.log(getNewName())   // Hello Java
// console.log(getHello())   // Hello

// function getNewName () {
//     return getHello() + ' Java'
// }

// function getHello () {
//     return 'Hello'
// }

// let result = getHello()

// function getNewName2 (){
//     return result + 'java'
// }

// console.log(getNewName2())   // Hellojava
// console.log(result)     // Hello

// --------------------------------------

//  let str = "Hey"

//  function getWelcomeMes() {
//     let str = "Hello"
//     return str + ' ' + 'Nina'
//  }
//  console.log(getWelcomeMes())  // Hello Nina
//  console.log(str)              // Hey

//  function getWelcomeMes2() {
//     return str + ' ' + 'Nina'
//  }
//  console.log(getWelcomeMes2())  // Hey Nina

 // ------------------------
 
//  function sum (a, b){
//     return a + b
//  }

//  function sum2 (a, b) {
//     return a + b + 'Hi'
//  }

//  function sum3 (a, b) {
//     return 'Hi' + a + b
//  }

//  console.log(sum2(1, sum(20,30)))  // 51Hi
//  console.log(sum3(1, sum(20,30)))  // Hi150


// =========================== callback function

// это функция, которая передается как аргумент другой фунукции

function sum (a, b) {
    return a + b
}

let divigion = (a, b) => a/b

//----------------------------------- можно так

function result (num1, num2, callback) {
    return callback(num1, num2)
}

console.log(result(10, 1 , divigion))

//------------------------------------ можно так

let result2 = function(c, d, f) {
    return f(c, d)
}

console.log(result2(5, 5, divigion))

//----------------------------------------- или так

let result3 = (anyNum1, anyNum2, samething) => samething (anyNum1, anyNum2)

console.log(result3(100, 200, sum))
console.log('-------------------------------------')

// ----------------------------------------- или с безымянной функцией

let res = (num1, num2, callback) => callback(num1, num2)

console.log(res(3, 3, (num1, num2) => num1 * num2))

// ------------------------------------ тоже самое

function res2 (a, b, c) {
    return c (a, b)
}
console.log(res2(100, 5, (num1, num2) => num1 + num2))  // либо (a, b) => a + b) - это не важно

//------------------------------------- когда значения по дефолту

function res3 (callback, num1 = 10, num2 = 3) {
    return callback (num1, num2)
}
console.log(res3((a, b) => a + b))   // 13
console.log(res3((a, b) => a + b, 100, 300))  // 400

// console.log(res3((a, b) => a + b), 100, 300)  // 13 100 300


// ========================== как работать с нейзвестным числом аргументов

function sum2 () {
    console.log(arguments)   //  [Arguments] { '0': 1, '1': 2, '2': 5, '3': 10, '4': 45 }
    let result = 0
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i]
    }
    return result
}

console.log(sum2(1, 2, 5, 10, 45))  // 63

console.log(arguments)



