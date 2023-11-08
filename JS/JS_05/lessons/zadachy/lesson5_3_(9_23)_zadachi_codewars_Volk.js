// ============ задачи с кодворс 

//------------2:12-----------Jenny's secret message https://www.codewars.com/kata/55225023e1be1ec8bc000390/train/javascript

// function greet(name){
//     if(name === "Johnny"){
//       return "Hello, my love!";
//       } else {
//         return "Hello, " + name + "!";
//       }
//   }

//-----------5:07----------No zeros for heros	https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript


// (960000), 96)
// (1050), 105)
// (-1050), -105)
// (-105), -105)
// (0), 0)

// let n = 960000
// while (n != 0 && n % 10 == 0) {

//     n = n / 10;
// }

// console.log(n)

// ------14:47---Switch it Up!--https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/train/javascript
// When provided with a number between 0-9, return it in words.
// если с return, то break  не нужен!!
//  defoult здесь тоже в принципе не нужен (просто ничего не выведет, если придет не то условие)

// let num = 10;
// switch (num) {
//     case 0:
//         console.log("Zero")
//         break;
//     case 1:
//         console.log("One")
//         break;
//     case 2:
//         console.log("Two")
//         break;
//     case 3:
//         console.log("Three")
//         break;
//     case 4:
//         console.log("Four")
//         break;
//     case 5:
//         console.log("Five")
//         break;
//     case 6:
//         console.log("Six")
//         break;
//     case 7:
//         console.log("seven")
//         break;
//     case 8:
//         console.log("Eight")
//         break;
//     case 9:
//         console.log("Nine")
//     //default:
//        // console.log("No this case!")
// }

// -------21:50 -----     Debug Basic Calculator-----------https://www.codewars.com/kata/56368f37d464c0a43c00007f/train/javascript

// let a = 4;
// let b = 0;
// let o = "/";
// if (o === "+") {
//     console.log(a + b);
// }
// else if (o === "-") {
//     console.log(a - b);
// }
// else if (o === "/" && b != 0) {
//     console.log(a / b);
// }
// else if (o === "*") {
//     console.log(a * b);
// }
// else if (b === 0 && o === "/") {
//     console.log(null);
// }
// else {
//     console.log(null);
// }
//-------


// switch (o) {
//     case "+":
//         console.log(a + b);
//         break;
//     case "-":
//         console.log(a - b);
//         break;
//     case "*":
//         console.log(a * b);
//         break;
//     case "/":
//         console.log(null);
//         if (b == 0) {
//             break;
//         }
//         console.log(a / b);
//         break;
//     default:
//         console.log(null);
// }

//============================= елочка
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
    