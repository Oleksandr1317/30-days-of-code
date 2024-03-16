const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

const c = [...a,...b];
// t1
let a1 = new Set(a);
let b1 = new Set(b);
let c1 = new Set(c);

console.log(c1)

// t2
let c2 = b.filter(num => a1.has(num))
let c3 = new Set(c2)
console.log(c3)

// t3
let c4 = a.filter(num => !b1.has(num))
let c6 = new Set(c4)
console.log(c6)
