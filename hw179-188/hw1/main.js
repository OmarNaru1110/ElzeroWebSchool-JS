let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    request.onload = () => {
        if(request.readyState === 4 && request.status === 200) {
            resolve(request.responseText);
        } else {
            reject(request.statusText);
        }
    }
    request.open('GET', `./articles.json`);
    request.send();
});

promise.then(result => {
    result = JSON.parse(result);    
    result.length = 5;
    return result;
}).then(result => {
    for(let i = 0; i < result.length; i++) {
        let div = document.createElement('div');
        let title = document.createElement('h3');
        let text = document.createElement('p');
        title.textContent = result[i].title;
        text.textContent = result[i].description;
        div.append(title,text);
        document.body.append(div);
    }
});