fetch('./articles.json')
.then(response => response.json())
.then(data => {
    data.length = 5;
    return data;
})
.then(result => {
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