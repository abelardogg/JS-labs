// Using function as constructor
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}

let MyOldCar = new Car('nissan', 'Sentra', 2005);
let MyNewCar = new Car('Ford', 'Taurus', 2010);

console.info(MyOldCar.model); // Sentra
console.info(MyNewCar.model); // Taurus


// Using Object.create Method
const Vehicle = {type: 'ground'};

const tank = Object.create(Vehicle)
const boat = Object.create(Vehicle)
boat.type = 'water';
const plane = Object.create(Vehicle, {
    type: {
        value: 'flight',
        writable: true,
        configurable: false,
        enumerable: true
    }
});

console.info(tank.type); // ground
console.info(boat.type); // water
console.info(plane.type) // flight