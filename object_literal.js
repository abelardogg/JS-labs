// object literals
// is a encapsulated collection of pairs (key-vaue) separated by comma, this let us store values without use the global context.
// - object literal can not be instantiated.
// - you cant have a constructor with object literal.

const MyCar = {
    make: 'KIA',
    model: 'Forte',
    year: '2020',
    colour: 'black'
}

// You can also add properties dinamically
MyCar.version = 'A'

// Object literal is kind of a singleton (not a real singleton). Even if you create a copy the object 
// it will keep only one value. Check the exmaple.

let otherCar = MyCar;
console.info(otherCar.colour); // value is black at this moment because is a copy of original object.
otherCar.colour = 'red';
console.info(otherCar.colour); // now the value is "red"
console.info(MyCar.colour); // Original object wil be red too!

// You can also add new values to the object which will affect original and copy.
otherCar.secondaryColour = 'blue'



