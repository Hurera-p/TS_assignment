// 45.Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


function storeCarInfo(manufacturer: string, model: string, ...args: { [key: string]: any }[]): { manufacturer: string, model: string, [key: string]: any } {
    let carInfo: { manufacturer: string, model: string, [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };
    for (let arg of args) {
        for (let key in arg) {
            carInfo[key] = arg[key];
        }
    }
    return carInfo;
}


let carInfo = storeCarInfo("Toyota", "Camry", { color: "Red", year: 2022 });


console.log(carInfo);
