// Syntax
// let myFunction = new Function("para1, para2, ....",`code`);

let Car = new Function(
    "color, brand", `
    this.color = color;
    this.brand  = brand;
    this.start = function()
    {
    console.log("started");
    };` 
);
console.log(Car);
console.log(Function.prototype);
console.log(Object.getPrototypeOf(Car));

function movie(hero, title)
{
    this.hero = hero;
    this.title = title;
    this.start = function()
    {
        console.log("Shoot begins soon");
    };
}
let newMovie = new movie("Prabhas", "Spirit");
console.log(newMovie);
console.log(Object.getPrototypeOf(movie));
console.log(Object.getPrototypeOf(newMovie));
movie.prototype.constructor = movie;
console.log(movie.prototype);

