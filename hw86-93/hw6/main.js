let inputElementsCount = document.getElementsByName("elements")[0];
let inputElementText = document.getElementsByName("texts")[0];
let inputElementType = document.getElementsByName("type")[0];
let button = document.getElementsByName("create")[0];
let results = document.getElementsByClassName("results")[0];
button.onclick = function(event) {
    if(inputElementsCount.value === 0 || inputElementsCount.value === "" || inputElementText.value === "")
        event.preventDefault();
    else{
        for(let i = 0; i < inputElementsCount.value; i++){
            let newElement = inputElementType.value === "Div"?
            document.createElement("div") : 
            document.createElement("section");
            newElement.innerText = inputElementText.value;
            newElement.setAttribute("class", "box");
            newElement.setAttribute("title", "element");
            newElement.setAttribute("id", `id-${i+1}`);
            results.appendChild(newElement);
        }
        event.preventDefault();
    }
}