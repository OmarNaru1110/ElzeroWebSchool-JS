let div = document.createElement('div');
div.classList.add('box');
let mainMessage = document.createElement("h3");
mainMessage.textContent = "welcome";
div.appendChild(mainMessage);
let sideMessage = document.createElement('p');
sideMessage.textContent = "welcome to elzero web school";
div.appendChild(sideMessage);
let closeBtn =  document.createElement('button');
closeBtn.classList.add('close-button');
closeBtn.textContent = "X";
div.appendChild(closeBtn);


setTimeout(() => {
    document.body.getElementsByClassName("container")[0].appendChild(div);
}, 3000);

closeBtn.addEventListener('click', () => {
    document.body.getElementsByClassName("container")[0].removeChild(div);
});