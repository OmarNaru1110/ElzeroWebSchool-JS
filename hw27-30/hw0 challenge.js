let a = "Elzero Web School";

console.log(`${a.charAt(2).toUpperCase()}${a.slice(3,6)}`);

console.log(a[13].toUpperCase().repeat(8)); 

console.log(a.split(" ", 1));

console.log(`${a.substr(0, 6)} ${a.substr(11)}`);

console.log(`${a[0].toLowerCase()}${a.substring(1, a.length-1).toUpperCase()}${a[a.length-1].toLocaleLowerCase()}`);