import { Grid, TextField, Typography, Button, Grid2 } from "@mui/material"

import { AspectoModal } from "../components"
import { useUiStoreAsp } from "../../../../../hooks/useUiStore";


export const AspectosView = () => {
   const { isDateModalOpen, openDateModal, closeDateModal } = useUiStoreAsp;

  return (

        <Grid container direction='row' justifyContent='space-between' sx={{mb:1}}>
            <Grid>
                <Typography>aspectos para evaluar </Typography>
            </Grid>
            <Grid>
            <Button variant="contained" color="primary"  >
                Abrir Modal
            </Button>
            {/* <AspectoModal open={isModalOpen} onClose={handleCloseModal} /> */}
            </Grid>
            
          
    
            

        </Grid>
      );
    };