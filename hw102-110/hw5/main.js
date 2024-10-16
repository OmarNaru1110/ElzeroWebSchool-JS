let div = document.querySelector('div');
let id = setInterval(() => {
    div.textContent = div.textContent - 1;
    if (div.textContent == 5) {
        window.open('https://elzero.org', '_blank', 'width=300,height=300');
    }
    else if (div.textContent == 0) {
        clearInterval(id);
    }
}, 500);