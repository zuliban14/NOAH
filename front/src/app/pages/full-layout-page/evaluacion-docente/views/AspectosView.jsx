import { Grid, TextField, Typography, Button, Grid2 } from "@mui/material"


import { useUiStoreAsp } from "../../../../../hooks/useUiStore";
import { AspectoModal, BotonAddNew, BotonDelete } from "../components";
import { useAspectoStore } from "../../../../../hooks";
import { useEffect } from "react";


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
            <AspectoModal/> 
           
            </Grid>
            <Grid>
              <BotonDelete/>
              <AspectoModal/> 
            </Grid>
            
          
    
            

        </Grid>
      );
    };