// ================  while

// let i = 0
// while (i < 3) {
//    console.log(i)
//     i++
// }

// let j = 7
// while (j != 0) {
//     console.log(j)
//     j--
// }

// ============ do ... while

// do {
//    code block
// }
// while (condition)

// let k = 0;
// do {
//     console.log(k);  // 0
//     k++
// }
// while (k > 3)

// ================= break; continue

// директива  break полностью прекращает выполнение цикла
// continue  - прерывает текущую итерацию циклов и 
// продолжает выполение цикла сщ следующей итерации

// for (let i = 0; i <= 10; i++) {
//     if (i == 7) break;
//     console.log(i);
// }

// let arr = [1, 3, true, 10]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === true) {
//         console.log(`${i} - ${arr[i]}`)
//         break;
//     }
// }

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) continue
//     console.log(i)
// }

// let arr1 = [1, 3, "ggg", true, 20, null]

// for (let i = 0; i < arr1.length; i++) {
//     if (typeof arr1[i] == 'number') continue
//     console.log(`index ${i} - ${arr1[i]}`)
// }

// с тернарным опреатором ?  не используется break/continue  


// ===========  for in

// for (key in object)
// {
//     code block
// }

// const arr = [45, 4, 9, 16, 25]

// let txt = ''
// for(let i in arr) {
//     txt += arr[i]
//     console.log(txt)
// }
//console.log(txt)  // 45491625

//  в объектах выводит ключи
// let obj = {
//     car1: 'BMW',
//     car2: 'Volvo',
//     car3: 'Mini'
// }
// for (let x in obj) {
//     console.log(x)   // car1 car2 car3
// }

// =========== for of ======= - здесь НЕТ индексов, он обращается к ЭЛЕМЕНТАМ

// const cars = ['BNW', 'Volvo', 'Mini']

// for (let x of cars) {
//     console.log(x)   // выведет ЭЛЕМЕНТЫ  BNW Volvo Mini  
// }

// for (let x in cars) {
//     console.log(x)    // выведет ИНДЕКСЫ 0 1 2
// }



// ============= вложенный for

// внешний цикл отвечает за количесво строчек
// внутренний цикл отвечает за наполнение этих строчек

for (let i = 1; i <= 5; i++) {
    console.log(i)
}

console.log('-------------------------------------------')

for (let line = 1; line <= 5; line++) {
    let str = "";
    for (let numInLine = 1; numInLine <= line; numInLine++) {
        //if (line % 2 == 0) continue
        str += numInLine
    }

    console.log(str)
}

for (let i = 5; i >= 1; i--) { //  отвечает за количество строк
    let str = "";
    for (let j = i; j >= 1; j--) { // отвечает за наполнение строки
        //if (i % 2 == 0) continue
        str += j
    }
    console.log(str)
}

// if (i == 2) continue  ??????????????????

console.log('-------------------------------------------')

for (let line = 1; line <= 5; line++) {
    let str = "";
    for (let numInLine = 1; numInLine <= line; numInLine++) {
        str += numInLine
    }

    console.log(str)
}

for (let i = 4; i >= 1; i--) { //  отвечает за количество строк
    let str = "";
    for (let j = 1; j <= i; j++) { // отвечает за наполнение строки
        str += j
    }
    console.log(str)
}