// task 1
let firstName = "Alex";
let lastName = " ";
let country = "Ukraine";
let city = "Kiyv";
let age = 20;
let isMarried = true;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);

// task 2
let str_ten = '10';
let ten = 10;
console.log(typeof str_ten ==  typeof ten)

//task 3
console.log( parseInt('9.8') ==  10)
//task 4
console.log(3>2)
console.log(5 != true)
console.log(12 >= 5)
console.log(3>4)
console.log(5=== true)
console.log(1 === '1')

// task 5
console.log('-------------')
let one = 4>3;
let second = 4>=3;
let third = 4<3;
let four = 4<=3;
let five = 4 == 4;
let six = 4 === 4;
let seven = 4 != 4;
let eight = 4!==4;
let nine = 4!='4';
let ten1 = 4 == '4';
let eleven = 4 === '4'
let avs = 'python'.length > 'jargon'.length;
console.log(one)
console.log(second)
console.log(third)
console.log(four)
console.log(five)
console.log(six)
console.log(seven)
console.log(eight)
console.log(nine)
console.log(ten1)
console.log(eleven)
console.log(avs)

// task 6
console.log("TASK 6")
let t1 = 4 > 3 && 10 < 12;
let t2 = 4 > 3 && 10 > 12;
let t3 = 4 > 3 || 10 < 12;
let t4 = 4 > 3 || 10 > 12;
let t5 = !(4 > 3);
let t6 = !(4 < 3);
let t7 = !(false)
let t8 = !(4 > 3 && 10 < 12);
let t9 = !(4 > 3 && 10 > 12);
let t10 = !(4 === '4');
let t11 = !('python'.includes("on") || !'dragon'.includes("on"));
console.log("t1:", t1); // true
console.log("t2:", t2); // false
console.log("t3:", t3); // true
console.log("t4:", t4); // true
console.log("t5:", t5); // false
console.log("t6:", t6); // true
console.log("t7:", t7); // true
console.log("t8:", t8); // false
console.log("t9:", t9); // true
console.log("t10:", t10); // true
console.log("t11:", t11); // false

// task 7
let now = new Date();
console.log(now.getFullYear());
console.log((now.getMonth() + 1), now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime())