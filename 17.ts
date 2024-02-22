//17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

let guest = ["Muneeb", "Adil", "Abdur"];
console.log("Abdur cannot come");

guest[2] = "Waseem";

console.log("Wait! just found a bigger table.");

guest.unshift("Afeef", "Bilal"); 

console.log("Table's delivery wont be in time");

guest.pop();
guest.pop();
guest.pop();

for (let i = 0; i<=1;i++){
    console.log("Greetings! Your are invited to dinner Mr.", guest[i]);
}