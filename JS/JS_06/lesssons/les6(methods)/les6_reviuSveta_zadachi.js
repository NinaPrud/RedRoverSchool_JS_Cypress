
//-----------------------------some()-includes()-indexOf()-----------------------------
// https://www.codewars.com/kata/57cc40b2f8392dbf2a0003ce/train/javascript
//No Loops 2 - You only need one
/*
You will be given an array a and a value x. 
All you need to do is check whether the provided array contains the value, without using a loop.
Array can contain numbers or strings. x can be either. Return true if the array contains the value, 
false if not. With strings you will need to account for case. */


// // 1 вар  - .some()        выполняет функцию и возвращает true/false
// function check(a, x){ 
//     return a.some((y) => y == x)
//   };
// // 2 ВАР - .inqludes()     исчет элемент и возвращает true/false
//   function check2(a, x){
//     return a.includes(x)
//   };

// // 3  вариант -  indexOf() -  исчет элемент и возвращает индекс
// function check3(a, x){
//     return a.indexOf(x) >= 0
//   };


//   console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 46))
//   console.log(check2([80, 117, 115, 104, 45, 85, 112, 115], 45))
//   console.log(check3([80, 117, 115, 104, 45, 85, 112, 115], 45))



//---------------------------------indexOf()---reverse()--------------------

//https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript
//A wolf in sheep's clothing
/* Wolves have been reintroduced to Great Britain.
 You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. 
Fortunately, you are good at spotting them.
Warn the sheep in front of the wolf that it is about to be eaten. 
Remember that you are standing at the front of the queue which is at the end of the array:
[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". 
Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
Note: there will always be exactly one wolf in the array.*/

// // вар 1

// function warnTheSheep(queue) {
//     const position = queue.reverse().indexOf('wolf');
//     return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
//   }

// // вар2

// function warnTheSheep2(queue) {
//     let x = queue.length - (queue.indexOf('wolf') + 1)  // queue.length-1 - queue.indexOf('wolf') // 4 - (1 + 1) = 2
//     if (queue[queue.length - 1] == 'wolf') {
//         return "Pls go away and stop eating my sheep"
//     } else {
//         return `Oi! Sheep number ${x}! You are about to be eaten by a wolf!`
//     }
// }


// // console.log(warnTheSheep2(['wolf', "sheep", "sheep", "sheep"]))
// // console.log(warnTheSheep(['wolf', "sheep", "sheep", "sheep"]))
// console.log(warnTheSheep2(['wolf']))
// console.log(warnTheSheep(['wolf']))



// //----------------------------------- reverse() ---------------

// // https://www.codewars.com/kata/56f699cd9400f5b7d8000b55/train/javascript

// // My head is at the wrong end!
// // перевернуть во всех приходящих массивахиз трех элементов голову и хвост (0 с 2)
// function fixTheMeerkat(arr) {
//     return arr.reverse()
// }
// console.log(fixTheMeerkat(["tail", "body", "head"]))
// console.log(fixTheMeerkat(["lower legs", "torso", "upper legs"]))


// // -------------------- split()- reverse()- join()

// // Дан массив из строк
// // нужно вернуть массив с перевернутыми в нем элементами(строками) 
// //- каждый элемент на том же месте, но буквы в нем перевернуты

// let arr1 = ["tail", "body", "head", "legs"]

// function revEltmArr(arr) {

//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].split('').reverse().join('')
//     }
//     return arr
// }
// console.log(revEltmArr(arr1))


//------------------------------------String(num)-----split()--reverse()-----mup(Number)-------------------
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

// Преобразовать число в перевернутый массив цифр
// Учитывая случайное неотрицательное число, вы должны вернуть цифры этого числа в массиве в обратном порядке.

 let n = 12345

// // 1 вар
// function digitize(n) {
//     let arr = String(n).split('').reverse()

//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = Number(arr[i])
//     }
//     return arr
// }

// console.log(digitize(n))

// // 2 вар 
// function digitize2(n) {
//     return String(n).split('').map(Number).reverse()
// }

// console.log(digitize2(n))

// // 3 вар

// function digitize3(n) {
//     let arr = []
//     let str = n.toString()
//     for (let i= str.length-1; i >= 0; i--){
//         arr.push(Number(str[i]))
//     }
//     return arr
// }
// console.log(digitize3(n))





