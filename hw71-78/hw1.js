let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let result = mix.map(function(el){
    return isNaN(el) ? el : "";
}).reduce((acc, el)=>acc+el);
console.log(result)
// Elzero