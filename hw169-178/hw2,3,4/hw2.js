var request = new XMLHttpRequest();
let obj;
request.open('GET', '../hw1/articles.json', true);
request.send();
request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
        var response = request.responseText;
        obj = JSON.parse(request.responseText);
        for(let i = 0; i< obj.length; i++)
            obj[i].category = "all";
        console.log(obj);
        let updatedData = JSON.stringify(obj);  
        console.log(updatedData);
    }
};
request.onloadend = function () {
    console.log('end');
};

