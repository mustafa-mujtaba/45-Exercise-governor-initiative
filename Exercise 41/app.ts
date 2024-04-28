// Exercise 41

// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// Define a function to print each magician name from an array
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// Define an array containing magicians name
let magicians_names = ["Atif Aslam","Mehdi Hassan","Farman","Sameer"]

// Call the function to print each magicians name
show_magicians(magicians_names);