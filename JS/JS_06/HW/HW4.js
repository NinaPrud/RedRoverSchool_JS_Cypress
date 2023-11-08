
/*
 Home Work #4
 Материал к прочтению:
 https://www.w3schools.com/js/js_loop_forin.asp
 https://www.w3schools.com/js/js_loop_forof.asp
 https://www.w3schools.com/js/js_loop_while.asp
 
 https://learn.javascript.ru/while-for
 https://learn.javascript.ru/array
 
 
 Задания на закрепление (можно и нужно обсуждать в группе):
 Часть 1 (!!! У вас будет отдельная запись для первой части, там говорится, что это задание пятое, не обращайте внимания, просто идем чуть быстрее)
 
 Нарисуйте ромб
 
          1
         121
        12321
       1234321
      123454321
     12345654321
    1234567654321
   123456787654321
  12345678987654321
 1234567890987654321
  12345678987654321
   123456787654321
    1234567654321
     12345654321
      123454321
       1234321
        12321
         121
          1
*/
//-------------------+-----------решение
// let n = 10

// for (let i = 1; i <= n; i++) {
//     let str = ''                 // метод  repeat() можно 
//     for (let s = n - i; s >= 1; s--) {
//         str += " "

//     }
//     for (let l = 1; l <= i; l++) {
//         if (l == n) {       //continue
//           str += "0"
//         } 
//         else{
//           str += l
//         }
//     }
//     //if (i == n) str += "0"
//     for (let k = i - 1; k >= 1; k--) {
//         str += k
//     }

//     console.log(str)
// }

// for (let i = n - 1; i >= 1; i--) { // i = 4, 3, 2, 1
//     let str = ""

//     for (let s = n - i; s >= 1; s--) {
//         str += " "
//     }

//     for (let k = 1; k <= i; k++) {
//         str += k
//     }

//     for (let l = i - 1; l >= 1; l--) {
//         str += l
//     }

//     console.log(str)
// }

/*
 2.--------------+------- Нарисуйте елочку
      *
    ***
   *****
  *******
 *********
*/
//--------------решение


// let n = 5
// let str = ''

// for (let i = 1; i <= n; i++) {

//     for(let j = n - i + 1; j > 0; j--){
//         str += " "   
//     }

//     for (let k = 1; k <= i; k++) {
//         str += "*" 
//     }
//     for (let l = 0; l < i - 1; l++) {
//         str += "*"
//     }

//     str += "\n";
// }
// console.log(str)   
// console.log(" " + str)



/*
 3.----------+-------------- Нарисуйте треугольник
 1               0
 2 6            +4
 3 7 10         +4 +3
 4 8 11 13      +4 +3 +2
 5 9 12 14 15   +4 +3 +2 +1
 */
// let num = 5

// for (let i = 1; i <= num; i++) {
//   let str = ""
//   for (let j = i; j <= i*2 + num; j+=4) {
//     if (j == 5 && i == 1 || j == 9 && i == 2) continue
//       str = str + j +" "
//       if (j == i + 4){  
//         j--
//       }
//       if (j == i + 7){  
//         j-=2
//       }
//       if (j == i + 9){ 
//         j-=3
//       }
//   }
//   console.log(str)
// }



//--------------------
/*

( P.s. “Продумайте код для создания сэндвичей с 3-мя начинками и выставите цену в зависимости от вида начинки. 
 Используйте while and do.. while loops” - это задание с предыдущего потока, его разбор есть в видео, 
 можете не делать, по желанию)
*/

//---------------------+--------------
/*


 Часть 2

 4. Усовершенствуйте решение задачи про улитку с помощью  наиболее подходящего цикла. 
«Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра, 
а каждую ночь съезжает вниз на 2 метра. За сколько дней она доползёт до вершины стены.» */


// let heightWall = 5
// let dayPath = 3
// let nightPath = -2

// let dayCount = 0
// let allPath = 0

// while (allPath < heightWall) {
//   allPath += dayPath

//   if (allPath < heightWall) {
//     allPath += nightPath
//   }

//   dayCount++
// }

// console.log(dayCount)



/*
// 5. Задача с интервью*------------------???????????????????????????????-------------------------
 
 У вас есть массив с тремя видами скобок, предположим 

 [ '{', ')', '(', ')', ')', '}, '[', ']', ')']  . Количество элементов и последовательность может быть разной.

 Нужно выяснить, все ли скобки являются парными  в правильной последовательности (открывающая и затем закрывающая). 
 Также, скобки могут быть вложенными, но тем не менее, если последовательность соблюдена, то они считаются парными.
  Пример:
 [ ')', '{', '(', '(', ')', ')', '}, '[', ']', '(' ] - у двух нет пары (нарушена последовательность)
 [ '{', '(', '(', ')', ')', '}, '[', ']' ] - у всех есть пара
 [ '{', '(', '(', ')', ')', '}, '[', '[', ')' ] - у трех нет пары
*/
// ПРОСТО ПО КОЛИЧЕСТВУ ДЕЛАЛИ


 //---------------------------------------------------------------------------------------------------------------------------
/*
 Креативное задание*(не показываем решение до понедельника):
 
 Внедрите в свой код про кофе цикл, там, где это может понадобиться. Добавьте комментарии в код с пояснениями изменений, зачем они нужны.
 
 Продумайте на будущее план развития своего кода с кофе, где в реальной жизни он мог бы быть использован. Начните создавать мини-документацию к своему проекту. Пропишите требования так, как вы хотели бы их видеть на своем проекте и чтобы посторонний человек мог в них разобраться. Скорее всего, что-то придется добавить или изменить позже.
 Очень полезно, если вы сможете работать парами и проверять друг у друга.
  (это вам поможет впоследствии писать тест кейсы, тестировать документацию и требования)
 

HW
 Requirements for Coffee
 When user first come he should see a welcome message
 There are three types of cup sizes
 User should be able to see cup prices for each size before an  order
 There are two recipes at this time, we should able to update code if added new recipe
 Show to a user the name and the  ingredients of each type of coffee before an order
 User should be able to make an order, by choosing cup size and coffee type
 When a choice is made, calculate the price based on cup size. Show steps for the recipe and order price.
 If user is lactose free, remove milk step from the recipe
 
 Details:
*/
//========================================================================================================
/*
 Домашнее задание от Татьяны Волк
 
 https://www.codewars.com/kata/57241e0f440cd279b5000829   Sum of multiples
*/

// function sumMul(n,m){
//   if (n <= 0 || m <= 0) {
//     return 'INVALID'
//   } else {
//      let sum = 0
//      for (let x = n; x < m; x++){
//        if( x % n == 0) {
//           sum += x
//        }
//      }
//    return sum
//   }
// }

// console.log(sumMul(2, 10))

// // --  или так

// function sumMul2(n, m) {
//     if (m <= 0 || n <= 0) { return 'INVALID' }
//     let sum = 0;
//     for (let i = 0; i < m; i += n) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(sumMul2(2, 10))

// --------------------------------------------------------------------------------


// https://www.codewars.com/kata/570a6a46455d08ff8d001002   No zeros for heroes

//  1450 -> 145
//  960000 -> 96
//  1050 -> 105
// -1050 -> -105
//  0

//  function noBoringZeros(n) {
 
//   while (n != 0 && n % 10 == 0) {
//      n = n / 10
//   }
//   return n
// }

// console.log(noBoringZeros(0))


 /*
 Задачи, которые разбирали на уроке
 https://www.codewars.com/kata/5601409514fc93442500010b   How good are you
 https://www.codewars.com/kata/56676e8fabd2d1ff3000000c     A needle in the Haystack
 https://www.codewars.com/kata/5a2b703dc5e2845c0900005     Can we divide it (if)
 
 */