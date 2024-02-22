//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let p_name = "Waseem";
console.log("Uppercase: ", p_name.toUpperCase());
console.log("lowercase: ", p_name.toLowerCase());
console.log("Title case: ", p_name.replace(/\b\w/g, c => c.toUpperCase()));