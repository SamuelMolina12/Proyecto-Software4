
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { firebaseapp } from "../firebaseConfig";
import { useAuth } from "../AuthContext";
import "./style.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      const auth = getAuth(firebaseapp);
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Usuario ingresado con éxito");
      login();
    } catch (error) {
      console.log("Error al ingresar usuario", error.message);
      setErrorMessage(error.message);
    }
  };

  const handleLoginGoogle = async () => {
    try {
      const auth = getAuth(firebaseapp);
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      console.log('Usuario logeado con éxito');
      login();
    } catch (error) {
      console.log("Error al ingresar usuario", error.message);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <input class="input"
          placeholder="Ingrese su correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Ingrese su contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" onClick={handleLogin}>Ingresar</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
      <div className="login-container">
        <div className="login-form">
          <h1>Iniciar sesión con Google</h1>
          <button className="google-login-button" onClick={handleLoginGoogle}>Iniciar sesión con Google</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
