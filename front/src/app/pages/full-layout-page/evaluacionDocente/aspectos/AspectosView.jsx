import { Grid, Typography } from "@mui/material"
import { BotonAddNew, BotonDelete } from "../modelComponents";
import { FormAspectoModal, useAspectoStore } from "../aspectos";
import { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
//import {FormAspectoModal} from "./";


export const AspectosView = () => {
  const { listaAspectos, events, deleteEventoAspecto } = useAspectoStore();
  const [selectedRows, setSelectedRows] = useState([]); // Estado para filas seleccionadas 


  useEffect(() => {
    const fetchData = async () => {
      try {
        await listaAspectos(); // Asegúrate de que `listaAspectos` sea una función que retorne una promesa.
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [listaAspectos]);

  useEffect(() => {
    setSelectedRows([]);
  }, [events]);

  const handleCheckboxChange = (e, row) => {
    const { checked, value } = e.target;
    console.log('Checkbox seleccionado:', value);

    setSelectedRows((prev) => {
      
      
      if (checked) {
        // Agrega el ID si está seleccionado
        return [...prev, row.id];
      } else {
        // Elimina el ID si está desmarcado
        return prev.filter((id) => id !== row.id);
      }
    });
  };



   const columns = [
            {
              name: "Seleccionar",
              cell: (row) => (
                <input
                  type="checkbox"
                  value={row.id}
                  checked={selectedRows.includes(row.id)} // Verifica si el ID está en el estado
                  onChange={(e) => handleCheckboxChange(e, row)}
                />
              ),
              ignoreRowClick: true,
             
              },
            ...(
              events && events.length > 0
                ? Object.keys(events[0])
                    .filter((key) => key !== "id" && key !== "estado") // Filtra las columnas no deseadas
                    .map((key) => ({
                      name: key.charAt(0).toUpperCase() + key.slice(1), // Capitaliza el nombre
                      selector: (row) => row[key], // Accede dinámicamente al valor
                      sortable: true,
                    }))
                : []
            ),
          ];

        

  return (

  
    <Grid  container
    direction="column"
    sx={{
      height: "100vh", // Altura completa de la pantalla
      width: "100%", // Ancho completo
      overflow: "hidden", // Evita desbordamientos
      padding: 2, // Espaciado interno
    }}>
      
    <Grid
     item sx={{ flex: 1, overflow: "auto" }}
    >
      <Typography>Aspectos de la Evaluación</Typography>
      <DataTable
         columns={columns}
         data={events || []} // Asegúrate de que `events` esté mapeado aquí.
         pagination
         highlightOnHover
         noDataComponent="No hay datos disponibles" // Personaliza el mensaje si no hay datos
      />
         
    
         <Grid
            container
            direction="row"
            justifyContent="space-between" // Ubica los elementos en los extremos
            alignItems="center" // Centra verticalmente
            spacing={2}
          >
            {/* Botones en el extremo izquierdo */}
            <Grid item>
            <BotonDelete selectedRows={selectedRows} 
            deleteEventoAspecto={deleteEventoAspecto}
            events={events} // Pasa la lista de eventos
            
            
            />
          
             
            </Grid>

            {/* Botones en el extremo derecho */}
            <Grid item>
              <BotonAddNew/>
              <FormAspectoModal/>
             
            </Grid>
          </Grid>
    </Grid>
  </Grid>
);
};