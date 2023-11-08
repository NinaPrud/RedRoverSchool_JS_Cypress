let log = console.log

// // for(let i = 0; i <=10; i++){
// //     log({i}) // log({i:i})
// // }

// let obj = {
//     100: 1000,
//     arr: [1, 2, 3],
//     obj_1:{
//         a: 'acv',
//         b: 'bfg',
//         c: 'chn',
//         d:{
//             13: [10, 20, 30]
//         },
//     },
//     func: (x, y) => x + y,
//     y: undefined,
// }
// log(obj.arr[1])
// log(obj.obj_1.d['13'][0])
// log(obj.func(3, 2))  // 5
// log(obj.arr === undefined ? 'key is not present' : 'key is present')
// log(obj.y === undefined ? 'key is not present' : 'key is present') // !! ОШИБКА
// log('y' in obj) // true -   лучше так


// for(let key in obj) {   // перебираются ключи первого уровня,  чтоб глубже надо детализировать
//     log(key, obj[key])
// }

//------------ Object.keys()  Object.values()  Object.entries()

// let obj = {
//     name: 'Stan',
//     teacher: 'yes',
//     language: 'JavaScript'
// }
// log(Object.keys(obj))
// log(Object.values(obj))
// log(Object.entries(obj))

// //---------- задачки

// let arr = [{4: 'cat'}, {7: 'She'}, {'-2': 'Serj'}, {5: 'for'}]
// // отсортировать
// log(arr.sort((a, b) => Object.keys(a) - Object.keys(b)).map(obj => Object.values(obj).join(' '))) // [ 'Serj', 'cat', 'for', 'She' ]

// -- отсортир предложение в соотв с частотностью букв в  вашем предложении

let str = 'The charCodeAt() method returns an integer between 0 adb 65535'
let newStr = str.toLowerCase()
const obj = {}
for(letter of newStr) {
    if (letter in obj) {
        obj[letter]++
    } else {
        obj[letter] = 1
    }
}

log(Object.entries(obj).sort((a, b) => b[1] - a[1]).map(el => `${el[0]} - ${el[1]}`).forEach(el => log(el)))