let sum = (x, y) => 
{
    return x + y;
}
console.log(sum(2,7));


//Type - 02

let add = (a, b) => a + b;
console.log(sum(2,7)); 

//Ex -03

let cmp = (a,b) => a === b;
console.log(cmp(3,4));
console.log(cmp(4,4));

//if func contains single parameter, () not req

let sq = a => a * a;
console.log(sq(5));

let greet = name => `Hello ${name}!`;
console.log(greet("Venky"));

//No parameters

let msg = () => "Hello!";
console.log(msg());


//Returing objects using Arrow functions

let createUser = name =>
{
    return {
        firstName : name
    };
};
console.log(createUser("Venky"));
