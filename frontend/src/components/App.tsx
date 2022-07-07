import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SecureRoute from './util/SecureRoute';
import UnSecureRoute from './util/UnSecureRoute';

import Frame from './frame';

import MainApp from '../pages/MainApp';

import LoginModal from './modals/login';
import RegisterModal from './modals/register';

const App = () => {
    return (<>
        <Frame />
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