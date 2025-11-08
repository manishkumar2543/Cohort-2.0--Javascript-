
// Hoisting 📢



// console.log(a);
// var a=12;

// but ye let ke sath possiable nhi error dikhayega
// console.log(a)
// let a=20;

// - Parameters in Javascript - Destructured, rest, Dedault,📢📢

// Destructured👈

// function abc({name,age}){
//     console.log(name,age)
// }
// abc({name:"manish",age:22,city:"siwan"})

//  rest 👈

// function abc(...rest){
//     console.log(rest)
// }
// abc(1,2,3,4)

// function abc(a,b,c,...rest){
//     console.log(a,b,c,rest)
// }
// abc(1,2,3,345678)

// Default 👈

// function abc(a=10, b=0, c){
//     console.log(a,b,c)
// }
// abc(100,200,300)


// - Arguments in javascript - Positional, Default, spread;

// Positional:- kuch n kuch value diya jata hai;
// function abc(a,b,c,d){
//     console.log(a,b,c,d);
// }
// abc(1,2,3,4)

// spread 👈

// function abc(a,b,c,d){
//     console.log(a,b,c,d);
// }
// let arr=[1,2,3,4];
// abc(...arr);

// Classic function,Nested function, (function wihtin function), scope chain in js📢📢

// Classic fnc 👈👈

// function abc(){
   
//     function cda(){
//         console.log("hey bro")
//     }
//     cda();
// }
// abc()


// Scope Chain 👈👈

// let a=10;
// function abc(){
//     let b=12;
//     function def(){
//         console.log(b)
//     }
//     def();
// }
// abc();


// - Understanding Immediately Invoked function Expression(IIFE)📢📢

// (function(){
//     console.log("hey")
// }) ();


// - Arrow function, Fat Arrow, Anonymous , High order, callback, first Class , Pure fnc, Impure fnc;📢📢

// Arrow Fnc 👈
// syntax
// ()=>{
//     // code
// }

// ()=>{} ab ye fat arrow ek variable me save krnge
// let fnc=()=>{
//     console.log("Hey hey ehy")
// };
// fnc();


// Anonymous :- jis function nam n ho👈

// function (){

// }

// Higher Order Function :- ek aisa function jo ki return kr de ek or function👈👈👈
// Woo function accept karle ek aur fnc parameter mein.


// function abc(){
//     let a=10;
//     return function(){
//         console.log(a)
//     }
// }
// abc()()

// Ya tooooo👈

// function abc(a){
    
// }
// abc(function(){
    
// })


// CallBack function :-    📢📢

// function abc(a){

// }
// abc(function(){

// })


// First Class Function :- isme hm fnc ko bhi value bna kr bhej skte hai as a varible📢📢📢

// function abc(val){
//     val();
// }
// abc(function(){
//     console.log("First Class function")
// })

// function abc(a,b){

// }
// abc(function(){

// },2)