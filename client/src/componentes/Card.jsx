import React from "react";

export default function Card({ imagen, name, generos}) {
    return (
        <div>
            <div>
                <img src={imagen} alt="flag"/>
            </div>
            <div>
                <h4>{name}</h4>
            </div>
                <h2>{generos}</h2>
        </div>
    )

}