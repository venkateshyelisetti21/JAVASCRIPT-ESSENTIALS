function createCars(brand, color)
{
    return {
        brand,    //brand : brand
        color,    //color : color
        start : function()    //start()
        {
            console.log("Started");
        }
    };
}

console.log(createCars("BMW", "Blue"));
console.log(createCars("Tata", "White"));
console.log(createCars("Ferrari", "Red"));



// using constructor Function

function FunctionName(color , brand)
{
    this.color = color;
    this.brand = brand;
    this.start = function()
    {
        console.log("Started");
    }
}
let car1 = new FunctionName("Blue", "BMW");
let car2 = new FunctionName("Tata", "White");
let car3 = new FunctionName("Ferrari", "Red");
console.log(car1);    //car1 is an instance
console.log(car2);
console.log(car3);
//instance properties
console.log(car1.brand);
console.log(car1.color);
console.log(car2.brand);
console.log(car3.color);

//Function Properties
console.log(FunctionName.name);
console.log(FunctionName.length);
console.log(typeof(FunctionName));

// Constructor Property
console.log(car1.constructor);

