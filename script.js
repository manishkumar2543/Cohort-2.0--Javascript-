// Level 1- Pure Beginner Practice
// 1. Print number from 1 to 10.
// Loop from 1 to 10 and print each number.

// for(let i=1; i<=10; i++){
//     console.log(i)
// }

// 2. Print only even number from  1 to 20
// Use a loop and condition to print only even ones.

// for(let i=1; i<=20; i++){
//     if(i % 2 === 0){
//         console.log(`${i} - even`)
//     }
// }

// 3. Print number from 10 to 1
// Reverse loop with a decrement.

// for(let i=10; i>0; i--){
//     console.log(i)
// }

// 4. Print the word "Yes" 5 times repeat using a loop.
// for(let i=1; i<=5; i++){
//     console.log("Yes")
// }

// 5. Print whether numbers from 1 to 10 are even or odd for each number
// check;

// for(let i=1; i<=10; i++){
//     if(i % 2 === 0){
//         console.log(`${i}- even`);
//     }
//     else{
//         console.log(`${i}-odd`)
//     }
// }


// 6. Ask user for a number and say if it's positive or negative

// let num= +prompt("enter number");
// if(num>0){
//     console.log("postive number")
// }
// else{
//     console.log("negitive number")
// }

// 7. Ask users age check if eligible to vote 

// let age=20;
// let age=12;
// if(age >= 18){
//     console.log("Eligible");
// }
// else{
//     console.log("not eligible")
// }

// trim() -  ye age or piche ka space hata ta hai

// let age=prompt("age batao");
// if(age === null){
//     console.error("you cancelled it");

// }
// else{
//     if(age.trim() === "");{
//         console.error("bsdke dhang se likh le")
//     }
// }

let age= prompt("age batao");
if(age === null){
    console.error("you cancelled it")
}
else{
    if(age.trim() === ""){
        console.error("bhai dhang se likhle..")
    }
    else{
        age=Number(age.trim());
        if(isNaN(age)){
            console.error("bhai please number dede..")
        }
        else{
            console.log("confirm ye number hai")
        }
    }
}