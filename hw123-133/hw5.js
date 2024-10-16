let myName = "Elzero";

console.log([...myName]);

console.log(myName.split(""));

console.log(Array.from(myName));

let arr = [];
for (let i = 0; i < myName.length; i++) 
    arr.push(myName[i]);
console.log(arr);   

console.log(Object.assign([], myName));
