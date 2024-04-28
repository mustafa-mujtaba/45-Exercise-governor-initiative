// Exercise 45

// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then 
// accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an 
// optional feature. Print the Object that’s returned to make sure all the information was stored correctly


// Function to store information about a car in an object
function create_car(manufacturer, model, ...options){

    let car = {
        manufacturer: manufacturer,
        model: model
    };

    // Add any additional properties
    options.forEach(option => {
        let [key, value] = option.split(":");
        car [key.trim()] = value.trim();
        
    });

    return car;
}
    
// Call the function with required information and additional key-value pairs
let my_car = create_car("Toyota", "Corolla", "Color: White", "Model: 2024");
console.log(my_car);
