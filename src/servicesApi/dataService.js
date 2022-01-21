
const updateService = (req, res, con) => {
    let {id_servicio, tipo_servicio, descripcion} = req.body
    let sql = `UPDATE lista_servicios SET tipo_servicio = '${tipo_servicio}', descripcion = '${descripcion}' WHERE id_servicio = '${id_servicio}'`
    con.query(sql, (err, result) => {
        if(err) throw err
        return res.json(result)
    })
}

const createService  = (req, res, con) => {
    let {tipo_servicio, descripcion, id_matricula} = req.body
    let sql = `INSERT INTO lista_servicios (tipo_servicio, descripcion, id_matricula) VALUES ('${tipo_servicio}', '${descripcion}', '${id_matricula}')`
    con.query(sql, (err, result) => {
        if(err) throw err
        return res.json(result)
    })
}

const deleteService = (req, res, con) => {
    let {id_servicio} = req.body
    let sql = `DELETE FROM lista_servicios WHERE id_servicio = '${id_servicio}'`
    con.query(sql, (err, result) => {
        if(err) throw err
        return res.json(result)
    })
}


exports.updateService = updateService
exports.createService = createService
exports.deleteService = deleteService