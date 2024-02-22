//19.Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

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

console.log("Number of people comming:2");
