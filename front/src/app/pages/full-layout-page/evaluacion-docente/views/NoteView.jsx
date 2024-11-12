import { SaveAltOutlined } from "@mui/icons-material"
import { Typography, Grid, TextField, Button} from "@mui/material"
import { light } from "@mui/material/styles/createPalette"


export const NoteView = () => {
  return (
     <Grid container direction='row' justifyContent='space-between' sx={{mb:1}}>
        <Grid item>
         <Typography fontSize={39} fontWeight={'light'}>Aspectos de Evaluacion</Typography>
        </Grid>
        <Grid item>
         <Button sx={{padding:2}} color="primary">
            <SaveAltOutlined sx={{fontSize:30, mr:1}}/>
            Guardar
         </Button>

        </Grid>
        <Grid container>
         <TextField
         type="text"
         variant="filled"
         fullWidth
         placeholder="ingrese el nombre del aspecto"
         label="aspecto"
         sx={{border:'none', md:1}}
         
         />
            <TextField
         type="text"
         variant="filled"
         fullWidth
         multiline
         placeholder="ingrese la descripcion del aspecto"
         label="descripcion"
         minRows={10}
         
         />
        </Grid>
       
     </Grid>
  )
}
