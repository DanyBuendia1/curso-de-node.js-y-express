const express = require('express');
const cors = require('cors');


const app = express();

const userRoutes = require('../routes/users.routes')

// ============== Middlewares =================
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
// ************* Middlewares *****************
app.use('/user', userRoutes)


module.exports = app;