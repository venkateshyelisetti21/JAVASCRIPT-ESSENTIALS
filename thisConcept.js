//Object methods
let car = {
    brand : "BMW",
    color : "blue",
    start : function()
    {
        console.log(this);
    }
};
car.start();


//Regular function
function start()
{
    console.log(this);
}
start();

//Arrow functions

let movie = {
    title : "Bahubali",
    hero : "Prabhas",
    start : function()
    {
        setTimeout(function()
    {
        console.log(this);
    },1000);
    }
};
movie.start();

let movie1 = {
    title : "Bahubali",
    hero : "Prabhas",
    start : function()
    {
        console.log("context");
        console.log(this);
    
    }
};
movie1.start();


