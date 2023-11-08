// ---------------------------------------------Объекты---- for in-----------------------------------------------------

// // https://www.codewars.com/kata/577ff15ad648a14b780000e7 /  Welcome!
// // -- 1
// let langBase = {
//   english: 'Welcome',
//   czech: 'Vitejte',
//   danish: 'Velkomst',
//   dutch: 'Welkom',
//   estonian: 'Tere tulemast',
//   finnish: 'Tervetuloa',
//   flemish: 'Welgekomen',
//   french: 'Bienvenue',
//   german: 'Willkommen',
//   irish: 'Failte',
//   italian: 'Benvenuto',
//   latvian: 'Gaidits',
//   lithuanian: 'Laukiamas',
//   polish: 'Witamy',
//   spanish: 'Bienvenido',
//   swedish: 'Valkommen',
//   welsh: 'Croeso'
// }

// function greet(language) {

//     for (let key in langBase) {
//       if (language == key) {
//         return langBase[key]
//       }
//     }
//     return 'Welcome'
//   }

// console.log(greet('irish'))

// // --2

// function greet2(language) {

//   return langBase[language] || "Welcome";
// }

// console.log(greet2('irish'))


//-----------------------------
//https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript
/* The function giveMeFive accepts 1 parameter, obj, which is an object.
Create an array (which you will eventually return). Then, traverse obj, checking each key and value. 
If the length of the key is equal to 5, then push the key to your array. 
Separately, if the length of the value is equal to 5, then push the value to your array.
At the end, return your array.*/


// function giveMeFive(obj){
//     let arr = []
//     for (let key in obj) {
//       if(key.length == 5) {
//         arr.push(key)
//       }
//        if(obj[key].length == 5) {
//         arr.push(obj[key])
//       }
//     }
//     return arr
//   }

// console.log(giveMeFive({Our:"earth",is:"a",beautyful:"world"}))


//-------------[key]----------map()-----for of---------String.fromCharCode()---------------

// https://www.codewars.com/kata/57ced2c1c6fdc22123000316/train/javascript


//1
function numObj1(s) {
  let arr = []
  for (let el of s) {
    arr.push({ [el]: String.fromCharCode(el) })
  }
  return arr
}
//2
function numObj2(s) {
  let arr = []
  s.map(el => arr.push({ [el]: String.fromCharCode(el) }))
  return arr
}
//3
function numObj3(s) {
  return s.map(n => {
    return { [n]: String.fromCharCode(n) };
  });
}

// console.log(numObj1([118,117,120]))
// console.log(numObj2([118,117,120]))
// console.log(numObj3([118,117,120]))



//------------for of---some---find---filter--------

// https://www.codewars.com/kata/5827acd5f524dd029d0005a4/train/javascript

//1
function isRubyComing(list) {
  for (el of list) {
    if (el.language == 'Ruby') {
      return true
    }
  }
  return false
}

//2
function isRubyComing2(list) {
  return list.some(el => el.language == 'Ruby')
}


list = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

//console.log(isRubyComing(list))
//console.log(isRubyComing2(list))

//----------------for of-------map------forEach--------------

// https://www.codewars.com/kata/58279e13c983ca4a2a00002a/train/javascript

//1
function greetDevelopers(list) {
  for (el of list) {
    el.greeting = `Hi ${el.firstName}, what do you like the most about ${el.language}?`
  }
  return list
}

//2
function greetDevelopers2(list) {
  return list.map(el => (el.greeting = `Hi ${el.firstName}, what do you like the most about ${el.language}?`, el));
}

//-----------------------------

// https://www.codewars.com/kata/57d001b405c186ccb6000304/solutions/javascript

function iTri(s) {
  let swim = 2.40
  let bike = 112.00
  let run = 26.20
  let distance = 140.60
  let result = (distance - s).toFixed(2)
  if (s == 0) return 'Starting Line... Good Luck!'
  if (s <= swim) return { 'Swim': `${result} to go!` }
  if (s <= bike) return { 'Bike': `${result} to go!` }
  if (s < (distance - 10)) return { 'Run': `${result} to go!` }
  if (s >= (distance - 10) && s < distance) return { 'Run': 'Nearly there!' }
  return "You're done! Stop running!"
}
//console.log(iTri(103.5))


//----------------------sort---for------- new Set -  убирает дубликат----------
//https://www.codewars.com/kata/5836dce6966f8d1d43000007/train/javascript
//  отсотр массив, убрать дубликаты, положить в объект пронумеровав по-порядку с нуля

// //1
// let arr = ["MTV", "BBC1", "BBC1", "BBC2", "BBC1", "BBC1"]
// arr.sort()
// let obj = { 0: arr[0] }

// let key = 0
// for (let i = 0; i < arr.length - 1; i++) {
//   if (arr[i + 1] != arr[i]) {
//     key++
//     obj[key] = arr[i + 1]
//   }
// }
// console.log(obj)   // { '0': 'BBC1', '1': 'BBC2', '2': 'MTV' }


// //2
// function redarr2(arr) {
//   let obj = {}
//   let newArr = arr.sort()
//   newArr = [...new Set(newArr)]
//   for (let i in newArr) {
//     obj[i] = newArr[i]
//   }
//   return obj
// }


// //  3  ????

// function redarr3(arr) {
//   let arr2 = (arr.sort().filter((el, i, arr) => i == arr.indexOf(el)))
//   return { ...arr2 }
// }

//-----------------------------filter-reduce-concat---forEach----toFixed--Number-------------------------------------
// https://www.codewars.com/kata/599db0a227ca9f294b0000c8

//[10, 9, 9, 10, 9, 10, 9] ==> [9.429, {'h': 7, 'a': 0, 'l': 0}, 'They did well']

//[5, 6, 4, 8, 9, 8, 9, 10, 10, 10] ==> [7.9, {'h': 5, 'a': 2, 'l': 3}]

let array = [10, 9, 9, 10, 9, 10, 9,]
//let array = [9,8,7,6,9,8,10,7,6]
//----------------------

//1
function testResult(array) {
  let average = (array.reduce((sum, el) => sum += el, 0) / array.length).toFixed(3) * 1

  let high = 0
  let aver = 0
  let low = 0
  array.forEach(el => { if (el >= 9) { high += 1 } })
  array.forEach(el => { if (el == 7 || el == 8) { aver += 1 } })
  array.forEach(el => { if (el <= 6) { low += 1 } })

  let hash = {
    h: high,
    a: aver,
    l: low,
  }

  let result = []
  if (hash.a == 0 && hash.l == 0) {
    result.push(average, hash, 'They did well')
  } else result.push(average, hash)

  return result
}


// 2
function testResult2(array) {
  let avg = (array.reduce((a, b) => a + b) / array.length).toFixed(3)
  let h = array.filter(a => a > 8).length
  let l = array.filter(b => b < 7).length
  let a = array.filter(c => c > 6 && c < 9).length
  let result = [Number(avg), { 'h': h, 'a': a, 'l': l }]
  return (l == 0 && a == 0 && h !== 0) ? result.concat(['They did well']) : result
}
// console.log(testResult(array))
// console.log(testResult2(array))


//---------------------------------------
// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/javascript
// I love you, a little , a lot, passionately ... not at all


//1
function howMuchILoveYou(nbPetals) {
  let x = nbPetals % 6
  let result = ''
  switch (x) {
     case 1:
        result += "I love you"
        //console.log(x)
        break;
     case 2:
        result += "a little"
        // console.log(x)
        break;
     case 3:
        result += "a lot"
        // console.log(x)
        break;
     case 4:
        result += "passionately"
        // console.log(x)
        break;
     case 5:
        result += "madly"
        //console.log(x)
        break;
     default:
        result += "not at all"
     //console.log(x)
  }
  return result
}

//2 

function howMuchILoveYou2(nbPetals) {
  return ['not at all', 'I love you', 'a little', 'a lot', 'passionately', 'madly'][nbPetals % 6]
}

//3 

function howMuchILoveYou3(nbPetals) {
  let phrase = {    
    0: "not at all",
    1: "I love you",
    2: "a little",
    3: "a lot",
    4: "passionately",
    5: "madly"
  }
  return phrase[nbPetals%6]
}

console.log(howMuchILoveYou(0))
console.log(howMuchILoveYou2(0))
console.log(howMuchILoveYou3(0))