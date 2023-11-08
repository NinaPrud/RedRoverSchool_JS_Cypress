
function print(x) {
    console.log(x)
}

// -----------------  написать программу, которая выбирает из массива все числа

// let arr = ['name', 'jhjjhjh', 5, 'dodo', 255, 'age', 45]
// let arr2 = [444, 'name', 'jhjjhjh', 5, 'dodo', 255, 'age', 45, 88, 192]


// // function getNumber(x) {
// //     for (el of x) {
// //         if (typeof el === 'number') {
// //             print(el)
// //         }
// //     }
// // }
// // getNumber(arr2)


// // function getIndexAndNumber(x) {
// //     for (let i = 0; i < x.length; i++) {
// //         if (typeof x[i] === 'number') {
// //             print(`index ${i} - element - ${x[i]}`)
// //         }
// //     }
// // }
// // getIndexAndNumber(arr2)


// // function getNumber2(x) {
// //     let result = ''
// //     for (el of x) {
// //         if (typeof el === 'number') {
// //             result += el + '\n'
// //         }
// //     }
// //     return result
// // }
// // print(getNumber2(arr2))


// // function getIndexAndNumber2(x) {
// //     let result = ''
// //     for (let i = 0; i < x.length; i++) {
// //         if (typeof x[i] === 'number') {
// //             result += `index ${i} - element - ${x[i]}` + '\n'
// //         }
// //     }
// //     return result
// // }
// // print(getIndexAndNumber2(arr2))

// // ------------------------------ затолкать числа в новый массив c   .push()

// arr2 = [444, 'name', 'jhjjhjh', 5, 'dodo', 255, 'age', 45, 88, 192]
// let arrNew = []

// function createArrayOfNumbers(x) {
//     for (let i = 0; i < x.length; i++) {
//         if (typeof x[i] == 'number') {
//             if (x[i] == 255) continue
//            // arrNew.push(x[i])       // [ 444, 5, 45, 88 ]
//             if (x[i] == 88) break
//             arrNew.push(x[i])        // [ 444, 5, 45 ]
            
//         }
//     }
//     showHello()
//     return arrNew
// }
// print(createArrayOfNumbers(arr2))


// // -------------------------------------- show message

// function showMessage (a) {
//     print(a)
// }

// showMessage('Hello!!!!')

// function showHello () {
//     print('Hello!')
// }

// showHello()


//------------через переменную----

//  let sumNum = function (a, b, c = 0) {
//     return a + b + c
//  }

//  print(sumNum(1, 1))

//------------------------ стрелочная--------

// let getSum = (a, b, c) => {
//     if(a != 0)
//     return a + b + c
// }

// print(getSum(2, 3, 5))

// let getMult = (a, b) => a * b  // ретерн не нужен 

// let result = getMult(2, 2)

// print(getMult(2, 2))
// print(result)

// -------------------------------------

// let arr = ['name', 'jhjjhjh', 5, 'dodo', 88, 255, 'age', 45, 88]

// function findIndexOfNum (array, num) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === num) {
//            return i
//         } else {
//             return -1
//         }
//     }
// }

// console.log(findIndexOfNum(arr, 90))
// console.log(arr.indexOf(88))
// console.log(arr.lastIndexOf(88))



//------------- сложить все элементы из двух массивов

let arr1 = [-1, -2, -3]
let arr2 = [-4, -5, -6]

function arrayPlusArray(arr1, arr2) {
    let result = 0
    for (let el of arr1) {
        result += el
    }
    for (let el of arr2) {
        result += el
    }
    return result
}

print(arrayPlusArray(arr1, arr2))

// ----- если массивы одинаковой длинны 

function arrayPlusEqArray(arr1, arr2) {
    let result = 0
   for (let i = 0; i < arr1.length; i++) {
        result += arr1[i] + arr2[i]
   }
    return result
}
print(arrayPlusEqArray(arr1, arr2))