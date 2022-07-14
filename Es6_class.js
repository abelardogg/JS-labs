class Animal{
    constructor(type, name){
        this.type = type;
        this.name = name;
    }

    getInfo(){
        console.info(`The ${this.type} name is ${this.name}`);
    }

}

const pet1 = new Animal('cat', 'Kercho');
const pet2 = new Animal('fish', 'Francia')

pet1.getInfo();
pet2.getInfo();
