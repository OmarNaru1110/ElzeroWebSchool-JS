for(let i = 0; i < document.images.length; i++){
    if(document.images[i].getAttribute("alt")){
        console.log("exist");
        document.images[i].setAttribute("alt", "Elzero New");
    }
    else{
        console.log("not exist");
        document.images[i].setAttribute("alt", "Old");
    }
}