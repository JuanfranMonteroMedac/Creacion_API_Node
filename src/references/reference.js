const referenceVhc = (req, res, con) => {
    const matricula = req.query.matricula
    let sql = `SELECT LAT,  LON FROM lista_vehiculos WHERE matricula = '${matricula}'`
    con.query(sql,(err, result) => {
        if(err) throw err
        console.log(result);
        return res.json(result)
    })
}

exports.referenceVhc = referenceVhc