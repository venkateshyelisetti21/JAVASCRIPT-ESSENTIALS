let now = new Date();
console.log(now);
console.log(typeof(now)); 

// string format
let date = new Date("2024-08-26");
console.log(date);

// Numeric format
let today = new Date(1947, 8, 15, 1, 3, 15, 0);
console.log(today);


//Instant methods to access
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDay());
console.log(today.getTime());