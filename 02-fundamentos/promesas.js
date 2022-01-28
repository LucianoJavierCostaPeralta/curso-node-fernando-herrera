const empleados = [
    {
        id: 1,
        nombre: 'Juan'
    },
    {
        id: 2,
        nombre: 'Pedro'
    },
    {
        id: 3,
        nombre: 'Ana'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];


const getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        const empleado = empleados.find(e => e.id === id)?.nombre;

        (empleado)
            ? resolve(empleado)
            : reject(`No existe un empleado con el id ${id}`);

    });

};


const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id)?.salario;

        (salario)
            ? resolve(salario)
            : reject(`No existe un salario para el empleado con el ID ${id}`);
    })
};

const id = 1;

// promise helper

// getEmpleado(id)

//     .then(empleado => {

//         getSalario(id)

//             .then(salario => {

//                 console.log(`El salario de ${empleado} es de ${salario}`);

//             })
//             .catch(err => console.log(err));

//     })
//     .catch(err => console.log(err));



//  Promise en cadena 
let nombre;
getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id);
    })
    .then(salario => console.log(`El salario de '${nombre}' es de : $ ${salario}`))
    .catch(err => console.log(err));