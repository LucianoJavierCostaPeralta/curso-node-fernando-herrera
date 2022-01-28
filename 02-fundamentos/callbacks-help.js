const empleados = [
    {
        id : 1 ,
        nombre : 'Juan'
    },
    {
        id : 2 ,
        nombre : 'Pedro'
    }, 
    {
        id : 3 ,
        nombre : 'Ana'
    }
];

const salarios = [
    {
        id : 1 ,
        salario : 1000
    },
    {
        id : 2 ,
        salario : 1500
    }
];

const getEmpleado = (id , callback) => {
    const empleado = empleados.find(
        empleado => empleado.id === id
    );
    if (empleado) {
        callback(null,empleado);
    } else {
        callback( `No existe un empleado con el ID ${id}`);
    }
}

const getSalario = (id , callback) => {

    const salario = salarios.find(
        salario => salario.id === id
    )?.salario ;

    if (salario) {
        callback(null,salario);
    }else {
        callback(`No existe un salario para el empleado con el ID ${id}`);
    }
}


getEmpleado(1 , (err , empleado) => { 
    if (err) {
        console.log('ERROR!!!');
        return console.log(err);
    }
    
    getSalario(10 , (err , salario) => {
        if (err) {
            console.log('ERROR!!!');
            return console.log(err);
        }
        // console.log('Salario existente');
        console.log(`El salario de ${empleado.nombre} es de : USD$ ${salario}`);
    } );




});