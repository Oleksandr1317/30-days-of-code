// t1

let txt = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
let number = txt.match(/\d+/g)

let res = 0;

number.forEach(function(number) {
    res += parseInt(number)
});

console.log(res)

// t2
let srt = '-1 2 -4 -3 -1 0 4 8';

let numbers = srt.match(/-?\d+/g).map(Number);

let min = Math.min(...numbers);
let max = Math.max(...numbers);

let distance = Math.abs(max - min);

console.log('min = ', min);
console.log('max = ', max);
console.log('distance = ', distance);

// t3

function is_valid_variable(tt) {
    return /^[a-zA-Z_]\w*$/.test(tt);
}
console.log(is_valid_variable('first_name'))
console.log(is_valid_variable('first-name')) 
console.log(is_valid_variable('1first_name')) 
console.log(is_valid_variable('firstname')) 

