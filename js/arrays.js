`use strict`;

// Array Methods

// Slice Method - To extract elements from an array
let arrayOne = ["a", "b", "c", "d", "e", "f"];
console.log(arrayOne);

console.log(arrayOne.slice(1)); // Result - ['b', 'c', 'd', 'e', 'f']
console.log(arrayOne.slice(2)); // Result - ['c', 'd', 'e', 'f']
console.log(arrayOne.slice(2, 4)); // Result - ['c', 'd']
console.log(arrayOne.slice(-1)); // Result - ['f']
console.log(arrayOne.slice(1, -3)); // Result - ['b', 'c']

// To create a copy of an array
console.log(arrayOne.slice()); // Result - ['a', 'b', 'c', 'd', 'e', 'f']
console.log([...arrayOne]);

// Splice Method - Mutates/Alters the original array
let arrayTwo = ["g", "h", "i", "j", "k", "l"];
console.log(arrayTwo.splice(1, 2)); // Result - ['h', 'i'] removed elements
console.log(arrayTwo); // Result - ['g', 'j', 'k', 'l']

let arrayThree = ["m", "n", "o", "p", "q", "r"];
console.log(arrayThree.splice(-1)); // Result - ['r']
console.log(arrayThree); // Result - ["m", "n", "o", "p", "q"]

let arrayFour = ["a", "b", "c", "d", "e", "f"];
console.log(arrayFour.splice(1)); // Result - ["b", "c", "d", "e", "f"]
console.log(arrayFour); // Result - ['a']

let fruitsOne = ["Banana", "Apple", "Orange", "Kiwi"];
console.log(fruitsOne.splice(0, 1)); // Result - ['Banana']
console.log(fruitsOne); // Result - ['Apple', 'Orange', 'Kiwi']

// Reverse Method - This wil also mutate/alterate the original array

let fruitsTwo = ["Pears", "Pineapple", "Dragonfruit", "Sapota"];
console.log(fruitsTwo.reverse()); // Result - ['Sapota', 'Dragonfruit', 'Pineapple', 'Pears']

// Concat Method - Concatinate 2 Arrays
const arrayFive = ["a", "b", "c", "d", "e", "f"];
const arraySix = ["g", "h", "i", "j", "k", "l"];

const letters1 = arrayFive.concat(arraySix);
console.log(letters1);

// Alternate method to concat the arrays
const letters2 = [...arrayFive, ...arraySix];
console.log(letters2);

// Join Method
console.log(letters1.join("-")); // Result - a-b-c-d-e-f-g-h-i-j-k-l
console.log(letters2.join(" ")); // Result - a b c d e f g h i j k l
console.log(letters2.join(",")); // Result - a,b,c,d,e,f,g,h,i,j,k,l

// Looping Arrays with Methods

// For Of Method
const numberArrays = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Using if-else statement
for (const arrayElement of numberArrays) {
  if (arrayElement > 0) {
    console.log(`You have deposited: ${arrayElement}`);
  } else {
    console.log(`You have withdraw: ${Math.abs(arrayElement)}`);
  }
}

// Using ternary operators
for (const arrayElement of numberArrays) {
  arrayElement > 0
    ? console.log(`You have deposited: ${arrayElement}`)
    : console.log(`You have withdraw: ${Math.abs(arrayElement)}`);
}

// Using index, element with entries() method
for (const arrayElement of numberArrays.entries()) {
  console.log(arrayElement);
}

for (const [index, element] of numberArrays.entries()) {
  element > 0
    ? console.log(`${index + 1}: You have deposited ${element}`)
    : console.log(`${index + 1}: You have withdraw ${Math.abs(element)}`);
}

// ForEach Method

// Using if-else statement
numberArrays.forEach((arrayElement) => {
  if (arrayElement > 0) {
    console.log(`You have deposited: ${arrayElement}`);
  } else {
    console.log(`You have withdraw: ${Math.abs(arrayElement)}`);
  }
});

// Using ternary operators
numberArrays.forEach((arrayElement) =>
  arrayElement > 0
    ? console.log(`You have deposited: ${arrayElement}`)
    : console.log(`You have withdraw: ${Math.abs(arrayElement)}`)
);

// Using arrayElement, index, array with forEach
numberArrays.forEach((arrayElement, index, array) => {
  console.log(index, arrayElement, array); // Result - 0 200 (8) [200, 450, -400, 3000, -650, -130, 70, 1300]
});

numberArrays.forEach((arrayElement, index, array) => {
  arrayElement > 0
    ? console.log(`${index + 1}: You have deposited ${arrayElement}`)
    : console.log(`${index + 1}: You have withdrawn ${Math.abs(arrayElement)}`);
});

// Map Method - The map method returns a new array

// To convert USD to INR
const transactions = [200, 450, -400, 3000, -650, -130, 70, 1300];
const usdToInr = 74.97;

const inrConverter = transactions.map((transaction) => {
  return transaction * usdToInr;
});

console.log(inrConverter);

// Example: 1
const transactionDescription1 = transactions.map((transaction, index) => {
  if (transaction > 0) {
    return `${index + 1}: You have deposited ${transaction}`;
  } else {
    return `${index + 1}: You have withdraw ${Math.abs(transaction)}`;
  }
});

console.log(transactionDescription1);

// Improving the above code
const transactionDescription2 = transactions.map((transaction, index) => {
  return `${index + 1}: You have ${
    transaction > 0 ? "deposited" : "withdraw"
  } ${Math.abs(transaction)}`;
});

console.log(transactionDescription2);

// Example: 2
const multiplier = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplication = 9;

const multiplied = multiplier.map((multiply, index) => {
  return `${index + 1}: ${multiplication} * ${multiply} = ${
    multiplication * multiply
  }`;
});

console.log(multiplied); // Result - displays the multiplication table of 9

// Filter Method - Filter method filters an element that satisfies a certain condition

const transactionEntries = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Finding deposits in the transactionEntries
const deposits = transactionEntries.filter((transaction) => {
  return transaction > 0;
});

console.log(deposits); // Result - [200, 450, 3000, 70, 1300]

// Finding withdrawals in the transactionEntries
const withdrawals = transactionEntries.filter((transaction) => {
  return transaction < 0;
});

console.log(withdrawals); // Result - [-400, -650, -130]
