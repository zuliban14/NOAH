import { Grid, Typography } from "@mui/material"
import { BotonAddNew, BotonDelete } from "../modelComponents";
import { FormAspectoModal, useAspectoStore } from "../aspectos";
import { useEffect } from "react";
//import {FormAspectoModal} from "./";


export const AspectosView = () => {
   const{listaAspectos}=useAspectoStore();

   useEffect(() => {
     listaAspectos()
   
   }, [])

   const{data} =listaAspectos();
   console.log('data ',data);
   

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