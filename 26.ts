//26.Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

//V1
let alien_color: string = "green"; 
let player_points: number = 0; 

if (alien_color == "green") {
console.log("Player just earned 5 points"); 
player_points += 5; 

}
else if (alien_color!="green") {
console.log("Player just earned 10 points"); 
player_points += 10; 
}

//V2
// let alien_color: string = "red"; 
// let player_points: number = 0; 

// if (alien_color == "green") {
// console.log("Player just earned 5 points"); 
// player_points += 5; 

// }
// else if (alien_color!="green") {
// console.log("Player just earned 10 points"); 
// player_points += 10; 
// }