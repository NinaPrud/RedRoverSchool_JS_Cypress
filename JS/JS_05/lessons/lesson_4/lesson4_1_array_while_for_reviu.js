//==========массивы

let arr =[7,null,3,"appie",5,[1,2]]
// console.log(arr)
// console.log(typeof arr)
// console.log(arr.length) // длинна массива

// arr.length = 3  // обрезает массив до 3-х элементов
// console.log(arr)

//arr.length = 0 // очищение массива
//console.log(arr)

//console.log (arr[4])   // обращение к четвертому элементу массива

//arr = 'Anna'
//console.log(typeof arr) // теперь будет строка

const arr1 = [1,2,null,"string"] 
//console.log(typeof(arr1))
 //arr1 = "str"     // при объявлении через const нельзя поменять тип массива
//console.log(typeof arr) // ругается

 arr1[0] = 10    //но можно изменнить конкретные данные в массиве, можно рассширять и уменьшать
 //console.log(arr1)

 //console.log(arr[arr.length -1]) //обращение к последнему элемпенту массива или строки
 //console.log(arr.at(-1)) // то же самое с помощью метода at

 //============ while

 let index = 0
/*
 while('условие') {  
   'тело цикла'     // тело цикла выполняется пока условие == true
  }                 //если условие не меняется - цикл бесконечный
*/
/*
while (index <= arr.length) {
console.log(index)
index++                     //без этого цикл бесконечный
}
*/
/*
while (index < arr.length) {
console.log(arr[index])
index++
}                        //покажет все элементы массива

*/
/*
while (index > arr.length){   // цикл не отработает, т.к false
console.log(arr[index])
index++                     // можно делать с другим шагом, напр +=2
}
console.log("End")           // выведет это

*/
/*
let newInd = arr.length - 1   // т.е первый индекс с конца

while (newInd >= 0) {
    console.log(arr[newInd])
    newInd --               // -- , а не ++, т.к в др сторону
}     // выведет элементы массива с конца
*/

//====== do while
/*
do {              //т.е. перед условием что-то вполнится все равно
    "тело цикла" 
} while (statement)   // если условие правдивое, опять идем в тело цикла
*/
/*
let i = 0
do {
    console.log(i)
    i++

} while(i < 5)  // если i > 5, то выведется только 0
*/

//========== for ======щаще всего используется
/*
     инициализ; условие;  приращение
       цикла      цикла   переменной
for   (блок1;    блок2;   блок3){

    тело цикла
}
*/
// два идентичных цикла:
/*
 let ind = 0
 while (ind < arr.length) {
    console.log(arr[ind])
    ind++
 }

 console.log("********************")
 ind = 0
 for(; ind < arr.length; ) {  
    console.log(arr[ind])
    ind++
 }    
 */
 //но обычно так не делают, for  для того и нужен, чтобы упростить,
 //чтобы инициализировать переменную i  только внутри цикла , а не на глобальном уровне,
 //тогда она видна только в цикле и выполняется толко один раз
 /*
  for (let i = 0; i < arr.length; i++){     //- так правильно
     console.log(arr[i])
   } 
*/
   // циклы нужны 
// ----- для перебора значений
// ----- поиска каких-то значений
// ----- подсчета каких - то значений
// ----- вывода чего-то

      // например
// чтобы посчитать сумму массива,
// мы обращаемся к элементу массива, добавляе его в sum  и прибавляем след элемент

let arr3 = [1,30,5,4,3]
let sum = 0
/*
for (let i = 0; i < arr3.length; i ++){
    sum += arr3[i]
}
console.log (sum)
*/

// посчитать сумму только четных чисел в массиве

// for (let i = 0; i < arr3.length; i++){
//     if ( arr3[i] % 2 == 0)
//     sum += arr3[i]                      // ар итое
// }
// console.log(sum)
     // расшифровка:
// i = 0, 0 < 5, arr3[0] = 1,  1 % 2 != 0  // не суммируется
// i = 1, 1 < 5, arr3[1] = 30, 30 % 2 == 0  // суммируется
// и так далее  - ответ 34

// ------- вывести oтрицательные и полжит числа
/*
let array = [5, -30, 7, -2, 10, 0, "nghhg"]

for(let i = 0; i < array.length; i++){
    if        (array[i] > 0) {
        console.log ("Это положительное число: ", array[i])
    } else if (array[i] < 0) {
        console.log ("Это отрицательное число: ", array[i])
    } 
    else if (array[i] == 0){
        console.log ("Видимо, это ноль: ", array[i], )
    } 
    else {
        console.log ("Это не число! ", array[i] )
    }
}
*/
//console.log("****************************")
// ---------- нечетны и четные отрицат и положит
/*

for(let i = 0; i < array.length; i++) {
    if        (array[i] > 0 && array[i] % 2 == 0) {
        console.log ("Это положительное  четное число: ", array[i]) 
    }
    else if   (array[i] < 0 && array[i] % 2 == 0) {
        console.log ("Это отрицательное  четное число: ", array[i]) 
    }
    else if   (array[i] > 0 && array[i] % 2 != 0) {
        console.log ("Это положительное  нечетное число: ", array[i]) 
    }
    else if   (array[i] < 0 && array[i] % 2 != 0) {
        console.log ("Это отрицательное  нечетное число: ", array[i]) 
    } 
    else if   (array[i] == 0){
        console.log ("Видимо, это ноль: ", array[i], )
    } 
    else {
        console.log ("Это не число! ", array[i] )
    }
}
*/

//  --------- найти максимальное и мин число массива
// мы присваеваем значение макс первому(нулевому) элементу массива
// затем сравниваем первый элемент со вторым и если второй больше, 
//то происходит переприсвоение макс, и т.д.

let ar = [1, 2, 8, -10, 0, -99]
let max = ar[0]

for (let i = 1; i < ar.length; i ++){    //можно i = 0, разницы не будет
    if (ar[i] > max) {
        max = ar[i]
    }
}
console.log ("Это максисальное число в массиве: ", max)

let min = 0
for (let i = 1; i < ar.length; i ++){ // можно i = 0, разницы не будет
    if (ar[i] < min) {
        max = ar[i]
    }
}
console.log ("Это миннимальное число в массиве: ", max)


//========= строки очень похожи на массивы
let str = "Приветттт"

 console.log(str.length)   //вывод кол-ва элементов
 console.log(str[0])// вывод контретного элемента строки
 //   подсчет количества определенных букв  -- регистрозависим
 let summ = 0

 for (let i = 0; i < str.length; i++) {
    if (str[i] == "т") {
        summ++
    }
 }
 console.log (summ)

 // ========== for in   и  for of
 // массив, это частный случай объекта, поэтому можно использовать for in
 // но, т.к. он работает медленно, в массиве лучше использовать for of
 //переберет все элементы в массиве ОТ НАЧАЛА ДО КОНЦА
 
 const fruits = ["apple", "plum", "orange"]

 for (let fruit of fruits) {
    if (fruit == "plum") {
        console.log("exist")
    }
 }