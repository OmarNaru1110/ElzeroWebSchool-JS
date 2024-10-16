
class Car {
    constructor(name, model, price){
        this.n = name;
        this.m = model;
        this.p = price;
    }
    run(){
        return `Car Is Running Now`;
    }
    stop(){
        return `Car Is Stopped`;
    }
}

let car1 = new Car('BMW', 2022, 140000);
let car2 = new Car('Mercedes', 2023, 160000);
let car3 = new Car('Porsche', 2021, 170000);

console.log(`Car One Name Is ${car1.n} And Model Is ${car1.m} And Price Is ${car1.p}`);
console.log(car1.run());