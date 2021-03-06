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
  console.log(index, arrayElement, array); // Result - 0 200 (8)??[200, 450, -400, 3000, -650, -130, 70, 1300]
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

// 2: We have an array of strings stringArray. We???d like to have a sorted copy of it, but keep stringArray unmodified. Define a function

let stringArray = ["HTML", "JavaScript", "CSS"];

const sortedArray = (array) => {
  return array.slice().sort();
};

console.log(sortedArray(stringArray)); // Result - ['CSS', 'HTML', 'JavaScript']

// 3. You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];
console.log(users);

const usernames = users.map((arrayElement, index, array) => arrayElement.name);
console.log(usernames); // Result - ['John', 'Pete', 'Mary']

// 4: You have an array of user objects, each one has name, surname and id.
// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
let john1 = { name: "John", surname: "Smith", id: 1 };
let pete1 = { name: "Pete", surname: "Hunt", id: 2 };
let mary1 = { name: "Mary", surname: "Key", id: 3 };

let users1 = [john1, pete1, mary1];

const usersFullName = users1.map((arrayElement, index, array) => ({
  fullName: `${arrayElement.name} ${arrayElement.surname}`,
  id: arrayElement.id,
}));
console.log(usersFullName);

// 5: Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.
let john2 = { name: "John", age: 25 };
let pete2 = { name: "Pete", age: 30 };
let mary2 = { name: "Mary", age: 28 };

let users2 = [pete2, john2, mary2];

const sortByAge = (users) => {
  return users.sort((a, b) => a.age - b.age);
};

console.log(sortByAge(users2));

// 6: Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
let john3 = { name: "John", age: 25 };
let pete3 = { name: "Pete", age: 30 };
let mary3 = { name: "Mary", age: 29 };

let users3 = [john3, pete3, mary3];

const getAverageAge = (users) => {
  return users.reduce((accumulator, arrayElement, index, array) => {
    return accumulator + arrayElement.age / users.length;
  }, 0);
};

console.log(getAverageAge(users3)); // Result - 28 (25+30+29) / 3 = 28

// 7: Create a function that return the unique values of the array
// Method 1:
const repeatedArray = ["Dog", "Cat", "Rat", "Cow", "Rabbit", "Dog", "Cat"];

const uniqueArray = (array) => {
  let results = [];

  for (const x of array) {
    if (!results.includes(x)) {
      results.push(x);
    }
  }

  return results;
};

console.log(uniqueArray(repeatedArray)); // Result - ['Dog', 'Cat', 'Rat', 'Cow', 'Rabbit']

// Method 2: Alternate way using Sets
const uniqueArray1 = (array) => {
  let result1 = [];

  const unique = new Set(array);

  for (const y of unique.values()) {
    result1.push(y);
  }

  return result1;
};

console.log(uniqueArray1(repeatedArray)); // Result - ['Dog', 'Cat', 'Rat', 'Cow', 'Rabbit']

// 8: Function to find the difference of 2 Arrays
// Method 1:
function differenceOf2Arrays(array1, array2) {
  const temp = [];
  array1 = array1.toString().split(",").map(Number);
  array2 = array2.toString().split(",").map(Number);

  for (var i in array1) {
    if (!array2.includes(array1[i])) temp.push(array1[i]);
  }
  for (i in array2) {
    console.log(array2[i]);
    if (!array1.includes(array2[i])) temp.push(array2[i]);
  }
  return temp.sort((a, b) => a - b);
}

console.log(differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10])); // Result - [3, 10, 100]

// Method 2:
const diffArray = (array1, array2) => {
  const temp = [];

  for (const x of array1) {
    if (!array2.includes(x)) temp.push(x);
  }

  for (const y of array2) {
    if (!array1.includes(y)) temp.push(y);
  }

  return temp.sort((a, b) => a - b);
};

console.log(diffArray([1, 2, 3], [100, 1, 2, 10])); // Result - [3, 10, 100]

// 9: Function to sort the following array of objects by Title and Id
const library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
];

// Sort by Title
const sortLibraryByTitle = (array) => {
  return array.slice().sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });
};

console.log(sortLibraryByTitle(library));

// Sort by Id
const sortLibraryById = (array) => {
  return array.slice().sort((a, b) => a.libraryID - b.libraryID);
};

console.log(sortLibraryById(library));

// 10: Function to sort the following array of objects by Name, Age and Job
const usr = [
  { name: "John", age: 28, job: "Frontend Developer" },
  { name: "Varun", age: 30, job: "Backend Developer" },
  { name: "Mathew", age: 25, job: "UI Designer" },
];

// Sort by Name
const usrSortByName = (array) => {
  return array.slice().sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
};

console.log(usrSortByName(usr));

// Sort by Age
const usrSortByAge = (array) => {
  return array.slice().sort((a, b) => a.age - b.age);
};

console.log(usrSortByAge(usr));

// Sort by Job
const usrSortByJob = (array) => {
  return array.slice().sort((a, b) => {
    if (a.job < b.job) return -1;
    if (a.job > b.job) return 1;
    return 0;
  });
};

console.log(usrSortByJob(usr));

// 11: JavaScript function to find the longest common starting substring in a set of strings
function longest_common_starting_substring(arr1) {
  const arr = arr1.concat().sort();
  const a1 = arr[0];
  const a2 = arr[arr.length - 1];
  const L = a1.length;
  let i = 0;
  while (i < L && a1.charAt(i) === a2.charAt(i)) i++;
  return a1.substring(0, i);
}

console.log(longest_common_starting_substring(["go", "google"])); // Result - go

// 12: JavaScript function to merge two arrays and removes all duplicates elements.
const ar1 = [1, 2, 3];
const ar2 = [2, 30, 1];

const mergeArrays = (array1, array2) => {
  const result = [];
  const merge = array1.concat(array2);
  const unique = new Set(merge);

  for (const x of unique.values()) {
    result.push(x);
  }
  return result;
};

console.log(mergeArrays(ar1, ar2)); // Result - [1, 2, 3, 30]

// 13: JavaScript function to remove a specific element from an array
const unremovedElArray = [2, 5, 9, 6];

const removeElement = (array, element) => {
  array.forEach((arrayElement, index, array) => {
    if (arrayElement === element) {
      array.splice(index, 1);
    }
  });

  return array;
};

console.log(removeElement(unremovedElArray, 9)); // Result - [2, 5, 6]

// 14: Javascript function to remove a specific element form an array without altering the original array
const unremovedElArray1 = [4, 5, 6, 7, 8];

const removedElement = (array, element) => {
  const newArray = array.slice();

  newArray.forEach((arrayElement, index, array) => {
    if (arrayElement === element) {
      newArray.splice(index, 1);
    }
  });

  return newArray;
};

console.log(removedElement(unremovedElArray1, 5)); // Result - [4, 6, 7, 8]

// 15: JavaScript function to find an array contains a specific element.

const arrayEight = [6, 7, 8, 9, 3];

// Method 1:
const checkElement1 = (array, element) => {
  return array.includes(element) ? true : false;
};

console.log(checkElement1(arrayEight, 8)); // Result - True
console.log(checkElement1(arrayEight, 1)); // Result - False

// Method 2:
const checkElement2 = (array, element) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return true;
    }
  }
  return false;
};

console.log(checkElement2(arrayEight, 9)); // Result - True
console.log(checkElement2(arrayEight, 2)); // Result - False

// Method 3:
const checkElement3 = (array, element) => {
  let result = false;
  array.forEach((arrayElement, index, array) => {
    if (arrayElement === element) {
      result = true;
    }
  });

  return result;
};

console.log(checkElement3(arrayEight, 8)); // Result - True
console.log(checkElement3(arrayEight, 4)); // Result - False

// Method 4:
const checkElement4 = (array, element) => {
  const result = array.some((arrayElement, index, array) => {
    return arrayElement === element;
  });

  return result;
};

console.log(checkElement4(arrayEight, 8)); // Result - True
console.log(checkElement4(arrayEight, 1)); // Result - False

// 16: JavaScript function to empty an array keeping the original
const arrayNine = [1, 3, 6, 3, -5];
console.log(arrayNine);

const emptyArray = (array) => {
  let newArray = array.slice();

  newArray.length = 0;

  return newArray;
};

console.log(emptyArray(arrayNine)); // Result []
console.log(arrayNine); // Result - [1, 3, 6, 3, -5]

// 17: JavaScript function to get a random item from an array

const item = [254, 45, 212, 365, 2543];

const getRandomItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

console.log(getRandomItem(item)); // Result - Generates a random item from the item array

// 18: JavaScript function to filter false, null, 0 and blank values from an array.

const unfiltered = [58, "", "abcd", true, null, false, 0];

const filtered = (array) => {
  return array.filter((arrayElement, index, array) => {
    if (
      arrayElement !== 0 ||
      arrayElement !== null ||
      arrayElement !== false ||
      arrayElement !== ""
    ) {
      return arrayElement;
    }
  });
};

console.log(filtered(unfiltered)); // Result - [58, 'abcd', true]

// 19: JavaScript function to generate an array of specified length, filled with integer numbers, increase by one from starting position

const array_range = (start, length) => {
  const array = new Array(length);

  for (let i = 0; i < length; i++, start++) {
    array[i] = start;
  }
  return array;
};

console.log(array_range(1, 5)); // Result - [1,2,3,4,5]
console.log(array_range(-8, 6)); // Result - [-8, -7, -6, -5, -4, -3]

// 20: JavaScript function to generate an array between two integers of 1 step length
const array_between = (start, end) => {
  if (start > end) {
    const array1 = new Array(start - end + 1);
    for (let i = 0; i < array1.length; i++, start++) {
      array1[i] = start;
    }
    return array1;
  } else if (end > start) {
    const array2 = new Array(end - start + 1);
    for (let j = 0; j < array2.length; j++, start++) {
      array2[j] = start;
    }
    return array2;
  }
};

console.log(array_between(1, 5)); // Result - [1,2,3,4,5]
console.log(array_between(2, 8)); // Result - [2, 3, 4, 5, 6, 7, 8]
console.log(array_between(-6, 8)); // Result - [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8]
console.log(array_between(-4, 4)); // Result - [-4, -3, -2, -1, 0, 1, 2, 3, 4]

// 21: JavaScript function to find the unique elements from two arrays.
const ar3 = [1, 2, 4, 6, 9];
const ar4 = [1, 2, 3, 4, 5, 7, 8];

const uniqueArray2 = (array1, array2) => {
  const result = [];
  const mergedArray = array1.concat(array2);
  const unique = new Set(mergedArray);
  for (const x of unique.values()) {
    result.push(x);
  }
  return result;
};

console.log(uniqueArray2(ar3, ar4)); // Result - [1, 2, 4, 6, 9, 3, 5, 7, 8]
