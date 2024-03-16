const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// task 1
numbers.forEach(num => console.log(num))
const numbersSquare = numbers.map((n) => n*n)
console.log(numbersSquare)
const namesToUpperCase = names.map((names) => names.toUpperCase())
console.log(namesToUpperCase)
const namesWithEndAS = names.filter((name) => name.endsWith('as'))
console.log(namesWithEndAS)
const sumNumber = numbers.reduce((acc,cur) => acc+cur,0)
console.log(sumNumber)

// task 2
function myCallbackFunction(item) {
    console.log(item);
}

numbers.forEach(myCallbackFunction);

// t3
countries.forEach((n) => console.log(n))
// t4
names.forEach((n) => console.log(n))
// t5
numbers.forEach((n) => console.log(n))
// t6
const newCountries =  countries.map((n) => n.toUpperCase())
console.log(newCountries)
// t7
const countLenght = countries.map((n) => n.length)
console.log(countLenght)
// t8
const numberSquare = numbers.map((n) => n**2)
console.log(numberSquare)
// t9
const t9 =  names.map((n) => n.toUpperCase())
console.log(t9)

// t10
const productsWithPrices = products.map(item => {
    return { product: item.product, price: Number(item.price) || 0 };
  });
  
  console.log(productsWithPrices);

// t11
console.log(countries.filter((countries) => countries.includes('land')))
// t12
console.log(countries.filter((countries) => countries.length == 6))
// t13
console.log(countries.filter((countries) => countries.length >= 6))
// t14
console.log(countries.filter((countries) => countries.startsWith('E')))
//t15
console.log(products.filter((product) => typeof product.price === 'number'))
//t16
function getStringLists(array) {
    return array.filter(item => typeof item === 'string');
}

const mixedArray = [1, 'apple', true, 'banana', 3, 'orange'];
const stringArray = getStringLists(mixedArray);
console.log(stringArray);
// t17
const sumNumber1 = numbers.reduce((acc,cur) => acc+cur,0)
console.log(sumNumber1)

// t18
const combinedSentence = countries.reduce((sentence, country, index) => {
    if (index === 0) {
        return country;
    } else if (index === countries.length - 1) {
        return sentence + ' and ' + country + ' is a ...';
    } else {
        return sentence + ', ' + country;
    }
}, '');

console.log(combinedSentence);
// t 19
const numbers1 = [2, 4, 6, 8, 10];

const hasEvenNumber = numbers1.some(num => num % 2 === 0);
console.log(hasEvenNumber);
const allEvenNumbers = numbers1.every(num => num % 2 === 0);
console.log(allEvenNumbers); 
const hasOddNumber = numbers1.some(num => num % 2 !== 0);
console.log(hasOddNumber); 
const allNumbersGreaterThanZero = numbers1.every(num => num > 0);
console.log(allNumbersGreaterThanZero); 
// t20
console.log(countries.some(n => n.length > 7))
// t21
console.log(countries.every(n => n.includes('land')))
//t22-23
console.log(countries.find(n => n.length == 6))
console.log(countries.findIndex(n => n.length == 6))
// t24
console.log(countries.findIndex(n => n.length == 6))
// t25
console.log(countries.findIndex(n => n == 'Norway'))
// t26
console.log(countries.findIndex(n => n == 'Russia'))