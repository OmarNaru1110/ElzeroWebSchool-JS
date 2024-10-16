let nums = [2, 12, 11, 5, 10, 1, 99];

let res = nums.reduce((acc, el)=> el % 2 == 0? acc * el : acc + el, 1)

console.log(res);
// 500