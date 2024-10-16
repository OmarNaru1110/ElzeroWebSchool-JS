let admins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let employees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

let adminsCount = admins.indexOf("Stop");
if(adminsCount == -1)
    adminsCount = admins.length;

document.write(`<div> We have ${adminsCount} admins </div>`);

for(let i = 0; i < adminsCount; i++){
    document.write(`<hr>`);
    document.write(`<div>`);
    document.write(`The Admin for team ${i+1} is ${admins[i]}`);
    document.write(`<h3> Team Members: </h3>`);
    for(let j = 0; j < employees.length; j++){
        if(employees[j].startsWith(admins[i][0]))
            document.write(`<p>- ${employees[j]}</p>`);
    }
    document.write(`</div>`);
}