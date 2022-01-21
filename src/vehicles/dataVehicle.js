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
        console.log(result);
        let sqlVhc = `SELECT * FROM lista_servicios WHERE id_matricula = ${result[0].id_matricula}`
        con.query(sqlVhc, (err, resultService) => {
            if(err) throw err
            let dataVhcsAndServices = {
                matricula: result[0].matricula,
                marca: result[0].marca,
                modelo: result[0].modelo,
                año: result[0].año,
                id_usuario: result[0].id_usuario,
                servicios: resultService
            }
            return res.json(dataVhcsAndServices)
        }) 
    })
  }

  const updateVhc = (req, res, con) => {
    let {matricula, marca, modelo, ano, id_matricula} =  req.body
    let sql = `UPDATE lista_vehiculos SET matricula = ${matricula}, marca = ${marca}, modelo = ${modelo}, año = ${ano} WHERE id_matricula = ${id_matricula}`
    con.query(sql, (err, result) => {
        if(err) throw err
        return res.json(result)
    })
}

const createVhc = (req, res, con) => {
    let {matricula, marca, modelo, año, id_usuario} =  req.body
    let sql = `INSERT INTO lista_vehiculos (matricula, marca, modelo, año, id_usuario) VALUES ('${matricula}', '${marca}', '${modelo}', '${año}', '${id_usuario}')`
    con.query(sql, (err, result) => {
        if(err) throw err
        return res.json(result)
    })
}

// FALTA POR SOLUCIONAR
const deleteVhc = (req, res, con) => {
    let id_matricula =  req.body.id_matricula
    let sqlServicios = `DELETE FROM lista_servicios WHERE id_matricula = ${id_matricula}`
    con.query(sqlServicios, (err, resultServicio) => {
        if(err) throw err
        let sql = `DELETE FROM lista_vehiculos WHERE id_matricula = ${id_matricula}`
        con.query(sql, (err, result) => {
            if(err) throw err
            return res.json(result)
        })
    })
}

exports.vehicleId =  vehicleId
exports.dataVehicleId =  dataVehicleId
exports.serviceVehicle =  serviceVehicle
exports.dataServiceVehicle =  dataServiceVehicle
exports.dataVehicleAndService = dataVehicleAndService
exports.updateVhc = updateVhc
exports.createVhc = createVhc
exports.deleteVhc = deleteVhc






