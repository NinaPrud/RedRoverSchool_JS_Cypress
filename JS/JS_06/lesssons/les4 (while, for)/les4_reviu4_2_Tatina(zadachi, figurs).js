// задача с codewors найти иголку в стоге сена
// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c     A needle in the Haystack

//let haystack = ['3', '123124234', undefined, 'needle','world', 'hay', 2, '3', true, false];
// 1
// function findNeedle(haystack) {
//     for (let i = 0; i < haystack.length; i++) {
//       if (haystack[i] === 'needle') {
//         return "found the needle at position " + i
//       }
//     }
//   }

// 2
//   function findNeedle(haystack) {
//     for (let i in haystack){
//       if (haystack[i] === 'needle') {
//         return 'found the needle at position '+ i
//       }
//     }
//   }
 // 3
//   function findNeedle(haystack) {
//     return "found the needle at position " + haystack.indexOf("needle")
//   }

//   console.log(findNeedle(haystack))

//   //-----------------
//   // https://www.codewars.com/kata/5a2b703dc5e2845c0900005a   Can we divide it (if)

//   function isDivideBy(number, a, b) {
//     if (number % a == 0 && number % b == 0) {
//       return true
//     }
//     return false
//   }
//   console.log(isDivideBy(-10, -2, -5))

// // --------------------------------------
// // ----- https://www.codewars.com/kata/5601409514fc93442500010b   How good are you


// function betterThanAverage(classPoints, yourPoints) {
//     classPoints[classPoints.length] = yourPoints
//     let sum = 0
//     for(let e of classPoints) { 
//         sum += e
//     }         //console.log(`${sum} / ${classPoints.length-1} =`,sum/classPoints.length-1)
//     return sum / classPoints.length-1 < yourPoints  
// }  

// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 50))


//// ------------------ ёлочка (Татьяна)

// let height = 7
// let halfTree = height - 1

// for (let i = 0; i < height; i++) {
//     let line = ""
//     for (let j = 0; j < halfTree - i; j++) {
//         line += " "
//     }
//     for (let j = 0; j < 2*i + 1 ; j++) {
//         line += "*"
//     }

//     console.log(line)
// }

// // ------- ромб (Татьяна)

// let height = 7
// let halfTree = height - 1

// for (let i = 0; i < height; i++) {
//     let line = ""
//     for (let j = 0; j < halfTree - i; j++) {
//         line += " "
//     }
//     for (let j = 0; j < 2*i + 1 ; j++) {
//         line += "*"
//     }
//     console.log(line)
// }

// for (let i = height - 2; i >=0; i--) {
//     let line = ''
//     for (let j = 0; j < halfTree - i; j++) {
//         line += " "
//     }
//     for (let j = 0; j < 2*i + 1; j++){
//         line += "*"
//     }
//     console.log(line)
// }

// //// либо так 2 половина
// // for (let i = 0; i < height; i++) {
// //     let line = ""
// //     for (let j = 0; j <= i; j++) {
// //         line += " "
// //     }
// //     for (let j = 0; j < 2*(halfTree - i) -1 ; j++) {
// //         line += "*"
// //     }
// //     console.log(line)
// // }


// //------------------ smart версия ромба (от Татьяна)

// let height = 5
// for (let i = -height; i <= height; i++) {
//     let line = ''

//     //loop for " "
//     let numSpaces = Math.abs(i)
//     for (let j = 0; j < numSpaces; j++) {
//         line += " "
//     }
//     //loop for "*"
//     let numStars = height - numSpaces  // before trunk
//     for (let j = 0; j < 2*numStars + 1; j++) {
//         line += "*"
//     }
//     console.log(line)
// }



