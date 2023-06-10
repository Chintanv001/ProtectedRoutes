import React, {ReactNode} from 'react'
import {useSelector} from 'react-redux'
import { RootState } from '../Redux/store';
import { Navigate } from 'react-router-dom';

type ProtectedRoutesProps = {
    children : ReactNode
    adminRoute : boolean
    isAdmin : boolean
}

const ProtectedRoutes : React.FC<ProtectedRoutesProps> = ({children , adminRoute , isAdmin }) => {
    const  isAuthenticated  = useSelector((state : RootState) => state.root.isAuthenticated);
    

    if (isAuthenticated) {
        if (adminRoute && !isAdmin) {
          return <Navigate to="/Pages/Profile" />;
        } else {
          return <>{children}</>;
        }
      } else {
        return <Navigate to="/Pages/Login" />;
      }
    
    
    
  
}

export default ProtectedRoutes