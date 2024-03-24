// Primitive

// & types : String, Number , Boolean, null, undefined, Symbol, BigInt

const score =100;
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id ===anotherId)

const bigNumber = 233433323233442n


// Reference (Non Primitives)

// Array , Objects , Functions

const heros = ["shaktiman", "naagraj", "doga"]

let  myObj ={
    name: "navneet ",
    age : 22,
}

const myFunction = function(){
   // console.log("Hello World")
}

//console.log( typeof bigNumber)
//console.log(typeof outsideTemp)


//************************************************************** */

// Stack (Primitive) , Heap (Non - Primitive)

let myYoutubename = "NavneetSinghdotcom"

let anotherName =  myYoutubename

anotherName = "chaiaurcode"

// console.log(myYoutubename)
// console.log(anotherName);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}


let userTwo = userOne;

userTwo.email ="navneetsinghit25@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


// jitne bhi hmare primitive values hai ye jate hai stack k andar aur stack k andar jo bhi cheez lenge ti uska ek copy hi milta hai

// aur non - prmitives data types -- heap me jate hai aur heap me jo bhi rakhte hai to uska reference milta hai --- mtlb jo bhi value update krte hai wo original value me changes hota hai


