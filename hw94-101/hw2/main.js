let addedElementsInput = document.getElementsByClassName("classes-to-add")[0];
let removedElementsInput = document.getElementsByClassName("classes-to-remove")[0];
let resultDiv = document.getElementsByClassName("classes-list")[0].children[1];
let addedElements = [];
function printResult(){
    for(let i = 0; i < resultDiv.childNodes.length; i++) {
        console.log(resultDiv.childNodes[i]);
    }
}
function addElements(){
    for(let i = 0; i < addedElements.length; i++) {
        if(addedElements[i] == "")
            continue;
        let child = document.createElement("div");
        child.innerText = addedElements[i];
        resultDiv.appendChild(child);
    }
}
function removeElements(){
    let removedChildren = [];

    for(let i = 0; i < resultDiv.childNodes.length; i++) 
        removedChildren.push(resultDiv.childNodes[i]);

    for(let i = 0; i < removedChildren.length; i++) 
            resultDiv.removeChild(removedChildren[i]);
}
addedElementsInput.onblur = function () {
    for(let i = 0; i < resultDiv.childNodes.length; i++) {
        if(resultDiv.childNodes[i].innerText === "No Classes To Show"){
            resultDiv.removeChild(resultDiv.childNodes[i]);
            break;
        }

    }
    if(addedElementsInput.value.length > 0) {
        let elements = addedElementsInput.value.split(" ");
        for(let i = 0; i < elements.length; i++) 
            addedElements.push(elements[i].toLowerCase());
        
        addElements();
        addedElements = [];
    }
    addedElementsInput.value = "";
}

removedElementsInput.onblur = function () {
    let isElementsRemoved = false;
    let elements = removedElementsInput.value.split(" ");
    console.log(elements);
    let removedChildren = [];
    for(let i = 0; i < resultDiv.childNodes.length; i++) {
        console.log(resultDiv.childNodes[i]);
        if(elements.includes(resultDiv.childNodes[i].innerText.toLowerCase())) {
            removedChildren.push(resultDiv.childNodes[i]);
            isElementsRemoved = true;
        }
    }
    for(let i = 0; i < removedChildren.length; i++) {
        resultDiv.removeChild(removedChildren[i]);
    }
    if(isElementsRemoved == false || resultDiv.childNodes.length == 0) {
        removeElements();
        resultDiv.appendChild(document.createTextNode("No Classes To Show"));
    }
    removedElementsInput.value = "";
}