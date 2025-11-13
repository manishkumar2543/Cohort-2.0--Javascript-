// 1. Write a higher-order function runTwice (fn) that takes another function and 
// executes it two times.

// function runTwice(fn){
//     fn();
//     fn();

// }
// runTwice(function(){
//     console.log("helo")
// })

//2. Create one pure function that always returns the same output for given input, and one impure
// function using a global variable.

// pure fn

// function abcd(a,b){
//     console.log(a+b)
// }
// abcd(1,2);

// let global=0;
// function impure(a){
//     global++;
//     console.log(a+global);
// }
// impure(2);
// impure(2);


// 3. Write a function that uses object destructuring inside parameters to extract and 
// print name and age.

// function abcd(obj){
//     // console.log(obj)
//     console.log(obj.name)
// }
// abcd({name:"mansh", age:12})

// function abcd({name,age}){
//     console.log(name,age)
// }
// abcd({name:"mansih",age:12})

// 4. Demonstrate the difference between normal function and arrow function when used as object
// methods (this issue).
 
// let obj={
//     name:"manish",
//     fnc: function(){
//         console.log(this)
//     },
//     // agr hm obj me arrow fnc use krte hai window ka value ayega💡
//     fnc2: () => {
//         console.log(this)
//     },
// };
// obj.fnc();
// obj.fnc2();


// jab hm use krnge obj ke undr fnc ke fnc to arrow fnc ko aise use krnge 
// let obj={
//     name:"manish",
//     // normal function ke undr hm arrwo fuction hi use krnge
//     fnc: function (){
//         let fnc2= ()=>{
//             console.log(this)
//         };
//         fnc2();
//     },
// };
// obj.fnc();
// obj.fnc2();

// 5. Given an array of number, use map() to create a new array where each
// array where each number is squared.

// let arr=[1,2,3,4];
// let arr2=arr.map(function(val){
//     return val * val
// })
// console.log(arr2)


// 6. Use filter() to get only even numbers from an array.

// let arr= [1,2,3,4,5,6,7,8,9];
// let arr2=arr.filter(function(val){
//     return val % 2===0;
// })
// console.log(arr2)

// 

// 7. Use reduce () to find the total salary from an array of number [1000,2000, 3000]

// let salary=[1000,2000, 3000];
// let total=salary.reduce(function(acc,val){
//     return acc+val;
// },0)
// console.log(total)

// 8. Create an array of names and use some() and every() to test a condition
// (e.g., all names longer than 3 chars)

// let names=["avi","harsh","nishi","sunil","sonu"];
// let findNam=names.some(function(val){
//     return val.length > 3;
// })
// console.log(findNam)

// let names=["manish","sonu","aman"];
// let findNam=names.every(function(val){
//     return val.length > 5;
// });
// console.log(findNam);

// Create an object user and test the behavior of object.
// freeze() and Object.seal() by adding/changing keys.

// let user={
//     name:"manish",
//     age:22,
//     city:"Bhopal",
// };

// // ab mera user frezz ho chuka hai ab kam nhi krega change bhi ho skta hai💡
// Object.freeze(user);
// user.name="amaman"

// seal Use💡
// let user = {
//     name:"Manish",
//     age:22,
    
// };
// Object.seal(user);
// user.name="Aman kumar";



// 9. Create a nested object (user-address- city) and access the city 
// name inside it.
// let obj={
//     user: {
//         name: "manish",
//         address: {
//             city: "siwan",
//         },
//     },
// };
// console.log(obj.user.address.city)


// sort type 💡
// let {city}=obj.user.address;
// console.log(city)

