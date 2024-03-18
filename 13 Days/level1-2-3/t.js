const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]

console.table(countries)

const country = {
    name:'Ukraine',
    capital:'Kyiv',
    popularity:31000000
}

console.table(country)

console.group('Counrty')
console.log(country)
console.groupEnd()

console.group('Counrties')
console.log(countries)
console.groupEnd()

console.assert(10 > 10 * 2, '20 > 10')

console.warn('This is warning')

console.error('Error')

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.time('while');
let i = 0;
while(i < arr.length) {
  console.log(arr[i])
  i++;
}
console.timeEnd('while');

console.time('for');

for (let i = 0; i<arr.length;i++){
  console.log(arr[i])
}

console.timeEnd('for');

console.time('for of');
for ( const item of arr) {
  console.log(item)
}
console.timeEnd('for of');

console.time('forEach');
arr.forEach(num => console.log(num));
console.timeEnd('forEach');
