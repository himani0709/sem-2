
// object data type
let person = {
    name: "John",
    age: 30,
    city: "New York"
}; 
console.log(person.name); // Output: John
console.log(person.age); // Output: 30
console.log(person.city); // Output: New York

// array data type
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); // Output: 1
console.log(numbers[1]); // Output: 2
console.log(numbers[2]); // Output: 3
console.log(numbers[3]); // Output: 4

//array with multiple data types
let mixedArray = [1, "Hello", true, { name: "Alice" }, [1, 2, 3]];
console.log(mixedArray[0]); // Output: 1
console.log(mixedArray[1]); // Output: Hello
console.log(mixedArray[2]); // Output: true
console.log(mixedArray[3]); // Output: Alice
console.log(mixedArray[4]); // Output: [1, 2, 3]

//map on array
//map creates a new array by applying a function to each element of the original array
let newArray = [1, 2, 3, 4, 5];
let squaredArray = newArray.
map(num => num * num);
console.log(squaredArray); // Output: [1, 4, 9, 16, 25]

//filter on array
//filter creates a new array with all elements that pass the test implemented by the provided function
let evenNumbers = [1 , 2, 3, 4, 5];
let filteredevenNumbers = evenNumbers.filter(num => num % 2 === 0);
console.log(filteredevenNumbers); // Output: [2, 4]

//reduce can be used to reduce an array to a single value by applying a function to each element of the array
let sum = [1, 2, 3, 4, 5];
let total = sum.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total); // Output: 15 