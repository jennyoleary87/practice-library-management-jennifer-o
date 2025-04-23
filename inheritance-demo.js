class Beverage {
    constructor(name, ounces, container) {
        this.name = name;
        this.ounces = ounces;
        this.container = container;
        this.recycled = false;
    }
    recycle() {
        this.recycled = true;
        console.log(`\nThat was delicious! I rinsed and recycled the ${this.container} of ${this.name}.`);
    }
    describe() {
        let status;
        if (this.recycled) {
            status = "had";
        } else {
            status = "have";
        }
        console.log(`\nI ${status} a ${this.ounces}-oz ${this.container} of ${this.name}.`);
    }
}

let water = new Beverage("water", 20, "bottle");
console.log(water);
water.describe(); // have
water.recycle();
water.describe(); // had

class Juice extends Beverage {
    constructor(name, ounces, container, fruits, veggies = []) {
        super(name, ounces, container);
        this.fruits = fruits;
        this.veggies = veggies;
    }
    describe() {
        super.describe();
        console.log("It contains the following: ");
        let ingredients = (this.fruits).concat(this.veggies);
        for (let ingredient of ingredients) {
            console.log(`\t${ingredient}`);
        }
    }
}

let orangeJuice = new Juice("orange juice", 16, "bottle", ["oranges"]);
let appleJuice = new Juice("apple juice", 14, "can", ["apples"]);
let v8 = new Juice("V8", 20, "glass bottle", ["tomatoes"], ["carrots", "celery", "beets"]);

console.log(orangeJuice);
console.log(appleJuice);
console.log(v8);

v8.describe();

appleJuice.recycle();

class Soda extends Beverage {
    constructor(name, ounces, container, hasCaffeine) {
        super(name, ounces, container); // calling already established info - passed along
        this.hasCaffeine = hasCaffeine;
    }
    describe() {
        let recycledStatus;
        if (this.recycled) {
            recycledStatus = "had";
        } else {
            recycledStatus = "have";
        }
        let caffeineStatus;
        if (this.hasCaffeine) {
            caffeineStatus = "caffeinated";
        } else {
            caffeineStatus = "caffeine-free";
        }
        console.log(`\nI ${recycledStatus} a ${this.ounces}-oz ${this.container} of ${caffeineStatus} ${this.name}.`);
    }
}

let drPepper = new Soda("Dr. Pepper", 24, "glass bottle", true);
let sprite = new Soda();

sprite.container = "bottle";
sprite.describe();
drPepper.recycle();
drPepper.describe();

class dietSoda extends Soda {
    container(name, ounces, container, hasCaffeine, sweetener) {
        super(name, ounces, container, hasCaffeine)
        this.sweetener = sweetener;
    }
    describe() {
        console.log(`I `);
    }
}

let cokeZero = new dietSoda("Coke Zero", 12, "can", true, "aspertame");
let dietPepsi = new dietSoda("Diet Soda", 18, "bottle", false, true, "sucralose");

console.log(cokeZero instanceof dietSoda);
console.log(cokeZero instanceof Soda);
console.log(cokeZero instanceof Beverage);
console.log(cokeZero instanceof Juice);

console.log("=====")
let beverages = [appleJuice, water, drPepper, cokeZero];
beverages.forEach(beverage => beverage.describe());
