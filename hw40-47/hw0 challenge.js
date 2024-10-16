/*
  Array Challenge
*/

let zero = 0;//2

let counter = 3;//4

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

console.log(my.slice(zero, ++counter).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(++zero, counter - zero).reverse()); // ["Elham", "Mazero"]

console.log("El" + my[zero].slice(++zero)); // "Elzero"