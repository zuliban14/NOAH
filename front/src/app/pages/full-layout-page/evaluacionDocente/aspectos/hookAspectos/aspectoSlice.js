import { createSlice } from '@reduxjs/toolkit';


export const aspectoSlice = createSlice({
        name: 'aspecto',
        initialState: {
            cargandoEventos:true,
            events:[],
            activenEvent:null,
        },
reducers: {
    activarEvent: (state, {payload} ) => {
        state.activenEvent=payload;
    },

    addEvenAspecto:(state,{payload})=>{
       state.events.push(payload);
       state.activenEvent=null;//para limpiar 
    },

    actualizarAspecto:(state,{payload})=>{
       //map regresa un nuevo arreglo basado en el valor del retorno 
       state.events=state.events.map(event=>{
        if (event.id === payload.id) {
            return payload;
        }

        return event;

       })
    },

    deleteAspecto: (state) => {
        state.events = state.events.filter(event => event.id !== state.activenEvent.id);
        state.activenEvent = null;
    },

    onListarAspecto:(state,{payload=[]})=>{
        state.cargandoEventos=true;
    
       
       payload.forEach(event => {
        const existe=state.events.some(dbEvent=>dbEvent.id===event.id)
      
        if(!existe){
            state.events.push(event)

        }
       });

    }


}
});
export const { activarEvent, addEvenAspecto, actualizarAspecto, deleteAspecto, onListarAspecto } = aspectoSlice.actions;