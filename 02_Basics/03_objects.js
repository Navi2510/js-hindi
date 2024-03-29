// singleton ---
// Object.create--- ye constructor method hai ---- 

// constructor se bnega to singleton bnega ---
// object literals

const mySym = Symbol("key1");

const JsUSer = {
    name : "Navneet",

    "full name" : "Navneet Singh",
    [mySym] : "mykey1",

    age : 18,
    location : "Noida",
    email: "navneet@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

console.log(JsUSer.email)
console.log(JsUSer['email']);
console.log(JsUSer["full name"]);
console.log(JsUSer[mySym]);


JsUSer.email = "navneetsingh@google.com" // values ko hum ovverride bhi kr skte hai

// values ko hum lock bhi kr skte hai ----- uske liye hum
// Object.freeze(JsUSer) // -- ab hum isme change nhi kr skte hai -- change krenge to error nhi dega lekin changes propagate nhi hoga

console.log(JsUSer);

JsUSer.greeting = function(){
    console.log("Hello JS Users");
}


JsUSer.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUSer.greeting());

console.log(JsUSer.greetingTwo());