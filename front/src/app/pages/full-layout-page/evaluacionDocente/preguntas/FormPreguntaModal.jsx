import {  Button, IconButton, MenuItem, TextField, Typography } from "@mui/material"
import Modal from'react-modal';
import { useUiStoreAsp } from "../../../../../hooks";
import { UploadFile, UploadOutlined } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import { useAspectoStore } from "../aspectos";
import { usePreguntasStore } from "./usePreguntasStore";


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
export const FormPreguntaModal = () => {
    const { isDateModalOpen, closeDateModal } = useUiStoreAsp();
    const {listaTipoPregunta}=usePreguntasStore();
    const {listaAspectos, events, setActivarEvent }=useAspectoStore();
    const [options, setOptions] = useState([]); // Estado para las opciones de la lista
    const [selectedOption, setSelectedOption] = useState(''); // Estado para la opción seleccionada
    const subirImagen=useRef();//ref: funcion para simulacion del boton de archivos



    useEffect(() => {
        const fetchData = async () => {
            try {
                // Si listaAspectos devuelve datos, llámalo
                await listaAspectos();
        
                // muestara los datos que trae el events en la listaAspecto 
                console.log('Datos obtenidos desde events para eventos:', events);
        
                // el arreglo events
                if (Array.isArray(events)) {
                  setOptions(
                    events.map((aspecto) => ({
                      value: aspecto.id,
                      label: aspecto.descripcion,
                    }))
                  );
                } else {
                  console.log('El formato de datos en events no es válido.');
                }
              } catch (error) {
                console.log('Error al cargar el data:', error);
              }
            };
            fetchData();
    }, [events]);


   

  

    const onCloseModal=()=>{
        closeDateModal();
        console.log('cerrar modal');

        setActivarEvent(null);// Limpia el evento activo
    
       };

       const onFileInputChange=({target})=>{
        console.log('archivos', target.files);

       }
       const handleSelectChange = ({target}) => {
        setSelectedOption(target.value);
        console.log('Opción seleccionada:', target.value);
      };

      
       
      
       
  return (
    <Modal
    isOpen={isDateModalOpen }
    onRequestClose={onCloseModal}// Cierra el modal al hacer clic fuera
    style={customStyles}
   // className="modal"
    overlayClassName="modal-fondo"
        >
        <form>
            <TextField 
            label="Titulo"
            variant="outlined"
            fullWidth
            margin="normal"
            name="titulo"
            //value={formValues.nombre || ''}
            //onChange={onInputChange}
            //error={formSubmitted && formValues.nombre.trim().length === 0}
          
            />

            <TextField
            label="Subtitulo"
            variant="outlined"
            fullWidth
            margin="normal"
            name="subtitulo"
            />
            <Typography>Ingrese la imagen</Typography>
            
            <input
            type="file"
            multiple
            ref={subirImagen}
            onChange={onFileInputChange}
            style={{display:'none'}}
            />
            <IconButton
             color="primary"
             onClick={()=> subirImagen.current.click()}//al dar click al icono llama al input
            >
                <UploadOutlined/>
            </IconButton>
             <TextField
            label="Imagen"
            variant="outlined"
            fullWidth
            margin="normal"
            name="imagen"
            />

           <TextField
            label="Valor"
            variant="outlined"
            fullWidth
            margin="normal"
            name="valor"
            />
            {/* Campo de lista */}
        <TextField
          select
          label="Seleccione una opción"
          value={selectedOption}
          onChange={handleSelectChange}
          fullWidth
          margin="normal"
        >
          {options.length > 0 ? (
                options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
                ))
            ) : (
                <MenuItem disabled>No hay opciones disponibles</MenuItem>
            )}
            </TextField>
        {/* <TextField
          select
          label="Seleccione una opción"
          value={selectedOption}
          onChange={handleSelectChange}
          fullWidth
          margin="normal"
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField> */}

            

        </form>

    </Modal>
  )
}
