// // ---------------- стрелочные ф

// //------------ расчет BMI
// // вес(кг)/ рост (м) в кв

// let bmi = (weight, height) => weight/height**2

// console.log(+bmi(78, 1.68).toFixed(2))


// //--------------2 -  напишите ф, которая переводит Ф в Ц
// // c= (f - 32) * 5/9

// let getCel = f => Math.round((f - 32) * 5/9)

// console.log(getCel(50))


// // -------- задачи

// // https://www.codewars.com/kata/55225023e1be1ec8bc000390/train/javascript
// //Jenny's secret message

// function greet(name){
//     if(name === "Johnny")
//       return "Hello, my love!";
    
//     return "Hello, " + name + "!";
    
//   }

//   console.log(greet('Nina'))



//   // https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
//   // Opposites Attract

//   function lovefunc(flower1, flower2){
//     if (flower1 % 2 == 0 && flower2 % 2 != 0 || flower1 % 2 != 0 && flower2 % 2 == 0) {
//       return true
//     }
//     return false
//   }

// // 2 вар
//   let lovefunc2 = (flower1, flower2) => (flower1 + flower2) % 2 != 0

//   console.log(lovefunc(2,1))
//   console.log(lovefunc2(2,1))


//   // ---------------------------------------------------
//   // https://www.codewars.com/kata/534ea96ebb17181947000ada/train/javascript
//   // Breaking chocolate problem

//   function breakChocolate(n,m) {
//     if ( n < 1 || m < 1) return 0
   
//     return n * m - 1
//   }

// console.log(breakChocolate(1, 1))
// ---------------------------------------------

