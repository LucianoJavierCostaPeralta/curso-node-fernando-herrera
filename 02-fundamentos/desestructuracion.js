const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
}

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

// function imprimirHereo({ nombre, apellido, poder }) {
//     console.log(nombre , apellido, poder);
// }

// console.log(imprimirHereo(deadpool));


// console.log(deadpool.getNombre());

// console.log(nombre, apellido, poder);

const hereoes = ['Thor', 'Ironman', 'Spiderman', 'Capitan America'];

// const h1 = hereoes[0];
// const h2 = hereoes[1];
// const h3 = hereoes[2];
// const h4 = hereoes[3];

const [, , h3] = hereoes;

console.log(h3);


