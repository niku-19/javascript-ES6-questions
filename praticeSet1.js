// ========================================>lets start <=======================================
//1. Write a function that takes a user's age and determines
// if they are old enough to vote (age 18 or older) ?

const isEligibleToVote = (age) =>
  age >= 18
    ? console.log(`Eligible To Vote`)
    : console.log(`Not Eligible To Vote`);

isEligibleToVote(20);
isEligibleToVote(18);
isEligibleToVote(17);

// ========================================>     2      <=======================================

//2. Write a function that takes two numbers as input and determines which one is greater.

const isGreater = (num1, num2) =>
  num1 > num2
    ? console.log(`${num1} is Greater than ${num2}`)
    : console.log(`${num2} is Greater than ${num1}`);

isGreater(2, 5);
isGreater(10, 5);

// ========================================>     3      <=======================================

//3. Write a function that takes a number as input and determines if it is positive or negative.

const checkNum = (num) =>
  num >= 0
    ? console.log(`${num} is a positive Number`)
    : console.log(`${num} is a Negative Number`);

checkNum(9);
checkNum(-8);
checkNum(22);

// ========================================>     4      <=======================================

//4. Write a function that takes a number as input and determines if it is even or odd.

const isEvenOdd = (num) =>
  num % 2 === 0
    ? console.log(`${num} is a Even Number`)
    : console.log(`${num} is a odd number`);

isEvenOdd(5);
isEvenOdd(8);
isEvenOdd(10);

// ========================================>     5      <=======================================

// 5.Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’.

const checkForAlphabetA = (str) =>
  str.toLowerCase().includes("a")
    ? console.log(`${str} Includes a`)
    : console.log(`${str} Does not include a`);

checkForAlphabetA("TAnAy");
checkForAlphabetA("Jeep");
checkForAlphabetA("Jane");

// ========================================>     6      <=======================================

// 6. Write a function that takes a string as input and determines if it is longer than 5 characters.

const checkLength = (str) =>
  str.length > 5
    ? console.log(`${str} is Greater than 5 Characters`)
    : console.log(`${str} is less than 5 Characters`);

checkLength("Programming");
checkLength("Jeep");

// ========================================>     7      <=======================================

// 7.Write a function that takes a number as input and determines if it is between 1 and 10.

const isBetweenOneAndTen = (num) =>
  num > 0 && num <= 10
    ? console.log(`${num} lies between 1 - 10`)
    : console.log(`${num} not lies between 1 - 10`);

isBetweenOneAndTen(5);
isBetweenOneAndTen(11);

// ========================================>     8      <=======================================

// 8. Write a function that takes a string as input and determines if it contains the word "hello".

const isHelloPresent = (str) =>
  str.toLowerCase().includes("hello")
    ? console.log(`${str} Includes Hello`)
    : console.log(`${str} Does not include Hello`);

isHelloPresent("Hello World");
isHelloPresent("World");

// ========================================>     9      <=======================================

// 9. Write a function that takes a number as input and determines if it is a multiple of 3.

const isMultipleOfThree = (num) =>
  num % 3 === 0
    ? console.log(`${num} is mutiple of 3`)
    : console.log(`${num} is not mutiple of 3`);

isMultipleOfThree(5);
isMultipleOfThree(9);

// ========================================>    10      <=======================================

// 10. Write a function which takes in a number as input and returns it after multiplying by 10.

const multiplyByTen = (num) => `${num} x 10 = ${num * 10}`;

console.log(multiplyByTen(20));
console.log(multiplyByTen(40));

// ========================================>     11      <=======================================

// 11. Console individual values of the product object using object destructuring.

const product = {
  title: "iPhone",
  price: 5999,
  description: "The iPhone is a smartphone developed by Apple",
};

const { title, price, description } = product;

console.log(title);
console.log(price);
console.log(description);

// ========================================>     12      <======================================

// 12. Create an object book with properties title, author, and pages.
// Create a function getBookDetails that takes a book object as a parameter and returns
// if the book has more than 100 pages.

const book = {
  title: "Code with Tanay Pratap",
  author: "Tanay Pratap",
  page: 500,
};
const book1 = {
  title: "Code with Tanay Pratap edition 0.1",
  author: "Tanay Pratap",
  page: 50,
};

const getBookDetails = ({ page }) =>
  page > 100
    ? `book ${book.title} is have more than 100 pages ${title}`
    : `book ${book.title} is have less than 100 pages`;

console.log(getBookDetails(book));
console.log(getBookDetails(book1));

// ========================================>     13      <=======================================

// 13. Create a function changeOccupation that takes an object person and
// a string newOccupation as parameters, and changes the occupation property of
// the person object to the newOccupation. Log the person object to the console
// before and after calling the function.

const person = {
  name: "Nikhil Ranjan Kumar",
  age: 23,
  occupation: "Software Engineer",
};

const changeOccupation = (person, newOccupation) =>
  (person.occupation = newOccupation);

console.log(person);
console.log(changeOccupation(person, "Product Manager"));
console.log(person);

// ========================================>     14      <=======================================

// 14. Given an array numbers containing the numbers 1, 2, and 3. Use array
// destructuring to log each number to the console.

const numberArray = [1, 2, 3];

const [a, b, c] = numberArray;

console.log(a);
console.log(b);
console.log(c);

// ========================================>     15      <=======================================

// 15. Convert the given function into ES6 with least amount of characters.

const defaultParamsFunc = (a, b, c = 4) => a * b * c;

//using nullish coalescing
const defaultParamsFuncUsingNullishCoalescing = (a, b, c) =>
  a * b * (c = c ?? 4);

console.log(defaultParamsFunc(3, 1));
console.log(defaultParamsFuncUsingNullishCoalescing(3, 10));
console.log(defaultParamsFuncUsingNullishCoalescing(3, 10, 4));

const nc = (a, b, c) => {
  a = a ?? 2;
  b = b ?? 3;
  c = c ?? 4;

  return a * b * c;
};

console.log(nc()); // 24
console.log(nc(1)); // 12
console.log(nc(1, 2, 3)); // 6
console.log(nc(1, 2, 3, 4)); //6

const getUserData = (name, age, email) => ({
  name: (null || undefined) ?? "unknown",
  age: (null || undefined) ?? 0,
  email: (null || undefined) ?? "no email provided",
});

console.log(
  getUserData({
    name: "",
    age: NaN,
    email: undefined,
  })
);
