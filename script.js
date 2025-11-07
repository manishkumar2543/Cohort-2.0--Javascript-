// 17. Print only first 3 odd number from 1 to 20 Use loop. 
// stop with break after 3 odd prints.

// let counter=0;
// for(let i=1; i<=20; i++){
//     if(counter === 3) break;
//     if(i % 2 !==0){
//         counter++;
//         console.log(i)
//     }
    
// }
// console.log(`count=${counter}`)

// 18. Ask user 5 number. Count how many are positive Use loop + condition + counter

// let count=0;
// for(let i=1; i<=5; i++){
//     let num= +prompt("enter number")
//     if(num > 0){
//         count++;
//     }
// }
// console.log(count)


// 19. ATM simulator - Allow 3 withdrawals start with 1000 blance. Ask withdrawal amoutn 3 times.
// if enough balance - deduct
// Else - print "Insufficient balance"

// let blance=1000;
// let amt= +prompt("amout btao");
// if(blance >= amt){
//     blance -= amt;
// }
// else{
//     console.error("Insufficient balance")
// }
// console.log(blance)

// let balance=1000;
// let counter=0;
// let flag=false;
// while(balance > 0 && counter !== 3){
//     let withdraw= +prompt("kitna paisa withdraw karna hai");
//     counter++;
    
//     if(withdraw <= balance) balance -=withdraw;
//     else{
//         flag=true;
//         break;
//     }
    
// }
// if(flag === true){
//     console.log("inufficent balance")
// }
// console.log(`Balance: ${balance}`)


// Recursion in Javascript📢
//  ye khud under hi call krta hai

// function abc(){
//     console.log("hey")
//     abc();
// }
// abc();

// function abc(n){
//     if(n === 0) return
//     console.log(n)
//     abc(n-1);
// }
// abc(5)


// Loop control statements -[`break , continue`]

// for(let i=1; i<=5; i++){
//     if(i === 3){
//         break;
        
//     }
//     console.log(i)
    
// }

// for(let i=1; i<=10; i++){
//     if(i ===5 ){
//         continue;
//     }
//     console.log(i)
// }

// Function :- Mera code jab chlega tb jab bolenge tb chalega.
// or main apne code jite bhar bhi chla skta hu.

// function doSomething(name,age,email){
//     console.log(name,age,email)
// }
// doSomething("mansih",23, "meamnish@gmail.com")


