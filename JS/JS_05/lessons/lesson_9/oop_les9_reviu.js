// // объект в JS  и в ООП это разные вещи

// //  объект JS - это связка ключ - значение
// // объект в ООП (класс)- тип данных, который представляет собой набор свойств или полей методов
//    // и на основе его мы можем создавать экземпляры этого типа

// // как информацию засунуть в объект
//    // 1
let log = console.log;

// let obj = {};
// obj.name = "Anna";
// obj.occupation = "Student";
// obj.introduce = function() {
//     log(`Hello, I'm ${this.name}` )  // this. -  возьми имя из этого объекта, который тебя вызывает
//     log(`I'm a ${this.occupation}`)
// };
// obj.introduce();

// // 2 тоже самое

// let o = {
//     name: "Anna",
//     occupation: "Student",
//     introduce() {
//         log(`Hello, I'm ${this.name}` )
//         log(`I'm a ${this.occupation}`)
//     },
// }
// o.introduce()

// с ООП (с использованием функции-конструктор)
// название функции (класса) всегда с БОЛЬШОЙ буквы, имя существительное

// function Person(name, occupation) {
//     this.name = name;                // поле:значение
//     this.occupation = occupation;

//     this.introduce = function() {
//         log(`Hello, I'm ${this.name}` )
//         log(`I'm a ${this.occupation}`)
//     };
// }
// let p1 = new Person('Nina', 'Student');
// p1.introduce()

// let p2 = {name: "Vova", occupation:"worker"};

// // проверить, что объект является объектом данного класса instanseOf
// log(p2 instanceof Person)  // false
// log(p1 instanceof Person)  // true


// 50- мину а видео - как скарыть/показать/защитить свойства объекта
//.getOwnPropertyDescriptor    .defineProperty



// еще пример, как делат наследование классов
//---------- .apply()

// function Person (name, age) {
//     this.name = name;
//     this.age = age;

//     this.print = function() {
//         log("Hello, I'm " + this.name);
//         log("I'm " + this.age);
//     };
// }

// let p1 = new Person('Nina', 17);
// p1.print()

// // function Worker(name,age, occupation) {
// //     Person.apply(this, arguments);
// //     this.occupation = occupation;

// //     this.printOfficial = function() {
// //         log("Let me introduce myself, I'm " + this.name);
// //         log("I'm working as a " + this.occupation);
// //     }
// // }
// // let w1 = new Worker('Vova', 37, "principal");
// // //w1.print();  
// // w1.printOfficial() 


// //------------ .call()

// function Worker(name,age, occupation) {
//     Person.call(this, name, age);
//     this.occupation = occupation;

//     this.printOfficial = function() {
//         log("Let me introduce myself, I'm " + this.name);
//         log("I'm working as a " + this.occupation);
//     }
// }
// let w1 = new Worker('Vova', 37, "principal");
// //w1.print();  
// w1.printOfficial() 

// log(p1 instanceof Worker)  //  false
// log(w1 instanceof Person)  //  false

/*
чем отличаются при функциональном наследовании методы apply() и call(): 
использование метода apply() вместо call()
 гарантирует передачу всех аргументов не в виде списка,
  а в виде массива (псевдомассива) аргументов. 
  Поэтому если количество аргументов увеличится,
   то код не нам не надо будет переписывать
*/


// через синтаксический сахар

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    print() {
        log("Hello, I'm " + this.name);
        log("I'm " + this.age);
    };
}

class Worker extends Person {
    constructor(name, age, occupation, level) {
        super(name, age);
        this.occupation = occupation;
        this.level = level;
    }
    // print() {                 // ПОЛИМОРФИЗМ! -  метод перезапишется
    //    log("Hi!!!")
    //}
    printOfficial() {
        log("Let me introduce myself, I'm " + this.name);
        log("I'm working as a " + this.occupation);
    }
}

let w1 = new Worker('Vova', 37, 'pokerface');
w1.print();
w1.printOfficial();
 
// если название методов повторяется у родителя и наследника, то родительский затирается!
// перезапишется новым


// есть еще Прототипное наследование - оно сложнее - его не разбирали
