var element = document.querySelector("[id = elzero]");
console.log(element.innerHTML);
var element = document.querySelector("[class = element]");
console.log(element.innerHTML);
var element = document.querySelector("[name = js]");
console.log(element.innerHTML);
var element = document.querySelector("div");
console.log(element.innerHTML);

var element = document.querySelectorAll("[id = elzero]")[0];
console.log(element.innerHTML);
var element = document.querySelectorAll("[class = element]")[0];
console.log(element.innerHTML);
var element = document.querySelectorAll("[name = js]")[0];
console.log(element.innerHTML);
var element = document.querySelectorAll("div")[0];
console.log(element.innerHTML);

var element = document.getElementById("elzero");
console.log(element.innerHTML);
var element = document.getElementsByClassName("element")[0];
console.log(element.innerHTML);
var element = document.getElementsByTagName("div")[0];
console.log(element.innerHTML);
var element = document.getElementsByName("js")[0];
console.log(element.innerHTML);

var element = document.body.children[0];
console.log(element.innerHTML);
