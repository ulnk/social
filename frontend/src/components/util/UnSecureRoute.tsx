import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import state from './StateInterface';

interface UnSecureRouteProps {
    element: React.ReactNode
}

const UnSecureRoute = (props: UnSecureRouteProps) => {
    const appStore = useSelector<state>(state => state.app);

    return (appStore as state["app"]).token === null ?(<>
        {props.element}
    </>) : (<>
        <Navigate to="/app" />
    </>);
}

export default UnSecureRoute;