let interval = prompt("print number from-to").split("-");
let from = Number(interval[0]);
let to = Number(interval[1]);

for (let i = from; i <= to; i++) {
    let element = document.createElement("p");
    element.textContent = i;
    document.body.appendChild(element);
}