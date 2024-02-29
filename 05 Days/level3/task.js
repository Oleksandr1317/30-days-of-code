import { countries } from "./counties.js";
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(`MIN : ${ages[0]} and MAX : ${ages[ages.length - 1]}`)

const middleIndex = Math.floor(ages.length / 2);

if (ages.length % 2 === 0) {
    console.log(ages[middleIndex - 1]);
    console.log(ages[middleIndex]);
} else {
    console.log(ages[middleIndex]);
}

const sumAges = ages.reduce((total, age) => total + age, 0);
const averageAge = sumAges / ages.length;

console.log("Average age : ", averageAge);

const diap = ages[ages.length - 1] - ages[0];
console.log(diap)

let minAge = ages[0];
let maxAge = ages[ages.length - 1];

console.log(Math.abs(minAge - averageAge));
console.log(Math.abs(maxAge - averageAge));

console.log(countries);

const firstTenCountries = countries.slice(0, 10);
console.log("First ten countries :", firstTenCountries);

const mIndex = Math.floor(countries.length / 2);
const middleCountry = countries[mIndex];
const middleCountries = countries.length % 2 === 0 ? [countries[mIndex - 1], middleCountry] : [middleCountry];
console.log("Average country (countries):", middleCountries);

const halfIndex = Math.ceil(countries.length / 2);
const first = countries.slice(0, halfIndex);
const second = countries.slice(halfIndex);
console.log("First part :", first);
console.log("Second part :", second);