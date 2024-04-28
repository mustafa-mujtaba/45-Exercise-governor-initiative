// Exercise 39

// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:"Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.

// Creating a function with parametars which return a values in string
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Calling a fuction and print the returned value
console.log(city_country("karachi", "pakistan"));
console.log(city_country("newyork", "usa"));
console.log(city_country("tokyo", "japan"));
