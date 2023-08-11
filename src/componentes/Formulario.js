import React, {useState} from 'react';

const Formulario = (props) =>{
    const [color, setColor]=useState([""]);
    const handleSubmit = (e) =>{
        e.preventDefault();
        props.onNuColor(color);
        console.log(color);
    };
    return(
        <form onSubmit={handleSubmit}>
            <div className='entrada'>
                <label htmlFor='color'>Color: </label>
                <input type="text" onChange={(e)=>setColor(e.target.value)} name='firstName' placeholder='Escriba un color' value={color}/>
                <input type='submit' value="Crear Cuadro"/>
            </div>
        </form>
    )
}

export default Formulario