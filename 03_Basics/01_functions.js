
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// jab function ko define krte hai na tb usko bolte hai parameters -- jb hum usko call krte hai us time usko bolte hai arguments

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage()) --- jb hum koi value hi pass nhi krte to wo aata hai undefined-- to uske liy ehum if lgake check kr lete hai-- ki undefined hai ya nhi 

// agar hum chahte hai ki koi value nhi mili to hum default value de skte hai to wo kabhi undefined nhi dega


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// ye teen ... ko hi rest operator bolte hai 

// console.log(calculateCartPrice(200, 400, 500, 2000)) -- val1-200, val2 - 400, num1-[500,2000]
// to output hoga --- [500,2000]

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));