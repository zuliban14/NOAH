import { useDispatch, useSelector } from "react-redux"
import { activarEvent, onListarAspecto } from "../aspectos";
import noahApi from "../../api/noahApi";


export const usePreguntasStore = () => {

    const dispatch=useDispatch();
    const {events, activeEvent}=useSelector(state=>state.aspecto)

    const setActivarEvent=(preguntaEvent)=>{///el evento creado 
        dispatch(activarEvent(preguntaEvent))
    }

    const listPregunta=async()=>{
        try {
            const{data}=await noahApi.get(`/evaDocente/listPregunta`);
            
            dispatch(onListarAspecto(data.data));
            //console.log('lista de pre bd',data);
        } catch (error) {
           console.log('error en cargar los datos de la preguntas', error);
            
        }
    }

    const listaTipoPregunta=async()=>{
        try {
            const{data}=await noahApi.get(`/evaDocente/listTipoPregunta`);
            dispatch(onListarAspecto(data.data));
            console.log('lista de pre bd',data);
        } catch (error) {
            console.log('error al cargar tipo de pregunta', error);
            
        }
    }

return{
    ///propiedades
events, 
activeEvent, 
    //metrodos
 // addPreguunta,
  listPregunta,
  //deletePregunta,
  //updatePregunta,
  setActivarEvent,
  listaTipoPregunta,

}
}
