let arr1 = [1, 10, 'mama', 3, 'my', [1, 2, null, undefined, true, 'c', 'vav'], 'cpapac', 'abc'];
 let pets = ["cat", "dog", "bat", "coco", 25];
// let veg = ["Капутса", "Репа", "Морковка", "Редиска"]  // русскую с не найдет
// let word = "Coconutccc"
// let words = ["dscnsd", "nndjc",",zmxxkzmmkzxkzxkzxm", "jj",",zxmxmm", "mmmmmmmmmmmmmmmmmmmmm"]

//console.log(typeof(arr1[0]))

// найти элемент, который являеся числом 


function searchNumber(arg) {

    for (let i = 0; i < arg.length; i++) {
        if (typeof (arg[i]) == "number")
            console.log(arg[i]);
        for (let j = 0; j < arg[i].length; j++) {
            if (typeof (arg[i][j]) == "number")
                console.log(arg[i][j]);

        }
    }
}

searchNumber(arr1)
searchNumber(pets)


//------------------------найти букву---------
// function search(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             if (arr[i][j] == 'c') {
//                 console.log(arr[i]);
//                 //break
//             }
//         }
//     }
// }

// //  когда был параметр, можно вставлять при вызове любой аргумент на его место!!!!
// //search(arr1)

// //search(pets)

// //search(veg)
// search(word)

//// ------------------найти самый длинный элемент


// function arrLongest(arr) {
//     let longest = arr[0].length;
//     let num = 0;
//       for(let i = 0; i < arr.length; i++) {
//         if(longest < arr[i].length) {
//             longest = arr[i].length
//             num = i
//         }
//       }
//       console.log(num)
// }
// arrLongest(words)



