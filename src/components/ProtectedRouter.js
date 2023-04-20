import React from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { useStateValue } from '../StateProvide';
import Header from './Header';

const ProtectedRoute = ({ component: Component, ...rest }) => {

    //Using Token from Reducer   
    // const [{ user }] = useStateValue();
    // const token = user?.token ? user?.token : ""

    const token = localStorage.getItem('auth-token');

    if (token) {
        return (
            <>
                <Header />
                <Component {...rest} />
            </>)
    } else {
        toast.error("Please Login First")

        return <Navigate to="/" />;
    }
};

export default ProtectedRoute;
