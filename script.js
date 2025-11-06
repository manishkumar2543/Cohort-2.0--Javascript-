
//              Level 2 – Slightly Tougher but Logical📢
// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".

// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.

// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.

// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”



// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

// let attempts=0;
// let pass="manish";
// let password=prompt("password batoa");
// attempts++;
// while( attempts < 3 && pass !== password){
//     prompt("password batoa");
//     attempts++;
//     if(attempts == 3 && pass !== password){
//         console.error("Account Locked")
//     }
//     else{
//         console.log("Done")
//     }
    
// }



// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".


// let words=prompt("type words");
// let count=0;

// while(words !== "stop"){
//     if(words === "yes")count++;
//     words=prompt("type words");
// }
// console.log(`total time yes count ${count} `)


// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

// for(let i=1; i<=50; i++){
//     if(i % 7 ===0){
//         console.log(i)
//     }
// }


// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum

// let sum=0;
// for(let i=1; i<=30; i++){
//     if(i % 2 !==0){
//         sum+=i;
//     }
   
// }
// console.log(sum)


// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.

// let num= +prompt("enter num");

// while(num % 2 !== 0){
//     num= +prompt("enter num");
// }



// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.

// let start= +prompt("start");
// let end= +prompt("end");
 
// if(start > end){
//     console.error("start can not be bigger than end")
// }

// for(let i=start; i<=end; i++){
//     console.log(i)
// }


// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

// let counter=0;
// for(let i=1; i<=20; i++){
//     if(counter === 3)break;
//     if(i % 2 !==0){
//         console.log(i);
//         counter++
//     }
// }