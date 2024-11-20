import { useSelector } from "react-redux"
//import { useUiStoreAsp } from "../../hooks"
import { useAspectoStore } from "../../../../../app/pages/full-layout-page/evaluacionDocente/services/useAspectoStore";
import { Grid,  Button } from "@mui/material"


import { DeleteOutlined } from "@mui/icons-material";
//import { deleteAspecto } from "../../stote";

export const BotonDelete = () => {
  const {deleteEventoAspecto}=useAspectoStore();
  const handleDelete=()=>{
    
    deleteEventoAspecto();

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


