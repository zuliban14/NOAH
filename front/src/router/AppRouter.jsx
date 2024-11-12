import {Route, Routes} from "react-router-dom";
import {AuthRoutes} from "../auth/routes/AuthRoutes";
import { EvaluacionDocentePage } from "../app/pages/full-layout-page/evaluacion-docente/pages/EvaluacionDocentePage";
import { FullLayoutRoutes } from "../app/pages/full-layout-page/routes/fullLayoutRoutes";
//import { getEvaVariables } from "../helpers";


export const AppRouter = () => {
 
  return (

    
    <Routes>
        {/* Ruta de login y registro  */}
        <Route path="/auth/*" element={<AuthRoutes/>} />
          {/* todo lo que esta afuera del auth */}
          {/* <Route path="eva/*" element={<EvaluacionDocentePage/>}/> */}
        {/* Rutas de la app o personas con autenticacion  */}
           {/*  <Route path="/*" element={<FullLayoutRoutes/>} />  */}
    </Routes>
  )
}
