let div = document.querySelector('div');
let id = setInterval(() => {
    div.textContent = div.textContent - 1;
    if (div.textContent == 0) {
        window.location.assign('https://elzero.org');
    }
}, 1000);