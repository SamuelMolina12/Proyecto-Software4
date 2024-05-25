import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { firebaseapp } from "../firebaseConfig";
import "./style.css";

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async () => {
    try {
      const auth = getAuth(firebaseapp);
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Usuario registrado con éxito");

    } catch (error) {
      console.log("Error al registrar usuario", error.message);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Registro</h1>
        <input
          type="email"
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
        <button className="login-button" onClick={handleRegister}>Registrar</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default Register;