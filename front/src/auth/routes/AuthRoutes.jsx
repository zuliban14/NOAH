import {Navigate,Routes, Route} from 'react-router-dom';
import { LoginPage, Recuperarclave} from '../pages';
import { EvaluacionDocentePage } from '../../app/pages/full-layout-page/evaluacion-docente/pages/EvaluacionDocentePage';
import { PokemonView } from '../../app/pages/full-layout-page/evaluacion-docente/views/PokemonView';

// rutas del login 
export const AuthRoutes = () => {

  const authStatus='not-authenticated';

  return (
    <Routes>

      {
        (authStatus ==='not-authenticated')
        ?<Route path="login" element={ <LoginPage/>  }/>
        :<Route path="eva" element={ <EvaluacionDocentePage/>  }/>
      }
      {/**
      <Route path="login" element={ <LoginPage/>  }/> */}
      <Route path="eva" element={ <EvaluacionDocentePage/>  }/> 
     
        
        <Route path="recuperarclave" element={ <Recuperarclave/>  }/>
        
        <Route path="pokemon" element={ <PokemonView/> }/>
        <Route path="/*" element={ <Navigate to="/auth/login" />  } />

    </Routes>
  )
}

