//42.Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function show_magicians(magicians: string[]): void {
    console.log("Magicians:");
    for (let magician of magicians) {
        console.log(magician);
    }
}


let magicians: string[] = ["Waseem", "Abdur", "Abdullah"];


show_magicians(magicians);

function make_great(mags:string[]) {
    for (let maj of mags) {
        console.log("Great "+ maj); 
    }
}
console.log("Magician with GREAT"); 
make_great(magicians); 