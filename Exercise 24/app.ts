// Exercise 24

// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

// Define Variable

let banana = "banana";
let uppercaseBanana = "BANANA";
let twenty = 20
let ten = 10
let fruits = ["apple", "banana", "mango","watermelon"];

// Test for equality and inequality with strings

console.log("Is Banana is equal to banana");
console.log(banana == banana);

console.log("\nBanana is not equal to banana");
console.log(banana != banana);

// Tests using lowercase function

console.log("\nIs Banana is equal to banana after converting to lowercase");
console.log(uppercaseBanana.toLowerCase() == "banana");

console.log("\nIs Banana is not equal to banana after converting to lowercase");
console.log(uppercaseBanana.toLowerCase() != "banana");

// Numerical Tests

// Equal to
console.log("\nIs ten is equal to 20?");
console.log(ten == 20);

// Not Equal to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != 20);

// Greather than 
console.log("\nIs ten is greather than 5?");
console.log(ten > 5);

// Less than 
console.log("\nIs twenty is less than 10?");
console.log(twenty < 10);

// Greather than or equal to
console.log("\nIs ten is greather than or equal to 5?");
console.log(ten >= 5);

// Less than or equal to
console.log("\nIs twenty is less than or equal to 10");
console.log(twenty <= 10);

// Tests using "and" & "or" operatiors

// Test using && (and)
console.log("\n twenty is not equal to 10 and twenty is greather than 10");
console.log(twenty !== 10 && twenty > 10);

console.log("\n twenty is not equal to 10 and twenty is greather than 40");
console.log(twenty !== 10 && twenty > 40);

// Test using || (or)
console.log("\n twenty is greather than 50 or 20 is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("\n twenty is greather than 50 or 20 is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("\n twenty is greather than 50 or 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);

// Test whether an item is in a array
console.log("\nIs watermelon include in my fruits array?");
console.log(fruits.includes("watermelon"));

// Test whether an item is not in a array
console.log("\nIs watermelon not include in my fruits array?");
console.log(!fruits.includes("watermelon"));







