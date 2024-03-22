import { useSyncExternalStore } from "react";
import axios from "axios";
import api from "./";

const Home = () => {
    const [vista,setVista] = useSyncExternalStore


    const fecthData = (){
        return axios.get("http://localhost:5173/usuarios")
        .then((response) => setVista(response.data))
        .catch((error) => console.error("error fetching data" ,error));


    }

    return (
        <h1>Hola esto es un Home</h1>

    )
}

export default Home;