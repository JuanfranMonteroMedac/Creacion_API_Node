
const updateService = (req, res, con) => {
    let {id_servicio, tipo_servicio, descripcion} = req.body
    let sql = `UPDATE lista_servicios SET tipo_servicio = '${tipo_servicio}', descripcion = '${descripcion}' WHERE id_servicio = '${id_servicio}'`
    con.query(sql, (err, result) => {
        if(err) throw res.json({Estado: 'NO COMPLETADO', Descripcion:'Fallo al actualizar el servicio'})
        return res.json({Estado: 'OK', Descripcion: 'La actualización del servicio se ha efectuado'})
    })
}

const createService  = (req, res, con) => {
    let {tipo_servicio, descripcion, id_matricula} = req.body
    let sql = `INSERT INTO lista_servicios (tipo_servicio, descripcion, id_matricula) VALUES ('${tipo_servicio}', '${descripcion}', '${id_matricula}')`
    con.query(sql, (err, result) => {
        if(err) throw res.json({Estado: 'NO COMPLETADO', Descripcion:'Fallo al crear un nuevo servicio'})
        return res.json({Estado: 'OK', Descripcion: 'La creación del servicio se ha efectuado', Id_Servicio: result.insertId})
    })
}

const deleteService = (req, res, con) => {
    let {id_servicio} = req.body
    let sql = `DELETE FROM lista_servicios WHERE id_servicio = '${id_servicio}'`
    con.query(sql, (err, result) => {
        if(err) throw res.json({Estado: 'NO COMPLETADO', Descripcion:'Fallo al eliminar un servicio'})
        return res.json({Estado: 'OK', Descripcion: 'La eliminación del servicio se ha efectuado'})
    })
}


exports.updateService = updateService
exports.createService = createService
exports.deleteService = deleteService