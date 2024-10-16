const myObj = {
    username: "Elzero",
    id: 100,
    score: 1000,
    country: "Egypt",
};

Object.defineProperties(myObj, {
    id: {
        enumerable: true,
    },
    score: {
        writable: false,
    },
    country: {
        enumerable: false,
        configurable: true
    },
});

delete myObj.country;

myObj.score = 500;

for (let prop in myObj) {
console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);
