// array ----

const myArr = [0,1,2,3,4,5,true, "Navneet"] // koi sa bhi value de skte hai javascript me

// resizabele -- mixed  hote hai ---- zero - based indexing ----- agar copy operation krenge to shalllow copy bnata --- same reference to original array---

const myHeros = ["shaktiman", "Iron Man"]

const myArr2 = new Array(1,2,3,4,5,6);

// console.log(myArr[1]);

// array methods


// myArr.push(6);
// myArr.push(8);
// myArr.pop()

// myArr.unshift(9);  --- ye starting me elements ko add krta hai
// myArr.shift();  --- ye starting se element ko remove krta hai

// console.log(myArr.includes(9));  // ye checkkrega ki hai element ya nhi --- true ya false return krega

// console.log(myArr.indexOf(9));  // ye index btayega aur aagr element nhi hai to --- -1 return krega

const newArr = myArr.join(); // ye type change kr deta hai -- integer se string kr deta hai

// console.log(newArr)


// console.log(myArr);

// slice , splice 

console.log("A", myArr);

const myn1 = myArr.slice(1,3)  // gives section of array 1 ko include krega 3 ko nhi krega
console.log(myn1)

console.log("B", myArr);

const myn2 = myArr.splice(1,3) // isme range k element ko delete kr deta hai
console.log("C", myArr);
console.log(myn2);


