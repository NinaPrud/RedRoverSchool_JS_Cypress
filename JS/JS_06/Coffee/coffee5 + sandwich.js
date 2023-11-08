/*
1) Задания на закрепление (можно и нужно обсуждать в группе):
Внедрите в свой код с Кофе, как минимум 2 функции (на ваше усмотрение) и вызовите их в коде.

Креативное задание*(не показываем решение до понедельника):
    Доработайте свой код с кофе и продумайте бизнес модель для своего кода.
    */

    // СДЕЛАТЬ ЦИКЛЫ!!!!!

// -------- for sandwich
let salmon = 'salmon'
let cheeze = 'cheeze'
let becon = 'becon'
//let toppingSandwich = [salmon, cheeze, becon]

let salmonSandwich = ' sandwich with salmon'
let beconSandwich = ' sandwich with becon'
let cheezeSandwich = ' sandwich with cheeze'
//let kindsOfSandwich = [salmonSandwich, beconSandwich, cheezeSandwich]

let minSandwichPrice = 1

// ---------------for coffee

let milk = 'milk'
let syrup = 'caramel syrup'
let rum = 'rum'
let nothing = 'nothing filler'
let fillers = [milk, syrup, rum, nothing]

let small = 'cup size 100 ml'
let medium = 'cup size 200 ml'
let big = 'cup size 300 ml'
//let sizeOfCup = [small, medium, big]

let whiteCoffee = 'Soft coffee with milk'
let sweetCoffee = 'Sweet coffee with caramel syrup'
let irishCoffee = 'Strohg coffee with irish rum'
let blackCoffee = 'Strohg black coffee'

let price = 1
let finalSandvichPrice
let finalCoffeePrice
//------------------------------------------------

function coffeePriceCalculation(cupSize) {

    if (cupSize == small) {
        return finalCoffeePrice = price * 1
    }
    else if (cupSize == medium) {
        return finalCoffeePrice = price * 2
    }
    else if (cupSize == big) {
        return finalCoffeePrice = price * 3
    }
    else {
        return 'Please, select a size of cup'
    }
}

function sandwichPriceCalculation(topping) {

    if (topping == cheeze) {
        return finalSandvichPrice = price * 1
    }
    else if (topping == becon) {
        return finalSandvichPrice = price * 2
    }
    else if (topping == salmon) {
        return finalSandvichPrice = price * 3
    }
    else {
        return 'Please, select a topping for sandwich'
    }
}

function choiceOfSandich(topping) {
    if (topping == cheeze) {
        return `You have choozen ${cheezeSandwich}, it cost $${sandwichPriceCalculation(topping)}`
    }
    else if (topping == becon) {
        return `You have choozen ${beconSandwich}, it cost $${sandwichPriceCalculation(topping)}`
    }
    else if (topping == salmon) {
        return `You have choozen ${salmonSandwich}, it cost $${sandwichPriceCalculation(topping)}`
    }
    else {
        return 'Please, select a topping for sandwich if you want a sandwich'
    }
}

function welcomMessage() {
    let kindOfCoffe = ''
    for(let i =0; i < fillers.length; i++){
        if (i == fillers.length-1) {
            kindOfCoffe += fillers[i]
        } else {
            kindOfCoffe += fillers[i] + ", "
        }
     }
    console.log('  Hello!', '\n', 'In our mini-cafe you can buy a delicious sandwich and aromatic coffee with different fillings!','\n\n',
     'Price for sandwich:','\n', `${cheezeSandwich} is cost $${sandwichPriceCalculation(cheeze)}`, '\n',
     `${beconSandwich} is cost $${sandwichPriceCalculation(becon)}`, '\n',
     `${salmonSandwich} is cost $${sandwichPriceCalculation(salmon)}`, '\n\n',

     'Price for coffee:','\n', ` ${small} is cost $${coffeePriceCalculation(small)}`, '\n',
     ` ${medium} is cost $${coffeePriceCalculation(medium)}`, '\n',
     ` ${big} is cost $${coffeePriceCalculation(big)}`, '\n',

     `You can add different filler to yuor coffee: ${kindOfCoffe} - and absolutely free!`, '\n\n',
     'Please make your choice!', '\n'
    )
}

function choiceOfCoffee (filler, cupSize) {
    if (cupSize != undefined && filler != undefined) {
        // --- topping
            if (filler == milk) {
                cupOfCoffee = whiteCoffee  
            }
            else if (filler == syrup) {
                cupOfCoffee = sweetCoffee
            }
            else if (filler == rum) {
                cupOfCoffee = irishCoffee
            } 
            else if (filler == nothing) {
                cupOfCoffee = blackCoffee
            } 
            else {
                console.log('Please, select a type of topping')
            }
        // --- size and price
            if (cupSize == small) {
                coffeePriceCalculation(cupSize)
            }
            else if (cupSize == medium) {
                coffeePriceCalculation(cupSize)
            }
            else if (cupSize == big) {
                coffeePriceCalculation(cupSize)
            } 
            else {
                return 'Please, select a size of cup'
            }
        // --- recept
        return `You have choozen ${cupOfCoffee} and ${cupSize}, it cost $${coffeePriceCalculation(cupSize)}! \n\n`
        }
        else {
            return "You can't enjoy coffee until you choose kind of coffee and size of the cup!"
        }
}

// ----------------------------------------------------------------

welcomMessage()

 console.log(choiceOfSandich(salmon))
 console.log(choiceOfCoffee (nothing, medium))
 console.log('Please pay', finalSandvichPrice + finalCoffeePrice +'$ and injoy your lunch!')

