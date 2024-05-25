import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import { AuthProvider, useAuth } from './AuthContext';

const App = () => {
  const { isLoggedIn } = useAuth();
  const [view, setView] = useState(null); 

  return (
    <div>
      <h1>
        <b>Autenticación con </b> <span>Firebase</span> <b>y</b> <span>React</span>
      </h1>
      {isLoggedIn ? (
        <Home />
      ) : (
        <>
          {!view && (
            <div>
              <button onClick={() => setView('login')}>Iniciar Sesión</button>
              
              <button onClick={() => setView('register')}>Registrarse</button>
            </div>
          )}
         
          {view === 'login' && <Login />}
          {view === 'register' && <Register />}

          {view && (
            <div>
              <button onClick={() => setView(null)}>Volver</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

const AppWrapper = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

export default AppWrapper;
