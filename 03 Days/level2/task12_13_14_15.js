// task 12
let myAge = 250;
let yourAge = 25;
console.log(`Я на ${myAge - yourAge} старше тебя`);

// task 13
let now1 = new Date();
let nowYear = parseInt(now1.getFullYear());
let userDate = parseInt(prompt("Enter your date"))
let res = nowYear - userDate 
res > 18 ? console.log(`You are welcome.You are age ${res}`) : console.log(`Age < 18.Age = ${res}`)

//task 14 
let years = parseInt(prompt("Enter years"));
let second_in_years = 365 * 24 * 60 * 60;
let res1 = years * second_in_years;
console.log(res1)

//task 15 
let now = new Date();

let formattedTime1 = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
console.log("YYY-MM-DD HH:mm:", formattedTime1);

let formattedTime2 = `${now.getDate().toString().padStart(2, '0')}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getFullYear()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
console.log("DD-MM-YYYY HH:mm:", formattedTime2);

let formattedTime3 = `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
console.log("DD/MM/YYY HH:mm:", formattedTime3);