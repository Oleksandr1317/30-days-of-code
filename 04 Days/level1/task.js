// task 1
let age = parseInt(prompt("Enter your age"))
if (age > 18) {
    console.log(`You are old enough to drive`)
} else if (18 > age) {
    let ost = 18 - age;
    console.log(`You have ${ost} years left to drive`)
} else {
    console.log(`This is not age`)
}

// task 2
let userAge = parseInt(prompt("Enter your age"));
let myAge = 20;
let ost;
if (myAge > userAge) {
    ost = myAge - userAge;
    console.log(`I am ${ost} years older than you`)
} else if (myAge == userAge) {
    console.log(`Very cool! We're the same age`)
} else {
    ost = userAge - myAge;
    console.log(`You are ${ost} years older than i`)
}

//task 3
let a = parseInt(prompt("Enter a value"));
let b = parseInt(prompt("Enter b value"));
if (a > b) {
    console.log(`A > b`)
} else if (a == b) {
    console.log(`A == b`)
}
else {
    console.log(`B > a`)
}

// a > b ? console.log(`A > b`) : console.log(`B > a`)

// task 4
let number = parseInt(prompt("Enter your number"))
if (number % 2 == 0) {
    console.log(`${number} is an even number `)
} else {
    console.log(`${number} is an odd number`)
}