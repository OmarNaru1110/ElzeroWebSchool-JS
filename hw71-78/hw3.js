let arr = [["e", "r"],"E", "l", "z", ["e", "r"], "o"];
let res = arr.reduce((acc, curr) => {
    if(curr instanceof Array) 
        return acc + curr.join("");
    return acc + curr;
},"");

console.log(res);
// Elzero