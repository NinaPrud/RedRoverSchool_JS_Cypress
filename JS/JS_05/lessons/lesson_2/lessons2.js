// a = "Jonn"
// b = a
// document.write(a, " ",b)

// infinity - бесконечность (при делении на ноль например)

//=================math operators
// *, \, -, +, %, ++, --

//=======multiply (*)
/*
let myMultiply = 6 * 4
document.write(myMultiply, '<br>')
console.log(typeof(myMultiply))

// ======division (/)
let myDivision = 24 / 4
document.write(myDivision, '<br>')
console.log(typeof(myDivision))

//=======modulus, remainder of division (even, odd numbers) (%)(остаток от деления, используется для определения четное число или нет, а так же на сколько чего-то хватает денег )

let myModulus = 7 % 2 // это (6 / 2) + 1-остаток от оделения 
document.write(myModulus, '<br>')
console.log(myModulus)
// if(7 % 2 == 0)//even, else odd
*/

//======= increment and decrement (++, --)увеличение либо уменьшение на 1 (можно + 2, тогда на 2, и т.д. (с минусом не работает?))

//let myVariable = 10
// document.write(myVariable,'<br>')
// document.write(myVariable+2,'<br>') //after
// ++myVariable // before
// document.write(myVariable,'<br>')
 //document.write(++myVariable,'<br>') //before 
//--myVariable // происходит перезапись (неважно в выводе или нет)
//document.write(myVariable,'<br>')

//======== exponention (**) возведение в степень

// let myNum = 2 ** 3
// document.write(myNum,'<br>')

//======type number=======
//----int, double
//----NaN----> Not a Number
// NaN означает вычислительную ошибку, это результат неправильной или неопределенной математической информации
 //let b = 24/"aaa"
//document.write(b)

//----infinity  - бесконечное число, как +, так и -

//======Another data type========
//----undefined (variable with no value)неопределенная 
//let b = 24/a
// document.write(b)
//----boolean (true, false)
//----array
//----null (object)

//====== string concatenation   ,   +   ${}   (склеивание)

//в document.write можно и + и , использовать
// let name = 'Nina'
// let sName ='Prudnikova'
// document.write(name + " " + sName)"<br>"
// document.write(name, " ", sName)"<br>"
// console.log(name + " " + sName)
// console.log(name, sName) //можно пробел не добавлять, консоль лог запятые определяет как пробел

// ! внутри пременной только +
// let nameSname = name + sName
// let nameSname2 = name +" "+ sName
//document.write(nameSname)
//document.write('My name is ' + nameSname2) // к стрингу добавляем переменную

//`${}` внутрь стринга внедряем переменную - используем косые кавычки
// document.write(`My name is ${nameSname2}`)
// console.log(`My name is ${nameSname2}`)

//=========сравнение переменных
//======comparison operetors
//  ==  ===  !=  !==  < >  <=  >=

// let a = "5"
// let b = -10
// let c = "c"
// let C = "C"
// let d = "0"

// // console.log(a==5) //true   нестрогое сравнение, сравнивает только картинку
// // console.log(a===5) //false   строгое сравнение (сравнивает с типом данных и картинкой)
//  console.log(c=="C") //false
// console.log(c==="c") //true

//рекомендуестя использовать === и !==


//==========logical operators   &&(И)   ||(ИЛИ)   !(НЕ)

 //let massaKg = 70
// console.log(massaKg < 50 || massaKg > 90) //false || false дает false
// console.log(massaKg > 50 || massaKg > 90) // true || false дает true
// console.log(massaKg > 50 || massaKg < 90) // true || true дает true
// console.log(true && true)  //true
// console.log(true && false) //false
// console.log(false && true) //false
// console.log(false && false) //false


// console.log(!true)  // false
// console.log(!false) //true
// console.log(!(massaKg > 50)) //false

// приоритет оператора && (И) больше, чем || (ИЛИ), так что он выполняется раньше


//============Conditional statement(условный оператор)  if  and flowcharts (блоксхема) 

// let a = 5
// let b = 5

// if (a > b){
//   document.write("'a' is bigger than 'b'")
// } 
//   else  {document.write("'a' is less than 'b'")
// }
 
// //нужно всегда учитывать граничные значения и проверять их!!
// //в данном случае при равенстве а и b - выдаст как меньше
// // лучше делать трайное условие или ><=

// if (a > b){
//   document.write("'a' is bigger than 'b'")
// } 
//   else if (a < b) {document.write("'a' is less than 'b'")
// }
//   else {document.write('Go home!')
// }
 
//=============================== reviu 2/1

// a = "Jonn"
// b = a
// document.write(a, " ",b)

// infinity - бесконечность (при делении на ноль например)

//=================math operators
// *, \, -, +, %, ++, --

//=======multiply (*)
/*
let myMultiply = 6 * 4
document.write(myMultiply, '<br>')
console.log(typeof(myMultiply))

// ======division (/)
let myDivision = 24 / 4
document.write(myDivision, '<br>')
console.log(typeof(myDivision))

//=======modulus, remainder of division (even, odd numbers) (%)(остаток от деления, используется для определения четное число или нет, а так же на сколько чего-то хватает денег )

let myModulus = 7 % 2 // это (6 / 2) + 1-остаток от оделения 
document.write(myModulus, '<br>')
console.log(myModulus)
// if(7 % 2 == 0)//even, else odd
*/

//======= increment and decrement (++, --)увеличение либо уменьшение на 1 (можно + 2, тогда на 2, и т.д. (с минусом не работает?))

//let myVariable = 10
// document.write(myVariable,'<br>')
// document.write(myVariable+2,'<br>') //after
// ++myVariable // before
// document.write(myVariable,'<br>')
 //document.write(++myVariable,'<br>') //before 
//--myVariable // происходит перезапись (неважно в выводе или нет)
//document.write(myVariable,'<br>')

//======== exponention (**) возведение в степень

// let myNum = 2 ** 3
// document.write(myNum,'<br>')

//======type number=======
//----int, double
//----NaN----> Not a Number
// NaN означает вычислительную ошибку, это результат неправильной или неопределенной математической информации
 //let b = 24/"aaa"
//document.write(b)

//----infinity  - бесконечное число, как +, так и -

//======Another data type========
//----undefined (variable with no value)неопределенная 
//let b = 24/a
// document.write(b)
//----boolean (true, false)
//----array
//----null (object)

//====== string concatenation   ,   +   ${}   (склеивание)

//в document.write можно и + и , использовать
// let name = 'Nina'
// let sName ='Prudnikova'
// document.write(name + " " + sName)"<br>"
// document.write(name, " ", sName)"<br>"
// console.log(name + " " + sName)
// console.log(name, sName) //можно пробел не добавлять, консоль лог запятые определяет как пробел

// ! внутри пременной только +
// let nameSname = name + sName
// let nameSname2 = name +" "+ sName
//document.write(nameSname)
//document.write('My name is ' + nameSname2) // к стрингу добавляем переменную

//`${}` внутрь стринга внедряем переменную - используем косые кавычки
// document.write(`My name is ${nameSname2}`)
// console.log(`My name is ${nameSname2}`)

//=========сравнение переменных
//======comparison operetors
//  ==  ===  !=  !==  < >  <=  >=

// let a = "5"
// let b = -10
// let c = "c"
// let C = "C"
// let d = "0"

// // console.log(a==5) //true   нестрогое сравнение, сравнивает только картинку
// // console.log(a===5) //false   строгое сравнение (сравнивает с типом данных и картинкой)
//  console.log(c=="C") //false
// console.log(c==="c") //true

//рекомендуестя использовать === и !==


//==========logical operators   &&(И)   ||(ИЛИ)   !(НЕ)

 //let massaKg = 70
// console.log(massaKg < 50 || massaKg > 90) //false || false дает false
// console.log(massaKg > 50 || massaKg > 90) // true || false дает true
// console.log(massaKg > 50 || massaKg < 90) // true || true дает true
// console.log(true && true)  //true
// console.log(true && false) //false
// console.log(false && true) //false
// console.log(false && false) //false


// console.log(!true)  // false
// console.log(!false) //true
// console.log(!(massaKg > 50)) //false

// приоритет оператора && (И) больше, чем || (ИЛИ), так что он выполняется раньше


//============Conditional statement(условный оператор)  if  and flowcharts (блоксхема) 

// let a = 5
// let b = 5

// if (a > b){
//   document.write("'a' is bigger than 'b'")
// } 
//   else  {document.write("'a' is less than 'b'")
// }
 
// //нужно всегда учитывать граничные значения и проверять их!!
// //в данном случае при равенстве а и b - выдаст как меньше
// // лучше делать трайное условие или ><=

// if (a > b){
//   document.write("'a' is bigger than 'b'")
// } 
//   else if (a < b) {document.write("'a' is less than 'b'")
// }
//   else {document.write('Go home!')
// }
 

//=========================reviu 2/3

// // let a = 2 * (3 - 1)
// let b = 6 - 2
// document.write(a==b) //true

// let a = 5 * (7-4)
// let b = 1 + 2 +7
// document.write(a > b) //true

// //возведение в степень **
// let a = 2**4
// let b = 4**2
// document.write(a!=b) // false document.write(a==b) //true

// && (AND)
// || (OR)
// ! (NOT)

// задачна на оценки студентов

// let exem = 0
// let projects = 1
// let finalGrade

// if(exem > 90 || projects > 10) {
// finalGrade = 100
// }
// else if (exem > 75 && projects >= 5){
//  finalGrade = 90
// }
// else if (exem > 50 && projects >= 2){
//   finalGrade = 75 
// }
// else{
//   finalGrade = 0
// }
// document.write(finalGrade)

