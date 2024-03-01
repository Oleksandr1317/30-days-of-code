// task 1
console.log(`For : `);
for (i = 0;i <=10;i++) {
    console.log(i);
}
console.log(`While:`);
let j = 0;
while (j <=10) {
    console.log(j);
    j++;
}
let k = 0;
console.log(`Do while`)
do {
    console.log(k);
    k++;
} while (k <= 10)

// task 2
console.log(` `);
console.log(`TASK 2 !!!`);

console.log(`For : `);
for (let i = 10; i >= 0; i--) {
    console.log(i);
}
console.log(`While:`);
let j1 = 0;
while (j1 >= 0) {
    console.log(j1);
    j1--;
}
let k1 = 10;
console.log(`Do while`)
do {
    console.log(k1);
    k1--;
} while (k1 >= 0);

// task 3
console.log(` `);
console.log(`TASK 3!`);
let n = parseInt(prompt("Enter n!"));
if (n > 0) {
    for (i = 0;i < n;i++){
        console.log(i);
    }
} else if (n == 0) {
    console.log(`N = 0`)
} else {
    for (i = 0;i > n;i--){
        console.log(i);
    }
}

// task 4
console.log(` `);
console.log(`Task 4`);
for (i = 0;i <= 7; i++){
    let line = ' ';
    for (j = 0;j<=i;j++){
        line += '#'
    }
    console.log(line)
}

// task 5
console.log(' ');
console.log(` TASK 5`);
for ( i = 0;i <= 10; i++) {
    console.log(`${i} x  ${i} = ${i * i}`)
}

// task 6
console.log(' ');
console.log('TASK 6 ');
console.log('i\ti^2\ti^3');
for(i = 0; i <= 10; i++) {
    console.log(`${i}\t${i**2}\t${i**3}`);
}

// task 7
console.log(` `);
console.log(`TASK 7`);
for(i = 0;i <= 100;i++) {
    if(i % 2 == 0){
        console.log(i)
    } else {
        continue;
    }
}

// task 8
console.log(` `);
console.log(`TASK 8`);
for(i = 0;i <= 100;i++) {
    if(!(i % 2 == 0)){
        console.log(i)
    } else {
        continue;
    }
}

// task 9
console.log(` `);
console.log(`TASK 9`)
for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i);
    }
}

// task 10
let res = 0;
console.log(` `);
console.log(`TASK 10`);
for(i = 0;i <=100;i++) {
    res += i;
}
console.log(`Res = ${res}`);

// task 11 - 12
let res1 = 0;
let res2 = 0;
console.log(` `);
console.log(' TASK 11 - 12');
for(i = 0; i <= 100; i++){
    if(i%2==0){
        res1 += i;
    } else {
        res2 += i;
    }
}
let arr =[res1,res2];
console.log(`The sum of all evens is ${res1}. And the sum of all odds is ${res2}.`);
console.log(arr);

// task 13 - 14 15
console.log(` `)
console.log(`TASK 13-14-15`)
let randomNumbers = [];

for (let i = 0; i < 5; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100));
}

console.log(randomNumbers);

let randomNumbers1 = [];

while (randomNumbers1.length < 5) {
    let randomNumber = Math.floor(Math.random() * 100); 
    if (!randomNumbers1.includes(randomNumber)) {
        randomNumbers1.push(randomNumber);
    }
}

console.log(randomNumbers1);

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let randomId = '';

for (let i = 0; i < 6; i++) {
    randomId += characters.charAt(Math.floor(Math.random() * characters.length));
}

console.log(randomId);
