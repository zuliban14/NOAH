import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';
// configuracion del tema en general 
export const theme =createTheme({
    palette:{
        primary:{
            main: '#0c2d74'
        },
        secondary: {
             main: '#543884'
        },
        tertiary:{
            main:'#030581'

        },
        customColor1: {
            main: '#000307', // Agrega el color hexadecimal que prefieras
        },

        error:{
            main: red.A400
        }
        
    }
})