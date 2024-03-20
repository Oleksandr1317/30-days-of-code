// task 1
console.warn(`Task 1`)
class Animal {
    constructor(name,age,color,legs = 4) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    getInfo() {
        return `Animal name : ${this.name} and age : ${this.age}.Color = ${this.color} and legs = ${this.legs}`
    }

    saySomething() {
        console.log(`This is animal!`)
    }
}

const myAnimal = new Animal('Bob',13,'red',3);
console.log(myAnimal.getInfo());
myAnimal.saySomething();

// task 2
console.warn(`Task 2`)
class Dog extends Animal {
    constructor(name,age,color,legs,gender) {
        super(name,age,color,legs);
        this.gender = gender;
    }

    getInfo() {
        return `Animal name : ${this.name} and age : ${this.age}.Color = ${this.color} and legs = ${this.legs}.Gender = ${this.gender}`
    }

    get getName() {
        return this.name;
    }

    saySomething() {
        console.log(`Gaw gaw gaw gaw!`)
    }
}

class Cat extends Animal {
    constructor(name, age, color, legs, gender) {
        super(name, age, color, legs);
        this.gender = gender;
    }

    getInfo() {
        return `Animal name: ${this.name}, age: ${this.age}, color: ${this.color}, legs: ${this.legs}, gender: ${this.gender}`;
    }

    saySomething() {
        console.log(`Meow meow meow!`);
    }
}

const myDog = new Dog('Lord',4,'black',4,'F')
console.log(myDog.getName);
console.log(myDog.getInfo());
myDog.saySomething();
console.warn(`Cat`)
const myCat = new Cat('Barsik',3,'gray',4,'F');
myCat.saySomething()
console.log(myCat.getInfo())

