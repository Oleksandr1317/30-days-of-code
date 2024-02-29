import { countries } from "./country.js";
import { webTechs } from "./web_techs.js";

console.log(countries);
console.log(webTechs);

// task 2
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let words = text.split(/\s+/);
console.log(words);
console.log(words.length);

// task 3
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");

let isAlergy = prompt("Do you have allergy on honey?");
if (isAlergy.toLowerCase() === 'yes' || isAlergy.toLowerCase() === 'true' || isAlergy.toLowerCase() === 'y') {
    shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
} else {
    console.log(shoppingCart); 
}
console.log(shoppingCart);

const teaIndex = shoppingCart.indexOf("Tea");

if (teaIndex !== -1) {
    shoppingCart.splice(teaIndex, 1, "Green Tea");
}

console.log(shoppingCart); 

// task 4
countries.includes("Ethiopia") ? console.log(countries.indexOf('Ethiopia') + ' Ethiopia') : countries.push("Ethiopia");

// task 5
if (webTechs.indexOf('Saas') != -1) {
    console.log(`Saas it's a process CSS`);
}
else {
    webTechs.push('Saas');
    console.log(webTechs);
}

// task 6

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);