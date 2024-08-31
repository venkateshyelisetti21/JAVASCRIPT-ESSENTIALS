//.then() function
const url = "https://apis.ccbp.in/jokes/random";
let responseObject = fetch(url);
responseObject.then((response)=>{
    console.log(response);
});
responseObject.catch((error)=>{
    console.log(error);
});

//.catch() function
const url1 = "https://apis.ccbp.in/jokes/randomm";
let responseObject1 = fetch(url1);
responseObject1.catch((error)=> {
    console.log(error);
});

//Promise Chaining
let responsePromise = fetch(url);
responsePromise
.then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

//on success callback returns promise
let responsePromise1 = fetch(url);
responsePromise1
.then((response) => {
    return (response.json());
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});