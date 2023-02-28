// =============== Spread Operator ================


// We defined an object or an array and we can add more elements to it.
const numbers = [1,2,3]
const newNumbers = [...numbers, 5, 6]
console.log(newNumbers)

// R = [1, 2, 3, 5, 6]


// We could defined a function with the spread operator. It takes as many elements as we want and returns a new array.
function sortNumbers(...args) {
  return args.sort();
}

const res = sortNumbers(4,3,4,6,2,4,1)
console.log(res)

// R =[1, 2, 3, 4, 4, 4, 6]


// ============== Destructuring ====================

const [a, b] = numbers
const {name, age} = {name: 'Jorge', age: 38}

console.log(a) // 1
console.log(b) // 2

console.log(name); // Jorge
console.log(age); // 38

// ============= Primitive Types =================

const firstPerson = { name: 'John', age: 40 }

const secondPerson = firstPerson;
const thirdPerson = {...firstPerson};
const fourthPerson = {...firstPerson, country: 'México'};

firstPerson.name = 'Maria'

console.log(secondPerson); // { name: 'Maria', age: 40 }
console.log(thirdPerson); // { name: 'John', age: 40 }
console.log(fourthPerson); // { name: 'John', age: 40, country: 'México' }
