const empleados = [{
        id: 1,
        nombre: "Juan",
    },
    {
        id: 2,
        nombre: "Pedro",
    },
    {
        id: 3,
        nombre: "Ana",
    },
];

const salarios = [{
        id: 1,
        salario: 1000,
    },
    {
        id: 2,
        salario: 1500,
    },
];

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find((e) => e.id === id) ?.nombre;

        empleado
            ?
            resolve(empleado) :
            reject(`No existe un empleado con el id ${id}`);
    });
};

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find((s) => s.id === id) ?.salario;

        salario
            ?
            resolve(salario) :
            reject(`No existe un salario para el empleado con el ID ${id}`);
    });
};

const getInfoUser = async (id) => {

    try {
            const empleado = await getEmpleado(id);
            const salario = await getSalario(id);
        
            return `El salario del empleado : ${empleado} \nEs de  USD$ : ${salario}`;

    } catch (error) {
        throw error;
    }
};

const id = 1;

getInfoUser(id)
    .then((msg) =>{
        console.log('TODO BIEN!!!');
        console.log(msg)
    })
        
    .catch((err) => {
        console.log('TODO MAL!!!');
        console.log(err);
    });