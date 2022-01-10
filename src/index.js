const express = require("express");
const app = express();
const morgan = require("morgan");

//BBDD
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "10.192.240.25",
  port: "3307",
  user: "juanfranmontero",
  password: "2DAW2021...",
  database : 'bd_taller'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

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

app.get('/users', (req,res) => {
  let sql = "SELECT * FROM lista_usuario"
  con.query(sql, (err, result) => {
      if(err) throw err
      res.json(result);
  })
});

app.get('/id_usuario', (req,res) => {
  const id_usuario = req.query.id;
  let sql = `SELECT * FROM lista_usuario WHERE id_usuario = ${id_usuario}`
  con.query(sql, (err, result) => {
      if(err) throw err
      res.json(result);
  })
});

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
