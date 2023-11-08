/*

let milk = 'milk'
let syrup = 'caramel syrup'
let rum = 'rum'

let small = 'cup size 100 ml'
let medium = 'cup size 200 ml'
let big = 'cup size 300 ml'

let whiteCoffee = 'Soft coffee with milk'
let sweetCoffee = 'Sweet coffee with caramel syrup'
let irishCoffee = 'Strohg coffee with irish rum'

let topping
let cup

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

if (cup == small) {
    finalPrice = price * 1
}
else if (cup == medium) {
    finalPrice = price * 2
}
else if (cup == big) {
    finalPrice = price * 3
} 
else {
    console.log('Please, select a size of cup')
}

// --- recept

if (cup != undefined && topping != undefined) {
console.log(`You select ${cupOfCoffee}! \n\n Please take ${cup}; \n Pour some coffee; \n Add some ${topping}; \n Please, pay $${finalPrice}! \n\n Have a nice coffee!` )
}
else {
    console.log("You can't enjoy coffee until you choose kind of coffee and size of the cup!")
}
*/


// ========= WEB

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
