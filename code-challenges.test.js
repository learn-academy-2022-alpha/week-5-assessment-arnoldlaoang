// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical";
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook";
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric";
// Expected output: "3cc3ntr1c"

describe("hidder", () => {
  it("take in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
    expect(hidder(secretCodeWord1)).toEqual("L4ck4d41s1c4l");
    expect(hidder(secretCodeWord2)).toEqual("G0bbl3dyg00k");
    expect(hidder(secretCodeWord3)).toEqual("3cc3ntr1c");
  });
});

// Good Error Message
//● hidder › take in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
// ReferenceError: hidder is not defined

// b) Create the function that makes the test pass.

// Pseudocode
// Create and name a function that takes in a string
// Create and name a variable that cannot be redeclared with a new list of objects
// Create and name another variable that compares the input with the first variable with the list of objects with parameters
// Use a built-in method .hasOwnProperty to indicate whether the object has specified property as it's own property comparing to the new variable with the list of objects.
// Return string and use built-in method .split to go through each index after splitting a string into an array of substrings
// Use Higher Order function .map to create a new array to have the new output populate a new array then .join to put all the new array of substrings values together into a string.

const hidder = (spy) => {
  let decode = { a: 4, e: 3, i: 1, o: 0, E: 3 };
  let cipher = (spy) => (decode.hasOwnProperty(spy) ? decode[spy] : spy);
  return spy.split("").map(cipher).join("");
};

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"];
const letterA = "a";
// Expected output: ["Apple", "Banana", "Orange"]
const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"];
const letterE = "e";
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe("fisher", () => {
  it("take in an array of words and a single letter and returns all the words that contain that particular letter.", () => {
    expect(fisher(arrayOfWords1, letterA)).toEqual([
      "Apple",
      "Banana",
      "Orange",
    ]);
    expect(fisher(arrayOfWords2, letterE)).toEqual([
      "Cherry",
      "Blueberry",
      "Peach",
    ]);
  });
});

// Good Error Message
// ● fisher › take in an array of words and a single letter and returns all the words that contain that particular letter.
// ReferenceError: fisher is not defined

// b) Create the function that makes the test pass.

// Pseudocode:
// Create and name a function that takes in an array of words
// Create and name a new variable
// Use the higher-order function .filter on the fucntion's array placeholder to filter through the given arrays
// Inside the built-in method parameter put value as an empty array to filter in outputs
// Inside the parameter Return the placeholder value with built-in method .includes that compares the given string letter with built-in method .toLowerCase and .toUpperCase to say that the letter pass in lowercase or uppercase
// Outside the parameter return variable name newArr to output the strings that have the letter we asked to pull out and be stored in the empty arrays.

const fisher = (array, string) => {
  let newArr = array.filter((value) => {
    return (
      value.includes(string.toLowerCase()) ||
      value.includes(string.toUpperCase())
    );
  });
  return newArr;
};

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3];
// Expected output: true
const hand2 = [5, 5, 3, 3, 4];
// Expected output: false
const hand3 = [5, 5, 5, 5, 4];
// Expected output: false

describe("dealer", () => {
  it("take in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.", () => {
    expect(dealer(hand1)).toEqual(true);
    expect(dealer(hand2)).toEqual(false);
    expect(dealer(hand3)).toEqual(false);
  });
});

// Good Error Message
// ● fisher › take in an array of words and a single letter and returns all the words that contain that particular letter.
// ReferenceError: fisher is not defined

// b) Create the function that makes the test pass.

// Pseudocode
// Create and name a function that takes in an array
// Use the built-in method .sort to the array to sort all the given arrays from smallest to biggest number
// Use a conditional if/elseif/else statements considering the index numbers placement sorted from smallest to biggest number
// The given inputs will be ran into the conditionals and will declare which of the conditional it fits giving a boolean if it's either true or false

const dealer = (array) => {
  array.sort((a, b) => a - b);
  if (array[0] === array[2] && array[3] === array[4] && array[0] !== array[4]) {
    return true;
  } else if (
    array[0] === array[1] &&
    array[2] === array[4] &&
    array[0] !== array[4]
  ) {
    return true;
  } else {
    return false;
  }
};
