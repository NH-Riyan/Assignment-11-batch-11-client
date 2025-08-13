import React, { useContext } from 'react';
import Authcontext from '../../Provider/AuthContext';
import { useLocation } from 'react-router';
import Loading from '../Loading/Loading';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(Authcontext)
    const location = useLocation()

    if (loading)
    {
        return <Loading></Loading>
    }
    if (user)
        return children;

    return <Navigate state={location.pathname} to="/auth/login"></Navigate>
};

export default PrivateRoutes;