////////// Interface
// que des objects


interface Rocket {
    reactors: number,
    vMax: number,
    takeOff: (action: string) => void
}

// meme chose en apparance mais le type peut être des unions
// type Rocket2= {
//     reactors: number,
//     vMax: number,
//     takeOff: (action: string) => void
// }


// ajout à notre interface Rocket
interface Rocket {
    price: number,
    carburant: number,
}

class RocketFactory implements Rocket {
    reactors: number;
    vMax: number;
    price: number;
    carburant: number;
    constructor(reactors: number, vMax: number, price: number, carburant: number) {
        this.reactors = reactors,
            this.vMax = vMax,
            this.price = price,
            this.carburant=carburant
    }
    takeOff(action: string) {
        console.log(action);
        
    }
}

const Falcon1 = new RocketFactory(12, 900, 2, 9000)

console.log(Falcon1);
Falcon1.takeOff('Décollage')
