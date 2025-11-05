//  Level 1 - Pure Beginner Practice
// 7. Ask users age and check if eligible to vote
// let age=20;
// if(age > 18){
//     console.log("You can vote")
// }
// else{
//     console.log("you can not vote")
// }

// 8. Print multiplication table of 5

// for(let i=1; i<=10; i++){
//     console.log(`5 x ${i} = ${i*5}`)
// }

// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.

// let count=0;
// for(let i=1; i<=15; i++){
//     if(i > 8){
//         count++;
//        console.log(i)
//     }
// }
// console.log(count)


// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.

// let pss= prompt("dalo password");

// let password="Hello";
// if(pss=== password){
//     console.log("correct password")
// }
// else{
//     if(pss===null){
//         console.error("likh to le")
//     }
//     if(pss.trim()===""){
//         console.log("bakchodi mt kr")
//     }
//    else{
//     console.log("not cooret")
//    }
// }


// let age=prompt("age btao");

// if(age === null){
//     console.log("you canncelled it.");
// }
// else{
//     if(age.trim()=== ""){
//         console.error("please write something");
//     }
//     else{
//         age=Number(age);
//         if(isNaN(age)){
//             console.error("please enter number")
//         }
//         else{
//             if(age < 0)  console.error("aamnaya age")
//             else if(age >= 18) console.log("you can vote")
//             else console.log("cant vote")
            
//         }
//     }
// }


//          While Loop  📢📢👈
// syntex👈
// start;
// while(end){
//  code.....
//   change
// }

// let i=1; 
// while(i<11){
//     console.log("helo -",i)
//     i++;
// }

// let pass=prompt("tum ps do");
// while(pass !=="stop"){
//     pass=prompt("tum ps do");
//     console.log(pass)
// }

// 11. Allow only 3 attempts to enter correct password if user gets
// it right early, stop. if not "Account locked"

let attempts=0;
let khulgya=false;
let pass="manish";


let password=prompt("password btao");
attempts++;

if(password === pass) khulgya=true;

while(password !== pass){
    if(attempts === 3){
        console.error("Account locked")
         break;
    }
   
    password=prompt("password btao");
    if(password === pass) khulgya=true;
    attempts++;
}
if(khulgya === true) console.log("open accont")
