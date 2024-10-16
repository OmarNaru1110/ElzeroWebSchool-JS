document.body.removeChild(document.querySelector('p'));

let start = document.createElement('div');
start.classList.add('start');
start.title = 'Start Element';
start.setAttribute("data-value", "start");
start.textContent = 'Start';
document.body.prepend(start);

let end = document.createElement('div');
end.classList.add('end');
end.title = 'End Element';
end.setAttribute("data-value", "end");
end.textContent = 'End';
document.body.append(end);