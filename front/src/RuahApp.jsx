import { useDispatch, useSelector } from 'react-redux'
import {AppRouter} from './router/AppRouter'
import { AppTheme } from './theme'
import { Box, Button, Grid } from '@mui/material'

export const RuahApp = () => {
 //const {counter}=useSelector(state=> state.counter)
 //const dispatch=useDispatch();


  return (
    
    
   
    <AppTheme>
    <AppRouter/>
    </AppTheme>
  )
}
