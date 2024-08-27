// Using let
let x;
x = 10;
console.log(x);
x = 15;
console.log(x);


// using const
const y = 7;
console.log(y);
// y = 15; //Type error
console.log(y);

//mutating obj properties
const car = 
{
    mode : "BMW",
    color : "Blue"
};
car.color = "Red";
console.log(car.color);

// if we try to assign new obj to car Then it will throw an error
// car = {};