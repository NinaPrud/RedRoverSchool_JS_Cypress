// Креативное задание*:
//  1.5 Напишите пошаговый алгоритм приготовления кофе и выведите его на экран (страницу).
// Желательно пронумеровать шаги. Каждый шаг должен быть выведен с новой строки.

let cupOfCoffee = 'coffee with milk'

let water = "boiling water"
let coffee = "ground coffee"
let topping = 'milk'

let step1 = '1.Take a cup;'
let step2 = `2.Take a ${coffee};`
let step3 = '3.Put coffee to the cup;'
let step4 = `4.Take ${water};`
let step5 = `5.Fill ${coffee} with ${water};`
let step6 = `6.Take a ${topping};`
let step7 = `7.Add ${topping} to cup;`
let step8 = `8.Your ${cupOfCoffee} is ready!`

console.log('How to do a ', cupOfCoffee,':', '\n',step1,'\n',step2,'\n',step3,'\n',step4,'\n',step5,'\n',step6,'\n',step7, '\n',step8)

document.write('<br><br><br>', 'How to do a ', cupOfCoffee, ':', '<br><br>', step1, '<br>', step2, '<br>', step3, '<br>', step4, '<br>', step5, '<br>', step6, '<br>', step7, '<br>', step8, '<br><br>')
