
// 1.Внедрите в свой код с Кофе, как минимум 2 функции (на ваше усмотрение) и вызовите их в коде.
let strongR = "Strong Roast Coffee";
let mediumR = "Medium Roast Coffee";
let softR = "Soft Roast Coffee"
let coffee = [strongR, mediumR, softR];

let caramel = "Caramel Syrup";
let rum = "Irish rum"
let milk = "Cow's Milk"
let filler = [caramel, rum, milk];

let smallS = "Small";
let mediumS = "Medium";
let bigS = "Big"
let size = [smallS, mediumS, bigS];
let standartpPrice = 1;


//printChoice();

//makeOrder(1, 1, 3);
//printMenu();


function countPrice(p) {
    let price = standartpPrice;
    if (p == smallS) {
        price *= 1;
    }
    else if (p == mediumS) {
        price *= 1.5;
    }
    else if (p == bigS) {
        price *= 2.5;
    }
    else {
        price = "Нужно выбрать размер чашки!"
    }
    return price;
}

function printChoice() {


    console.log(`    В нашем кафе можно выпить кофе с разным видом обжарки:
    1 - ${strongR}, 2 - ${mediumR}, 3- ${softR} \n
    С разной начинкой: 
    1 - ${caramel}, 2 - ${rum}, 3 - ${milk} \n
    В наличие три вида размеров чашек: 
    1 - ${smallS} = ${countPrice(smallS)}$, 2 - ${mediumS} = ${countPrice(mediumS)}$ , 3 - ${bigS} = ${countPrice(bigS)}$} \n
    Просим Вас сделать заказ!
    Введите 1, 2  или 3 для каждой строки выбора (Поочередно три числа(x, y, z)).

    P.S.: Если начинка Вам не нужна, все равно выберите любую
    и просто потом не добавляйте ее  в кофе - цена от этого не завист!\n\n`);

}

function makeOrder(c, f, s) {
    let orderСoffee;
    let orderFiller;
    let orderSize;

    switch (c) {
        case 1: orderСoffee = strongR;
            break;
        case 2: orderСoffee = mediumR;
            break;
        case 3: orderСoffee = softR;
            break;
        default: console.log("НУЖНО ВЫБРАТЬ ВИД КОФЕ!!!");
            return

    }
    switch (f) {
        case 1: orderFiller = caramel;
            break;
        case 2: orderFiller = rum;
            break;
        case 3: orderFiller = milk;
            break;
        default: console.log("НУЖНО ВЫБРАТЬ ВИД НАПОЛНИТЕЛЯ!!!");
            return;
    }
    switch (s) {
        case 1: orderSize = smallS;
            break;
        case 2: orderSize = mediumS;
            break;
        case 3:
            orderSize = bigS;
            break;
        default: console.log("НУЖНО ВЫБРАТЬ РАЗМЕР ЧАШКИ!!!");
            return;
    }
    countPrice(orderSize)


    console.log(`
                         Ваш выбор: ${orderСoffee} с ${orderFiller} и ${orderSize} cup
                      
                              Просим оплатить в кассу ${countPrice(orderSize)}$ и немного подождать; \n
                      Когда кофе будет готов, можно добавить в него ${orderFiller}; \n\n
                                      Наслаждайтесь!!!     \n\n\n`)

    //  ${orderСoffee} with ${orderFiller} and ${orderSize} cup

    //  1. You choose ${orderСoffee} and ${orderSize} cup on the display of the machine; \n
    //  2. Pay us ${countPrice(orderSize)}$ and wait for the coffee to be ready; \n
    //  4. Take ${orderFiller} and pour it to coffee cup; \n\n
    //  6.Enjoy your coffee!! \n\n\n`)

}

function printMenu() {

    for (let c = 0; c < coffee.length; c++) {
        for (let f = 0; f < filler.length; f++) {
            for (let s = 0; s < size.length; s++) {

                let price = standartpPrice;

                if (size[s] === "Medium") {
                    price *= 1.5;
                } if (size[s] === "Big") {
                    price *= 2.5;
                }
                console.log(`
                                 ${coffee[c]} with ${filler[f]} and ${size[s]} cup
                      
             1. Choose ${coffee[c]} on the display of the machine ; \n
             2. Choose ${size[s]} cup on the display of the machine ; \n
             3. Pay us ${price}$ and wait for the coffee to be ready; \n
             4. Take ${filler[f]} and pour it to coffee cup; \n\n
             6.Enjoy your coffee!! \n\n\n`)
            }
        }
    }
}





// 2.Напишите функцию с калькулятором (используйте предыдущий код), в которую, в качестве параметров, передаются три переменные,
//две - числовые и третья отвечает за знак арифметической операции (*, /, -, +). Проверьте работу функции.
// example:  function calculate(a, b, operator){}

// // 2. Create calculator

//___1_________-c return   и  if



function calc(num1, num2, operator) {
    let result;
    if (isNaN(num1) || isNaN(num2)) {
        return "Необходимо ввести число!";
    } else {
        if (operator == "+") {
            result = num1 + num2;
            return (`${num1} + ${num2} = ${result}`);
        }
        else if (operator == "-") {
            result = num1 - num2;
            return (`${num1} - ${num2} = ${result}`);
        }
        else if (operator == "*") {
            result = num1 * num2;
            return (`${num1} * ${num2} = ${result}`);
        }
        else if (operator == "/" && num2 == 0) {
            return ("На ноль делить недьзя!");
        }
        else if (operator == "/" && num2 != 0) {
            result = num1 / num2;
            return (`${num1} / ${num2} =${result}`);
        }
        else {
            return ("Введите оператор!");
        }
    }
}


//console.log(calc(1, 1, "-"));


// //line()

// //________2_____c console.log и switch

function calculator2(num1, num2, operator) {
    if (isNaN(num1) || isNaN(num2)) {
        return "Необходимо ввести число!";
    } else {
        let result
        switch (operator) {
            case "+":
                result = num1 + num2
                console.log(`${num1} + ${num2} = ${result}`)
                break
            case "-":
                result = num1 - num2
                console.log(`${num1} - ${num2} = ${result}`)
                break
            case "*":
                result = num1 * num2
                console.log(`${num1} * ${num2} = ${result}`)
                break
            case "/":
                if (num2 == 0) {
                    console.log("На ноль делить нельзя!")
                }
                else {
                    result = num1 / num2
                    console.log(`${num1} / ${num2} = ${result}`)
                }
                break
            default: console.log("Извините, данная операция не поддерживается!")
        }
    }
}

console.log(calculator2())


// // 3. Напишите функцию, которая создает и выводит в консоль кастомное приветствие с именем, которое вы передаете в функцию.
// //-----------------
// function line() {
//     console.log("----------------------------------")
// }

// function print(x) {
//     console.log(x);
// }
// //------------------

// // let nam = "Olya"

// // welcome("Anna")

// // function welcome (name) {
// //      console.log(`Привет, ${name}!`);
// // }
// // welcome("Нина")
// // welcome("Вова")
// // welcome(nam)
// // line()

// // //-------------------
// // const welcome1 = function(name1) {
// //     console.log("Приветики, " + name1);
// // }
// // welcome1("Kolya");
// // line();
// // //-------------------

// // const welcome2 = (name2) => console.log(`Hello, ${name2}!!!`);

// // welcome2('Nina')
// // //-----------------
// // line();

// // function welcome3(name3) {
// //     print ("Hi, " + name3);
// // }
// // welcome3("Vova")



