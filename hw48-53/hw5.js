let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

let cnt = 1;
for(let i = letter.length - letter.length; i < friends.length; i++){
    if(friends[i].startsWith(letter.toUpperCase()))
        continue;
    console.log(`${cnt++} => ${friends[i]}`);
}