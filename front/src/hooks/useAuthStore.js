import { useDispatch, useSelector } from "react-redux"
import evaApi from "../app/pages/full-layout-page/api/evaApi";
import { onLogin, onLogout,onChecking} from "../stote/auth/authSlices";
import Swal from 'sweetalert2';



export const useAuthStore = () => {
    const{status, user, errorMessage}=useSelector(state =>state.auth);
    const dispatch= useDispatch();

    const startLogin=async({nombre_usuario, clave_acceso})=>{
       // console.log({nombre_usuario, clave_acceso})
      // dispatch(onChecking());
        try {
          const resp =await evaApi.post('/login/',{nombre_usuario, clave_acceso})
            //const {data} =await evaApi.post('/login/',{nombre_usuario, clave_acceso})
             console.log("exitoso",resp.data.usuario)
             if(resp.data.usuario == false){
              console.log('El usuario no existe');              
              Swal.fire('error en la autenticacion', errorMessage, 'error')
             }else{
              console.log('Si señor bienvenido');
              Swal.fire({
                title: '¡Bienvenido!',
                text: 'Esto es un mensaje de bienvenida',
                icon: 'info',
                confirmButtonText: 'Aceptar'
              });              
             }
            // localStorage.setItem('')
           // dispatch(onLogin({usuario: data.nombre_usuario, clave: data.clave_acceso}));
        } catch (error) {
           console.log("error",{error})
          dispatch(onLogout('credenciales incorrectas'));
        }

    }



  return {
     ///propiedades
     status, 
     user, 
     errorMessage,
    

     ///metodos
     startLogin

  }
}
