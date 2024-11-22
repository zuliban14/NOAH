///el encargado de hacer la interacion 

import { useDispatch, useSelector } from "react-redux"
import { activarEvent, actualizarAspecto, addEvenAspecto, deleteAspecto, onListarAspecto } from "../";
import noahApi from "../../../api/noahApi";
import Swal from "sweetalert2";

export const useAspectoStore = () => {
    const dispatch=useDispatch();
   const{events,  activeEvent}= useSelector(state=>state.aspecto)
 
///accion 
  const setActivarEvent=(aspectoEvent)=>{///el evento creado 
  dispatch(activarEvent(aspectoEvent))
  }



 
    const deleteEventoAspecto = async (id) => {
      try {
        const aspectoId = parseInt(id, 10); // Convertir a número entero
        if (isNaN(aspectoId) || aspectoId <= 0) { // Verificar que no sea NaN ni menor o igual a cero
          throw new Error("El ID debe ser un número entero positivo válido.");
        }
        const response = await noahApi.delete(`/evaDocente/deleteAspecto/${aspectoId}`); // Usar tu instancia `noahApi`
        console.log("Respuesta de la API:", response);
        
        if (!response.status === 200) {
          throw new Error(`Error al eliminar el aspecto con ID ${aspectoId}`);
        }
  
        // Si la eliminación fue exitosa, actualizamos el estado
        dispatch(deleteAspecto(aspectoId));
        console.log(`Aspecto con ID ${aspectoId} eliminado correctamente.`);
      } catch (error) {
        console.error("Error al eliminar el aspecto:", error.response?.data || error.message);
        throw error;
      }
    // console.log('llego el id store ', aspectoEvent.id);
    // if (!aspectoEvent.id) {
    //   console.error('ID no encontrado');
    //   Swal.fire('error al eliminar id', error.response.data.msg,'error');
    //   return;
    // }
    // try {
    //   console.error('ID enviado al backend ',aspectoEvent.id);
    //   const response= await noahApi.delete(`/evaDocente/deleteAspecto/${aspectoEvent.id}`);
    //   console.log('Aspecto eliminado:', response.data.msg,'error');
    //   dispatch(deleteAspecto(aspectoEvent.id));
    // } catch (error) {
    //   console.log('error al eliminar el aspecto', error);
    //   Swal.fire('error al eliminar', error.response.data.msg,'error');
    // }
    
  }

  ///lo que llega del backen 

  const startAspecto=async(aspectoEvent)=>{
    try {
      if(aspectoEvent.id){
        ///actualizando 
        await noahApi.put(`evaDocente/updateAspecto/${aspectoEvent.id}`, aspectoEvent);
        dispatch(actualizarAspecto({...aspectoEvent, user}))
    
      }//crear aspecto 
      const{data}=await noahApi.post('/evaDocente/createAspecto', aspectoEvent);
      console.log({data});
      dispatch(addEvenAspecto({...aspectoEvent, id: data.aspecto.id}))
  
      
    } catch (error) {
      console.log('error con el aspecto ');
      Swal.fire('error al guardar', error.response.data.msg,'error');
      
    }

  }

  
  const listaAspectos=async()=>{
    try {
      const{data}=await noahApi.get('/evaDocente/listAspecto');
      //console.log('llego aspecto',{data});
      dispatch(onListarAspecto(data.data));
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
