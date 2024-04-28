// Exercise 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.If the list is empty, 
// print the message We need to find some users!Remove all of the usernames from your array, and make sure the correct message is printed.

// Define Variable
let userNames = ["Admin","Sameer","Haseeb","Khalil","Mehboob"];
userNames = []

if (userNames.length === 0){
    console.log("Your Array Is Emphty We Need To Find Some Users!")

}else {
    // Using For Each Loop On Array
    userNames.forEach(oneUser =>{
        if (oneUser === "Admin"){
            console.log(`Hello Admin, would you like to see a status report?`);
        } else {
            console.log(`Hello ${oneUser}, thank you for logging in again.`);
        }
    })
}