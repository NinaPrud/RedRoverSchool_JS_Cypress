//=================16.09 VOLK

// ==================== (50:19)==========A Needle in the Haystack ===============https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript
/*
Can you find the needle in the haystack?
Write a function findNeedle() that takes an array full of junk but containing one "needle"
After your function finds the needle it should return a message (as a string) that says:
"found the needle at position " plus the index it found the needle, so:
Example(Input --> Output)
["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
*/

// let haystack = ["hay", "junk", "hay", "hay", "moreJunk", null, "nedle", "nedle", "randomJunk"]

// for (let i = 0; i < haystack.length; i ++){
//     if (haystack[i] === "needle"){
//         console.log ("found the needle at position "  + i)
//     }    
// } // вопрос как сда добавить else (если таких значений нет), что бы выдавало один раз по итогу цикла?

//============(59:44)=============How good are you really?===========	https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript
/*There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.
You receive an array with your peers' test scores. Now calculate the average and compare your score!
Return True if you're better, else False!
Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
*/

// let myPoint = 88
// let averegPoint = 0
// let allPoints = [74, 88, 93,100, 50, 44, 70, 80, 90, 35, 75, 61, 69, 89, 79, 95] 
// //let allPoints = [4, 4, 4]
// allPoints[allPoints.length] = myPoint
// //allPoints.push(myPoint)              //метод push

// for (let i = 0; i < allPoints.length; i++){
//     averegPoint += allPoints[i] 
// }
//  averegPoint /= allPoints.length//averegPoint = (averegPoint  + myPoint) / (allPoints.length + 1) //либо, если не добавлять сразу в массив можно потом прибавить к сумме
//                      //console.log(averegPoint)

//  if (myPoint > averegPoint) {
//     console.log(true)
//  } else
//    {console.log(false)}

/* // решение в кодворсе с функцией
function betterThanAverage(classPoints, yourPoints) {
 
//classPoints.push(yourPoints)
classPoints[classPoints.length] = yourPoints
let average = 0
for(let i = 0; i < classPoints.length; i++){
 average += classPoints[i]
}
average /= classPoints.length
return yourPoints > average
 */


//========STAN 17.09

//==============String repeat  =========	https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript
//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
/*
 let n = 5
 let s = '+'
 let x = ""
  //console.log(s)
 for(let i = 1; i <= n; i++ ){
  x = x + s 
 }
 console.log(x) 
 */
/*------------- // вид ы кодворсе

function repeatStr (n, s) {
 let x = ""
 for (let i = 1; i <= n; i++){
   x += s
 }
 return x;
}
*/

//=============сложение двух массивов (56:27)
// ------- 1 способ при одинаковой длинне

let a = [1, 2]
let b = [0, -10]
let sum = 0

for (let i = 0; i < a.length; i++) {
  sum += a[i] + b[i]
}

console.log(sum)

// ------------ 2 способ, если массивы разной длинны
let d = [1, 2]
let f = [1]
let sum1 = 0
for (let i = 0; i < d.length; i++) {
  sum1 += d[i]
}
for (let i = 0; i < f.length; i++) {
  sum1 += f[i]
}
console.log(sum1)
console.log("****************************")

//--------------------------------------------// Вызов fruits.push(...) равнозначен fruits[fruits.length] = ..
let sum2 = 0
for (let i = 0; i < d.length + f.length; i++) {
  if (i < 2) {
    sum2 += d[i]
  } else {
    sum2 += f[i - d.length]
  }
}
console.log(sum2)



