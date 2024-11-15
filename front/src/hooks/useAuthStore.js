import { useDispatch, useSelector } from "react-redux"
import evaApi from "../app/pages/full-layout-page/api/evaApi";
import { onLogin, onLogout,onChecking, clearErrorMessage} from "../stote/auth/authSlices";
import Swal from 'sweetalert2';



export const useAuthStore = () => {
    const{status, user, errorMessage}=useSelector(state =>state.auth);
    const dispatch= useDispatch();

    const startLogin=async({nombre_usuario, clave_acceso})=>{
       // console.log({nombre_usuario, clave_acceso})
      // dispatch(onChecking());
      try {
        const { data } = await evaApi.post('/login/onlogin', { nombre_usuario, clave_acceso });
  
        if (!data.usuario) {
          console.log('El usuario no existe', data);
          dispatch(onLogout('Usuario no encontrado'));
          Swal.fire('Error en la autenticación', errorMessage, 'error');
        } else {
          localStorage.setItem('token', data.token);
          localStorage.setItem('token-init-date', new Date().getTime());
          //Extrae el primer elemento del array data.usuario antes de enviarlo al dispatch
         if (data.usuario && Array.isArray(data.usuario) && data.usuario.length > 0) {
            const { id, nombre } = data.usuario[0];///extrae los datos 
            dispatch(onLogin({ id, nombre }));
            console.log("¡Bienvenido!", data.usuario);
          } else {
            console.error("El formato de `data.usuario` no es el esperado.");
          }
          
         //dispatch(onLogin({ id: data.usuario.id, nombre: data.usuario.nombre }));
         

    
          Swal.fire({
            title: '¡Bienvenido!',
            text: 'Esto es un mensaje de bienvenid@"',
            icon: 'info',
            confirmButtonText: 'Aceptar'
          });
        }
          
        } catch (error) {
           console.log("error",{error})
          dispatch(onLogout('credenciales incorrectas'));
          setTimeout(() => {
            dispatch(clearErrorMessage());// Limpia el mensaje de error después de un tiempo
          }, 10);

        }

    }

    // ////revalidar el token //////////
    const checkAuthToken=async()=>{
      const token = localStorage.getItem('token');
      if(!token)return dispatch(onLogin());
      try {
        const {data}=await evaApi.get('/login/renew');
        console.log("¡token", data);
        localStorage.setItem('token', data.token);
        localStorage.setItem('token-init-date', new Date().getTime());
        //console.log("¡token", data.usuario);

        if (data.usuario && Array.isArray(data.usuario) && data.usuario.length > 0) {
          const { id, nombre } = data.usuario[0];///extrae los datos 
          dispatch(onLogin({ id, nombre }));
          console.log("¡token", data.usuario);

        }    else {
          // Si data.usuario no es un arreglo válido, considera al usuario como no autenticado
          dispatch(onLogout());
        }



        
      } catch (error) {
        localStorage.clear();
        dispatch(onLogin());
      }
    }

    //////logout para sacar al usuario ///

    const startLogout=()=>{
      localStorage.clear();
      dispatch(onLogout());

    }




  return {
     ///propiedades
     status, 
     user, 
     errorMessage,
    

     ///metodos
     startLogin,
     checkAuthToken,
     startLogout

  }
}
