let name, age;

name = 'Vova'
age = 21

if(age < 21 && age >= 0 ) {
    console.log(`${name}, возмите стакан сока!`)
} else if (age >= 21 && age < 80) {
    console.log(`${name}, могу предложить бокал вина!`)
} else  if (age >= 80){
    console.log(`${name}, может, кефир?`)
} else {
    console.log(`${name},  пожалуйста, укажите свой возраст!`)
}

// ДЗ стоимость билетов

let age1, tiketPrice, normPrice

normPrice = 100
age1 = 'hhhhhh'

if(age1 <= 0){
    console.log('Please, enter your correct age!')
}
else if (age1 < 2) {
    tiketPrice = normPrice * 0.1
    console.log(`Tiket price for you is $${tiketPrice}`)
} else if (age1 < 18) {
    tiketPrice = normPrice * 0.5
    console.log(`Tiket price for you is $${tiketPrice}`)
} else if (age1 < 65) {
    tiketPrice = normPrice
    console.log(`Tiket price for you is $${tiketPrice}`)
} else if (age1 >= 65) {
    tiketPrice = normPrice * 0.6
    console.log(`Tiket price for you is $${tiketPrice}`)
} else {
    console.log('Please, enter your age!')
}