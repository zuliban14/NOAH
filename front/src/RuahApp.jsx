import { useDispatch, useSelector } from 'react-redux'
import { AppTheme } from './theme'
import {Navigate,Routes, Route} from 'react-router-dom';
import { useAuthStore } from './hooks';
import { LoginPage } from './auth/pages';
import { EvaluacionDocentePage } from './app/pages/full-layout-page/evaluacion-docente/pages/EvaluacionDocentePage';
import { useEffect } from 'react';

export const RuahApp = () => {
//const authStatus='not-authenticated';

const {checkAuthToken, startLogin, status}= useAuthStore();

 useEffect(() => {
  checkAuthToken()
 }, [])

  return (
    <AppTheme>
     <Routes>
     {
        (status ==='not-authenticated')
         ?(
          <>
            <Route path="login" element={ <LoginPage/>  }/>
            <Route path="/*" element={ <Navigate to="/login"/>  }/> 
          </>
           )
           :(
            <>
             <Route path="/" element={ <EvaluacionDocentePage/>  }/>
            <Route path="*" element={ <Navigate to="/"/>  }/> 
            </>
            )
                              
            }       
                           
                             

      </Routes>
    </AppTheme>
  )
}
