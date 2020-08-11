import React from 'react';
import { Route } from 'react-router-dom';

const PrivateRoute: React.FC<{
    component: React.FC,
    path: string,
    exact: boolean,
}> = (props) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        // <Route {...rest} render={props => (
        //     dataAuth.isLogin ?
        //         <Component {...props} />
        //     : <Redirect to="/signin" />
        // )} />
        <Route {...props} path={props.path}  exact={props.exact} component={props.component} />
    );
};

export default PrivateRoute;
