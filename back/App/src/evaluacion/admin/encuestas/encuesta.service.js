const pool = require('../../../../../database/connexion');

async function crearEncuesta(params) {
    console.log('llego aqui  edwin',params);
    
    try {
        const{nombre, descripcion,  fecha_inicio, fecha_fin, id_pregunta, id_usuario, id_periodo_academico, id_tipo_encuesta, llave_abreviatura, estado}=params

        const query=(`insert into eva.encuestas (nombre, descripcion,  fecha_inicio, fecha_fin, id_pregunta, id_usuario, id_periodo_academico, id_tipo_encuesta, llave_abreviatura, estado) 
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9, $10);`);
        const result= await pool.query(query,[nombre, descripcion,  fecha_inicio, fecha_fin, id_pregunta, id_usuario, id_periodo_academico, id_tipo_encuesta, llave_abreviatura, estado]);
        console.log('respuesta', result.rows);
        
        return result.rows
    } catch (error) {
      console.log('este error',error);
        
    }
    
}
async function buscarEncuesta(idcuestio) {
    try {
        const id = idcuestio;
        const query='select * from eva.encuestas where id=$1';
        const result= await pool.query(query,[id]);
        return result.rows.length>0;
    } catch (error) {
        console.log('error',error);
        
    }
    
}
async function eliminarEncuesta(params) {
    try {
        const id=params;
        const query='DELETE from eva.encuestas WHERE id=$1';
        const result= await pool.query(query,[id]);
        console.log('resultado', result.row);
        
        return result.rows
        
    } catch (error) {
        console.log('error', error);
        
    }
    
}
async function actulizarEncuesta(params) {
    try {
        const {id, nombre, descripcion,  fecha_inicio, fecha_fin, id_pregunta, id_usuario, id_periodo_academico, id_tipo_encuesta, llave_abreviatura, estado}=params
        const query=`UPDATE eva.encuestas set  nombre=$2, descripcion=$3, fecha_inicio=$4, fecha_fin=$5, id_pregunta=$6, id_usuario=$7, id_periodo_academico=$8, id_tipo_encuesta=$9 llave_abreviatura=$10, estado=$11 WHERE id=$1`;
        const result=await pool.query(query,[id, nombre, descripcion,  fecha_inicio, fecha_fin, id_pregunta, id_usuario, id_periodo_academico, id_tipo_encuesta, llave_abreviatura, estado]);
        console.log('respuesta', result.rows);
        
        return result.rows

    } catch (error) {
        console.log('error',error);
        
    }
    
}
async function listarEncuesta(params) {
    try {
        const query='select * from eva.encuestas';
        const result= await pool.query(query);
        console.log('respuesta', result.rows);
        return result.rows
        
    } catch (error) {
        console.log('error', error);
        
    }
    
}

async function buscarperiodo(idperiodoacade) {
    try {
        const id=idperiodoacade
        const query='SELECT * FROM public.periodos_academicos WHERE id=$1';
        const result= await pool.query(query,[id])
        return result.rows.length>0;
    } catch (error) {
        
    }
}

module.exports={
    crearEncuesta,
    buscarEncuesta,
    eliminarEncuesta,
    actulizarEncuesta,
    listarEncuesta,
    buscarperiodo

}