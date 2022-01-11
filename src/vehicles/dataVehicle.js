const vehicleId = (req, res, con) => {
    const id_usuario = req.query.id;
    let sql = `SELECT * FROM lista_vehiculos WHERE id_usuario = ${id_usuario}`
    con.query(sql, (err, result) => {
        if(err) throw err
        return res.json(result);
    })
}

const dataVehicleId = (req, res, con) => {
    const id_matricula = req.query.id_matricula
    let sql = `SELECT * FROM lista_vehiculos WHERE id_matricula = ${id_matricula}`
    con.query(sql,(err, result) => {
        if(err) throw err
        return res.json(result)
    })
}

const serviceVehicle = (req, res, con) => {
    const id_matricula = req.query.id_matricula
    let sql = `SELECT * FROM lista_servicios WHERE id_matricula = ${id_matricula}`
    con.query(sql,(err, result) => {
        if(err) throw err
        return res.json(result)
    })
}

const dataServiceVehicle = (req, res, con) => {
    const id_servicio = req.query.id_servicio
    let sql = `SELECT * FROM lista_servicios WHERE id_servicio = ${id_servicio}`
    con.query(sql, (err, result) =>{
        if(err) throw err
        return res.json(result)
    })
}

exports.vehicleId =  vehicleId
exports.dataVehicleId =  dataVehicleId
exports.serviceVehicle =  serviceVehicle
exports.dataServiceVehicle =  dataServiceVehicle


