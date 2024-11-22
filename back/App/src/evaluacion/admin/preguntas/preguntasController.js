const {response} = require('express');
const Pregunta= require('./preguntas.service');
const Aspecto= require('../aspectos/aspectos.service');
const Respuesta=require('../respuestas/respuestas.service');

const getPreguntas=async(req=response, res)=>{
    try {
        const listapreguntas=await Pregunta.listapregunta(req);
        return res.status(200).json({msg:'lis pregunta', data:listapreguntas})
        
    } catch (error) {
        res.json({
            ok:true,
            msg:'getpreguntas'
        })
    } 
}



const crearPreguntas=async(req, res)=>{
    try {
        const params= req.body;
        console.log('paramsEDWI',params);
        
        const aspectoid=params.id_aspectos;
        const tipopreid=params.id_tipo_pregunta;
        ///se validara el id si existeen aspetos y tipo pregunta
        const existeaspecto= await Aspecto.buscarAspecto(aspectoid);
        const existetipo= await Pregunta.buscartipopregunta(tipopreid);
        if(!existeaspecto){
            return res.status(404).json({msg:'id aspecto no valido'})
        }
        if(!existetipo){
            return res.status(404).json({msg:'tipo de pregunta no valido'})
        }

        const pregunta= await Pregunta.crearPregunta(params);
       return res.status(200).json({ msg:'preguntas',data:pregunta});

        
    } catch (error) {
        res.status(500).json({msg:'no se pudo crear preguntas'})
    }
   
}



const actualizarPreguntas=async(req, res )=>{
    try {
        const params=req.body;
        const preguntaid=params.id;
        const aspectoid=params.id_aspectos;
        const tipopreid=params.id_tipo_pregunta;
        const existePregunta=await Pregunta.buscarpregunta(preguntaid);
        const existeaspecto= await Aspecto.buscarAspecto(aspectoid);
        const existetipo= await Pregunta.buscartipopregunta(tipopreid);
        if(!existePregunta){
            return res.status(404).json({msg:'no existe pregunta '})
        }
        if(!existeaspecto){
            return res.status(404).json({msg:'id aspecto no valido'})
        }
        if(!existetipo){
            return res.status(404).json({msg:'tipo de pregunta no valido'})
        }
        const result= await Pregunta.actualizarPregunta(params)
        return res.status(200).json({msg:'pregunta actualizada', data:result});
    } catch (error) {
        res.statu(500).json({
            ok:true,
            msg:'no se actualizo preguntas'
        })
    }
   
}
const eliminarPreguntas = async(req, res  )=>{
    try {
        const params=req.body;
        const preguntaid=params.id;
        
        const existePregunta=await Pregunta.buscarpregunta(preguntaid);
        if(!existePregunta){
            return res.status(404).json({msg:'no existe pregunta '})
        }
        const preguntaUtilizada= await Respuesta.respuestaPorPregunta(preguntaid)
        if (preguntaUtilizada.length > 0) {
            return res.status(400).json({msg:'no se puede elimira la pregunta, '});
        }
        const result= await Pregunta.eliminarPregunta(params);
        return res.status(200).json({msg:'se elimino las preguntas',data:result})
    } catch (error) {
        res.status(500).json({ok:false,msg:'no eliminarpreguntas'})
    }

   
}
const buscarpreguntaPorAaspecto=async(req, res= response)=>{
    try {
      const params=(req.body);
      const aspectoid=params.id_aspectos;
      const aspecto= await Pregunta.buscarPreguntaPorAspeto(aspectoid);
      if (!aspecto || aspecto.length === 0) {
        return res.status(404).json({ msg: 'No existe Aspecto o no tiene preguntas asociadas' });
      }
      
      return res.status(200).json({msg:'preguntas por aspecto',data:aspecto}); 
    } catch (error) {
      console.error(error);
        return res.status(500).json({ mensaje: 'Error id aspecto' });
    }
       
  }

module.exports={
    getPreguntas,
    crearPreguntas,
    actualizarPreguntas,
    eliminarPreguntas,
    buscarpreguntaPorAaspecto

}