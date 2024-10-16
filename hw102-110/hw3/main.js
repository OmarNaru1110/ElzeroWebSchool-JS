let div = document.querySelector('div');
let id = setInterval(() => {
    div.textContent = div.textContent - 1;
    if (div.textContent == 0) {
        clearInterval(id);
    }
}, 1000);