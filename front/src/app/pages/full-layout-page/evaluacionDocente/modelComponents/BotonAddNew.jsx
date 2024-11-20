import { useSelector } from "react-redux"
import { useUiStoreAsp } from "../../../../../hooks"
import { useAspectoStore } from "../../../../../app/pages/full-layout-page/evaluacionDocente/aspectos/services/useAspectoStore";
import { Grid,  Button } from "@mui/material"
import { AddOutlined } from "@mui/icons-material";

export const BotonAddNew = () => {
    const {openDateModal}=useUiStoreAsp();
    const{setActivarEvent}=useAspectoStore();

    const handleclickNew=()=>{
      
        setActivarEvent({
            nombre:'',
            descripcion:''
        });
        openDateModal();

    };

  return (
    // <button className="btn btn-primary fab"
    // onClick={handleclickNew}
    // >
    //     <i className="fas fa-plus"></i>

    // </button>

    
    <Grid>
    <Button variant="contained" color="primary" size="small"  onClick={handleclickNew} startIcon={<AddOutlined />}>
    
    </Button>
  
    </Grid>
  )
}
