import React, {useState} from 'react';

const Formulario = (props) =>{
    const [color, setColor]=useState([""]);
    const [altura, setAltura]=useState([""]);
    const handleSubmit = (e) =>{
        e.preventDefault();
        props.alt(altura);
        props.onNuColor(color);
        document.querySelectorAll('.casilla').value='';
    };
    return(
        <form onSubmit={handleSubmit}>
            <div className='entrada'>
                <label htmlFor='color'>Color: </label>
                <input type="text" className='casilla' onChange={(e)=>setColor(e.target.value)} name='color' placeholder='Escriba un color'/>
                <label htmlFor='altura'>Altura: </label>
                <input type="number" className='casilla' onChange={(e)=>setAltura(e.target.value)} name='altura' placeholder='Escriba la altura en px'/>
                <input type='submit' value="Crear Cuadro"/>
            </div>
        </form>
    )
}

export default Formulario