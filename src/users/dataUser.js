// const { json } = require("express/lib/response");
// const { JSON } = require("mysql/lib/protocol/constants/types");

const userList = (req, res, con) => {
  let sql = "SELECT * FROM lista_usuario";
  con.query(sql, (err, result) => {
    if (err) throw err;
    return res.json(result);
  });
};

const userId = (req, res, con) => {
  const id_usuario = req.query.id;
  let sql = `SELECT * FROM lista_usuario WHERE id_usuario = ${id_usuario}`;
  con.query(sql, (err, result) => {
    if (err) throw err;
    return res.json(result);
  });
};

const dataUserAndVehicles = (req, res, con) => {
  const id_usuario = req.query.id_usuario;
  let sql = `SELECT * FROM lista_usuario WHERE id_usuario = ${id_usuario}`;
  con.query(sql, (err, result) => {
    if (err) throw err;
    let sqlVhc = `SELECT * FROM lista_vehiculos WHERE id_usuario = ${id_usuario}`;
    con.query(sqlVhc, (err, resultVhc) => {
      if (err) throw err;
      let dataUserAndVhcs = {
        nombre: result[0].nombre,
        apellidos: result[0].apellidos,
        dni: result[0].dni,
        telefono: result[0].telefono,
        email: result[0].email,
        vehiculos: resultVhc
      }

      return res.json(dataUserAndVhcs);
    });
  });
};

const updateUser = (req, res, con) => {

  let {nombre, apellidos, dni, telefono, email, id} = req.body
  let sql = `UPDATE lista_usuario SET nombre = '${nombre}', apellidos = '${apellidos}', dni = '${dni}',
  telefono = '${telefono}', email = '${email}' WHERE id_usuario = '${id}'`;
  con.query(sql, (err, result) => {
    if(err) throw res.json({Estado: 'NO COMPLETADO', Descripcion:'Fallo al actualizar el usuario'})
        return res.json({Estado: 'OK', Descripcion: 'La actualización del usuario se ha efectuado'})
  })
};

const createUser = (req, res, con) => {
  let {nombre, apellidos, dni, telefono, email, contrasena, id_admin} = req.body
  let sql = `INSERT INTO lista_usuario (nombre, apellidos, dni, telefono, email, contrasena, id_admin) VALUES ('${nombre}', '${apellidos}', '${dni}', '${telefono}', '${email}', '${contrasena}', '${id_admin}' )`
  con.query(sql, (err, result) => {
    if(err) throw res.json({Estado: 'NO COMPLETADO', Descripcion:'Fallo al crear un nuevo usuario'})
    return res.json({Estado: 'OK', Descripcion: 'La creación del usuario se ha efectuado', Id_Usuario: result.insertId})
  })
}

const deleteUser = (req, res, con) => {
  let id_usuario = req.body.id_usuario
  let sql ='DELETE FROM lista_usuario WHERE id_usuario =' + id_usuario
  con.query(sql, (err, result) => {
    if(err) throw res.json({Estado: 'NO COMPLETADO', Descripcion:'Fallo al eliminar un usuario'})
    return res.json({Estado: 'OK', Descripcion: 'La eliminación del usuario se ha efectuado'})
  })
}


exports.userList = userList;
exports.userId = userId;
exports.dataUserAndVehicles = dataUserAndVehicles;
exports.updateUser = updateUser
exports.createUser = createUser
exports.deleteUser = deleteUser
