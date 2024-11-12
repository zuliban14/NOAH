import React, { useState } from 'react';
import { Modal, Box, Button, Typography, TextField } from '@mui/material';

const ModalAsp= ({ open, handleClose, onSubmit }) => {
    const [formValues, setFormValues] = useState({ name: '', description: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formValues);
        handleClose();
    };

    

    return (
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
                borderRadius: 2
            }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Formulario de Registro
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Nombre"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="name"
                       // value={formValues.name}
                       // onChange={handleInputChange}
                    />
                    <TextField
                        label="Descripción"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="description"
                        //value={formValues.description}
                       // onChange={handleInputChange}
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Enviar
                    </Button>
                </form>
            </Box>
        </Modal>
    );
};

export default ModalAsp;
