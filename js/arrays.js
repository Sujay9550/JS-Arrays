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

// Reduce Method - This method results in reducing the elements of the array into a single element.
const balance = transactionEntries.reduce(
  (accumulator, arrayElement, index, array) => {
    console.log(accumulator, arrayElement, index, array);
    return accumulator + arrayElement;
  },
  0 // Here 0 is the initial value of the accumulator for the first itertion/loop
);

console.log(balance); // Result - 3840 (sum of all the elements oin the array)

// Example 1: To find the maximum number in the transactionEntries array
const maximum = transactionEntries.reduce(
  (accumulator, arrayElement, index, array) => {
    return accumulator > arrayElement ? accumulator : arrayElement;
  },
  transactionEntries[0]
);
console.log(maximum); // Result - 3000

// Example 2: Filter deposits and then convert usd to inr followed by the totalDepositsUsd using optional chaining
const totalDepositsInr = transactionEntries
  .filter((transaction) => {
    return transaction > 0;
  })
  .map((transaction) => {
    return transaction * usdToInr;
  })
  .reduce((accumulator, transaction) => {
    return accumulator + transaction;
  }, 0);

console.log(totalDepositsInr); // Result - 376349.4

// Find Method - This method retrives an element of the array based on the condition. It return only the single value and not the array.
const teams = [
  { name: "Mark Johnson", age: 26, job: "Developer" },
  { name: "Steve Smith", age: 27, job: "Designer" },
  { name: "Mitchelle Marsh", age: 28, job: "Full Stack Developer" },
  { name: "Mark Johnson", age: 26, job: "Team Lead" },
];

const findPerson = teams.find((arrayElement, index, array) => {
  return arrayElement.name === "Mark Johnson";
});

console.log(findPerson); // Result - { name: "Mark Johnson", age: 26, job: "Developer" } (bcoz it will return the first matched condition)

// Some and Every Method
const transactionOne = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Some Method - Used to test a condition whether it is true or false. Result is either true or false
const anyDeposits = transactionOne.some(
  (arrayElement, index, array) => arrayElement > 0
);
console.log(anyDeposits); // Result - True (bcoz it checks if any of the arrayElement matches the condition)

// Every Method - This method returns true only if all the elements in the array satisfies the condition
const everyDeposits = transactionOne.every(
  (arrayElement, index, array) => arrayElement > 0
);
console.log(everyDeposits); // Result - False (bcoz in the array the elements includes positive & negative elements)

// Flat & FlatMap Method
const nestedArray = [[1, 2, 3], [4, 5, 6], 7, 8];
const deepNestedArray = [[[1, 2], 3], [4, [5, 6]], 7, 8];

// Flat Method - It is used to merge the elements of the nested array in the single array
console.log(nestedArray.flat()); // Result - [1, 2, 3, 4, 5, 6, 7, 8]
console.log(deepNestedArray.flat(1)); // Result - [[1,2], 3, 4, [5, 6], 7, 8]  1 is the depth/level at which the elements will be fetched from the array
console.log(deepNestedArray.flat(2)); // Result - [1, 2, 3, 4, 5, 6, 7, 8] 1 is the depth/level at which the elements will be fetched from the array

// Example 1: Find the overallTotal of the arr property of the object within array
const teams1 = [
  { name: "Mark Johnson", age: 26, job: "Developer", arr: [1, 2, 3, 4, 5] },
  { name: "Steve Smith", age: 27, job: "Designer", arr: [6, 7, 8, 9, 10] },
  {
    name: "Mitchelle Marsh",
    age: 28,
    job: "Full Stack Developer",
    arr: [11, 12, 13, 14, 15],
  },
  {
    name: "Mark Johnson",
    age: 26,
    job: "Team Lead",
    arr: [16, 17, 18, 19, 20],
  },
];

const overallTotal1 = teams1
  .map((arrayElement, index, array) => arrayElement.arr)
  .flat()
  .reduce(
    (accumulator, arrayElement, index, array) => accumulator + arrayElement,
    0
  );
console.log(overallTotal1); // Result - 210

// FlatMap Method - This combines flat and Map method into just one method, which results in good performance (no deep level data fetching)
const overallTotal2 = teams1
  .flatMap((arrayElement, index, array) => arrayElement.arr)
  .reduce(
    (accumulator, arrayElement, index, array) => accumulator + arrayElement,
    0
  );

console.log(overallTotal2);

// Sorting Arrays - This method mutates the original array. this method converts the data to a string and then processess the result

// Sorting with Strings
const persons = ["Steve", "Johnson", "David", "Adam"];
persons.sort();
console.log(persons); // Result - ['Adam', 'David', 'Johnson', 'Steve']

// Sorting with Numbers
const sortingOne = [200, 450, -400, 3000, -650, -130, 70, 1300];
const sortingTwo = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Sorting Ascending Order
sortingOne.sort((a, b) => a - b);
console.log(sortingOne);

// Sorting Descending Order
sortingTwo.sort((a, b) => b - a);
console.log(sortingTwo);

// Exercise

// 1: Convert the below string to camelCase string.
const string1 = "my-short-string";

const camelCase = string1
  .split("-")
  .map((arrayElement, index) => {
    return index === 0
      ? arrayElement
      : arrayElement[0].toUpperCase() + arrayElement.slice(1);
  })
  .join("");
console.log(camelCase); // Result - myShortString

// 2: We have an array of strings stringArray. We’d like to have a sorted copy of it, but keep stringArray unmodified. Define a function

let stringArray = ["HTML", "JavaScript", "CSS"];

const sortedArray = (array) => {
  return array.slice().sort();
};

console.log(sortedArray(stringArray)); // Result - ['CSS', 'HTML', 'JavaScript']
