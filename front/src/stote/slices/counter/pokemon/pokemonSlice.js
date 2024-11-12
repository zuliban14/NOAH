import { createSlice } from '@reduxjs/toolkit';
 export const pokemonSlice = createSlice({
name: 'pokemon',
initialState: {
   page: 0,
   pokemons: [],
   isLoading:false,
},
reducers: {
   startLoadingPokemons: (state, /* action */ ) => {
    state.isLoading=true;
    },
    setPokemons:(state, action)=>{
      //console.log(action);
      state.isLoading = false;
      if (action.payload && action.payload.pokemons && action.payload.page !== undefined) {
         state.pokemons = action.payload.pokemons;
         state.page = action.payload.page;
       }
    
    },
  }
}); 
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;