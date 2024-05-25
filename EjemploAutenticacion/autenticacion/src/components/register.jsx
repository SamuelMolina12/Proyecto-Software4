import React, { useState } from 'react';
import { firebaseapp } from '../firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import './login.css';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegister = async () => {
        try {
            const auth = getAuth(firebaseapp);
            await createUserWithEmailAndPassword(auth, email, password);
            console.log('Usuario registrado con éxito');
            setErrorMessage(''); // Limpiar el mensaje de error en caso de éxito
        } catch (error) {
            console.error('Error al registrar usuario', error.message);
            setErrorMessage(error.message);
        }
    };

    return (
        <div className="login-container">
            <h1>Register</h1>
            <form className="login-form">
                <div className="input-group">
                    <label htmlFor="email">Correo:</label>
                    <input type="email" id="email-register" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password-register" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="login-btn" type="button" onClick={handleRegister}>Registrar</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
        </div>
    );
}

export default Register;
