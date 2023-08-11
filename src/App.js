import './App.css';
import React, {useState} from 'react';
import Formulario from './componentes/Formulario';
import Cuadros from './componentes/Cuadros';
const App = (props)=> {
  const [currentColor,setCurrentColor]= useState([]);
  const nuevoColor =(nuColor) =>{
    console.log("El color que entra a la función es: "+nuColor);
    setCurrentColor([...currentColor,nuColor]);
    console.log("El arreglo es: "+currentColor);
  }
  return (
    <div className="App">
      <Formulario onNuColor={nuevoColor}/>
      <Cuadros colores={currentColor} />
    </div>
  );
}

export default App;
