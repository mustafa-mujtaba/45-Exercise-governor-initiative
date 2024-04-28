// Exercise 17

// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

var guests = ["Farman", "Sameer", "Umair"];
console.log("Great news! I found a bigger dinner table!");
// Adding more guests
guests.unshift("Haseeb");
guests.splice(guests.length / 2, 0, "Afzal");
guests.push("Abbas");
guests.forEach(function (guest) { console.log("Dear ".concat(guest, ", would you like to join me for dinner?")); });
// Inform that only two guests can be invite for dinner
console.log("Unfortunately, I can only invite two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
guests.forEach(function (guest) { console.log("Dear ".concat(guest, ", you're still invited to dinner.")); });
//Remove last two guest from the list
guests.splice(0, guests.length);
console.log(guests); // Shows an empty list
