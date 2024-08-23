let arr1 = [2,3];
console.log(arr1);
let arr2 = [1,...arr1,4];
console.log(arr2);

// creating a copy of an array

let arr3 = [...arr2];
console.log(arr3);

//concatenation

let arr4 = [...arr1,...arr2];
console.log(arr4);

//Objects

let person = 
{
    name : "Venky",
    age : 22
};
let personCopy =
{
    ...person
};
console.log(person,personCopy);

//updating
let personDetails =
{
    ...person,
    city : "Kakinada"
};
console.log(personDetails);

//concatination in objs
let address =
{
    pinCode : 533437
};

let bioData = {...personDetails, ...address};
console.log(bioData);


// as a func call
function sum(a,b,c)
{
    return a+b+c;
}
let a = [2,4,6];
console.log(sum(...a));

function sum2(a,b,c)
{
    return a+b+c;
}
let b = [2,4,6,8,10];
console.log(sum(...b));  // 8 and 10 are ignored


