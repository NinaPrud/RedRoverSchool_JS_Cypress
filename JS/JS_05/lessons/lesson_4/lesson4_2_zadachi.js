// // < 6 тоже что <=5

// for(let i = 0; i<= 5; i++){
//    // console.log(i)         // 0 1 2 3 4 5
// }

// // i++ и ++i внутри условия for - разницы нет
// for(let i = 0; i < 6; i++){
//    // console.log(i)         // 0 1 2 3 4 5
// }

// console.log("**********************************")

// for(let i = 0; i < 6; ++i){
//     //console.log(i)         // 0 1 2 3 4 5
// }
// // i++ и ++i за пределами условия for - есть разница!!

// for(let i = 0; i < 6;){
//     //console.log(i++)         // 0 1 2 3 4 5     сначала выводит, потом приращает
// }
// console.log("**********************************")

// for(let i = 0; i < 6;){
//    // console.log(++i)         // 1 2 3 4 5 6  сначала приращает, потом выводит, то что прирастил
// }


// //если нужно вывести наооборот используем дикремент
// for(let i = 3; i > -3; i--){
//     console.log(i)          // 3 2 1 0 -1 -2
// }

// длинна массива

//let fruets = ["apple", "mango", " banan", "orang", "mango"]
// console.log(fruets[fruets.length -1])
// console.log(fruets.length)
// console.log(fruets[2])
// for(let i = 0; i < fruets.length; i++){
//     if (fruets[i] ==="mango"){
//         console.log(i)     //вывести индекс элемента, значение которого === "mango"  - 1 и 4
//  //    break
//     }
// //console.log(i)
// //console.log(fruets[i])
// }

// встроенный метод indexOf
//console.log(fruets.indexOf("mango"))  // 1
//console.log(fruets.indexOf("mango", 2))  //


//если длинна двух массивов одинаковая, можно складывать их индексы в одном цикле for

// let arr = [1, 5, 20]
// let arr2 = [30, 90, 100]
// let sum = 0
// for(let i = 0; i < arr.length; i++){
//     sum = arr[i] + arr2[i]
//     console.log(sum)                 //31 95 120
// }

//  задача с кодворса - сложить квадраты элементов массива (возвести в квадрат и сложить)
//Square(n) Sum	https://www.codewars.com/kata/515e271a311df0350d00000f

// let numbers = [1, 2]

//     let sum = 0
//     for (let i = 0; i < numbers.length; i++){
//      sum = sum + numbers[i]**2
//     }
//   console.log(sum)

//==========================================ревью 4_3 волк

//   //заполнить массив числами от 0 до 20 вкл, за исключением чисел, кратных 5
//    let arr = []
//    let num = 0
//    for(let i = 0; i <=20; i++){
//        if (i % 5 != 0){
//        arr[num] = i
//        num++
//     }
//    }
//    console.log(arr)
//   // 1,2,3,4, ,6,7,8,9, ,11,12,13,14, ,16,17,18,19,
// console.log ("***************************************")
//   // push метод делает тоже самое - запихивает элементы в конец массива

//   let arr1 = []
//   for(i = 0; i <= 20; i++){
//     if(i % 5 != 0){
//     arr1.push(i)
//     }
//   }
//   console.log(arr1)


/*  ==================4.Задача на смекалку
Имеется зашифрованное предложение 
“Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr”
мы знаем, что оно означает “You are the best QA ever”.
Нам нужно придумать программу дешифратор.
*/

// let str = "Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr"
// let space = ""
// for(let i = 0; i < str.length; i+=3){
//     space = space + str[i]   // space += str[i]
// }
// console.log(space)
