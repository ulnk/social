import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RegisterModal = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return ReactDOM.createPortal(<>
        <div className="modal-body">
            <h2>Register to Pickle</h2>
            <small>Join Pickle today and never look back!</small>

            <div className="modal-input-container">
                <span>USERNAME</span>
                <input type="text" className="modal-input" placeholder="Username" />
            </div>
            <div className="modal-input-container">
                <span>PASSWORD</span>
                <input type="PASSWORD" className="modal-input" placeholder="Password" />
            </div>
            <div className="modal-input-container">
                <span>INVITE CODE</span>
                <input type="text" className="modal-input" placeholder="O45XXX" />
            </div>

            <ul className="modal-buttons">
                <button onClick={() => dispatch({ type: 'SET_TOKEN', payload: 'token' })} className="modal-button alt">Submit</button>
                <button onClick={() => navigate('/login')} className="modal-button no-bg">Already have an account?</button>
            </ul>
        </div>
    </>, document.getElementById("modalroot") as HTMLElement);
}

export default RegisterModal;