// Exercise 32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted
// List of current usernames

var current_Users = ["Farman", "Sameer", "Noman", "Hamza", "Abid"];

// List of new usernames
var new_Users = ["Sameer", "Mehboob", "Adnan", "farman", "Minhaj"];

// Loop through new-users to check for users availablity
new_Users.forEach(function (new_one_Users) {
    var our_condition = current_Users.some(function (current_one_users) { return current_one_users.toLowerCase() === new_one_Users.toLowerCase(); });
    
    // Print Different Message Using If-Else Statements
    if (our_condition) {
        console.log("Sorry ".concat(new_one_Users, " is already taken"));
    }
    else {
        console.log("This username ".concat(new_one_Users, " is available"));
    }
});
