class animal 
{
    constructor (name)
    {
        this.name = name;
    }
        eat()
        {
            return `${this.name} is eating`;
        }
        makeSound()
        {
            return `${this.name} is shouting`;
        }
}

let gorilla = new animal("Gorilla");
console.log(gorilla);
console.log(gorilla.eat());

class dog extends animal
{
    constructor(name, breed)
    {
        super(name);
        this.breed = breed;
    }
    sniff()
    {
        return `${this.name} is sniffing`;
    }
}

let doggy = new dog("dog", "German Sheperd");
console.log(doggy);
console.log(doggy.sniff());
console.log(doggy.eat());
console.log(doggy.makeSound());


class cat extends animal
{
    constructor(name,breed)
    {
        super(name);
        this.breed = breed;
    }
    knead()
    {
        return `${this.name} is kneading`;
    }
}
let Catobj = new cat("Cat", "Persian Cat");
console.log(Catobj);
console.log(Catobj.knead());


//this in super class
class sport
{
    constructor(name)
    {
        this.name = name;
    }
    play()
    {
        return this;
    }
}
let cricket = new sport("cricket");
console.log(cricket.play());

//this in subclass
class basketBall extends sport
{
    constructor(name)
    {
        super(name);
    }
    playing()
    {
        return this;
    }
}
let BB = new basketBall("basketball");
console.log(BB.playing());