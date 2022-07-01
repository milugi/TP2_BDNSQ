import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Home.css'
import '../img/yoda.png'

const Home = () => {
    return (
        <> 
            <div className="contenedor">
                <h1> Opciones para Personajes Star Wars</h1>
                <img className="yoda"
                    src={require("../img/yoda.png")}
                    alt="yoda" />
            </div>
            <div className="buttons">
                <Link to='/agregar'>Nuevo personaje</Link> 
                <Link to='/listar'>Mostrar personaje</Link>
                <Link to='/eliminar'>Eliminar personaje</Link>
            </div>
        </>
    )
}
export default Home;
