//CreatingSingleObject
function Person(firstname, lastname)
{
    this.firstname = firstname;
    this.lastname = lastname;
}
//Adding Property to Prototype
Person.prototype.displayFullName = function() {
    return this.firstname + " " + this.lastname;
}

let Person1 = new Person("Virat", "Kohli");
let Person2 = new Person("AB", "De");
console.log(Person1,Person2);
console.log(Object.getPrototypeOf(Person1));
console.log(Object.getPrototypeOf(Person2));

console.log(Object.getPrototypeOf(Person1) === Object.getPrototypeOf(Person2));

//Instance Specific Properties
console.log(Object.getOwnPropertyNames(Person1));