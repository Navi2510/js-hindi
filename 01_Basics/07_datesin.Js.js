// Dates
let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

console.log(typeof myDate);

// let createMyDate = new Date(2023,0,23);
// let createMyDate = new Date(2023,0,23,5,3);
let createMyDate = new Date("2023-01-14");
// console.log(createMyDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp.getTime())
// console.log(myTimeStamp.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long"
})









