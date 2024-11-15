import { Grid, TextField, Typography } from "@mui/material"
import { Button } from "react-bootstrap"
import { AspectoModal } from "../components"


export const AspectosView = () => {
  return (
    
        <Grid container direction='row' justifyContent='space-between' sx={{mb:1}}>
        <Grid item>
         <Typography fontSize={39} fontWeight={'light'}>pokemon</Typography>
        </Grid>
        <Grid item>
         <Button sx={{padding:2}} color="primary">
            <SaveAltOutlined sx={{fontSize:30, mr:1}}/>
            Guardar
         </Button>
    
        </Grid>
        <Grid item>
         <TextField
         type="text"
         variant="filled"
         fullWidth
         placeholder="ingrese el nombre del aspecto"
         label="aspecto"
         sx={{border:'none', md:1}}
         
         />
    
        </Grid>
       
        <Button variant="contained" color="primary" >
          <AspectoModal/>
                    Abrir Modal
                </Button>
               
        
       {/* <AspectoModal open={isModalOpen} onClose={handleCloseModal}/>  */}
     </Grid>
  )
}
