// ============= Математические функции

// ---------- Math.min(), Math.max(), Math.pow(), Math.sqrt()

// let arr = [28, 16, 37, 21, 17, 27]

// let min = Math.min(...arr);
// let newMin = Math.min(28, 16, 37, 21, 17, 27)
// let max = Math.max(...arr)

// console.log(min);
// console.log(newMin);
// console.log(max);


// // - Math.pow(num, power);   возведение в степень
// console.log(Math.pow(2, 4));  // 16
// console.log(2**4);            // 16


// - Math.sqrt(num)   извлечение корня
//console.log(Math.sqrt(25));   // 5
//console.log(25 ** (1/2));     // 5


// ------------- округление
// Math.round(), Math.floor(), Math.ceil(), Math.trunc()


//let num = 0.566;
// console.log(Math.floor(num)); // 0     floor  - округляет  в меньшую сторону к ближайшему целому числу

// console.log(Math.ceil(num)); // 1    ceil  - в большую сторону

// console.log(Math.round(num)); // 1    round  -  по законам математики

// console.log(Math.trunc(num))  // 0    trunc -  отбрасывает дробную часть



// // --------- .toFixed(n)   n - количество знаков после зпт


// // обрезает число округляя по заданному кол знаков после зпт

// console.log(num.toFixed(2));  // 0,56 // число возвращается в виде СТРОКИ!!
// console.log(typeof(num.toFixed(2)));  // string
// // поэтому надо переводить в число!!!
// console.log(+num.toFixed(2));
// console.log(typeof(+num.toFixed(2)));  // number


//---------- Math.sign(num)
// возвращает знак числа 
// в виде:    - 1     0    + 1

//let num = 0  // 0
//let num = -5   // -1
//let num = 5  // 1

//console.log(Math.sign(num))

// --------------- Math.abs(num)
//  Метод Math.abs возвращает модуль числа, то есть из отрицательного числа делает положительное



// //---------- isFinite()
// //-------Проверяет, что конечным пришло Числовое значение
// //возвращает true (если намбер)  или false (если инфинити или нан)


// // в класс Number входит не только number, но и NaN, Infinity, -Infinity

// console.log(545/0);     // Infinity
// console.log(-545/0);    // -Infinity
// console.log(545/"a");   // NaN
// console.log(545/"5");   // 109  приведение типов сделает number
// console.log(545/5);     //109  это number

// console.log(isFinite(545/0));    // false
// console.log(isFinite(-545/0));   // false
// console.log(isFinite(545/"a"));  // false
// console.log(isFinite(545/"5"));  //true
// console.log(isFinite(545/5));    //true



// // ---- Number.isFinite()
// // -проверяет, что переданы числа   (суть таже)
// console.log(Number.isFinite(545/0))    // false
// console.log(Number.isFinite(-545/0))   // false
// console.log(Number.isFinite(545/"a"))  //false
// console.log(Number.isFinite(545/"5"))  // true
// console.log(Number.isFinite(545/5))  // true



// -------------- parseInt(), parseFloat()
//----parseInt()
//  переводит строку в намбер и обрезает лишнее ( ДО ТОЧКИ, и если перед цифрой ничего нет)

// // так же переводит двочное или 16-ричное число в десятичное 
// let str4 = '4A';
// let str5 = 11;
// console.log(parseInt(str4, 16))  // 74  
// console.log(parseInt(str5, 2))   // 3
//  вторым указывается система из кот перевести


// let str = '1000px'
// let str2 = '1000.546 px'
// let str3 = 'h1000px'

// console.log(parseInt(str))  // 1000
// console.log(parseInt(str2)) // 1000
// console.log(parseInt(str3))  // NaN


// // --- parseFloat()
// // учитывает знаки после точки (ПЕРВОЙ)

// console.log(parseFloat(str))  // 1000
// console.log(parseFloat(str2)) // 1000.546
// console.log(parseFloat(str3))  // NaN
// console.log(parseFloat('1000.546.235'))  // 1000.546





// 55 минута видео
/*
Фреймворк это
Некий програмный продукт,
в котором уже есть предзаписанный код,
структура для работы(папки, блоки, структура проекта)
методы, взаимодействия
Все это облегчает и ускоряет решение определенных сложных задач
Некоторый код уже написан и его просто не надо писать
Есть Ф. для разных задач( для веб-разработки, для тестирования и т.д)
Многие рутинные задачи там уже написаны.


Фреймворки отличаются от Конструктора сайтов(контент менеджмент системс(ДруПалм, например))

В фреймфорке Писать код надо, но не надо писать его с нуля
В Конструкторах писать код вообще не надо

Ф. это НЕ библиотеки
Ф. это система, Б. более простой компонент(более скромный набор функциональности)
Б. можно подключить к Ф.

Mocha - фреймворк
Chai - библиотека
*/

// с 1:00  записи показывает, как создать проект, подключить mocha  и  chai
//  и делать  unit-  тесты


// https://www.youtube.com/watch?v=ahWCyA5kCco&list=PL6Gtav8N4O7iYGjg7S8pwbrlhShKkii8w&index=37
//7.4 (10/10) Математические функции. Тестирование посредством Mocha и Chai (Stan P.)