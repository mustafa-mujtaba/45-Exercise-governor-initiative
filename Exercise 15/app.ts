// Exercise 15

// Changing Guest List: You just heard that one of your guests can’t make the dinner,so you need to send out a new set of invitations. You’ll have to think of 
// someone else to invite. Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.Print a second set of invitation messages, one for each person who is still in your list.


let unableToAttend = "Farman";
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest
let newGuest = "Muneeb";
guest[guest.indexOf(unableToAttend)] = newGuest;

// New invitations
guest.forEach(guest => {console.log(`Dear ${guest}, would you like to join me for dinner?`);});