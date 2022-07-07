import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { HiCog } from 'react-icons/hi';
import './index.css';

const MenuBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (<>
        <div className="menubar">
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