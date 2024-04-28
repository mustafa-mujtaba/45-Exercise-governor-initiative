/// Exercise 03

// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// Store the person's name in a variable 

let personName = "Muhammad Mehdi Raza";

// Convert the name to lowercase

let lowercaseName = personName.toLowerCase();

// Convert the name to uppercase

let uppercaseName = personName.toUpperCase();

// Print the names

console.log("Lowercase Name:", lowercaseName);
console.log("Uppercase Name:", uppercaseName);

// Function to convert string to titlecase
function toTitleCase(str: string): string {
    return str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}

// Example usage
let personName: string = "muhammad mehdi raza";
console.log("Titlecase:", toTitleCase(personName));
