const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya"
  ];
  
  const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB"
  ];
  
  const mernStack = ["MongoDB", "Express", "React", "Node"];

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

let randomCount = Math.floor((Math.random() * 20)) + 1;

let randID = '';

for (i = 0; i < randomCount; i++){
    randID += characters.charAt(Math.floor(Math.random() * characters.length));
}
console.log(randID);

// task 2
console.log(` `);
console.log(`Task 2`);
const randomHexColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
console.log(randomHexColor);


//task 3
console.log(` `);
console.log(`TASK 3`);
const r = Math.floor(Math.random() * 256);
const g = Math.floor(Math.random() * 256);
const b = Math.floor(Math.random() * 256);

const randomColor = `rgb(${r},${g},${b})`;
console.log(randomColor);

// task 4
console.log(` `);
console.log(`TASK 4`);
let arr = []
for (i = 0; i < countries.length;i++) {
    arr.push(countries[i]);
}
console.log(arr)

// task 5
console.log(` `);
console.log(`TASK 5`);
let arr1 = []
for (i = 0; i < countries.length;i++) {
    arr1.push(countries[i].length);
}
console.log(arr1)

// task 6
console.log(` `);
console.log(`TASK 6`);
let countriesInfo = [];

for (let i = 0; i < countries.length; i++) {
    let country = countries[i];
    let abbreviation = country.slice(0, 3).toUpperCase();
    let length = country.length;
    countriesInfo.push([country, abbreviation, length]);
}

console.log(countriesInfo);

// task 7
console.log(` `)
let countriesWithLand = [];

for (let i = 0; i < countries.length; i++) {
    if (countries[i].toLowerCase().includes('land')) {
        countriesWithLand.push(countries[i]);
    }
}

if (countriesWithLand.length > 0) {
    console.log(countriesWithLand);
} else {
    console.log("All these are countries without land");
}

console.log(` `)
let countriesEndingWithIA = [];

for (let i = 0; i < countries.length; i++) {
    if (countries[i].toLowerCase().endsWith('ia')) {
        countriesEndingWithIA.push(countries[i]);
    }
}

if (countriesEndingWithIA.length > 0) {
    console.log(countriesEndingWithIA);
} else {
    console.log("Эти страны заканчиваются без ia");
}