
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

  exports.userList = userList
  exports.userId = userId;
