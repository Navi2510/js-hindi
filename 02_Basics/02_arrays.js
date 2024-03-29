const marvel_heros = ["Thor","Ironman","spiderman"];

const dc_heros =["superman", "flash","Batman"];

// marvel_heros.push(dc_heros); // arrays can take anything --- so ye array ko ek element ki tarah insert kr diya --


// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // ab usko fetch krne k liye humko index k ander index likhna pdta hai


// const allHeros =marvel_heros.concat(dc_heros); // concat hme nya array return krta hai
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros];  // spread operator hai ise ya rakhna hai
console.log(all_new_heros);


const another_array = [1,2,3, [4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity) // ye method saree depth k array k ek array me convert kr deta hai--- aur infinity k jagah hum depth de skte hai --- mtlb 3, 4,aise numerics de skte hai 


console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name: "Hitesh"}));   // interesting this will didnt convert it into --- array because it is object 


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
