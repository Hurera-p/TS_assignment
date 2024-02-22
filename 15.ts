//15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let guest = ["Muneeb", "Adil", "Abdur"];
console.log("Abdur cannot come");

guest[2] = "Waseem";

for (let i = 0; i<=2;i++){
    console.log("Greetings! Your are invited to dinner Mr.", guest[i]);
}