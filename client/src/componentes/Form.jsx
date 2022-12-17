import React from "react";
import { useState } from "react";
//import { useDispatch } from "react-redux";
//import { createVideogame } from "../redux/action";

export default function Form() {
    const [videogame, setVideogame] = useState({
        nombre: "",
        descripcion: "",
        fecha_de_lanzamiento: "",
        rating: "",
        plataformas: "",
    })

    const [error, setError] = useState(true)

    function handleChange(e) {
        e.preventDefault()
        setVideogame({
            ...videogame,
            [e.target.name]:e.target.value,
        })
    }

    const validate = () => {
        const validateName = /^[A-Z ]+$/i
        setError({...error, nombre:
            videogame.nombre.length && videogame.nombre.match(validateName) ? "" : "error en el name"
        })
    }
    //let dispatch = useDispatch()

    function handleSubmit  (e) {
        e.preventDefault()
        validate()
       // dispatch(createVideogame(videogame))
        //setVideogame({nombre: '', descripcion:'', fecha_de_lanzamiento:'', rating:'',  })
    }

    

    return (
        <div>
            <h3>CREAR VIDEOJUEGO</h3>
            <br/>
            <div>
                <form onSubmit={e => handleSubmit(e)}>
                    <div>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" name="nombre" value={videogame.nombre}  onChange={handleChange}></input>
                        <br></br>
        
                        <label htmlFor="descripcion">Descripcion</label>
                        <input name="descripcion" value={videogame.descripcion} onChange={handleChange}></input>
                        <br></br>
                        
                        <label htmlFor="fecha_de_lanzamiento">Fecha de lanzamiento</label>
                        <input name="fecha_de_lanzamiento" value={videogame.fecha_de_lanzamiento} onChange={handleChange}></input>
                        <br></br>
                        
                        <label htmlFor="rating">Rating</label>
                        <input name="rating" value={videogame.rating} onChange={handleChange}></input>
                        <br/>
                        
                        <label htmlFor="plataformas">Plataformas</label>
                        <input name="plataformas" value={videogame.plataformas} onChange={handleChange}></input>
                        <br/>

                        <input type={"submit"} name={'CREATE'}/>
                    </div>
                </form>
            </div>
        </div>
    )

}
