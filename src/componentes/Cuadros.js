import React from 'react';

const Cuadros = (props) => {
    const liStyle = {
        border: '2px solid black',
        backgroundColor: 'white',
        height: '100%',
        width: 'auto'
    };
    return (
        <div>
            {
                props.colores.map((color, index) => (
                    <div key={index} style={{
                        display: "inline-block",
                        margin: "10px",
                        height: "50px",
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