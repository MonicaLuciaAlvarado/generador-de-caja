import React from 'react';

const Cuadros = (props) => {
    console.log("Los colores son: "+props.colores);
    console.log("Los index son: "+props.altura);
    return (
        <div>
            {
                props.colores.map((color, index) => (
                    <div key={index} style={{
                        display: "inline-block",
                        margin: "10px",
                        height: props.altura[index],
                        width: "50px",
                        backgroundColor: color
                    }}>
                    </div>
                ))
            }
        </div>
    );
}
export default Cuadros;