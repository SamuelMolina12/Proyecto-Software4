import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
 const [Usuarios, SetUsuarios]= useState([])

 useEffect(()=>{
  axios.get("localhost:44305/api/Usuario")
  .then(response => [
    SetUsuarios(response.data.results)
  ])
  .catch(error=>(console.log("Error al hacer la consulta " ,error)))
},[])
  return(
    <ul>
    {Usuarios.map(usuario =>(
      <li> 
        key={usuario.id}
      </li>
    ))}
    </ul>
  )

}

export default App
