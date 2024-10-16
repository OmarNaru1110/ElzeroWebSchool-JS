let one = document.getElementsByClassName("one")[0];
let two = document.getElementsByClassName("two")[0];
let temp = one.innerText;
one.setAttribute("title", two.getAttribute("title"));
one.innerText = two.innerText;
two.innerText = temp;
two.setAttribute("title", temp);
two.innerText = two.innerText + ' 2';