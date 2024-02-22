//43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


// Function to show magicians
function show_magicians(magicians: string[]): void {
    console.log("Magicians:");//
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Function to add "Great" to magician's names
function make_great(mags: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let maj of mags) {
        greatMagicians.push("Great " + maj);
    }
    return greatMagicians;
}

// Original array of magician's names
let magicians: string[] = ["Waseem", "Abdur", "Abdullah"];

// Show original magicians
console.log("Original Magicians:");
show_magicians(magicians);

// Call make_great with a copy of the original array
let greatMagicians: string[] = make_great([...magicians]);

// Show magicians with "Great" added
console.log("\nMagicians with GREAT:");
show_magicians(greatMagicians);
