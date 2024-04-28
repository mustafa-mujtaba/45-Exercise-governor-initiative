// Exercise 37

// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

// Function to make a shirt with default size "large" and message "I love TypeScript"
function make_shirt(size: string = "large", printMessage: string = "I love TypeScript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} Print On Shirt`)
}

// Create a large shirt with the default message
make_shirt();

// Create a medium shirt with the default message
make_shirt("medium");

// Create a small shirt with a different message
make_shirt("small", "JavaScript is awesome!");

