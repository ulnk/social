import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { HiCog } from 'react-icons/hi';
import './index.css';

const MenuBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const tauriApp = useSelector(state => state.app.tauriApp);

    return (<>
        <div className={`menubar ${tauriApp && 'margin'}`}>
            <section className="menu-block">
                <span onClick={() => navigate('/app')} className={`menubar-item ${window.location.pathname === '/app' && 'selected'}`}>Home</span>
                <span onClick={() => navigate('/app/post')} className={`menubar-item ${window.location.pathname === '/app/post' && 'selected'}`}>Post</span>
                <span onClick={() => navigate('/app/message')} className={`menubar-item ${window.location.pathname === '/app/message' && 'selected'}`}>Message</span>
            </section>
            <section className="menu-block right">
                <span onClick={() => dispatch({ type: 'SET_TOKEN', payload: null })} className="menubar-item">LOG OUT</span>
                <span className="menubar-item"><HiCog /></span>
                <span className="menubar-profile"></span>
            </section>
        </div>
    </>);
}

export default MenuBar;