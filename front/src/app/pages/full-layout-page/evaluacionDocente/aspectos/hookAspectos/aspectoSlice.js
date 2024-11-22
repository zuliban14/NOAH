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
    deleteAspecto: (state, { payload }) => {
        state.events = state.events.filter((event) => event.id !== payload);
  
        // Limpia el evento activo si fue eliminado
        if (state.activenEvent?.id === payload) {
          state.activenEvent = null;
        }
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

    // deleteAspecto: (state) => {
    //     state.events = state.events.filter(event => event.id !== state.activenEvent.id);
    //     state.activenEvent = null;
    // },
 

    onListarAspecto: (state, { payload = [] }) => {
        //console.log("Payload en reducer:", payload); 
        state.cargandoEventos = false;
      
        payload.forEach((event) => {
          const existe = state.events.some((dbaspecto) => dbaspecto.id === event.id);
          if (!existe) {
            state.events.push(event);
          }
        });
      
       // console.log("Estado actualizado en events:", state.events);
    },
    onLimpiaraspecto:(state)=>{
        state.cargandoEventos=true,
        state.events=[],
        state.activarEvent=null

    },

  
  


}
});
export const { 
    activarEvent,
    addEvenAspecto, 
    actualizarAspecto,
    deleteAspecto, 
    onListarAspecto,
    onLimpiaraspecto
} = aspectoSlice.actions;