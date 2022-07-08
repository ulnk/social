import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import SecureRoute from './util/SecureRoute';
import UnSecureRoute from './util/UnSecureRoute';
import state from './util/StateInterface';

import Frame from './frame';
import LoginModal from './modals/login';
import RegisterModal from './modals/register';

import MainApp from '../pages/MainApp';

const App = () => {
    const dispatch = useDispatch();
    const tauriApp = useSelector<state>(state => state.app.tauriApp);

    useEffect(() => {
        if (window.__TAURI_METADATA__) dispatch({ type: 'SET_TAURI', payload: true });
    }, [dispatch]);

    return (<>
        {tauriApp && <Frame />}
        <Routes >
            <Route path="/" element={<>
                <UnSecureRoute element={<Navigate to="/login" />} />
            </>} />

            <Route path="/login" element={<>
                <UnSecureRoute element={<LoginModal />} />
            </>} />

            <Route path="/register" element={<>
                <UnSecureRoute element={<RegisterModal />} />
            </>} />
            
            <Route path="/app/*" element={<>
                <SecureRoute element={<MainApp />} />
            </>} />
        </Routes>
    </>);
}

export default App;