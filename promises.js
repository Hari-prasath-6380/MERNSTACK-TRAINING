
let myPromise = new Promise((resolve, reject) => {
    let success = true; 
    if (success) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected!");
    }
});

myPromise
    .then((message) => {
        console.log("Then: " + message);
    })
    .catch((error) => {
        console.log("Catch: " + error);
    });


//_______________________________________________________________________________________________________________________


let myPromise1 = new Promise((resolve, reject) => {
    let a=100;
    if(a>99)
    {
        console.log("Resolved");
        resolve("Promise resolved successfully!");
    }
    else
    {
        console.log("Rejected");
    }
    myPromise1.then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});
})
