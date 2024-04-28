// Exercise 13

// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to 
// print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

var favoriteTransportations = ["Honda Car", "Toyota Car", "Suzuki Car"];
favoriteTransportations.forEach(function (favoriteTransportation) { return console.log("\u201CI would like to own a ".concat(favoriteTransportation, "\"")); });
