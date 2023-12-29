// ========= CONEXION A LA BD =============
const mysql = require('mysql2'); // DEPENDENCIA PARA LA CONEXION A LA BASE DE DATOS

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Dorianth:12',
    database: 'tutorial',
    port:3307
})

module.exports = database;