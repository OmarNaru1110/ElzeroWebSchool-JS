let font = document.getElementsByName('font')[0];
let size = document.getElementsByName('size')[0];
let color = document.getElementsByName('color')[0];

if(window.localStorage.getItem('font') !== null){
    font.value = localStorage.getItem('font');
}
if(window.localStorage.getItem('color') !== null){
    color.value = localStorage.getItem('color');
}
if(window.localStorage.getItem('size') !== null){
    size.value = localStorage.getItem('size');
}

font.addEventListener ('change', function(){
    localStorage.setItem('font', font.value);
});
size.addEventListener('change', function(){
    localStorage.setItem('size', size.value);
});
color.addEventListener('change', function(){
    localStorage.setItem('color', color.value);
});