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

// task 1
const empty = [];
console.log(empty);
// task 2
const t2 = [1,2,3,'average','Albania',5,6,8];
console.log(t2);
//task 3
let t3 = t2.length;
console.log(t3);
//task 4
console.log(t2[0]);
console.log(t2[Math.floor(t2.length / 2)]);
t4 = t2[t2.length - 1];
console.log(t4);
//task5
let mixedDataTypes = [
    1,
    "One",
    "Two",
    [1,2,3],
    { country : 'Ukraine', city : "Kyiv"},
    123,
    t2
]
console.log(mixedDataTypes);
// task 6-7
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon'];
console.log(itCompanies);
//task 8
console.log(itCompanies.length);
//task 9
t9 = itCompanies[itCompanies.length-1];
console.log(itCompanies[0]);
console.log(t9);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
// task 10
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);
// task 11
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());
// task 12
let pr = 'являются крупными IT команиями';
console.log(itCompanies.toString() + ` ` + pr);
// task 13
itCompanies.includes("Google") ? console.log(itCompanies[1]) : console.log(`Undefined`)
// task 14
let arr = [];
for(let i = 0; i < itCompanies.length; i++) {
    if((itCompanies[i].toLowerCase().match(/o/g) || []).length > 1) {
        arr.push(itCompanies[i]);
    }
}
console.log(arr);
// task 15
console.log(itCompanies.sort());
// task 16
console.log(itCompanies.sort().reverse());
// task 17-18-19
console.log(itCompanies.slice(0,3));
console.log(itCompanies.slice(3,6));
console.log(itCompanies.slice(2,3));
// task 20-21-22-23
console.log(itCompanies.shift());
console.log(itCompanies.splice(Math.floor(itCompanies.length / 2), 1));
console.log(itCompanies.pop());
console.log(itCompanies.splice(0));
