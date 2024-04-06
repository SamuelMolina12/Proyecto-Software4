import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../index.css' 

const Usuario = () => {
    const [Usuarios, SetUsuarios]= useState([]);

    useEffect(() => {
        axios.get("https://localhost:44305/api/Usuario")
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
                            <th>Nombres</th>
                            <th>Teléfono</th>
                            <th>Correo</th>
                            <th>Ciudad</th>
                            <th>Fecha de Registro</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Usuarios.map(usuario => (
                            <tr key={usuario.IdUsuario}>
                                <td>{usuario.DocumentoIdentidad}</td>
                                <td>{usuario.Nombres}</td>
                                <td>{usuario.Telefono}</td>
                                <td>{usuario.Correo}</td>
                                <td>{usuario.Ciudad}</td>
                                <td>{usuario.FechaRegistro}</td>
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
