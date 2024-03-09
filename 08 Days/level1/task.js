// task 1-2
const dog = {}
console.log(dog)

dog.name = 'Dogs';
dog.legs = 4;
dog.color = 'black';
dog.age = 5;
dog.bark = function() {
    return 'woof woof';
}
console.log(dog.bark())
// task 4
const values = Object.values(dog)
console.log(values)

// task 5
dog.breed = "Golden Retriever";
dog.getDogInfo = function() {
    return `Name : ${this.name},breed = ${this.breed},legs = ${this.legs},color = ${this.color},age = ${dog.age}.\nBark = ${this.bark()}`
}
console.log(dog.getDogInfo())
