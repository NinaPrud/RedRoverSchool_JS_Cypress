// // ------------- callback function -  ф., которая передается в др.ф-ю в виде аргумента

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// function showresult (a, b, callback) {
//     if (typeof callback === 'function') {
//         console.log(callback(a, b))
//     }
//     else return console.log('Your number are ' + a + ' and ' + b)
// }

// showresult(3, 4, multiply)           // 12
// showresult(3, 4, (a ,b) => a * b)   // 12
// showresult(21, 3, divide)           // 7
// showresult(21, 3)     // Your number are 21 and 3



//------------------------- замыкание (closure)

// //  когда одна ф. заключена в другую и внутренняя ф. пользуется параметрами внешней ф., но извне мы ее вызвать не мщжеи

// // 1  ваприант

// function outer(x, y) {
//     let tmp = 3;

//     function inner() {
//         console.log(x + y + (++tmp))
//     }
//     inner();
// }
// outer(2, 3)  // 9
// //        тоже самое 
// function outer2(x) {
//     let tmp = 3;

//     function inner(y) {
//         console.log(x + y + (++tmp))
//     }
//     inner(3);
// }
// outer2(2)  // 9



// // 2  вариант

// let Person = function(pName) {   // old class
//     let name = pName;

//     this.getName = function () {
//         return name
//     }
// }

// let person = new Person('Natan');
// console.log(person.getName())



// // closure example

// function calc2(a, b, sing) {
//     if (sing == '*') {
//         return multiply(a, b)
//     }
//     else if (sing == '/') {
//         return divide(a, b)
//     }
// }
// console.log(calc2(7, 7, '*')) 


// ------------------------------ promice


//





// // var2

function someFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hello');
        }, 5000);
    });
}