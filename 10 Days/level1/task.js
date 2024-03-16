export const a = [4, 5, 8, 9]
export const b = [3, 4, 5, 7]
export const countries = ['Finland', 'Sweden', 'Norway']

// t1
const c = new Set()
console.log(c)
// t2
const num = new Set()
for (let i = 0;i <=10;i++){
    num.add(i)
}
console.log(num)
// t3
num.delete(3);
console.log(num)
// t4
num.clear();
console.log(num)

//t5
let task = ['Ukraine','USA','France','Poland','Germany']
const t5 = new Set(task)
console.log(t5);

// t6
const map = new Map()
for (const country of countries) {
    let length = country.length;
    map.set(country,length)
}
console.log(map)