let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log(numsOne.concat(numsTwo));
console.log([...numsOne, ...numsTwo]);
let arr = [];
for (let i = 0; i < numsOne.length; i++) 
  arr.push(numsOne[i]);
for (let i = 0; i < numsTwo.length; i++) 
    arr.push(numsTwo[i]);
console.log(arr);