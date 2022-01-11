const { json } = require("express/lib/response");
const { JSON } = require("mysql/lib/protocol/constants/types");

const userList = (req,res,con) => {
    let sql = "SELECT * FROM lista_usuario"
    con.query(sql, (err, result) => {
      if(err) throw err
       return res.json(result);    
    })
};

const userId = (req,res,con) => {
    const id_usuario = req.query.id;
    let sql = `SELECT * FROM lista_usuario WHERE id_usuario = ${id_usuario}`
    con.query(sql, (err, result) => {
        if(err) throw err
        return res.json(result);
    })
  };

  const dataUserAndVehicles = (req, res, con) => {
      const id_usuario = req.query.id_usuario
    //   let sql = `
    //         SELECT * 
    //         FROM lista_usuario listUser
    //         INNER JOIN lista_vehiculos listVhc 
    //         ON listUser.id_usuario = ${id_usuario} AND  listVhc.id_usuario = ${id_usuario}
    //     `
        let sql = `SELECT * FROM lista_usuario WHERE id_usuario = ${id_usuario}`
     
      con.query(sql, (err, result) => {
        if(err) throw err
        let datos = result
        console.log(datos);
        let sqlVhc = `SELECT * FROM lista_vehiculos WHERE id_usuario = ${id_usuario}`
        con.query(sqlVhc, (err, resultVhc) => {
            if(err) throw err
            console.log(resultVhc);
        }) 
                
        // return res.json(result)
      })

    //   con.query(sql, (err, result) => {
    //     if(err) throw err
    //     let data = Array.from(result);
    //     data.forEach(e => console.log(e))
                
    //     return res.json(result)
    //   })
  }

  exports.userList = userList
  exports.userId = userId
  exports.dataUserAndVehicles = dataUserAndVehicles
