import React from 'react';
import { appWindow } from '@tauri-apps/api/window';

import './index.css';
import { VscChromeClose, VscChromeMaximize, VscChromeMinimize } from 'react-icons/vsc';

const Frame = () => {
    return (<>
        <div data-tauri-drag-region className="frame">
            <span className="frame-title">Pickle Social</span>
            <ul className="frame-buttons">
                <button onClick={() => appWindow.minimize()} className="frame-button"><VscChromeMinimize /></button>
                <button onClick={() => appWindow.toggleMaximize()} className="frame-button"><VscChromeMaximize /></button>
                <button onClick={() => appWindow.close()} className="frame-button"><VscChromeClose /></button>
            </ul>
        </div>
    </>);
}

export default Frame;