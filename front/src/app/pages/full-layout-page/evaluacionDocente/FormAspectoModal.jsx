import { useEffect, useMemo, useState } from 'react';

import Modal from'react-modal';
import {Typography, TextField, Button} from '@mui/material';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { useUiStoreAsp } from '../../../../hooks';
import { useAspectoStore } from '../../../../app/pages/full-layout-page/evaluacionDocente/services/useAspectoStore';



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
  


export const FormAspectoModal = () => {

  const { isDateModalOpen, closeDateModal } = useUiStoreAsp();

   //const [isOpen, setIsOpen] = useState(true)
   ///estado adicional para validar campo, por defecto no se ha realizado el submit del formulario
   const [formSubmitted, setformSubmitted] = useState(false);
   const{events, setActivarEvent, activeEvent, startAspecto}=useAspectoStore();

   const [formValues, setformValues] = useState({
    nombre: '',
    descripcion: '',

  })


  

   

   useEffect(() => {
    if (activeEvent!==null) {
      setformValues({...activeEvent})
    }

  }, [activeEvent])

////////


   ///para cerrar modal 
   const onCloseModal=()=>{
    closeDateModal();
    console.log('cerrar modal');
    setformSubmitted(false);

   };
   ////para que se actualice y deje escribir en los campos de textos se crea 
   const onInputChange=({target})=>{// se recibe el evento pero se destructura el target 
       setformValues({// se llama todos los valores que tiene 
        ...formValues,
        [target.name]:target.value}) //se actualiza le valor 
   }



  /////el posteo del formulario que se envien los datos 
  const onSubmit = async (event) => {
    event.preventDefault();
    setformSubmitted(true);

    if (formValues.nombre.trim().length <= 0) return;

    console.log("Formulario enviado:", formValues);

    await startAspecto(formValues)

    // Cerrar el modal después de enviar el formulario
    closeDateModal();
    setformSubmitted(false);
  };

  return (
    <Modal
    isOpen={isDateModalOpen} // Estado de apertura del modal
    onRequestClose={onCloseModal}// Cierra el modal al hacer clic fuera
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
                        value={formValues.nombre }
                        onChange={onInputChange}
                        error={formSubmitted && formValues.nombre.trim().length === 0}
                        helperText={
                          formSubmitted && formValues.nombre.trim().length === 0
                            ? 'El nombre es obligatorio'
                            : ''
                        }
                       
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
                    <Button  variant="contained" color="primary" fullWidth type="submit">
                        Enviar
                    </Button>
                </form>

    </Modal>
  )
}
