import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LoginModal = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return ReactDOM.createPortal(<>
        <div className="modal-body">
            <h2>Login to Pickle</h2>
            <small>We're so excited to see you again!</small>

            <div className="modal-input-container">
                <span>USERNAME</span>
                <input type="text" className="modal-input" placeholder="Username" />
            </div>
            <div className="modal-input-container">
                <span>PASSWORD</span>
                <input type="PASSWORD" className="modal-input" placeholder="Password" />
            </div>

            <ul className="modal-buttons">
                <button onClick={() => dispatch({ type: 'SET_TOKEN', payload: 'token' })} className="modal-button alt">Submit</button>
                <button onClick={() => navigate('/register')} className="modal-button no-bg">Need an account?</button>
            </ul>
        </div>
    </>, document.getElementById("modalroot") as HTMLElement);
}

export default LoginModal;