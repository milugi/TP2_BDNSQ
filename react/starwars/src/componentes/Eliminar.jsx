import React, { useState } from 'react'

const Eliminar = () => {

    const [numero, setEpisodio] = useState();
    const [nombre, setPersonaje] = useState()

    const eliminar = async () => {
        const resultado = await fetch(`http://localhost:3030/eliminar/${numero}/${nombre}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        });
    }
    return (
        <>
            <div className="contenedor">

                <h1>Eliminar Personaje</h1>
            </div>
            <div className="contenedor-inputs">
                <input type="text" name="numero" placeholder='Numero de episodio' size={40} onChange={(e) => setEpisodio(e.target.value)} />
                <input type="text" name="nombre" placeholder='Nombre del personaje' size={40} onChange={(e) => setPersonaje(e.target.value)} />
            </div>
            <button onClick={eliminar}>Eliminar</button>
        </>
    )
}
export default Eliminar;