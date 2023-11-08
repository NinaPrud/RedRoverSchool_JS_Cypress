/*Homework #2
Материал к прочтению:
https://learn.javascript.ru/operators
https://learn.javascript.ru/comparison
https://learn.javascript.ru/ifelse
https://learn.javascript.ru/logical-operators

https://www.w3schools.com/js/js_operators.asp
https://www.w3schools.com/js/js_arithmetic.asp
https://www.w3schools.com/js/js_if_else.asp
*/
/*

Задания на закрепление (можно и нужно обсуждать в группе):
1.1 Напишите программу по согласованию отпуска в зависимости от месяца. Если месяц “July” или “August”, то программа должна показать - ‘approved’, если другие месяцы, то - “denied”.
*/

// let myMonth = 'AUGUST'
// let month = myMonth.toLowerCase()

// if (month == 'july' || month == 'august') {
//     console.log(`Your holiday is aproved in ${month}, good rest!`)
// } else {
//     console.log(`Your holiday is denied becouse in ${month} your can't take a holiday!`)
// }


// /*
// 1.2 Напишите простенький калькулятор (*, /, +, -). Проверьте ваш код на охват исключений для арифметических операций.
// У вас должны быть две переменные для исходных чисел и одна для оператора. В зависимости от оператора, должно происходить то или иное арифметическое действие и выводиться результат в консоль.
// */

// let num1, num2, operator, result;

// num1 = '1'
// num2 = 0
// operator = "/"
// // проверка на NaN в след домашке 

// if (operator == '*' ) { 
//     result = num1 * num2
//     console.log(`${num1} ${operator} ${num2} is ${result}`)
// } else if (operator == '/' && num2 != 0) {
//     result = num1 / num2
//     console.log(`${num1} ${operator} ${num2} is ${result}`)
// } else if (operator == '+') {
//     result = (1 * num1) + (1 * num2)
//     console.log(`${num1} ${operator} ${num2} is ${result}`)
// } else if (operator == '-') {
//     result = num1 - num2
//     console.log(`${num1} ${operator} ${num2} is ${result}`)
// } else {
//     console.log('Error! Please, enter correct data!')
// }


/*

1.3 Решите задачу с помощью пройденных тем:
«Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра. За сколько дней она доползёт до вершины стены.» */

// 1 решение математ

//  (3 - 2) * (x - 1) + 3 = 5
//  x - 1 + 3 = 5
//  x = 3

//2 решение матем
//   let wallHight = 6
//   let speed = 3
//   let nightSpeed = -2
//   let result = speed
//   let totalDays = 1

//   console.log('1 вар матем - Улитка доползла за', (wallHight - speed) / (speed + nightSpeed) + 1, 'дня')
// (wallHight - speed) -  остаток высоты стены после подёма за первый день
// делим на (speed + nightSpeed) расстояние, на которое поднимится улитка за последующие сутки и прибавляем первый день

// // 2 реш условия

// let dayDistance = 3
// let nightDown = -2
// let distance = 0
// let days = 0
// let wall = 5

// //1
// if ((distance += dayDistance) <= wall) {
//     days++
//     console.log(`Current distance at the end of the day for day ${days} is ${distance} meter(s)`)
//     if (distance == wall) console.log('OK')
//     else console.log('Go forward!')
//     distance += nightDown
// }
// //2
// if ((distance += dayDistance) <= wall) {
//     days++
//     console.log(`Current distance at the end of the day for day ${days} is ${distance} meter(s)`)
//     if (distance == wall) console.log('OK')
//     else console.log('Go forward!')
//     distance += nightDown
// }
// //3
// if ((distance += dayDistance) <= wall) {
//     days++
//     console.log(`Current distance at the end of the day for day ${days} is ${distance} meter(s)`)
//     if (distance == wall) console.log('OK')
//     else console.log('Go forward!')
//     distance += nightDown
// }
//4 (если без вложенного ифа)
// if ((distance += dayDistance) <= wall) {
//     days++
//     console.log(`Current distance at the end of the day for day ${days} is ${distance} meter(s)`)
//     if (distance == wall) console.log('OK')
//     distance += nightDown
// }
// else console.log('Finish')





/*
Креативное задание*(не показываем решение до понедельника):
2.1 Напишите следующую программу:
- У клиента должен быть выбор из двух(или трех) видов кофе ( на ваш выбор).
- Дайте названия вашим видам кофе.
- Установите цену на кофе в зависимости от величины стаканчика( small, medium, big).
- Выведите на экран название, затем рецепт выбранного кофе (используйте переменные для изменения рецепта и названия) и его стоимость (в зависимости от размера стаканчика).
- Компоненты кофе не влияют на стоимость.
- Используйте подходящую комбинацию условий if, (else if), else для решения задачи.
2.2 Нарисуйте блок-схему вашей программы (так проще будет написать саму программу).
Можете использовать следующий сайт https://miro.com/app/board или от руки
*/

/*
let milk = 'milk'
let syrup = 'caramel syrup'
let rum = 'rum'

let smallCup = 'cup size 100 ml'
let mediumCup = 'cup size 200 ml'
let bigCup = 'cup size 300 ml'

let whiteCoffee = 'Soft coffee with milk'
let sweetCoffee = 'Sweet coffee with caramel syrup'
let irishCoffee = 'Strohg coffee with irish rum'

let topping
let cupSize

let cupOfCoffee
let finalPrice
let price = 1

// --- topping

if (topping == milk) {
    cupOfCoffee = whiteCoffee
}
else if (topping == syrup) {
    cupOfCoffee = sweetCoffee
}
else if (topping == rum) {
    cupOfCoffee = irishCoffee
}
else {
    console.log('Please, select a type of topping')
}

// --- size and price

if (cupSize == smallCup) {
    finalPrice = price * 1
}
else if (cupSize == mediumCup) {
    finalPrice = price * 2
}
else if (cupSize == bigCup) {
    finalPrice = price * 3
}
else {
    console.log('Please, select a size of cup')
}

// --- recept

if (cupSize != undefined && topping != undefined) {
console.log(`You select ${cupOfCoffee}! \n\n Please take ${cupSize}; \n Pour some coffee; \n Add some ${topping}; \n Please, pay $${finalPrice}! \n\n Have a nice coffee!` )
}
else {
    console.log("You can't enjoy coffee until you choose kind of coffee and size of the cup!")
}
*/



// ========= WEB
/*

//ЛУЧШЕ ДЛЯ ВЫБОРА ВВЕСТИ 1 2 3 НА ВЫБОР (и к ним потом приравнивать пременные)

let name = prompt("Please enter your name!")
alert(`Hello, ${name}! \n Please enter type of coffee and size of a cup.`)

let whiteCoffee = 'Soft coffee with milk'
let sweetCoffee = 'Sweet coffee with caramel syrup'
let irishCoffee = 'Strong coffee with irish rum'

let cupOfCoffee
let finalPrice
let price = 1

let topping = prompt('Please, enter one of kind of topping: milk, syrup or rum')
let cup = prompt('Please, enter cup size: small, medium or big')

// --- topping

if (topping == 'milk') {
    cupOfCoffee = whiteCoffee  
}
else if (topping == 'syrup') {
    cupOfCoffee = sweetCoffee
}
else if (topping == 'rum') {
    cupOfCoffee = irishCoffee
} 
else {
    alert('Please, select a type of topping')
}
 
// --- size and price

if (cup == 'small') {
    finalPrice = price * 1
}
else if (cup == 'medium') {
    finalPrice = price * 2
}
else if (cup == 'big') {
    finalPrice = price * 3
} 
else {
    alert('Please, select a size of cup')
}

// --- recept

if ((cup == 'small' || cup == 'medium' || cup == 'big') && (topping == 'milk' || topping == 'syrup' || topping == 'rum')) {
    alert(`${name}, you select ${cupOfCoffee}! \n\n Please take ${cup} cup ; \n Pour some coffee; \n Add some ${topping}; \n Please, pay $${finalPrice}! \n\n Have a nice coffee!` ) 
}
else {
    alert("You can't enjoy coffee until you choose kind of coffee and size of the cup!")
}

*/




