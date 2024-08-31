class person
{
    constructor(firstName, lastName)
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    displayFullName()
    {
        return this.firstName + " " + this.lastName;
    }
}
let person1 = new person("Virat","Kohli");
console.log(person1);
console.log(person1.displayFullName());

console.log(person.prototype);
console.log(Object.getPrototypeOf(person1));

//creating Multiple Objects

let person2 = new person("AB", "De");
let person3 = new person("Steven", 'smith');

console.log(person1);
console.log(person2);
console.log(person3);

console.log(person2.displayFullName());

//typeof(person)
console.log(typeof(person));


