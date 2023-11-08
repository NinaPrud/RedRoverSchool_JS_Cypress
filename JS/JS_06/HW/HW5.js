/* Home Work #5

Материал к прочтению:

https://learn.javascript.ru/function-basics

https://www.w3schools.com/js/js_functions.asp


1) Задания на закрепление (можно и нужно обсуждать в группе):
Внедрите в свой код с Кофе, как минимум 2 функции (на ваше усмотрение) и вызовите их в коде.

СМ. coffee5

2) Напишите функцию с калькулятором (используйте предыдущий код), в которую, в качестве параметров, 
передаются три переменные, две - числовые и третья отвечает за знак арифметической операции (*, /, -, +). 
Проверьте работу функции. example:  function calculate(a, b, operator){}
*/
function calculate (num1, num2, operator) {
    let result
    switch (operator) {
        case '+':
            result = 1 * num1 + 1 * num2
            if (isNaN(result)) {
                return ('Введите числа')
            } else {
                return (`${num1} ${operator} ${num2} = ${result}`)
            }
        case '-':
            result = num1 - num2
            if (isNaN(result)) {
                return ('Введите числа')
            } else {
                return (`${num1} ${operator} ${num2} = ${result}`)
            }
        case '*':
            result = num1 * num2
            if (isNaN(result)) {
                return ('Введите числа')
            } else {
                return (`${num1} ${operator} ${num2} = ${result}`)
            }
        case '/':
            result = num1 / num2
            if (isNaN(result)) {
                return ('Введите числа')
            } else if (num2 == 0) {
                return ('На ноль делить нельзя!')
            } else {
                return (`${num1} ${operator} ${num2} = ${result}`)
            }
        default:
            return ('Выберите математическую операцию!')
    }
}
console.log (calculate ('4444', '4444' ,"/"))


// 3) Напишите функцию, которая создает и выводит в консоль кастомное приветствие с именем, которое вы передаете в функцию.

let printHelloMessage = function(name = 'my friend') {
    console.log(`Hello, ${name}!`)
}
printHelloMessage()
printHelloMessage('Nina')



/*
Креативное задание*(не показываем решение до понедельника):
    Доработайте свой код с кофе и продумайте бизнес модель для своего кода.


P.s. Если вы все сделали и у вас есть дополнительное время, решайте задачки с коварс

*/