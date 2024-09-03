const url = "https://apis.ccbp.in/jokes/random";
// const doNetworkCall  = async() => {
//     const response = await fetch(url);
//     const jsonData = await response.json();
//     console.log(jsonData);
// };
// doNetworkCall();

// //try - catch blocks
// const URL = "https://apis.ccbp.in/jokes/rand";
// const doNetworkCall1 = async () => {
//     try
//     {
//         const response = await fetch(URL);
//         const jsonData = await response.json();
//         console.log(jsonData);
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
// };
// doNetworkCall1();


const doNetworkCall2 = async () => {
    try
    {
        const response = await fetch(url);
        const jsonData = await response.json();
        console.log(jsonData);
    }
    catch(err)
    {
        console.log(err);
    }
};
const asyncPromise = doNetworkCall2();
console.log(asyncPromise);
