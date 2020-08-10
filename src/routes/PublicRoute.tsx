import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({component: Component, ...rest}) => {

	const dataAuth = useSelector(state => state.dataAuth);

    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            <Component {...props} />
        )} />
    );
};

export default PublicRoute;
