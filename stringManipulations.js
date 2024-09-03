//trim()
const greeting = "     Hello World!    ";
console.log(greeting);   //     Hello World!  
console.log(greeting.trim());  //Hello World!

//slice()
const a = "abcdefghijklmnopqrstuvwxyz"; 
const b = a.slice(2,20);
const c = a.slice(2,5)
console.log(b);   //cdefghijklmnopqrst
console.log(c);   //cde

console.log(greeting.trim().slice(3,8));   //lo Wo

//toUpperCase()

const d = "my name is venky";
const e = d.toUpperCase();
console.log(e);  //MY NAME IS VENKY

//toLowerCase()

const text = "Learn JavaScript";
console.log(text.toLowerCase());   //learn javascript


//split()

const str = "He-is-a-good-boy";
const words = str.split("-");
console.log(words); // ["He", "is", "a", "good", "boy"]



//replace()

const word = "Football is a popular sport. Many countries play Football. Football tournaments are watched worldwide. Football fans are everywhere.";
const wordss = word.replace("Football", "Soccer");
console.log(wordss); //Soccer is a popular sport. Many countries play Football. Football tournaments are watched worldwide. Football fans are everywhere.

//includes()

const strr = "Learn 4.0 Technologies";
const word1 = strr.includes("Tech");
const number = strr.includes("5.0");
console.log(word1); // true
console.log(number); // false

//concat()

const str1 = "Hello";
const str2 = "World";
console.log(str1.concat(str2)); // HelloWorld
console.log(str1.concat(" Pavan", ". Have a nice day.")); // Hello Pavan. Have a nice day.

//indexOf()

const str3 = "Building Global Startups";
console.log(str3.indexOf("Global")); // 9
console.log(str3.indexOf("up")); // 21 

//startsWith()

const str4 = "World-class Products";
console.log(str4.startsWith("rld")); // false
console.log(str4.startsWith("World")); // true

//endsWith()

const str5 = "How are you?";
console.log(str5.endsWith("you?")); // true
console.log(str5.endsWith("re")); // false

//toString()

const num = 46;
const newNum = num.toString();
console.log(newNum); // 46
console.log(typeof newNum); // string

//substring()

const str6 = "I am learning JavaScript";
console.log(str6.substring(2, 9)); // am lear
console.log(str6.substring(6)); // earning JavaScript


//Length

const str7 = "Upgrade to CCBP Tech 4.0 Intensive";
console.log(str7.length); // 34