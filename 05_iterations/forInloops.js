const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// for in loop --- objects aur array don pe chalta hai
// jyadatar objects ko iterate krne k liye use hota hai

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]); -- yha pe value dega -- agar hum direct key ko print kraye to -- index print krega
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

// map iteratable nhi hai --- for in loop k through

// objects k uper -- hum for in loop jyada lgate hai
// arrays k uper -- hum for of loop jyada lgate hai