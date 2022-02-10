const express = require("express");
const app = express();
const morgan = require("morgan");
const con = require('./commons/conexionBBDD').conexion()
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../doc/swagger_output.json')

//Configuraciones
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

const bodyParser = require('body-parser');
const cors = require('../node_modules/cors');

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))


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

//MOSTRAR SERVICIO DEL VEHICULO POR ID MATRICULA
const serviceVehicle = require('./vehicles/dataVehicle').serviceVehicle
app.get('/serviceVehicle', (req, res) => serviceVehicle(req, res, con))

//MOSTRAR SERVICIO DEL VEHICULO POR ID SERVICIO
const dataServiceVehicle = require('./vehicles/dataVehicle').dataServiceVehicle
app.get('/dataServiceVehicle', (req, res) => dataServiceVehicle(req, res, con))

// ACTUALIZAR USUARIO
const updateUser = require('./users/dataUser').updateUser
app.post('/updateUser', (req, res) => updateUser(req, res, con))

// CREAR NUEVO USUARIO
const createUser = require('./users/dataUser').createUser
app.post('/createUser', (req, res) => createUser(req, res, con))

//ELIMINAR UN USUARIO
const deleteUser = require('./users/dataUser').deleteUser
app.post('/deleteUser', (req, res) => deleteUser(req, res, con))

// MODIFICAR UN VEHICULO
const updateVhc = require('./vehicles/dataVehicle').updateVhc
app.post('/updateVhc', (req, res) => updateVhc(req, res, con))

// CREAR UN NUEVO VEHICULO
const createVhc = require('./vehicles/dataVehicle').createVhc
app.post('/createVhc', (req, res) => createVhc(req, res, con))

// ELIMINAR UN VEHICULO
const deleteVhc = require('./vehicles/dataVehicle').deleteVhc
app.get('/deleteVhc', (req, res) => deleteVhc(req, res, con)) //FALTA POR SOLUCIONAR

//MODIFICAR UN SERVICIO
const updateService = require('./servicesApi/dataService').updateService
app.post('/updateService', (req, res) => updateService(req, res, con))

// CREAR UN NUEVO SERVICIO
const createService = require('./servicesApi/dataService').createService
app.post('/createService',  (req, res) =>  createService(req, res, con))

// ELIMINAR UN SERVICIO
const deleteService = require('./servicesApi/dataService').deleteService
app.post('/deleteService', (req, res) => deleteService(req, res, con))

//INFORMACION DE UN USUARIO Y SUS VEHICULOS MEDIANTE ID USUARIO
const dataUserAndVehicles = require('./users/dataUser').dataUserAndVehicles
app.get('/dataUserAndVehicles', (req, res) => dataUserAndVehicles(req, res, con))

//INFORMACION DE UN VEHICULO Y SUS SERVICIOS MEDIANTE ID USUARIO
const dataVehicleAndService = require('./vehicles/dataVehicle').dataVehicleAndService
app.get('/dataVhcsAndServices', (req, res) => dataVehicleAndService(req, res, con))

// LOCALIZAR UN VEHICULO POR SU ID MATRICULA
const referenceVhc = require('./references/reference').referenceVhc
app.get('/referenceVhc', (req, res) => referenceVhc(req, res, con))