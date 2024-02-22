//16.More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

let guest = ["Muneeb", "Adil", "Abdur"];
console.log("Abdur cannot come");

guest[2] = "Waseem";

console.log("Wait! just found a bigger table.");

guest.unshift("Afeef", "Bilal"); 

for (let i = 0; i<=4;i++){
    console.log("Greetings! Your are invited to dinner Mr.", guest[i]);
}