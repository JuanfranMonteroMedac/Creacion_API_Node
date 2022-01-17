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

//MOSTRAR SERVICIO VEHICULO POR ID MATRICULA
const serviceVehicle = require('./vehicles/dataVehicle').serviceVehicle
app.get('/serviceVehicle', (req, res) => serviceVehicle(req, res, con))

//MOSTRAR SERVICIO VEHICULO POR ID SERVICIO
const dataServiceVehicle = require('./vehicles/dataVehicle').dataServiceVehicle
app.get('/dataServiceVehicle', (req, res) => dataServiceVehicle(req, res, con))


//TODO INTERACIONES DE CROD
const updateUser = require('./users/dataUser').updateUser
app.post('/updateUser', (req, res) => updateUser(req, res, con))

//INFORMACION DE UN UNSUARIO Y SUS VEHICULOS MEDIANTE ID USUARIO
const dataUserAndVehicles = require('./users/dataUser').dataUserAndVehicles
app.get('/dataUserAndVehicles', (req, res) => dataUserAndVehicles(req, res, con))

//INFORMACION DE UN VEHICULO Y SUS SERVICIOS MEDIANTE ID USUARIO
const dataVehicleAndService = require('./vehicles/dataVehicle').dataVehicleAndService
app.get('/dataVhcsAndServices', (req, res) => dataVehicleAndService(req, res, con))