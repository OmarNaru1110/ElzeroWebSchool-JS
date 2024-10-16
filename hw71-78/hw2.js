let str = "EElllzzzzzzzeroo";

let res = str.split("").filter((el, idx, arr)=>{
    return el !== arr[idx+1];
}).join("");
console.log(res);
// Elzero