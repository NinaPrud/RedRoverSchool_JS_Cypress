//=========задачи кодворс

//------20:44-------Find the calculation type ---https://www.codewars.com/kata/5aca48db188ab3558e0030fa/train/javascript
/*
// Вам нужно создать функцию calcType, которая получает 3 аргумента: 2 числа и результат выполненной над ними неизвестной операции (тоже число).
// На основе этих трех значений вы должны вернуть строку, описывающую, какая операция была использована для получения данного результата.
// Возможные возвращаемые строки: "addition", "subtraction", "multiplication", "division".
*/

function calcType(a, b, res) {
    if (a + b == res) {
        return "addition";
    }
    if (a - b == res) {
        return "subtraction";
    }
    if (a * b == res) {
        return "multiplication";
    }
    if (a / b == res) {
        return "division";
    }
}
//console.log(calcType(10, 5, 2))

//--------32:03----Opposites Attract----https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

/*
Тимми и Сара думают, что они влюблены, но там, где они живут, они узнают об этом, только когда каждый сорвет по цветку. 
Если у одного из цветов четное количество лепестков, а у другого нечетное количество лепестков, это означает, что они влюблены.
Напишите функцию, которая будет принимать количество лепестков каждого цветка и возвращать true, если они влюблены, и false, если нет.
Про ноль ничего не сказано (считать как четное)
*/

function lovefunc1(flower1, flower2) {
    if (flower1 % 2 == 0 && flower2 % 2 != 0) {
        return true;
    }
    else if (flower2 % 2 == 0 && flower1 % 2 != 0) {
        return true;
    }

    return false;    // можно без else

}
// -- либо так можно

function lovefunc2(flower1, flower2) {
    if ((flower1 + flower2) % 2 != 0) {
        return true;
    }

    return false;

}
//console.log(lovefunc1(2, 2))
//console.log(lovefunc2(2, 2))

//--------------40:30-------------задача от Татьяны на простые числа

/*Приходит массив, в котором есть простые и непростые числа (только числа)
нужно посчитать количество простых чисел в массиве

Простые натуральные числа это те, которые больше 1 и делятся только на 1 на себя
Надо написать функцию, которая проверяет простое число или нет,
а потом вставить ее пробегаться в по данному массиву
*/


// сначала напишем функцию, которая щпределяет простое число:

function isPrime(num) {
    if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }

    return false;
}

// теперь считаем количество просых чисел в массиве

function howManyPrims(arr) {
    let count = 0;
     for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            count++;
        }
     }

    return count;

}
let arr1 = [5, 3, 10]
//console.log(howManyPrims(arr1))

//------1:01--------Coding 3min : Jumping Dutch act-----https://www.codewars.com/kata/570bcd9715944a2c8e000009/train/javascript

function sc(floor){
  
    if (floor <= 1) {
      return ""
    }
    if (floor > 6) {
      return screem ("Aa~ " , floor - 1) + "Pa!"
    }
    if (floor <= 6) {
      return screem ("Aa~ " , floor - 1) + "Pa! Aa!"
     }
  }
    function screem (str, level) {
      let temp = "";
      for (let j = 0; j < level; j++) {
        temp += str
      }
      return temp
    }
    console.log(sc(11))