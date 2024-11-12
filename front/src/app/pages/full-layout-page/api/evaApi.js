import axios from 'axios';
import { getEvaVariables } from '../../../../helpers';

const{VITE_API_URL}=getEvaVariables()

const evaApi= axios.create( {
   baseURL:VITE_API_URL,
   headers: {
      'Content-Type': 'application/json', // Agregar el encabezado Content-Type
      'Authorization': 'Bearer <tu_token>', // Si usas autenticación basada en tokens
    },
});

export default evaApi;