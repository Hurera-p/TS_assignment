// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let fruits: string[] = ["Apple", "banana", "kiwi"]; 

if (fruits.includes("Apple")) {
    console.log("You must really like apples");
}

if (fruits.includes("Pineapple")) {
    console.log("You must really like Pineapples");
}

if (fruits.includes("banana")) {
    console.log("You must really like banana");
}

if (fruits.includes("Orange")) {
    console.log("You must really like Orange");
}
if (fruits.includes("kiwi")) {
    console.log("You must really like kiwi");
}