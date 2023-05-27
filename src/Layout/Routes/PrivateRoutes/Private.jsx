import React, { useContext } from 'react';
import { AuthContext } from './../../../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const Private = ({ children }) => {


    const { user, loading } = useContext(AuthContext);

    if (user) {
        return children;
    }
    if (loading) {
        <div>loading...</div>
    }

    return <Navigate  to='/login' state={{from:location }} replace />




    return
};

export default Private;