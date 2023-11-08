
let kidsTicket, adultsTicket, age, price, isVeteran, isSenior, guestNum, totalPrice

kidsTicket = 'Kitty'
adultsTicket = 'Ray'
price =100;

age = prompt('How old are you?')
guestNum = prompt('How many tikets do need?')
isVeteran = prompt('Are you veteran? Pleas enter yes/no answer', 'no')

if (age >= 18 && age < 65 && isVeteran === 'no') {
  totalPrice = guestNum * price
    console.log(`Tiket price for ${guestNum} tikets to ${adultsTicket} movie will be $${totalPrice}`)
    
}
else if(isVeteran === 'yes' || age >= 65){
  totalPrice = guestNum * (price* 0.8)
  console.log(`Tiket price for ${guestNum} tikets to ${adultsTicket} movie will be $${totalPrice}`)

}else {
  totalPrice = guestNum * (price/2)
    console.log(`Tiket price for ${guestNum} tikets to ${adultsTicket} movie will be $${totalPrice}`)
}
