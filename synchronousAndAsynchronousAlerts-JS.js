//synchronous Alerts
alert("First Message");
alert("Second Message");
alert("Third Message");


//Asynchronous
const url = "https://apis.ccbp.in/jokes/random";
fetch(url)
.then((response) =>{
    return response.json();
})
.then((jsonData)=>{
    console.log(jsonData); //Executed later
});
console.log("fetching done!"); //Executed 1st

//Example-2
const responseObject = fetch(url);
console.log(responseObject);
console.log("Fetching Done!");