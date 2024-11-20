import { Grid, Typography } from "@mui/material"
import { BotonAddNew, BotonDelete } from "../../full-layout-page/evaluacionDocente/modelComponents";
import { useAspectoStore } from "../../../../app/pages/full-layout-page/evaluacionDocente/services/useAspectoStore";
import { useEffect } from "react";
//import {FormAspectoModal} from "./";


export const AspectosView = () => {
   const{listaAspectos}=useAspectoStore();

   useEffect(() => {
     listaAspectos()
   
   }, [])
   

  return (

  
 <Grid container direction='row' justifyContent='space-between' sx={{mb:1}}>
            <Grid>
                <Typography>aspectos para evaluar </Typography>


            </Grid>
            <Grid>
            <BotonAddNew/>
             {/* Modal conectado */}
            <FormAspectoModal/> 
           
            </Grid>
            <Grid>
              <BotonDelete/>
              <FormAspectoModal/> 
            </Grid>
            
          
    
            

        </Grid>
   
       
      );
    };