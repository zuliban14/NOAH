//import { Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import {VistaEvaLayout} from '../layout/VistaEvaLayout';
import { NoteView, NothingSelectedView, ContadorView} from '../views';
import { AddOutlined } from '@mui/icons-material';
import { PokemonView } from '../views/PokemonView';
import ModalAsp from '../components/ModalAsp';
import { AspectoModal } from '../components';
import { AspectosView } from '../views/AspectosView';



export const EvaluacionDocentePage = () => {
  return (

  
    <VistaEvaLayout>
        {/*} <Typography>Aliquip nulla excepteur tempor nostrud adipisicing in aliquip officia Lorem incididunt duis eiusmod laborum eiusmod. Labore et do irure non excepteur irure esse. Excepteur id incididunt id enim voluptate incididunt laborum pariatur do eu velit. Ullamco deserunt minim voluptate incididunt. Sint incididunt et laboris ipsum officia esse elit magna incididunt.</Typography>*/}
    
    {/*<NothingSelectedView/> */}
    {/*<NoteView/>*/}
      {/* <ContadorView/>*/}
    {/* <PokemonView/>  */}
    {/* <ModalAsp/> */}
    <AspectosView/>

    {/* <IconButton
    size='large'
    sx={{
      color:'white',
      backgroundColor:'primary.main',
      ':hover':{backgroundColor:'primary.main', opacity:0.9},
      position:'fixed',
      right:50,
      bottom:50
    }}
    >
    <AddOutlined sx={{fontSize:30}}/>
    </IconButton> */}
    </VistaEvaLayout> 
    
   
     
    
    
    
  )
}
