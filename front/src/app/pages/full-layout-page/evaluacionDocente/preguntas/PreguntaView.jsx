import { useEffect, useState } from "react";
import { usePreguntasStore } from "./";
import { Grid } from "@mui/material";
import DataTable from "react-data-table-component";
import { FormPreguntaModal } from "./FormPreguntaModal";
import { BotonAddNew, BotonDelete, BotonActualizar} from "../modelComponents";
import '../../../../../styles.css';



export const PreguntaView = () => {
    const{listPregunta, events, eliminarPregunta, setActivarEvent}=usePreguntasStore();
    const [selectedRows, setselectedRows] = useState([]);
   // const { openDateModal } = useUiStoreAsp();
    ///para listar preguntas
    useEffect(() => {
     const fetchData = async () => {
         try {
            await listPregunta();
            //console.log('datos de preguntas', events);
            } catch (error) {
           console.error("Error fetching data:", error);
         }
       };
       fetchData();
    }, [listPregunta]
  
  )
 
    ///columnas en la tabla 
    const columns = events.length > 0
    ?[
      ...Object.keys(events[0])
        .filter((key) => key !== "id" && key !== "estado")
        .map((key) => ({
          name: key.charAt(0).toUpperCase() + key.slice(1),
          selector: (row) => row[key],
          sortable: true,///para ordenar las columnas 
          wrap: true,//para que el texto no se corte 
        })),

        //se agrega columna de actualizar 
          {
              name: "Acciones",
              cell: (row) => <BotonActualizar row={row}
              setActivarEvent={setActivarEvent} //este se llama como props
              
              />, // boton para actualizar 
             // ignoreRowClick: true,
              style: { minWidth: '30px', maxWidth: '150px' },
              
            }
  

      ]
    : [];

   //filtrar los datos unicos 
    const data = [...new Map(events.map((item) => [item.id, item])).values()];
    console.log("Datos únicos:", data);

 ////maneja filas seleccionadas 
    const guardaRowSelected = (state) => {
      // Actualizar el estado con las filas seleccionadas
      setselectedRows(state.selectedRows.map(row => row.id));
      console.log("Filas seleccionadas:", state.selectedRows);
    };
  
    
 
   return (
     <Grid  container
     direction="column"
     sx={{
      // height: "100vh", // Altura completa de la pantalla
       //width: "100%", // Ancho completo
       overflow: "hidden", // Evita desbordamientos
       padding: 1, // Espaciado interno
     }}>

           <Grid
            container
            direction="row"
            justifyContent="flex-end" // Ubica los elementos en los extremos
            alignItems="center" // Centra verticalmente
            spacing={1}
            sx={{ marginBottom: 2 }}
           
          >
            {/* Botones en el extremo izquierdo */}
            <Grid item>
            <BotonDelete 
            selectedRows={selectedRows} 
            onDelete={eliminarPregunta} // se envia Función para eliminar preguntas
            confirmMessage="¿Estás seguro de eliminar estas preguntas?"
            confirmText="¿Quieres eliminar las preguntas seleccionadas?"
            successMessage="Las preguntas se eliminaron correctamente."
            errorMessage="Ocurrió un error al eliminar las preguntas."
            />
            </Grid>

            {/* Botones en el extremo derecho */}
            <Grid item>
              <BotonAddNew/>
              <FormPreguntaModal/>
             
            </Grid>
          </Grid>
            
     <Grid>
     <DataTable
     columns={columns}
     data={data} 
     pagination
     highlightOnHover
     noDataComponent="No hay datos disponibles" 
     responsive
     selectableRows
     onSelectedRowsChange={guardaRowSelected}
     />
     </Grid>
    
     
 
   </Grid>
   )
}
