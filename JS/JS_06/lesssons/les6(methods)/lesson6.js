
// ==== String, array  methods ==============

// ---------------------- split(); join(); -----------------

//---string method  ---- split() -  делит строку по указанному разделителю, возвращает массив
// split("") - вщзвращает массив всех символов
// split() - всю строку целиком в массив
// split(" ") -  если есть пробел, по пробуду поделит
//не изменяет изначальную строку, поэтому надо куда-то складывать


//let str = 'Hello World: QA JS !'

// console.log(str)            // Hello World: QA JS !
// console.log(str.split(" "))  // [ 'Hello', 'World:', 'QA', 'JS', '!' ]
// console.log(str.split())    // [ 'Hello World: QA JS !' ]
// console.log(str.split(""))  // ['H', 'e', 'l', 'l', 'o',' ', 'W', 'o', 'r', 'l', 'd', ':', ' ', 'Q', 'A',' ', 'J', 'S', ' ', '!']
// console.log(str.split(':')) // [ 'Hello World', ' QA JS !' ]

// let newArr = str.split(' ')
// console.log(newArr)   // [ 'Hello', 'World:', 'QA', 'JS', '!' ]
// let newArr2 = str.split('*')
// console.log(newArr2)   // [ 'Hello World: QA JS !' ]

// ---array method ---- join() - конвертирует массив в строку

// по умолчанию ражделяет символы запятой (либо по тому символу, кот укажем)
// не изменяет изначальный массив, поэтому надо куда-то складывать

//  let array = [1, 2, 3, 'a', 'b', 'c']

//  console.log(array.join())   // 1,2,3,a,b,c
//  console.log(array)          // [ 1, 2, 3, 'a', 'b', 'c' ]

//  console.log(array.join(""))  // 123abc
//  console.log(array.join(" ")) // 1 2 3 a b c
//  console.log(array.join('*'))  // 1*2*3*a*b*
 
//  let newStr = array.join('br')
//  console.log(newStr)          // 1br2br3brabrbbrc

//  let newArr2 = newStr.split('br')
//  console.log(newArr2)      // [ '1', '2', '3', 'a', 'b', 'c' ]
//  console.log(newArr2.join(""))  // 123abc

//  можно использовать toString, String

//  let a = ['hello', 'nina']
// // console.log(a.toString())  // hello,nina
//  console.log(String(a))      // hello,nina


//========= array methods: ---------  push()/pop(); shift()/unshift() ==========

//------ push() - добавляет элемент в конец массива и ! возвращет кол-во элементов
//-------  pop() - удаляет последний элемент   и возвращает удаленный элемент

// let arr = ['a', 'b', 'c']
//  console.log(arr.push('f'))  // 4
//  arr.push('k')
//  console.log(arr)  // [ 'a', 'b', 'c', 'f', 'k' ]

// let arr2 = arr.push('10')
// console.log(arr)  // [ 'a', 'b', 'c', 'f', 'k', '10' ]
// console.log(arr2) // 6
// console.log('*************************************')
// let arr3 = arr
// console.log(arr)
// console.log(arr2)
// console.log(arr3)
// console.log('*************************************')


// arr3.push('MMM') // !!!!! к обоим массивам добавил
// console.log(arr)  // [ 'a', 'b', 'c', 'f', 'k', '10', 'MMM' ]
// console.log(arr3) // [ 'a', 'b', 'c', 'f', 'k', '10', 'MMM' ]

// ------------- pop()

// let letters = [ 'a', 'b', 'c', 'f', 'k', '88']

// let a = letters.pop()
// console.log(letters)  // [ 'a', 'b', 'c', 'f', 'k' ]
// console.log(a)       // 88

// let a2 = []
// a2.push(a)
// console.log(a2) // [ '88' ]

// let abc = ['a', 'd', 'c', '1', '2', '3']

// let num = [abc.pop(), abc.pop(), abc.pop()]
// console.log(num)  // [ '3', '2', '1' ]

// num.reverse()
// console.log(num)  // [ '1', '2', '3' ]

// ------------------- unshift()  shift()
// unshift() -  добавляет в начало и возвращет  кол-вщ элементов
// shift() -  удалет из начала и возвращает удаленный элемент


// ===========  объединение массивов

// concantination  не используется - будет строка
//  us concat() method

// let letters = ['a', 'b', 'c']
// let bigLetters = ['A', 'B','C']

// console.log(letters + ' ' + bigLetters) // строка!  a,b,c A,B,C

// // -------  concat()

// let girls = ['Anna', 'Nina', 'Maria']
// let boys = ['Andrey', 'Vova']

// let cildrens = girls.concat(boys)
// console.log(cildrens)  // [ 'Anna', 'Nina', 'Maria', 'Andrey', 'Vova' ]
// console.log(girls)   // [ 'Anna', 'Nina', 'Maria' ]
// //girls.concat(boys) -  не изменится, так не работает
// console.log(girls.concat(boys)) // [ 'Anna', 'Nina', 'Maria', 'Andrey', 'Vova' ]
// console.log(girls)  // [ 'Anna', 'Nina', 'Maria' ]

// let friends = ['Ola', 'Oleg']
// let myFriends = girls.concat(boys, friends)
// console.log(myFriends) // [ 'Anna', 'Nina', 'Maria', 'Andrey', 'Vova', 'Ola', 'Oleg']


// ------------------- spred operator  ...
// разворачивает массив

// let arr = [1,2,3]
// let arr2 = ['a', 'b', 'c']
// let arr3 = [...arr, ...arr2] // [ 1, 2, 3, 'a', 'b', 'c' ]
// console.log(arr3)

// // ----  spred + push()

// // позволяет оставить неизменным исходный массив - в отличае от только push() ( исходный массив меняется даже после переприсвоения и действий над вторым массивом)

// // let arr4 = arr
// // arr4.push('X')
// // console.log(arr)  // [ 1, 2, 3, 'X' ]

// let arr4 = [...arr]
// arr4.push('X')
// console.log(arr)   // [ 1, 2, 3 ]
// console.log(arr4)  // [ 1, 2, 3, 'X' ]

// // при спред операторе - ты берешь не самм массив, а только его содержимое, т.е. ячейка памяти не переприсваивается

// let numbers = [ 52, 1, 99]
// console.log(Math.max(...numbers))  // 99


// --------------------------------- splice(); slice()

//---  splice() - добавляет новые эементы в массив (с заменой или без)
// splice(a, b, "string", num ,....) - a -  с какого добавить,  b - сколько удалить, потом что добавить (любой тип данных)
// возвращает массив с удаленными элементами

let fruits = ['banana', 'apple', 'mango', 'grape']

// console.log(fruits.splice(2, 0, 'orange', 'kiwi'))
// console.log(fruits)  // [ 'banana', 'apple', 'orange', 'kiwi', 'mango', 'grape' ]
// let fruits2 = fruits.splice(3, 2) 
// console.log(fruits)  // [ 'banana', 'apple', 'orange', 'grape' ]
// console.log(fruits2)  // [ 'kiwi', 'mango' ]

// console.log(fruits.splice(0, 1, 'melon'))  // [ 'banana' ]
// console.log(fruits)  // [ 'melon', 'apple', 'orange', 'grape' ]

// // можно удалять элементы, не оставляя дыр!!!
// fruits.splice(3) - // удалит все включая 3 элемент
// console.log(fruits) //  [ 'melon', 'apple', 'orange' ]

// ------------------ slice() - вырезает часть массива в новый массив
// ---- создает новый массив- НЕ удаляя элементы из исходного
// возвращает новый массив скопированных элементтов
// slice(a, b) - a c какого вкл - до какого не вкл
  
// fruits = ['banana', 'apple', 'mango', 'grape']

// let fruits3 = fruits.slice(2)
// let fruits4 = fruits.slice(1, 3)
// console.log(fruits)  // [ 'banana', 'apple', 'mango', 'grape' ]
// console.log(fruits3)  // [ 'mango', 'grape' ]
// console.log(fruits4)  // [ 'apple', 'mango' ]

// --------------------------------- .includes()
// исчет заданный элемент в массиве, возвращает  true/false, case sensitive
// array.includes(element, start)

// fruits = ['banana', 'apple', 'mango', 'apple','grape',]

// // console.log(fruits.includes('apple'))  // true
// // console.log(fruits.includes('apples')) // false
// // console.log(fruits.includes('Apple'))  // false
// // console.log(fruits.includes('apple', 2)) // true
// // console.log(fruits.includes('apple', 4)) // false

// let copyFruits = fruits.slice()
// console.log(copyFruits)

















// ==================   методы строк 

// ---------- .slice() ----
//  отрезает нужное от строки
//  с включительно - до не включительно

//  let str = 'Java Script'
//  let newStr = console.log(str.slice(5))  // Script
//  newStr = console.log(str.slice(5, 9)) // Scri

//  // ---------- replace(), replaceAll()
//  // заменяет одно на другое

//  let a = 'fafafafafa'
//  let b = a.replace('a', 'A') // fAfafafafa
//  let c = a.replaceAll('a', 'A')  // fAfAfAfAfA
//  console.log(b)
//  console.log(c)

//  let message = 'Hello, Nina'
//  let newMess = message.replace(/nina/gi, 'Vova')  // REGULAR EXPRESSION
//  console.log(newMess)



// //--------- charAt()

// let text = 'HELLO WORLD'
// let letter = text.charAt(0)
// console.log(letter, text[0])  // H H


// --------------- repear()
// create copies of text

// let s = "hi"
// console.log(s.repeat(10))  // hihihihihihihihihihi



//--------------- trim()
// отрезает пробелы по краям

// let text = '     Hello      '
// console.log("!" + text + '!')         // !     Hello      !
// console.log("!" + text.trim() + '!')  // !Hello!


