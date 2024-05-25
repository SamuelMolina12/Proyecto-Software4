import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

const Home = () => {
    const [Usuarios, SetUsuarios] = useState([]);
    const [currentUsuario, setCurrentUsuario] = useState({
        IdUsuario: '',
        DocumentoIdentidad: '',
        Nombres: '',
        Telefono: '',
        Correo: '',
        Ciudad: '',
        FechaRegistro: ''
    });

    useEffect(() => {
        fetchUsuarios();
    }, []);

    const fetchUsuarios = () => {
        axios.get("https://localhost:44305/api/Usuario")
            .then(response => {
                SetUsuarios(response.data);
            })
            .catch(error => {
                console.log("Error al hacer la consulta ", error);
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentUsuario(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentUsuario.IdUsuario) {
            ActualizarUsuario();
        } else {
            AñadirUsuario();
        }
    };

    const AñadirUsuario = () => {
        axios.post("https://localhost:44305/api/Usuario", currentUsuario)
            .then(response => {
                fetchUsuarios();
                resetForm();
            })
            .catch(error => {
                console.log("Error al agregar usuario ", error);
            });
    };

    const ActualizarUsuario = () => {
        axios.put(`https://localhost:44305/api/Usuario/${currentUsuario.IdUsuario}`, currentUsuario)
            .then(response => {
                fetchUsuarios();
                resetForm();
            })
            .catch(error => {
                console.log("Error al actualizar usuario ", error);
            });
    };

    const EliminarUsuario = (id) => {
        axios.delete(`https://localhost:44305/api/Usuario/${id}`)
            .then(response => {
                fetchUsuarios();
            })
            .catch(error => {
                console.log("Error al eliminar usuario ", error);
            });
    };

    const EditarUsuario = (usuario) => {
        setCurrentUsuario(usuario);
    };

    const resetForm = () => {
        setCurrentUsuario({
            IdUsuario: '',
            DocumentoIdentidad: '',
            Nombres: '',
            Telefono: '',
            Correo: '',
            Ciudad: '',
            FechaRegistro: ''
        });
    };

    return (
        <div className="container">
            <h2>{currentUsuario.IdUsuario ? 'Actualizar Usuario' : 'Agregar Usuario'}</h2>
            <form onSubmit={handleSubmit} className="form-container">
                <input
                    type="text"
                    name="DocumentoIdentidad"
                    placeholder="Documento Identidad"
                    value={currentUsuario.DocumentoIdentidad}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="Nombres"
                    placeholder="Nombres"
                    value={currentUsuario.Nombres}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="Telefono"
                    placeholder="Teléfono"
                    value={currentUsuario.Telefono}
                    onChange={handleInputChange}
                />
                <input
                    type="email"
                    name="Correo"
                    placeholder="Correo"
                    value={currentUsuario.Correo}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="Ciudad"
                    placeholder="Ciudad"
                    value={currentUsuario.Ciudad}
                    onChange={handleInputChange}
                />
                <input
                    type="datetime-local"
                    name="FechaRegistro"
                    placeholder="Fecha de Registro"
                    value={currentUsuario.FechaRegistro}
                    onChange={handleInputChange}
                />
                <button type="submit">{currentUsuario.IdUsuario ? 'Actualizar' : 'Agregar'}</button>
                <button type="button" onClick={resetForm}>Cancelar</button>
            </form>

            <h2>Lista de Usuarios</h2>
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
                            <th>Acciones</th>
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
                                <td>
                                    <button onClick={() => EditarUsuario(usuario)}>Actualizar</button>
                                    <button onClick={() => EliminarUsuario(usuario.IdUsuario)}>Eliminar</button>
                                </td>
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

export default Home;
