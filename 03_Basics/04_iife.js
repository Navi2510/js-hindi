// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // yha pe semicolon use krte hai kyuki us function ko rokne k liye semi colon lgate hai 

// () --  ye first wala hai function ka definition hai
// () -- ye dusra wala parenthesis hai wo --function execution k liye hai

// ye iffi isliye use hota -- global scope k pollution ko htanee k liye hum iife ka use krte hai

((name)=>{
    // UNname IIFE -- With Parameter
    console.log(`DB CONNECTED TWO ${name}`);
})('Navneet');


//jb hum ek se jyada iife likhte hai code me to --- usko execute krne k liye semi- colon use krna jaruri hota hai -- ek iife k bad

