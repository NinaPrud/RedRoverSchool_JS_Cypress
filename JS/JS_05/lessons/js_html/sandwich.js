let bread = 'white bread'
let salmon = 'salted salmon'
let turkey = 'smoked turkey'
let bacon = 'fried bacon'
let cheese = 'cream cheese'
let sandwich
let topping

let turkeySandwich = 'Sandwich with turkey'
let baconSandwich = 'Sandwich with bacon'
let salmonSandwich = 'Sandwich with salmon'


let ask = prompt('Would you like to order?');

while (ask != "yes") {
    ask = prompt('Would you like to order?');
}
let askTopping = prompt('Choose from bellow toopings: 1 - salmon, 2 - turkey, 3 - bacon')

if (askTopping == 1) {
    topping = salmon
    sandwich = salmonSandwich
} else if (askTopping == 2) {
    topping = turkey
    sandwich = turkeySandwich
} else {
    topping = bacon
    sandwich == baconSandwich
}


let step1 = `1.Take a piece of ${bread}`
let step2 = `2.Take a piece of ${cheese}`
let step3 = '3.Put cheese on bread'
let step4 = `4.Take a piece of ${topping}`
let step5 = `5.Put ${topping} on ${cheese}`
let step6 = 'Bon appetite!'

document.write(`For ${sandwich} you must do: <br><br>`, step1,
    '<br>', step2, '<br>', step3, '<br>',
    step4, '<br>', step5, '<br><br>', step6, '<br><br>')


let priceSalmon = 15
let priceTurkey = 10
let priceBacon = 8

if (topping == salmon) {
    document.write(`P.S.:And in our cafe ${salmonSandwich} costs 
   ${priceSalmon} dollars`)
}
else if (topping == turkey) {
    document.write(`P.S.:And in our cafe ${turkeySandwich} costs 
   ${priceTurkey}  dollars`)
}
else if (topping == bacon) {
    document.write(`P.S.:And in our cafe ${baconSandwich} costs 
   ${priceBacon} dollars`)
}



