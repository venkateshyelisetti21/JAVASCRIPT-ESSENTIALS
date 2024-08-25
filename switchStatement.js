// //Switch Statement...

// switch(exprn)
// {
//     case value1:
//         statements
//         break;
//     case value2:
//         statements
//         break;
//       .....
//     default:
//         statements;
//         break;
// }

//Example

let day = 1;
switch(day)
{
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid");
        break;
}

// calculator operation

let a = 6;
let b = 12;
let ip = "add";
switch(ip)
{
    case "add":
        console.log(`Addition of a and b is ${a+b}.`);
        break;
    case "sub":
        console.log(`Subtraction of a and b is ${a-b}.`);
        break;
    case "mul":
        console.log(`Multiplication of a and b is ${a*b}.`);
        break;
    case "div":
        console.log(`Divison of a and b is ${a/b}.`);
        break;
    default:
        console.log("Invalid Exprn");
        break;
}