import { Navigate } from "react-router-dom"
import { EvaluacionDocentePage } from "../pages/EvaluacionDocentePage"


export const EvaluacionDocenteRoutes = () => {
  return (
    <Routes>
        
        <Route path="eva/" element={<EvaluacionDocentePage/>} />
        <Route path="/*" element={<Navigate to="/"/>}/>

       
    </Routes>
  )
}
