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

const dataVehicleAndService = (req, res, con) => {
    const id_usuario = req.query.id_usuario
    let sql = `SELECT * FROM lista_vehiculos WHERE id_usuario = ${id_usuario}`
    con.query(sql, (err, result) => {
        if(err) throw err
        let sqlVhc = `SELECT * FROM lista_servicios WHERE id_matricula = ${result.id_matricula}`
        con.query(sqlVhc, (err, resultService) => {
            if(err) throw err
            let dataVhcsAndServices = {result, Servicios: resultService}
            console.log(dataVhcsAndServices);
            return res.json(dataVhcsAndServices)
        }) 
    })
  }

exports.vehicleId =  vehicleId
exports.dataVehicleId =  dataVehicleId
exports.serviceVehicle =  serviceVehicle
exports.dataServiceVehicle =  dataServiceVehicle
exports.dataVehicleAndService = dataVehicleAndService


