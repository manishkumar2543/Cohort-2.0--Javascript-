// Data Types📢

// add comments
// float
// number
// String
// null
// boolean
// array
// object
// symbol - will learn when will see object in detail
// undefined
// NaN
// Infinity
// relative and primitive datatype in js.


// 📢 add comments :- double // kre ke lgate ise error kuch nhi ata hai.
// Ex :-- hdhjjdjjdjdjjdjdjdjjdjdj  (but nor error).

// float : -- 12.3 , 23.3%
// number :-- 123- integer
// string :- manih
// null :-  jab apke apke pas koe value nhi hotaa dene ke liye to null use hota hai.
// Ex:- let a=null
// console.log(null); 
// output :- null

// boolean :- false,true

// array : --  ek se jada value add krne ke liye hai.
// Ex: --   [1,2,3,4];
//    ["harsh", "shyam", "ravi"];
//     [1,2,"harsh",true,{},[],class Animal {}]
// Object :--  ek se jada properties ek bande ki hold krne ke liye hai.
// object ek bande ki kai sari cheejo ke liye hota hai.
            // Ex:-- just like information
                //    {
                //     name:"Manish",
                //     age:23,
                //     email: "harsh@email.com"
                //    }
// symbol :-  will learn when we will see objects in detail.

// undefind :- jab koi variable banaya but usey koe value nhi di.
// Ex:--
        // var a;
        // console.log(a)

// Nan :- koe number ke sathh aisa operation kiya jo ho nhi skta hai.
// Ex:-- jo possible n ho.
// let a= "mans"*2;
// console.log(a)
// output : Nan

// infinity :-  infinity
//  let a= 1/0;
//  console.log(a)

// relative and primitive datatype in js.
// Ex:-- inki value ko direct copy nhi kr skte hai
var a= [1,2,3,4];
// or barket value ko iss trh se copy nhi kr skte hai
// b me a ka copy nhi gya hai b me a refernce gya hai
var b=a;
b.pop()
console.log(b)
console.log(a)
// b me change krne pr a me bhi change ho rha hai to hm inki real value ko change nhi kr skte hai.

// reference vali value :--  array object function.
// primitives - number booleans strings null undefined Nan infinity symbol BigInt

// Primitives :- jinki value direct copy kr skte hai
// reference - jinki value direct copy nhi kr skte hai