import React from 'react';
import { Route } from 'react-router-dom';

const PublicRoute: React.FC<{
    component: React.FC,
    path: string,
    exact: boolean,
    restricted: boolean,
}> = (props) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...props} path={props.path}  exact={props.exact} component={props.component} />
    );
};

export default PublicRoute;
