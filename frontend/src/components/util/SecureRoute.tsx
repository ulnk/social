import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import state from './StateInterface';

interface SecureRouteProps {
    element: React.ReactNode
}

const SecureRoute = (props: SecureRouteProps) => {
    const appStore = useSelector<state>(state => state.app);

    return (appStore as state["app"]).token !== null ?(<>
        {props.element}
    </>) : (<>
        <Navigate to="/login" />
    </>);
}

export default SecureRoute;