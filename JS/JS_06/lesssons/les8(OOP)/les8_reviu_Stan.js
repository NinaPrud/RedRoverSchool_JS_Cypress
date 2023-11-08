let log = console.log
//1
let obj = {}

obj.name = 'Anna'
obj.occupation = 'student'
obj.introduce = function () {
    log(`Hello? I'm ${this.name}`)
    log(`I'm a ${this.occupation}`)
}

//obj.introduce()

//2
let objNew = {
    name: 'Anna',
    occupation: 'student',
    introduce: function () {
        log(`Hello? I'm ${this.name}`)
        log(`I'm a ${this.occupation}`)
    }
}

//objNew.introduce()


// ----------------- ООП -------- 

// --------------------------прототипы

let obj1 ={
    name: 'Serj',
    age: 32,
    show() {  // show: function() -   тоже самое
        return (`Name: ${this.name}, age: ${this.age}`)
    }
}

let obj2 = {
    __proto__: obj1,
    occupation: 'Teacher',
}
// log(obj2)    // { occupation: 'Teacher' }

// log(obj2.name)  // Serj
// log(obj2.show())  // Name: Serj, age: 32

let obj3 = {
    rewards: [2022],
    __proto__:obj2,
}
// log(obj3.show())
// log(obj3)


//---------------функция конструктор (обертка для прототипного наследования)

// - название - существительное, с Большой буквы
function Person (name, age) {
    this.name = name ?? 'Unknown';
    this.age = age;
    this.introduce = function() {
        log(`Hello, i'm ${this.name}`);
        log(`I'm  ${this.age}`);
    }
}

// новый экземпляр

let person1 = new Person(this.name,30)
let person2 = new Person('Bob', 37)
let person3 = {name: 'Bob', age: 37}
// log(person1)
// log(person2)
// log(person3)
// person1.introduce()
// //log(typeof person1)
// log(person1 instanceof Person)  // true
// log(person3 instanceof Person) // false

// наследование от другого класса(когструктора)

function Worker (name, age, occupation) {
    Person.call(this, name, age);   // applay, bind
    this.occupation = occupation;
    this.officialGreeting = function () {
        log(`Let me introduce myself, I'm ${this.name}`);
        log(`I'm working as ${this.occupation}`);
    };
}

 let p1 = new Person('Anna',17)
 let w1 = new Worker('Jhon', 45, 'teacher')
//  log(w1)
//  w1.introduce()
//  w1.officialGreeting()

// наследуется все от родителя. мы не можем от чего то отказаться, но мы можем перезаписать метод например - 
// переназначить поведение объекта - полиморфизм  

function Worker2 (name, age, occupation) {
    Person.call(this, name, age); 
    this.occupation = occupation;
    this.introduce = function () {
        log(`Let me introduce myself, I'm ${this.name}`);
        log(`I'm working as ${this.occupation}`);
    };
}
let w2 = new Worker2('Mark', 19, 'student')

//w2.introduce()


function Manager(name, age, occupation, role) {
    Worker2.call(this, name, age, occupation);
    this.role = role;
}

let m1 = new Manager('Maria', 40, 'teacher', 'principal')

//log(m1)


//---------------- новый подход  -   class

class Person_1 {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    introduce () {
        log(`Hello, I'm ${this.name}`);
        log(`I'm  ${this.age}`);
    }
}

let p_1 = new Person_1('Nina', 37)
//p_1.introduce()

class Worker_1 extends Person_1 {
    constructor (name, age, occupation) {
        super(name, age);
        this.occupation = occupation;
    }
    introduce () {
        super.introduce()
        log(`Let me introduce myself, I'm ${this.name}`);
        log(`I'm working as ${this.occupation}`);
    };
}

let w_1 = new Worker_1('Vova', 37,'pokerstar')

//w_1.introduce()

class Manager_1 extends Worker_1 {
    constructor (name, age, occupation, role) {
        super (name, age, occupation);
        this.role = role;
    }
}

let m_1 = new Manager_1('Anna', 30, 'programmer', 'admin')
m_1.introduce()

//---------  пример юнить теста на данный код

let expectedName = 'Anna'
log(m_1.name == expectedName)   // true



//------------ геттеры, сеттеры видео 3:10