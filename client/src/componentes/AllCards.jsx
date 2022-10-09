import React, { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import Card from "./Card";
import { Link } from "react-router-dom";
import {obtenerVideogame} from "../redux/action";

export default function AllCards() {
    //pedido estado de redux
    let videogames = useSelector((state) => state.videogames);
    const dispatch = useDispatch;
    
    useEffect(() => {
        dispatch(obtenerVideogame());
    }, []);
    console.log(videogames)
    /* const handleClickButton = () => {
        console.log('click')
        dispatch(obtenerVideogame())
    } */
    return (
        <>
        {/* <button onClick={handleClickButton}>on click</button> */}
            <div>
            {videogames?.length > 0 ?  (
                videogames?.map((game) => (
                    <Link key={game.id} to={`/details/$(pj.id)`}>
                        return <Card image={game.image} nombre={game.nombre} generos={game.generos} />
                    </Link>
                ))
            ) :  (
                <h2>No hay nada aqui</h2>
            )}
            </div>
        </>
    )
}