
//заполнить массив числами от 0 до 20 вкл, за исключением чисел, кратных 5
const array = []
let num = 0
for(i = 0; i <= 20; i ++){
    if(i % 5 != 0){
        array[num] = i
        ++num
    }
}
console.log(array)
console.log("******************************************")

const array1 = []

for(i = 0; i <= 20; i ++){
    if (i % 5 !=0){
    array1.push(i)
    }
}
console.log(array1)
