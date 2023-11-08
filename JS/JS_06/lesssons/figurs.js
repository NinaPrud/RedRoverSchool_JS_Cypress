// треугольник с цифрами
//let n = 5;

// for (let i = 1; i <= n; i++) {
//     let str =''
//     for (let s = n - i; s >= 1; s--) {
//        str += " "
//     }
//     for (let l = 1; l <= i; l++) {
//         str += l
//     }
//     for(let k = i - 1; k >= 1; k--)  {
//         str += k
//     }
//     //str += "\n"; // - str внешняя и  console.log(str) за пределами цикла
//     console.log(str)
// }

// console.log('-----------------------------------------------')
// // елочка

// n = 7

// for (let i = 1; i <= n; i++) {
//     let str = ''
//     for(let j = n; j >= i; j--){
//         str += " "
//     }
//     for (let k = 1; k <= i; k++) {
//         str += "*"
//     }
//     for (let l = 2; l <= i; l++) {
//         str += "*"
//     }

//     console.log(str)
// }

// console.log("-----------------------------------------------");

// // ромб

// n = 9;

// for (let i = 1; i <= n; i++) {
//     let str = "";
//     for (let s = n - i; s >= 1; s--) {
//         str += " ";
//     }
//     for (let l = 1; l <= i; l++) {
//         str += l;
//     }
//     for (let k = i - 1; k >= 1; k--) {
//         str += k;
//     }

//     console.log(str);
// }

// for (let i = n - 1; i >= 1; i--) {
//     // i = 4, 3, 2, 1
//     let str = "";

//     for (let s = n - i; s >= 1; s--) {
//         str += " ";
//     }

//     for (let k = 1; k <= i; k++) {
//         str += k;
//     }

//     for (let l = i - 1; l >= 1; l--) {
//         str += l;
//     }

//     console.log(str);
// }

//// console.log("-----------------------------------------------");

//// --------------------------- ёлочка (Татьяна)

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