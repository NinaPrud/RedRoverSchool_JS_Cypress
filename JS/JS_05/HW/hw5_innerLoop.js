// HomeWork 5

// Нарисуйте ромб

//          1
//         121
//        12321
//       1234321
//      123454321
//     12345654321
//    1234567654321
//   123456787654321
//  12345678987654321
// 1234567890987654321
//  12345678987654321
//   123456787654321
//    1234567654321
//     12345654321
//      123454321
//       1234321
//        12321
//         121
//          1

// n = 9;
// str = "";

// for (let i = 1; i <= n + 1; i++) {
//     for (let j = n - i + 1; j > 0; j--) {  // можно использовать метод space.repeat(i) (сначала let space = " ")  
//         str += " ";
//     }
//     for (let k = 1; k <= i; k++) {
//         let х
//         if (k > 9) {
//             str += 0
//         } else {
//             str += k;
//         }
//     }
//     for (let l = i - 1; l >= 1; l--) {
//         str += l;
//     }
//     str += "\n";
// }
// for (let i = 1; i <= n + 1; i++) {
//     for (let j = 1; j <= i; j++) {
//         str += " ";
//     }
//     for (let k = 1; k <= n - (i - 1); k++) {
//         str += k;
//     }
//     for (let l = n - i; l >= n - (n - 1); l--) {
//         str += l;
//     }
//     str += "\n";
// }
// console.log(str)

//  вщзможны варианты в предельных значениях



// 2 Нарисуйте елочку

//      *
//    ***
//   *****
//  *******
// *********

// let n = 5;
// let str = "";

// for (let i = 1; i <= n; i++) {
//     for (let j = n - i + 1; j > 0; j--) {
//         str += " ";
//     }
//     for (let j = 1; j <= n + i - 5; j++ ) {
//         str += "*";
//     }
//     for (let j = 0; j < i - 1; j++ ) {
//         str += "*";
//     }

//     str += "\n";
// }
// console.log(" " + str);
//----------------------------------
//если без погнутой верхушки, то можно так:
//     *
//    ***
//   *****
//  *******
// *********
// let pyramid2 = "";
// let x = 5;
// let space = " ";
// let sum = 1;
// for (let i = 1; i <= x; i++) {
//     pyramid2 += space.repeat(x - i) + "*".repeat(sum) + '\n'
//     sum += 2;
// }
// console.log(pyramid2)


//------ либо так--------ДРУГАЯ ЕЛОЧКА!!!!
// let n = 6;
// for (let i = 0; i < n; i++) {
//     var str = "";

//     for (let j = 0; j < n - i; j++) {
//         str += " ";
//     }
//     for ( let star = 0; star < i; star++) {
//         str += "*";
//     }
// str += "I";
//     for (let rStar = 0; rStar < i; rStar++) {
//         str += "*";
//     } 
// console.log(str);       
// }

//===========================================================
// 3. Нарисуйте пирамидку

// let str = '';
// let x = 5;
// let space = " "
// for (let i = 1; i <= x; i++) {
//     let num = i;
//        for (let j = 1; j <= i; j++) {
//             str += num + space
//             num = num + (x -j)
//        }
//        str += '\n';
// }
// console.log(str)

// console.log(str)
// 1
// 2 6
// 3 7 10
// 4 8 11 13
// 5 9 12 14 15

// 4. Закрепление- Продумайте код для создания сэндвичей с 3-мя начинками и выставите цену в зависимости от вида начинки. Используйте while and do.. while loops

let bread = 'white bread'
let salmon = 'salted salmon'
let turkey = 'smoked turkey'
let bacon = 'fried bacon'
let cheese = 'cream cheese'
let sandwich
let topping

let turkeySandwich = 'Sandwich with turkey'
let baconSandwich = 'Sandwich with bacon'
let salmonSandwich = 'Sandwich with salmon'


let ask = prompt('Would you like to order');

while (ask != "yes") {
    ask = prompt('Would you like to order');
}
let askTopping = prompt('Choose from bellow toopings: 1 - salmon, 2 - turkey, 3 - bacon')

if (askTopping == 1) {
    topping = salmon
    sandwich = salmonSandwich
} else if (askTopping == 2) {
    topping = turkey
    sandwich = turkeySandwich
} else {
    topping = bacon
    sandwich == baconSandwich
}


let step1 = `1.Take a piece of ${bread}`
let step2 = `2.Take a piece of ${cheese}`
let step3 = '3.Put cheese on bread'
let step4 = `4.Take a piece of ${topping}`
let step5 = `5.Put ${topping} on ${cheese}`
let step6 = 'Bon appetite!'

document.write(`For ${sandwich} you must do: <br><br>`, step1,
    '<br>', step2, '<br>', step3, '<br>',
    step4, '<br>', step5, '<br><br>', step6, '<br><br>')


let priceSalmon = 15
let priceTurkey = 10
let priceBacon = 8

if (topping == salmon) {
    document.write(`P.S.:And in a cafe ${salmonSandwich} costs 
   ${priceSalmon} dollars`)
}
else if (topping == turkey) {
    document.write(`P.S.:And in a cafe ${turkeySandwich} costs 
   ${priceTurkey}  dollars`)
}
else if (topping == bacon) {
    document.write(`P.S.:And in a cafe ${baconSandwich} costs 
   ${priceBacon} dollars`)
}



