const express = require("express");
const app = express();
const morgan = require("morgan");
const con = require('./commons/conexionBBDD').conexion()


//Configuraciones
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

//Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.use(require("./routes/index"));

//Iniciando el servidor
app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`);
});

//MOSTRAR TODOS LOS USUARIOS
const userList = require('./users/dataUser').userList
app.get('/users',(req,res) => userList(req,res, con));

//MOSTRAR LOS USUARIOS POR ID
const userId = require('./users/dataUser').userId
app.get('/userId',(req,res) => userId(req,res, con));

//MOSTRAR VEHICULOS POR ID USUARIO
const vehicleId = require('./vehicles/dataVehicle').vehicleId
app.get('/vehiclesId', (req, res) => vehicleId(req, res, con))

//MOSTRAR VEHICULOS POR ID MATRICULA
const dataVehicleId = require('./vehicles/dataVehicle').dataVehicleId
app.get('/dataVehicleId', (req, res) => dataVehicleId(req, res, con))

// app.post('/editUsuario', (req, res) => {
//   const id_usuario = req.body.id_usuario
//   const nombre = req.body.nombre
//   const dni = req.body.dni

//   const sql = "UPDATE lista_usuario SET nombre = "+nombre+", dni = "+dni+""
//   con.query(sql, (err, result) => {
//     if(err) throw err
//     // console.log('Resultado: ' + JSON.stringify(result, null, 2));
//     res.json(result);
// })
// })