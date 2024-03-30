//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// node me scope alag hai aur --- inspect krne pe browser me scope alag hai

// var jo hota hai uska scope global hota hai--- use khi bhi access kr skte hai-- thats whyy we avoid var keyword for variable declaration

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))  // ye phle access kr lega 

function addone(num){
    return num + 1
}



addTwo(5) // -- ye acces nhi krega -- isko ek variable me rakh diye hai--isliye hum isko phle access nhi kr skte 

const addTwo = function(num){
    return num + 2
}