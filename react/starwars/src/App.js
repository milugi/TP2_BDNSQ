import Home from "./componentes/Home";
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NuevoPersonaje from "./componentes/NuevoPersonaje";
import Mostrar from "./componentes/Mostrar";
import Eliminar from "./componentes/Eliminar";

function App() {
  return (
      <>
      <Router>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/agregar' element = {<NuevoPersonaje/>}/>
          <Route path = '/listar' element = {<Mostrar/>}/>
          <Route path = '/eliminar' element = {<Eliminar/>}/>
        </Routes>
      </Router>
      </>
  );
}

export default App;