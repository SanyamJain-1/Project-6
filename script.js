// let sum = add(2,3,5,6,7,8,9);

// function add(...numbers){
//     let total = 0;
//     for(let num of numbers){
//         total += num;
//     }
//     return total;
// }

// Array methods
// 1. forEach()
// 2. map()
// 3. filter()
// 4. reduce()

let myArray = [1,2,3,4,5,6,7];

myArray.forEach((e)=>{console.log(e)});

console.log('MAP');
let arr = myArray.map(squared);
function squared(e){
    return Math.pow(e,2);
}
arr.forEach((e)=>{console.log(e)});

console.log('Filter');
let arr2 = myArray.filter((e)=>(e%2)==0)
arr2.forEach((e)=>{console.log(e)});

console.log('reduce');
let sum = myArray.reduce((e,total)=>{
    total += e;
    return total;
})
console.log(sum);

console.log('Sort');
let unsortedArray = [23,56,28,9,110,7,34,74];
unsortedArray = unsortedArray.sort((x,y)=>y-x);
unsortedArray.forEach((e)=>{console.log(e)});

// Immediately Invoked Function
const summary = (()=>console.log('Hello'))();
summary;

