// Exercise 44

// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items 
// as call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.



// Function to create a sandwich summary
function makeSandwich(...items: string[]){
    console.log("You ordered a sandwich with the following items: \n");

    items.forEach(singleItem => console.log(singleItem))
    console.log("\nNow Enjoy Sandwich\n");

}
   
// Call the function with different number of arguments
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Turkey", "Swiss cheese", "Avocado");
makeSandwich("Chicken","Egg","Cheese");
