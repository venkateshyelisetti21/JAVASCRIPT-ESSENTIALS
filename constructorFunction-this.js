function Car(brand, color)
{
    this.brand = brand;
    this.color = color;
    this.start = function()
    {
        console.log(this);
    };
}
let car1 = new Car("BMW", "Blue");
car1.start();

//using arrow functions
function Cars(brand, color)
{
    this.brand = brand;
    this.color = color;
    this.start = () =>
    {
        console.log(this);
    };
}
let car2 = new Cars("BMW", "Blue");
car1.start();