const accountId = 144553  //--value ko lock kr deta ise change nhi kr skte 
let accountEmail= "navneet@gmail.com"  
var accountPassword = 123456
accountCity ="Jaipur"
let accountState;

// there are two types of varable declaration in js -- let and var -- in current scenerio -- let is mostly used in programming
// accountId = 2 --- not allowed

accountEmail = "hc@hc.com"
accountPassword = 21562
accountCity = " Bengaluru"

console.log(accountId);

/* 
Preferred not to use var 
because of issue in the block scope and functional scope


*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
