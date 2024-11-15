import { useState } from 'react';

import Modal from'react-modal';
import {Typography, TextField, Button} from '@mui/material';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

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

  
;

  Modal.setAppElement('#root');
  


export const AspectoModal = () => {

   const [isOpen, setIsOpen] = useState(true)
   ///estado adicional para validar campo, por defecto no se ha realizado el submit del formulario
   const [formSubmitted, setformSubmitted] = useState(false);

   ///para cerrar modal 
   const onCloseModal=()=>{
    console.log('cerrar modal');
    setIsOpen(false)

   };
   ////para que se actualice y deje escribir en los campos de textos se crea 
   const onInputChange=({target})=>{// se recibe el evento pero se destructura el target 
       setformValues({// se llama todos los valores que tiene 
        ...formValues,
        [target.name]:target.value}) //se actualiza le valor 
   }

  const [formValues, setformValues] = useState({
    nombre:'PEI20',
    descripcion:'Gestión humana'

  })

  /////el posteo del formulario que se envien los datos 
  const onSubmit=(event)=>{
    event.preventDefault();
    setformSubmitted(true);//el formulario intenta hacer el posteo 
    if(formValues.nombre.length<=0)return;
    console.log(formValues);

  }

  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onCloseModal}
        style={customStyles}
       // className="modal"
        overlayClassName="modal-fondo"
    
    >
        <Typography id="modal-modal-title" variant="h6" component="h2">
                      Registrar Aspecto
                </Typography>
                <form onSubmit={onSubmit}>
                    <TextField
                        label="Nombre"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="nombre"
                        value={formValues.nombre}
                        onChange={onInputChange}
                        className='form-control is-invalid'
                    />
                    <TextField
                        label="Descripción"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="descripcion"
                        value={formValues.descripcion}
                        onChange={onInputChange}
                    />
                    <Button  variant="contained" color="primary" fullWidth>
                        Enviar
                    </Button>
                </form>

    </Modal>
  )
}
