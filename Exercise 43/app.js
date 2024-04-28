// Exercise 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original 
// array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the 
// original names and one array with the Great added to each magician’s name.

// Define the function to shown magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}

// Function to make magicians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}

// Define an array of magicians names
var magicians_names = ["Atif Aslam", "Mehdi Hassan", "Farman", "Sameer"];

// Making a copy of orignal array through .slice() function
var copy_magicians_names = magicians_names.slice();

// Modify the copied array to include "The Great" with thier names
var copy_great_magicians = make_great(copy_magicians_names);

// show both arrays original and copied

// original
console.log("original array\n");
show_magicians(magicians_names);

// copied
console.log("\ncopied array\n");
show_magicians(copy_great_magicians);
