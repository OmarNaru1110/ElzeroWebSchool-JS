let phone = "+(995)-123 (4567)";

let regEx = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/ig;

console.log(regEx.test(phone));