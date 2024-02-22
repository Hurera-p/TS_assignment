// 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

// Function to summarize the sandwich order
function orderSandwich(items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("No items selected for the sandwich.");
    } else {
        console.log("Items selected for the sandwich:");
        for (let item of items) {
            console.log("- " + item);
        }
    }
    console.log(); 
}

// Call the function three times with different number of arguments
orderSandwich(["Chicken", "Cheese", "Lettuce"]);
orderSandwich(["Turkey", "Swiss"]);
orderSandwich([]); // Empty order
