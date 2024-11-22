import { useSelector } from "react-redux"
//import { useUiStoreAsp } from "../../hooks"
import { useAspectoStore } from "../../../../../app/pages/full-layout-page/evaluacionDocente/aspectos/services/useAspectoStore";
import { Grid,  Button } from "@mui/material"
import Swal from 'sweetalert2';


import { DeleteOutlined } from "@mui/icons-material";


export const BotonDelete = ({ selectedRows}) => {
  const {deleteEventoAspecto, events}=useAspectoStore();
  
 
  const handleDelete = async () => {
    if (selectedRows.length === 0) {
      Swal.fire("Atención", "No hay elementos seleccionados para eliminar.", "warning");
      return;
    }

    // Confirmación con SweetAlert
    const confirmDelete = await Swal.fire({
      title: "¿Estás seguro?",
      text: `¿Quieres eliminar los elementos seleccionados? (${selectedRows.join(", ")})`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
    });

    if (!confirmDelete.isConfirmed) return;

    try {
      // Eliminar cada aspecto seleccionado
      await Promise.all(selectedRows.map((id) => deleteEventoAspecto(id)));

      Swal.fire("Eliminado", "Los elementos seleccionados se eliminaron correctamente.", "success");
    } catch (err) {
      console.error("Error eliminando elementos:", err);
      Swal.fire("Error", "Ocurrió un error al eliminar los elementos. Revisa la consola.", "error");
    }
  };
  return (
    <Grid>
    <Button size="small"  variant="contained" color="primary" onClick={handleDelete} startIcon={<DeleteOutlined/>} >
    
    </Button>
    {/* Modal conectado */}
    {/* <AspectoModal/>  */}
    </Grid>
  )
}


