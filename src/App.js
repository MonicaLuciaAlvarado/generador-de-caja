import './App.css';
import React, {useState} from 'react';
import Formulario from './componentes/Formulario';
import Cuadros from './componentes/Cuadros';
const App = (props)=> {
  const [currentColor,setCurrentColor]= useState([]);
  const [currentAlt,setCurrentAlt]= useState([]);

  const nuevaAltura =(nuAltura) =>{
    console.log("La altura ingresada por el usuario nueva: "+nuAltura);
    setCurrentAlt([...currentAlt,nuAltura+'px']);
    console.log("El array de altura hasta el momento fuera de cuadro: "+currentAlt);
  }

  const nuevoColor =(nuColor) =>{
    console.log("El color que entra a la función es: "+nuColor);
    setCurrentColor([...currentColor,nuColor]);
    console.log("El arreglo es: "+currentColor);
  }
  return (
    <div className="App">
      <Formulario alt={nuevaAltura} onNuColor={nuevoColor}/>
      <Cuadros altura={currentAlt} colores={currentColor}/>
    </div>
  );
}

export default App;
