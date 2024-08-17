import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    // const {user} = useAuth()
    // const location = useLocation()

    // if(!user){
    //     return <Navigate to="/login" state={'/'}/>
    //     // return <Navigate to="/login" state={location?.pathname || '/'}/>
    // }
    const { user, loading } = useAuth();
    const location = useLocation();


    if (loading) {
        return <span className="loading loading-infinity loading-lg"></span>
    }

    if (!user) {
        return <Navigate to='/login' state={location?.pathname || '/'} />
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;