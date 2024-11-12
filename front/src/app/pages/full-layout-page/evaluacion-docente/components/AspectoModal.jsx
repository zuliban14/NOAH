import { useState } from 'react';

import Modal from'react-modal';
import {Typography, TextField, Button} from '@mui/material';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');

  


export const AspectoModal = () => {

   const [isOpen, setIsOpen] = useState(true)
   ///para cerrar modal 
   const onCloseModal=()=>{
    console.log('cerrar modal');
    setIsOpen(false)

   }

  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onCloseModal}
        style={customStyles}
    
    >
        <Typography id="modal-modal-title" variant="h6" component="h2">
                      Registrar Aspecto
                </Typography>
                <form >
                    <TextField
                        label="Nombre"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="name"
                       // value={formValues.name}
                        //onChange={handleInputChange}
                    />
                    <TextField
                        label="Descripción"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="description"
                       // value={formValues.description}
                        //onChange={handleInputChange}
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Enviar
                    </Button>
                </form>

    </Modal>
  )
}
