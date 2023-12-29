// CRUD DE LA TABLA USUARIOS
const database = require('../config/database');
const mysql2 = require('mysql2')

const createUser = (req,res)=>{
    
    const {nombre,apellido, edad} =req.body;

    const create =`insert into usuarios (nombre, apellido, edad) value (?,?,?);`;

    const query = mysql2.format(create, [nombre, apellido, edad]);

    database.query(query, (err, result)=>{

        if(err) throw err;
        //console.log(result);
        res.send({message: 'Usuario creado'});
    });
};

const readUser = (req, res) => {

    const {id} = req.params;

    const Select = `select * from usuarios where id =?;`;
    
    const query = mysql2.format(Select, [id]); 

    database.query(query, (err, result)=>{
        if(err) throw err;

        if(result[0] != undefined)
        {
            res.json(result[0])
        }
        else
        {
            res.json({message: 'Usuario no encontrado'});
        }
    })
};

const updateUser = (req, res) =>{
    const {id} = req.params;
    const {nombre, apellido, edad} = req.body;

    const update = `update usuarios set nombre = ?, apellido = ?, edad = ? where id = ?;`;

    const query = mysql2.format(update, [nombre, apellido, edad, id]);

    database.query(query, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json({message: 'usuario actualizado'})
        
    })
};

const deleteUser = (req, res)=>{
    const {id}= req.params;
    
    const eliminar = `delete from usuarios where id = ?;`;
    const query = mysql2.format(eliminar ,[id])

    database.query(query, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.json('Usuario eliminado')
    });
};

module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser
}
