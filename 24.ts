
//24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// Tests for equality and inequality with strings
let fruit: string = 'apple';
console.log("Test 1: Is fruit == 'apple'? Prediction: True.");
console.log(fruit == 'apple');

let color: string = 'blue';
console.log("Test 2: Is color != 'red'? Prediction: True.");
console.log(color != 'red');

let city: string = 'Tokyo';
console.log("Test 4: Is city.toUpperCase() != 'TOKYO'? Prediction: False.");
console.log(city.toUpperCase() != 'TOKYO');

// Numerical tests
let num1: number = 10;
let num2: number = 5;
console.log("Test 5: Is num1 > num2? Prediction: True.");
console.log(num1 > num2);

console.log("Test 6: Is num1 < num2? Prediction: False.");
console.log(num1 < num2);

console.log("Test 7: Is num1 >= num2? Prediction: True.");
console.log(num1 >= num2);

console.log("Test 8: Is num1 <= num2? Prediction: False.");
console.log(num1 <= num2);

// Tests using "and" and "or" operators
let age: number = 25;
console.log("Test 9: Is age > 18 and age < 30? Prediction: True.");
console.log(age > 18 && age < 30);

console.log("Test 10: Is age > 30 or age < 20? Prediction: False.");
console.log(age > 30 || age < 20);

// Test whether an item is in an array
let numbers: number[] = [1, 2, 3, 4, 5];
console.log("Test 11: Is 3 in numbers? Prediction: True.");
console.log(numbers.includes(3));

// Test whether an item is not in an array
let fruits: string[] = ['apple', 'banana', 'orange'];
console.log("Test 12: Is 'grape' not in fruits? Prediction: True.");
console.log(!fruits.includes('grape'));
