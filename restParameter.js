//rest parameter to pack values

function num(... args)
{
    console.log(args);
}
num(1,2,3,4,5);

//type-2 example

function num1(a,b,c,...rest)
{
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(rest);
}
num1(1,2,3,4,5,6,7,8,9);

//loop examples using rest

function sum3(...args)
{
    let res = 0;
    for(let i of args)
    {
        res+=i;
    }
    console.log(res);
}
sum3(1,2,3,4,5,6,7,8,9);
sum3(8,2,4,5,2,6,4,3,5);

//Destructuring the arrays
let [a,b,c] = [1,2,3];
console.log(a);
console.log(b);
console.log(c);

//Destructuring the arrays using rest parameters
let [x,y,...rest] = [1,2,3,4,5,6,7,8,9];
console.log(x);
console.log(y);
console.log(rest);

// Destructuring the arrays using rest parameters
let {name, ...restt} = {name : "venky", age : 24, city : "kakinada"};
console.log(name);
console.log(restt);


