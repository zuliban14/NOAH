import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlices'
import { aspectoSlice } from '../app/pages/full-layout-page/evaluacionDocente/aspectos'
import { uiSlice } from '../shared/ui/uiSlice'



export const store = configureStore({
  reducer: {
    auth:authSlice.reducer,
    ui:uiSlice.reducer,
    aspecto:aspectoSlice.reducer,
    
  },
})