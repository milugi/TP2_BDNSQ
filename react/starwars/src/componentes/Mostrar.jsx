import React, { useState } from 'react'

const Listar = () => {
    const [episodio, setEpisodio] = useState({
        episodio: ''
    });

    const [personaje, setPersonajes] = useState()

    const listarPersonajes = async () => {
        const resultado = await fetch(`http://localhost:4000/listar/${episodio}`)
        const data = await resultado.json();
        console.log(data);
        setPersonajes(data)
    }
    console.log(personaje);

    return (
        <>
            <div className="contenedor">
                <h1>Personajes</h1>
            </div>
            <div className="contenedor-inputs">
                <input type="text" name="episodio" placeholder='Ingrese un episodio' size={40} onChange={(e) => setEpisodio(e.target.value)} />
            </div>
            <button onClick={listarPersonajes}>Mostrar</button>
            {personaje && personaje.map((per) => {
                return (
                    <li>{per}</li>
                )
            })}
        </>

    )
}
export default Listar;