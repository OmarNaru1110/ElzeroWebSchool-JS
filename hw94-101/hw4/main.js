let div = document.querySelector('div');
var target = div.children[0];
target = target.nextSibling;
target = target.nextSibling;
target = target.nextSibling;
console.log(target.textContent.trimStart());