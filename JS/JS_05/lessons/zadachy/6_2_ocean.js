
//---------------------------------------
// вернуть индексы зданий с окон которых виден океан
//Вход: heights = [4,2,3,1] Ocean
//выход: [0, 2, 3]  либо стринг '023' вернуть если запушить в массив не получится

let arr = [4,2,3,1]
let str = arr.length-1 + ''

for (let i = arr.length-2; i >= 0; i--) {
    if(arr[i] > arr[i + 1]){
        str += i
    }
}
let arr2 = str.split('').reverse().map(Number)
console.log(arr2)








