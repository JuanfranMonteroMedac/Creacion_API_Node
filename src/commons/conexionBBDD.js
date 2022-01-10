//BBDD
const conexion = () => {
    let mysql = require('mysql');

    let con = mysql.createConnection({
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

    return con;
}

exports.conexion = conexion
