const user = {
    username :"hitesh",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
// console.log(this); // yha pe empty object dega node me --- aur yhi window me hota to -- to ye window object return krta 



// function chai(){
//     let username = "Hitesh"
//     // console.log(this.username); --- ye undefind print krega
// }

// chai()


// const chai = function(){
//     let username ="hitesh"
//     console.log(this.username);  -- ye bhi undefined dega isko bhi nhi pta ki this andar kya hai
// }


const chai = ()=>{
    let username ="hitesh"
    console.log(this); // yha pe bhi undefined dega 
}

// --------Arrow Function --------------

// const addTwo = (num1, num2) =>{
//     return num1+num2
// }


// const addTwo = (num1, num2) => num1+num2   // yha pe return likhne ki jarurat nhi 
const addTwo = (num1, num2) => (num1+num2 )  // agar small bracket me likhe to return keyword nhi likhna pdega --- agar curly braces me likhe to return keyword likhna pdega

// jisme return nhi likhte usko implicit return khte hai --- aur jisme return likhte hai usko explicit return khte hai

// Hum Parentheses use isliye krte hai taki object ko return kra ske ---
const addTwo1 = (num1, num2) =>({username : "Navneet"})

// const myArray = [2,5,3,7,8]
// myArray.array.forEach(element => {
    
// });
