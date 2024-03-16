const callback = (n) => {
    return n ** 2
  }
  // function that takes other function as a callback
  function cube(callback, n) {
    return callback(n) * n
  }
  console.log(cube(callback, 3))

  const higherOrder = n => {
    const doSomething = m => {
      const doWhatEver = t => {
        return 2 * n + 3 * m + t
      }
      return doWhatEver
    }
    return doSomething
  }
  console.log(higherOrder(2)(3)(10))

  const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
  let sum = 0
  const callback = function(element) {
    sum += element
  }
  arr.forEach(callback)
  return sum

}
console.log(sumArray(numbers))

const sumArray1 = arr => {
  let sum = 0
  arr.forEach(function(element) {
    sum += element
  })
  return sum

}
console.log(sumArray1(numbers))

arr = [1,2,3]

arr.forEach(function (element, index, arr) {
    console.log(index, element, arr)
  })
  // The above code can be written using arrow function
  arr.forEach((element, index, arr) => {
    console.log(index, element, arr)
  })
  // The above code can be written using arrow function and explicit return
  arr.forEach((element, index, arr) => console.log(index, element, arr))

  let sum = 0;
const numbers1 = [1, 2, 3, 4, 5];
numbers1.forEach(num => console.log(num))
console.log(sum)

let sum1 = 0;
const numbers12 = [1, 2, 3, 4, 5];
numbers12.forEach(num => sum1 += num)

console.log(sum1)