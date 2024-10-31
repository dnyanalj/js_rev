// stack vs heap memory
// all primitive datatypes will be stored in stack
// and all non primitive datatypes will be stored in heap

// in stack copy is stored
// and in heap reference is stored
let a=10;
let b=a;
b++;

console.log(a);
console.log(b);
// here changing b do not affects a


let myobj={
    name:"dnyanal"
}
let temp=myobj;
temp.name="ganesh";

console.log(temp);
console.log(myobj);

// changing temp does change myobj because both are referencing 
// and not storing copy




