/*2.1 Напишите следующую программу:

- У клиента должен быть выбор из двух(или трех) видов кофе ( на ваш выбор).
- Дайте названия вашим видам кофе.
- Установите цену на кофе в зависимости от величины стаканчика( small, medium, big).
- Выведите на экран название, затем рецепт выбранного кофе (используйте переменные для изменения рецепта и названия) и его стоимость (в зависимости от размера стаканчика). 
- Компоненты кофе не влияют на стоимость.
- Используйте подходящую комбинацию условий if, (else if), else для решения задачи.

  2.2 Нарисуйте блок-схему вашей программы.

Draw a flowchart for your program.

можете использовать следующий сайт или от руки
https://miro.com/app/board
*/ 
let blackCoffee = "Black Coffee:"
let milkCoffee = "Coffee with milk:"
let irishCoffee = "Coffee with rum:"
let coffeeType

let rum = "strong Irish rum"
let milk = "soft cow's milk"
let nothing = "nothing more"
let filling

let smallCup = "100 ml"
let mediumCup = "150 ml"
let bigCup = "250 ml"
let size
let recipe = `The best arabica, water and ${filling} - exactly what is needed!`

let smallPrice = 2  
let mediumPrice = 3
let bigPrice = 5
//либо можно ввести один price и потом * на коэфиц. под размер чашки

coffeeType = irishCoffee
size = mediumCup


if (coffeeType == blackCoffee){
  filling = nothing, document.write(coffeeType,'<br><br>',recipe,'<br><br>')}
else if (coffeeType == milkCoffee){
  filling = milk,document.write(coffeeType,'<br><br>',recipe,'<br><br>')}
else if (coffeeType == irishCoffee){
  filling = rum, document.write(coffeeType,'<br><br>',recipe,'<br><br>')}
else {document.write("Please, select a type of coffee!<br>")
     }

if(size == smallCup){
  document.write (`You select cup of ${smallCup} it costs ${smallPrice} dollars`)
}
else if(size == mediumCup){
  document.write (`You select cup of ${mediumCup} it costs ${mediumPrice} dollars`)
}
else if(size == bigCup){
  document.write (`You select cup of ${bigCup} it costs ${bigPrice} dollars`)
}
else{document.write('Please, select a size of cup')}