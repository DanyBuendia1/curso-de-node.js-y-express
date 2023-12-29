const app = require ('./app');
const database = require('./database');

const main = ()=>{
    database.connect((err)=>{
        if(err) throw err;
        console.log('la base de datos ha sido conectada')
    })

    app.listen(3000, ()=>{
        console.log('El servidor esta escuchando en el puerto 3000')
    })
}
main();