import React, { useState } from 'react';
import { firebaseapp } from '../firebase';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import Home from './home';
import './login.css'; // Estilos CSS

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLogged, setIsLogged] = useState(false); // Definir el estado isLogged

    const handleLogin = async () => {
        try {
            const auth = getAuth(firebaseapp);
            await signInWithEmailAndPassword(auth, email, password);
            console.log('Usuario logeado con éxito');
        
            window.location.href = "http://localhost:5174"; 
            setErrorMessage('');           
        } catch (error) {
            console.error("Error al logearse el usuario", error.message);
            setErrorMessage(error.message);
        }
    };

    const handleLoginGoogle = async () => {
        try {
            const auth = getAuth(firebaseapp);
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            console.log('Usuario logeado con éxito con Google');
            setIsLogged(true);
            setErrorMessage('');
        } catch (error) {
            console.error("Error al logearse el usuario", error.message);
            setErrorMessage(error.message);
        }
    };
    
    if (isLogged) {
        return <Home />;
    }

    return (
        <div>
            <div className="login-container">
                <h1>Iniciar Sesión</h1>
                <form className="login-form">
                    <div className="input-group">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input type="email" id="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className="login-btn" onClick={handleLogin}>Iniciar Sesión</button>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                </form>
            </div>

            <div>
                <h1>Iniciar Sesión con Google</h1>
                <button className="login-btn" onClick={handleLoginGoogle}>Iniciar Sesión con Google</button>
            </div>
        </div>
    );
};

export default Login;
