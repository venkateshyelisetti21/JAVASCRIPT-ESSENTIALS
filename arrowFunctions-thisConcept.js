let movie1 = {
    title : "Bahubali",
    hero : "Prabhas",
    start : function()
    {
        let movie1 = {
    title : "Bahubali",
    hero : "Prabhas",
    start : function()
    {
        console.log(this);
        setTimeout(() => {
            console.log(this);
        }, 1000);
    
    }
};
movie1.start();
    
    }
};
movie1.start();

cars = ["Audi", "BNW", "Ferrari", "Tata"];

let car = 
{
    color : "Blue",
    model : "Audi",
    start : function()
    {
        let AudiIndex = cars.findIndex(
            (car) => console.log(this)
        );
    }
};

car.start();