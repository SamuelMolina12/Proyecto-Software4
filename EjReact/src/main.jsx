import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hola desde el router</div>,
  },
  {
    path: "/saludo",
    element: <div>Hola desde el saludo</div>,
  },
  {
    path: "/usuarios",
    element: <div>Hola desde usuarios
      
    </div>,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);