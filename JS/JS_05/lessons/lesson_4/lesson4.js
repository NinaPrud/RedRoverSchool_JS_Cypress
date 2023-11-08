// ===циклы==========================================
//==== loops (циклы) (for, for in, for of, while, do...while)

//=========for loop========

/* 
for (initialization; condition; step(increment/decrement)) {
    ... loop body...
}
for (начало; условие; шаг) {
    ...тело цикла...
}
*/
/* //когда условие верное 
for (let i = 0; i < 3; i++){
    console.log(i)
}

//когда условие неверное ничего не выведет
for (let i = 0; i > 3; i++) {
    console.log(i)
}
*/ 
//если не будет ++, то это бесконечный цикл
//переменную можно объявдять и вне цикла, но так не принято (только если уже в коде до этого объявляли)
 /*
 let i = 0
 for (; i < 3; i++){
    console.log(i)
 }
 */
/*начало let i = 0 Выполняется один раз при входе в цикл //принято называть i
  условие i < 3    Проверяется перед каждой итерацией цикла
                   Если оно выяисляется в false, цикл остановится
  шаг  i++         Выполняется после тела цикла на каждой итерации 
                   перед проверкой условия
    */
   /*
   for(let i = 0; i <= 20; i +=5){  //шаг будет 5  i= i+5
console.log(i)
   }
*/

//---------repeat string

/*
let str = "Hello " // repeat 7
let newStr = " "
for (let i = 1; i <= 7; i++){  // 0 1 2 3 4 5 6
    newStr =  newStr + str
}
console.log(newStr) //выведет в одну строку ТОЛЬКО КОНЕЧНЫЙ РЕЗУЛЬТАТ!!

//будет разный результат, в  зависимости от того, где консоль.лог 
//                         ЗА пределами цикла или ВНУТРИ!!!

str = " Hello" // repeat 7
newStr = ""
for (let i = 1; i <= 7; i++){  // 0 1 2 3 4 5 6
    newStr =  newStr + str
    console.log(newStr)
} //выведет пирамидкой ВЕСЬ ЦИКЛ
*/
//работать с 0 или 1 (i = 0 или i = 1) зависит от того рабатаем с массивом или с количеством

//--------find sum
/*
let sum = 0
for(let i =0; i <=10; i++ ){
    sum = sum + i
}
console.log(sum)

//В итоге получается:
// 0 +1 = sum 1           //1 круг
// sum 1 + (i 2) = sum 3  //2 круг
// sum 3 = (i 3) = sum 6  //3 круг  и т.д. до окончания цикла
*/

//--------exponentiale (возведение в степень) //здесь важно начить с 1 (result)
/*
let num = 5   // ^3
let result = 1
for (let i = 1; i <= 3; i++){   // i = 1. result = 1 * 5 = 5
    result = result * num       // i = 2. result = 5 * 5 = 25
    console.log(result)         // i = 3. result = 25 * 5 = 125
}
*/

//-------- change string

// Task: 1.Print to the console all letters of the word in turn
//       2.Print the word with spaces between letters
 
// к элементам стринга можно обращаться так же, как к элементам массива

//let str = "JavaScript"  // letter of first index: str[0]
                        //letter of last index: str[str.length - 1]             
//  for (let i = 0; i < str.length; i++) {
//     console.log(str[i])               //обращение к индексу буквы внутри стринга
//  }                                    //выведет содержание стринга по вертикали

// пирамидка из строки

// let newS = ""
// for(let i = 0; i <str.length; i++){
// newS = newS + str[i] + " "
// console.log(newS)
// }

/*
//есть ли элемент в строке и сколько раз встречается

 //let str2 = "Java Scriptaaa"
 //let str2 = "Jv Script"
 let str2 = "JvA Script"
 let newStr = ""
 let a = 0 
 for(let i = 0; i < str2.length; i++){
    newStr = newStr + str2[i] + " "
    if(str2[i] == "a"){
        a++                   //увеличит а на колво раз, сколько увидит ее
    }
 }
 if(a > 0){console.log("a is in array")}   // если а есть, выведет данную надпись
 else(console.log("a is not array"))        
 console.log(a)                            //выведет количество а, т.к. а++ (РЕГИСТРОЧУВАСТВИТЕЛЕН!)
 console.log(newStr)
 */

 // Вывести стринг наооборот (палиндром, когда читается одинаково в обе стороны)
         // все тоже самое можно делать с массивом
         /*
 let x = "Palindrome"

 let str3 = ''
 for(let i = x.length - 1; i >= 0; i--){    // i = i - 1
     str3 = str3 + x[i]       // str3 += x[i]
     console.log(str3)
 }  
  //console.log(str3)
  */
 
   // с массивоим
   /*
   let x = [1, 2, 3, 4, 5]

 let str3 = ''
 for(let i = x.length - 1; i >= 0; i--){    // i = i - 1
     str3 = str3 + x[i]       // str3 += x[i]
     console.log(str3)
 }
 */

 //=============for in
 //в основном пробегается по объекту
 //но можно и для массивов использловать

 // Синтаксис:
 //    for (variable in array){
 //    code
 //    }
/*
 const numb = [45, 12, 9, 3, 25]

 let txt = ""
 for (let x in numb){        //объявляем переменную х, чтобы она обращалась к элементам нашего массива
    txt += numb[x] + ", "    //можно просто вывести num[x] тогда просто в строку выведет
    console.log(txt)           // сам делает инкремент x
 }
*/

//============== for of
// как in, но работает с большим количеством типов данных  (кроме array i object еще string, Maps, Nodelists и т.д)

// const cars = ["BMW", "Volvo", "Mini"]

// let text = ""
// for (let x of cars) {
//     text += x + " "
//     console.log(text)
// }
// in и of упрощенные for, что бы от начала до конца по всем элементам пробежаться

//========= тернарный оператор   ? :  исползуется как замена if  else
/*
let num = 6
if (num == 5){
    console.log(true)
} else {
    console.log(false)
}
//  условие ? что при тру : что при фолс (можно и несколько условий, но это не удобно, обычно исп, если только 2 условия (минимум))
console.log (num == 5 ? true : false)
*/