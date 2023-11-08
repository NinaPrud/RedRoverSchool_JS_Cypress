let milk = 'milk'
let syrup = 'caramel syrup'
let rum = 'rum'

let small = 'cup size 100 ml'
let medium = 'cup size 200 ml'
let big = 'cup size 300 ml'

let whiteCoffee = 'Soft coffee with milk'
let sweetCoffee = 'Sweet coffee with caramel syrup'
let irishCoffee = 'Strohg coffee with irish rum'

let topping = rum
let cup = small

let cupOfCoffee
let finalPrice
let price = 1


if (cup != undefined && topping != undefined) {
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
console.log(`You select ${cupOfCoffee}! \n\n Please take ${cup}; \n Pour some coffee; \n Add some ${topping}; \n Please, pay $${finalPrice}! \n\n Have a nice coffee!` )
}
else {
    console.log("You can't enjoy coffee until you choose kind of coffee and size of the cup!")
}