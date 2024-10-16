let inputName = document.getElementById("name");
let inputAge = document.getElementById("age");
let inputCity = document.getElementById("city");
let selectMulti = document.getElementById("multi");

if(window.sessionStorage.getItem('name') !== null){
    inputName.value = window.sessionStorage.getItem('name');
}
if(window.sessionStorage.getItem('age') !== null){
    inputAge.value = window.sessionStorage.getItem('age');
}
if(window.sessionStorage.getItem('city') !== null){
    inputCity.value = window.sessionStorage.getItem('city');
}
if(window.sessionStorage.getItem('multi') !== null){
    selectMulti.value = window.sessionStorage.getItem('multi');
}

inputName.addEventListener('blur', ()=>{
    window.sessionStorage.setItem('name', inputName.value);
})
inputAge.addEventListener('blur', ()=>{
    window.sessionStorage.setItem('age', inputAge.value);
})
inputCity.addEventListener('blur', ()=>{
    window.sessionStorage.setItem('city', inputCity.value);
})
selectMulti.addEventListener('change', ()=>{
    window.sessionStorage.setItem('multi', selectMulti.value);
})