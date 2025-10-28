// var let const
// consle... prompt alert
// string kya hoti hai
// slice template -string (template literals ``) splite replace include
// statements expression


// var let const 👈
// var -> function scope
// let, const -> block scope
// const -> constant value (cannot be reassigned)
// let -> can be reassigned

// var name = "John";
// name = "Doe";
// console.log(name); // Doe

// let age = 25;
// age = 26;
// console.log(age); // 26
// const pi = 3.14;
// // pi = 3.1415; // Error: Assignment to constant variable.
// console.log(pi); // 3.14

// {
//     var city = "New York";
//     // var pure function scoped hai to yeh bahar bhi accessible hai
// }
// console.log(city); // New York

// {
//     let country = "USA";
//     console.log(country); // USA
// }
// console.log(country); // Error: country is not defined


// console.log("heyheyhey");
// console.info("heyeyeyebase");
// console.warn("bewarebeware");
// console.table({name: "John", age: 30});

// Kuch kuch browsers bas console.info ko thode alag tareeke se show krte
// unke aage ek i sign aajata hai.


// let users=prompt("name ")
// console.log(users)


// alert
// alert("18+ adult")


// slice👈
// let nam="manish thora acha se"
// console.log(nam.slice(6,12))


// `` template strings👈

// string 
// let a="manish 2+2"
// console.log(a)

// let b="mansih"+2+2;
// console.log(b)
// mansih22

// template strings👈
// let c=`manish ${2+2}`;
// console.log(c);
// manish 4

// split 👈👈

// let name="manish kumar";
// console.log(name.split(` `))

// let name="mansih bhai kaise ho";
// console.log(name.split('h'))
// [ 'mansi', ' b', 'ai kaise ', 'o' ]

// Replace 👈 -- ise sirf pahila word replace hoga
// //  
// let name="manish bhai kaise ho";
// console.log(name.replace('h','g'))

// replaceAll --> ise pura word me ka replace hoga✔👈
// let name="manish molhtra sing";
// console.log(name.replaceAll('m','w'))

// indclue --> ye check krta hai ki exit krta hai y nhi👈

// let name="manish";
// console.log(name.includes('m'))


// statements ---> full line ka code jise last mein(;)

// expressions
// 12+33=ye value produce krega to isko expression bolenge