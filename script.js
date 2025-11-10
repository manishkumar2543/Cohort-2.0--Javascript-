// Pure function ek aisa function 📢
// same input = same output
// koe side effect nhi hoga

// let a=12;
// function abc(val){
//     console.log(val+2)
// }
// abc(4)


// Impure function📢
// same input = different  ouput ho skt hai 
// koe na koe side effect ho skt hai

// let a=12;
// function abc(val){
//     // console.log(Math.random() + val);
//     a=Math.random() + val;
//     console.log(a)
// }
// abc(12)
// abc(12)

// Global scope 📢  ye pure code accessable krga
// let a=12; 

// Function scope 📢 ye apne function me access krega 

// function abc(){
//     let b=132;
// }

// - Understanding `Closures` `scoping rule`

// Closure :- ek function hai jo return krt hai function but returning function
// jo hai wo parent function ka koe variable use karega.

// function abc(){
//     let a=12;
//     return function(){
//         console.log(a)
//     }
// }

// abc()()

// closure > HOF ek hi hot hai💡


// What are Arrays in javascript and how to Create and Array.

// Array :- ek se jaada member rakhne ki jagh 

// let arr= [1,2,3,4,5,6];
// console.log(arr[2])


// Hoe to Create Array 💡

// let arr=[];
// let arr2=new Array();
// console.log(arr,arr2)

// -Understand Hoe to Accessing Elements in Array.
// let arr= [1,2,3,4,5];
// console.log(arr[2])

// funtion on Array - push, pop , shift, unshift, indexOf, arry destructuring, filter, some, map, reduce , spread operator , 
// slice, reverse, sort, join , toString

// let arr= [1,2,3,4,5];
// arr.push(6);
// console.log(arr)


// Pop  💡

// let arr= [1,2,3,4,5];
// arr.pop();
// console.log(arr)


// shift - 💡

// let arr= [1,2,3,4,5];
// arr.shift();
// console.log(arr)

// unshift 💡
// let arr=[1,2,3,4,5];
// arr.unshift(0)
// console.log(arr)


// indexOf 💡
// let arr=[1,2,3,4,5];
// arr.indexOf(3)
// console.log(arr)


//  Array Destructuring 

// let arr=[1,2,3,4,5];
// let [a,b]=arr;
// console.log(a,b)

// let arr= [1,2,3,4,5];
// let [a, ,b]=arr;
// console.log(a,b);


// filter 💡
// let arr = [1,2,3,4,5];
// let arr2 = arr.filter(function(val){
//     return val < 3; 
// })
// console.log(arr2)


// some , map , reduce  -> skip💡💡


// spread operator 💡💡

// let arr=[1,2,3,4,5];
// let arr2=[...arr];
// console.log(arr2)


// - lterating Over Arrays using :- for Loop , forEach;

// for Loop 

// let arr = [1,2,3,4];
// for(let i=0; i<4; i++){
//     console.log(arr[i])
// }

// ForEach 💡

// let arr=[1,2,3,4,5];
// arr.forEach(function(val){
//    console.log(val)
// })


// -Understanding what are Objects in js

// let obj={
//     name :"Manish",
//     age:22,
//     email: "manis@gmail.com"

// };
// console.log(obj)


// Creating Objects, Accessing Properties, Deleting Property and Nested Objects.

// let obj={
//     name :"mansi",
//     age:22,
// }
// // Accessing Properties💡
// // console.log(obj.name)

// delete obj.name;

// Nested Objects  💡

let obj={
    name:"Manish",
    socials:{
        instagram: "djdhs",
        Facebook:"ufjendkww",
    }
}
