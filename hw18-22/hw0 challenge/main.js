/* challenge 1 */
let a = 10;//12
let b = "20";//22
let c = 80;//81
//           11    20     80     11
console.log(++a + +b++ + +c++ - +a++); //100
//           13  -20    81    -13    13
console.log(++a + -b + +c++ - -a++ + +a);//100
//          81    21   13    21     22   13  12     1
console.log(--c + +b + --a * +b++ - +b * a + --a - +true); //100

let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(-d * +e); //2000
console.log(++e * ++g + -d + ++f); // 173