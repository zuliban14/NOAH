import { Typography } from '@mui/material';
import React from 'react';
import { BotonAddNew } from './modelComponents';
import { FormAspectoModal } from './'
import { Button } from 'react-bootstrap'

export const PruebaEd = () => {
  return (

    <div>
        
        <Typography>Aliquip nulla excepteur tempor nostrud adipisicing in aliquip officia Lorem incididunt duis eiusmod laborum eiusmod. Labore et do irure non excepteur irure esse. Excepteur id incididunt id enim voluptate incididunt laborum pariatur do eu velit. Ullamco deserunt minim voluptate incididunt. Sint incididunt et laboris ipsum officia esse elit magna incididunt.</Typography> 
        <BotonAddNew/>
             {/* Modal conectado */}
            <FormAspectoModal/>
       
        </div>
  )
}
