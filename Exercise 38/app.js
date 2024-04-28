// Exercise 38

// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in 
// Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country

// Describe a Function
function describe_city(city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
// Calling a Function
describe_city("karachi");
describe_city("lahore");
describe_city("newyork", "usa");