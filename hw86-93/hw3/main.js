var input = document.getElementsByName("dollar")[0];
var result = document.getElementsByClassName("result")[0];
input.oninput = function(){
    if(input.value !== "" && input.value !== 0){
        result.innerText = `{${input.value}} USD Dollar = {${input.value * 48.51}} Egyptian Pound`;
    }
    else{
        result.innerText = `{0} USD Dollar = {0} Egyptian Pound`;
    }
}

