
                                    // Functions



// 1) Anonymous Function

let func = function() {
    console.log("This is an Anonymous Function");
}
func();


// 2) Named Function

function userDetails(){
    console.log(`Name : Hari
        Age:22
        College : KEC`);
}
userDetails();


// 3) Immediately Invoking Function


(
    function(){
        console.log("This is an Immediately Invoking Function");
    }
    ()
)


// 4) Arrow Function

// i) simple arrow function

let arrowfunc = () => {
    console.log("This is the simple arrow function");
}
arrowfunc();

// ii) arrow function with more than one statement

let arrowfunc2 = () => {
    let a=100;
    let b=200;
    console.log(`The sum of a and b is : ${a+b}`);
}
arrowfunc2();

// iii) arrow function with return statement

let arrowfunc3 = (x,y) => {
    return x*y;
}
console.log(arrowfunc3(10,5));


// iv) arrow function with this keyword

let fun = () => {
    console.log(this);
}
fun();


// 5) Nested function

function outerfunc(){
    let a=10,b=20;
    function innerfunc(){
        console.log(`The sum of a and b is : ${a+b}`);
    }innerfunc();
}
outerfunc();


// 6) High Order Function

function landingpage(signuppage,loginpage){
    console.log("This is the Home page .....");
}
function signuppage(){
    console.log("User registered successfully .....");
}
function loginpage(){
    console.log("User logged in successfully .....");
}
landingpage(signuppage(),loginpage());


// 7) Callback Function

function landingpage(signuppage,loginpage){
    console.log("This is the Home page .....");
}
function signuppage(){
    console.log("User registered successfully .....");
}
function loginpage(){
    console.log("User logged in successfully .....");
}
landingpage(signuppage(),loginpage());                     // Function which is passed as an argument to another function is called Callback function.



// 8) Generator Function

function* generatorfunc(){
    console.log("This is the Generator function");
}
generatorfunc().next();