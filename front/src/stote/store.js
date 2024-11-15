import { configureStore } from '@reduxjs/toolkit'

import { counterSlice } from './slices/counter'
import { pokemonSlice } from './slices/counter/pokemon/pokemonSlice'
import { authSlice } from './auth/authSlices'
import { uiSlice } from '../app/pages/full-layout-page/evaluacion-docente/ui/uiSlice'



export const store = configureStore({
  reducer: {
    //counter:counterSlice.reducer,
    pokemons:pokemonSlice.reducer,
    auth:authSlice.reducer,
    ui:uiSlice.reducer
  },
})