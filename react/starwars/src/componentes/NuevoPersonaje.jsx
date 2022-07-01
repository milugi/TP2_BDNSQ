import React, { useState } from 'react';
import '../styles/Agregar.css'

const Agregar = () => {

    const [personajes, setPersonaje] = useState({
        episodio: '',
        personaje: ''
    });

    const handleChange = (e) => {
        setPersonaje({ ...personajes, [e.target.name]: e.target.value });
    }

    console.log(personajes);

    const cargarPersonaje = async (e) => {
        const res = await fetch("http://localhost:4000/cargar",
            {
                method: 'POST',
                body: JSON.stringify(personajes),
                headers: { "Content-Type": "application/json" }
            })
        const data = await res.json();
    }
    return (
        <>
            <div className="contenedor">
                <h1>Agregar Personaje</h1>
            </div>
            <div className="contenedor-inputs">
                <input type="text" name="episodio" placeholder='Numero del episodio' size={40} onChange={handleChange} />
                <input type="text" name="personaje" placeholder='Nombre del personaje' size={40} onChange={handleChange} />
            </div>
            <button onClick={cargarPersonaje}>Agregar</button>
        </>
    )
}
export default Agregar;