// primitive data types
// basically they are stored as a variable
// non primitive data types
// they are stored as a reference to a variable

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        BigInt  =>  bigint
//        Symbol  =>  symbol

//        null  => object
//        undefined  =>  undefined
// example
// let a=BigInt(10);
// console.log(typeof a);


// 2) Non-primitive Datatypes

//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object




let temp=["a","b","c"];
console.log(typeof temp);

//object
const myobj={
    name:"anil"
}
console.log(typeof myobj);
//object

const myfun=function(){}

console.log(typeof myfun);
