import { useEffect } from "react";
import { usePreguntasStore } from "./usePreguntasStore";
import { Grid } from "@mui/material";
import DataTable from "react-data-table-component";
import { FormPreguntaModal } from "./FormPreguntaModal";
import { BotonAddNew } from "../modelComponents";



export const PreguntaView = () => {
    const{listPregunta, events}=usePreguntasStore();

    useEffect(() => {
     const fetchData = async () => {
         try {
            await listPregunta();
           
            } catch (error) {
           console.error("Error fetching data:", error);
         }
       };
       fetchData();
    }, [])
 
    
    const columns = events.length > 0
    ? Object.keys(events[0])
        .filter((key) => key !== "id" && key !== "estado")
        .map((key) => ({
          name: key.charAt(0).toUpperCase() + key.slice(1),
          selector: (row) => row[key],
          sortable: true,
        }))
    : [];
 
   return (
     <Grid  container
     direction="column"
     sx={{
       height: "100vh", // Altura completa de la pantalla
       width: "100%", // Ancho completo
       overflow: "hidden", // Evita desbordamientos
       padding: 2, // Espaciado interno
     }}>
     <DataTable
     columns={columns}
     data={[...new Map(events.map(item => [item.id, item])).values()]} 
     pagination
     highlightOnHover
     noDataComponent="No hay datos disponibles" 
     />
     <Grid
            container
            direction="row"
            justifyContent="space-between" // Ubica los elementos en los extremos
            alignItems="center" // Centra verticalmente
            spacing={2}
          >
      {/* Botones en el extremo derecho */}
      <Grid item>
              <BotonAddNew/>
              <FormPreguntaModal/>
             
            </Grid>
     </Grid>
 
   </Grid>
   )
}
