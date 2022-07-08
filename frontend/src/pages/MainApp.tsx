import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MenuBar from '../components/menubar';
import HomePage from './app/home';

const MainApp = () => {
    return (<>
        <MenuBar />
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    </>);
}

export default MainApp;