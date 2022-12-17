import React from "react";

export default function Card({ imagen, nombre, generos}) {
    return (
        <div>
            <div>
                <img src={imagen} alt="flag"/>
            </div>
            <div>
                <h4>{nombre}</h4>
            </div>
                <h2>{generos}</h2>
        </div>
    )

}