// Question Practices📢✍💡

// 1. Write a function sayHello () that prints "Hello Javascript".
// function sayHello(){
//     console.log("Hello javascript")
// }
// sayHello()

// 2. Create a function add(a,b) that returns their sum and log the result.
//   function add(a,b){
//     return a+b;
//   }
// let ans=add(1,2);
// console.log(ans)

// 3. Write a function with a default parameter name="Guest" that prints "Hi <name>".

// function def(name="Guest"){
//     console.log(`Hii ${name}`)
// }
// def()

//4. Use rest parameters to make a function that adds unlimited number.
 
// function addUnlimited(...num){
//     let sum=0; 
//     for(let i=0; i<num.length; i++){
//         sum+=num[i];
//     }
//     return sum
// }
// let result=addUnlimited(1,2,3)
// console.log(result)

// function addUnlimited(...nums){
//     let sum=0;
//     nums.forEach(function(val){
//         sum+=val;
//     })
//     return sum
// }
// console.log(addUnlimited(1,2,3,4))

// function addUnlimited(...nums){
//     let ans= nums.reduce(function(acc,val){
//         return acc+val
//     },0)
//     console.log(ans)
// }
// addUnlimited(1,2) 

// function addUnlimited(...nums){
//     let ans= nums.reduce(function(acc,val){
//         return acc*val
//     },1)
//     console.log(ans)
// }
// addUnlimited(1,2,3) 


// 5. Create an IIFE that prints "I run instantly!".

// (function(){
//     console.log("i run instantly")
// })();

// 6. Make a nested function where the inner one prints a variable from the outer one.

// function parent(){
//     let a=12; 
//     function child(){
//         console.log(a);
//     }
//     child();
// }
// parent();

// 7. Create an array of 5 fruits. Add one at the end and remove one from the beginning.

// let arr=["apple","grapes","banana"];
// arr.push("pear");
// arr.unshift("orange");
// console.log(arr)

//8. Use a for loop to print all elements of an array.

// let arr=[1,2,3,4,5];
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// 9. Create an object person with keys name ,age ,city and print each keys value.

// let obj={
//     name:"Manish kumar",
//     age:22,
//     city:"Siwan"
// }
// for(let key in obj){
//     console.log(obj[key])
// }

// 10. Use setTimeout() to log "Time up!" after 2 seconds
// setTimeout(function(){
//     console.log("Time's up")
// },2000)