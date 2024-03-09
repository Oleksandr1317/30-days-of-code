// task 1-2
const space = ' ';
function fullName(fname,lname) {
    // console.log(`Alex Test`);
    return fname + space + lname
}
// fullName();
console.log(fullName("Alex","Test"));

// task 3
function addNumbers(num1,num2){
    let sum = num1+num2
    return sum
}
console.log(addNumbers(1,2));

// task 4
function areaOfRectangle(wight,height){
    let area = wight*height
    console.log(area)
}
areaOfRectangle(2,5);

// task 5
function perimeterOfRectangle(wight,height) {
    let sum = 2*(wight + height)
    console.log(sum)
}
perimeterOfRectangle(5,5)

// task 6
function volumeOfRectPrism(wight,height,length){
    let value = wight*height*length
    console.log(value)
}
volumeOfRectPrism(4,2,2)

// task 7
function areaOfCircle(r){
    let area = Math.PI * r * r
    console.log(area)
}
areaOfCircle(2)

// task 8
function circumOfCircle(r) {
    let areum = 2 * Math.PI * r
    console.log(areum)
}
circumOfCircle(2)

// task 9
const density = (mass,value) => {
    let density = mass * value
    return density 
}
console.log(density(2,3))

// task 10
const speed = (length,total_time) => {
    let speed = length/total_time
    return speed
}
console.log(speed(10,2))

// task 11
const weight = (mass,gravity) => mass*gravity
console.log(weight(1,7))

// task 12
const convertCelsiusToFahrenheit = oC => (oC*9/5) + 32
console.log(convertCelsiusToFahrenheit(5))

// task 13
function IMT(mass,height) {
    let imt = mass / (height * height)
    if (imt < 18.5) {
        return `Underweight`
    } else if (imt > 18.5 && imt < 24.9) {
        return `Normal weight`
    } else if (imt > 25 && imt < 29.9) {
        return `Overweight`
    } else if (imt > 30) {
        return `Obese`
    } else {
        return `unknown`
    }
}
console.log(IMT(64,1.74))

// task 14
function checkSeason(month) {
    if (month >= 1 && month <= 2 || month === 12) {
        return "winter";
    } else if (month >= 3 && month <= 5) {
        return "spring";
    } else if (month >= 6 && month <= 8) {
        return "summer";
    } else if (month >= 9 && month <= 11) {
        return "autumn";
    } else {
        return "Invalid month number entered.";
    }
}
console.log(checkSeason(3));

// task 15
function findMax(n1,n2,n3) {
    let max = n1;
    
    if (n2 > max) {
        max = n2;
    }
    if (n3 > max) {
        max = n3;
    }
    return max;
}
console.log(findMax(1,2,3))
