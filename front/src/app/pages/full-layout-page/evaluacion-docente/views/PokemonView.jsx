import { Grid, Button, Typography, TextField} from "@mui/material"
import { SaveAltOutlined } from "@mui/icons-material"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "../../../../../stote/slices/counter/pokemon/thunks"

import ModalAsp from "../components/ModalAsp"
import { AspectoModal } from "../components"
import React, { useState } from 'react';



export const PokemonView = () => {
  const dispatch= useDispatch();
  const {isLoading, pokemons=[], page}=useSelector(state => state.pokemons);
  //const PokemonList = ({ pokemons })
  useEffect(() => {
    dispatch(getPokemons());
  }, [])

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  

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
    <Grid item>
      <span>loading:{isLoading? `true`:`false`}</span>
    <ul>
      {pokemons.map(({name}) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
    <Button disabled={isLoading}
    onClick={()=>dispatch(getPokemons(page))}>next</Button>


    </Grid>
    <Button variant="contained" color="primary" >
      <AspectoModal/>
                Abrir Modal
            </Button>
           
    
   {/* <AspectoModal open={isModalOpen} onClose={handleCloseModal}/>  */}
 </Grid>
    
    
  )
}
