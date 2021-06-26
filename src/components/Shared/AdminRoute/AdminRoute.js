import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AdminContext } from '../../../App';

const AdminRoute = ({ children, ...rest }) => {
    const [isAdmin] = useContext(AdminContext);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAdmin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;