const myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("5 seconds completed");
        }, 5000);
    });
};
myPromise().then((fromResolve) => {
    console.log(fromResolve);
})

const myPromise1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("rejected");
        }, 10000);
    });
};
myPromise1()
.then((fromResolve) =>{
    console.log("Resolved");
})
.catch((fromReject) => {
    console.log(fromReject);
})