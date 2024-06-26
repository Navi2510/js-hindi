// objects singleton

// const tinderUser = new Object(); -- ye bhi object declaration hai 

const tinderUser = {} // -- ye bhi object declaration hai

tinderUser.id ="123abc"
tinderUser.name ="Sammy"
tinderUser.isLoggedIn = false;

// console.log(tinderUser);


const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Hitesh",
            lastname : "chaudhary"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);


// how to combine objects ---

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = { obj1, obj2} --- object k andar object aa jayega
//  const obj3 = Object.assign({}, obj1, obj2);  // isme ek optional parameter hai jo gaurantee deta hai ki ye --- object hi return krega -- ye parantheses ek target hai --aur baki sb source hai 

//  console.log(obj3);


// to ye wala assign method hum kam hi use krne wale hai--- to hum use krenge spread operator ko

const obj3 = {...obj1, ...obj2}
console.log(obj3);

// jb databse se objects aate hai -- tb arrays of objects aate hai tb kaise handle krenge----

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {

    },{},{}
];

users[1].email;

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // ye check krke btata hai ki y property exist krti hai object me ya nhi 


// object destructuring -----

const course ={
    coursename : "JSinHindi",
    price : "999",
    courseInstructor : "hitesh"
}

// course.courseInstructor


const {courseInstructor : instructor} = course

// console.log(courseInstructor);
console.log(instructor);


// mostly value JSON format me aati hai ---- object k form me

// {
//     "name" : "Navneet",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }

//kabhi kabhi api jo hota hai array of object k format me hota hai
