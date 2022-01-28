// setTimeout(() => {
//     console.log('Hola Mundo');
// },1000);

const getuserByID = (id, callback) => {
    const user = {
        id,
        name: 'Luciano'
    }


    setTimeout(() => {
        callback(user);
    }, 2000);
}

getuserByID(10, (user) => {
    console.log(user.id);
    console.log(user.name.toUpperCase());
});