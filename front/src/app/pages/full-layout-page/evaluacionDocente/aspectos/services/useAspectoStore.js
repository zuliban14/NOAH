///el encargado de hacer la interacion 

import { useDispatch, useSelector } from "react-redux"
import { activarEvent, actualizarAspecto, addEvenAspecto, deleteAspecto, onListarAspecto } from "../";
import noahApi from "../../../api/noahApi";

export const useAspectoStore = () => {
    const dispatch=useDispatch();
   const{events,  activeEvent}= useSelector(state=>state.aspecto)
///accion 
  const setActivarEvent=(aspectoEvent)=>{///el evento creado 
  dispatch(activarEvent(aspectoEvent))
  }

  ///lo que llega del backen 

  const startAspecto=async(aspectoEvent)=>{
    if(aspectoEvent.id){
      ///actualizando 
      dispatch(actualizarAspecto({...aspectoEvent}))
  
    }else{
      ///creando
     
      const{data}=await noahApi.post('/evaDocente/createAspecto', aspectoEvent);
      console.log({data});
      dispatch(addEvenAspecto({...aspectoEvent, id: data.aspecto.id}))
  
    }

  }

  const deleteEventoAspecto=()=>{
    dispatch(deleteAspecto());
  }
  const listaAspectos=async()=>{
    try {
      const{data}=await noahApi.get('/evaDocente/listAspecto');
      console.log('llego aspecto',{data});
      dispatch(onListarAspecto());
    } catch (error) {
      console.log('error cargando aspectos ', error)
    }
  }

  
  return {

    //propiedades
    events,
    activeEvent,

    //metodos 
    setActivarEvent,
    startAspecto,
    deleteEventoAspecto,
    listaAspectos
  }
}
