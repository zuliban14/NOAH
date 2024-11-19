import { useSelector } from "react-redux"
import { useUiStoreAsp } from "../../../../../hooks/useUiStore"
import { useAspectoStore } from "../../../../../hooks";
import { Grid,  Button } from "@mui/material"
import { AspectoModal } from "./AspectoModal";
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
