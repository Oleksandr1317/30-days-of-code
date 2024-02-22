// task 6
let slope = 2;
let yIntercept = -2;
console.log("Наклон (slope):", slope);
console.log("y-пересечение (y-intercept):", yIntercept);

// task 7
let x1 = 2, y1 = 2; 
let x2 = 6, y2 = 10; 
let slope2 = (y2 - y1) / (x2 - x1);
console.log("Наклон между точкой (2, 2) и точкой (6, 10):", slope2);

// task 8
let discriminant = 6**2 - 4 * 1 * 9;

let x3 = discriminant > 0 ? (-6 + Math.sqrt(discriminant)) / (2 * 1) : "Действительных корней нет";
let x4 = discriminant > 0 ? (-6 - Math.sqrt(discriminant)) / (2 * 1) : "Действительных корней нет";
console.log("Значения x, при которых y = 0:", x3, x4);