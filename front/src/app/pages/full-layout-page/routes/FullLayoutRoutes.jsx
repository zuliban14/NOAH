import {Navigate,Routes, Route} from 'react-router-dom';
import { EvaluacionDocentePage } from '../evaluacion-docente/pages/EvaluacionDocentePage'

export const FullLayoutRoutes = () => {
  return (
    <Routes>
        <Route path="/" element ={<EvaluacionDocentePage/>}/>
        {/* luego definimos donde queremos ir sino se encuentra la ruta   */}
        <Route path="/*" element ={<Navigate to="/"/>}/>
    </Routes>
  )
}
