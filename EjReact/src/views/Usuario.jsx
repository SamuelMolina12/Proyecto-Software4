import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../index.css' 

const Usuario = () => {
    const [Usuarios, SetUsuarios]= useState([]);

    useEffect(() => {
        axios.get("https://api-colombia.com//api/v1/country/Colombia")
            .then(response => {
                SetUsuarios(response.data); 
            })
            .catch(error => {
                console.log("Error al hacer la consulta ", error);
            });
    }, []);

    return (
        <div>
            {Usuarios.length > 0 ? (
                
                   <table>
                    <thead>
                        <tr>
                            <th>Documento Identidad</th>
                            <th>Nombre</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {info.map(info => (
                            <tr key={info.Id}>
                                <td>{info.name}</td>
                                
                                                       
                            </tr>
                        ))}
                    </tbody>
                </table>
               
            ) : (
                <p>No hay usuarios disponibles</p>
            )}
        </div>
    );
}

export default Usuario;
