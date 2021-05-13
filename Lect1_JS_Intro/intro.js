console.log("Ganesha!!!!!!!!!");

// let can take any type of value but its block scoped

let a = 10;
let b = "Hello"
let c = 'a'
let d = undefined
let e = true

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

if(true){
    let a = 40;
    console.log("a in diff block "+a);
}

console.log(a);


// const is block scoped and cant be change;

const x = 30;
console.log(x);
//x = 40; // throws an error
console.log(x);


// diff b/w == and ===

console.log(10 == "10"); //true because no check of data type
console.log(10 === "10"); //false because check of data type


// Objects => key value pairs

data = {
    name: "Manthan",
    place:"USA",

    movies:{                            // obj inside obj
        name: "Captain America",
        place:"Queens"
    },

    val : [1,2,3,4,5,6,7,8,9]           // array inside obj
}
// Dot notation => literal check
console.log(data.name);
console.log(data.place);
console.log(data);


let key = "name"


// Block notation
console.log(data[key]);



data.key  = "I'm a new value!"
console.log(data);

//value can be same ,key should be unique
data.name = "Manthuu"

console.log(data);



// Arrays can take any type of values ,data types, obj,array in same array

let values = ["Ganesha",data,{},false,1,[1,2,3,4,5,6,7,] ]; // here array inside array bhi h
console.log(values);

console.log(values[5][3]) // array k 5 th ele ka 3rd ele print hua h 


// for getting all keys of obj

for(let keys in data){
    console.log(keys);
}