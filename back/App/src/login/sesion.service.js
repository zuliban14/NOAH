const pool = require('../../../database/connexion');

async function sesion(params) {
    try {
  
      const name = params.nombre_usuario;
      const contra = params.clave_acceso;
      const query='select * from public.usuarios where nombre_usuario = $1 and  clave_acceso = $2';
      const response = await pool.query(query,[name,contra]);

      console.log('services datos', name, contra);

      if(response.rowCount==0){
        return false;
      }else{
         return true; 
      }
  
    } catch (error) {
      throw error;
    }
  };

  async function buscarusuario(usuario) {
    try {
      const id=usuario;
      const query='SELECT * from public.usuarios where id=$1';
      const result= await pool.query(query,[id]);
      //console.log('respuesta',result.rows);
      
      return result.rows.length > 0;
    } catch (error) {
      console.log('error', error);
      
    }
    
  }


  module.exports = {
    sesion, 
    buscarusuario
  }