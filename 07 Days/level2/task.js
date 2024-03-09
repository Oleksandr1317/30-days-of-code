// task 1
function solveLinEquation(a,b,c,x,y) {
    let res = a*x + b*y + c
    console.log(res)
}
solveLinEquation(1,2,3,4,5)

// task 2
function solveQuadEquation(a,b,c) {
    if (a === 0) {
        return `Error a can't be ziro`
    }

    let discr = b * b - 4 * a * c
    let sol = []
    if (discr > 0) {
        let sqrtDiscr = Math.sqrt(discr);
        sol.push((-b + sqrtDiscr) / (2 * a));
        sol.push((-b - sqrtDiscr) / (2 * a));
    } else if (discr === 0) {
        sol.push(-b / (2 * a));
    }
    return sol;
}
console.log(solveQuadEquation(1, 4, 4)); 
console.log(solveQuadEquation(1, -1, -2)); 
console.log(solveQuadEquation(1, 7, 12)); 
console.log(solveQuadEquation(1, 0, -4)); 
console.log(solveQuadEquation(1, -1, 0)); 

// task 3
function printArray(...args) {
    for(let el of args){
        console.log(el)
    }
}
printArray(1,5,6,'Arr')

// task 4
function showDateTime() {
    let now = new Date();
    let day = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    console.log(`${day}/${month}/${year} ${hours}:${minutes}`)
}
showDateTime()

// task 5
function swapValues(x,y) {
    let n = x
    x = y
    console.log(`x = ${x} y = ${n}`)
}
swapValues(2,3)

// task 6
function reverseArray(...args){
    let arr = []
    for (let i = args.length - 1; i >= 0; i--) {
        arr.push(args[i]);
    }
    console.log(arr)
}
reverseArray(5,7,9,11)

// task 7
function capitalizeArray(...args) {
    for(let i = 0;i < args.length;i++){
        let fLatter = args[i].charAt(0).toUpperCase();
        let lLatter = args[i].slice(1);
        args[i] = fLatter+lLatter;
    }
    console.log(args);
}
capitalizeArray('banana','nnnn','coffee')