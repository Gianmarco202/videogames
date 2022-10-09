import axios from "axios";

export function obtenerVideogame ()  {
    return function (dispatch) {
        axios.get("http://localhost:3001/videogames/getAll")
        .then((videogames) =>{
            dispatch ({ 
                type: "OBJ_GAME",
                payload: videogames.data });
        } )
        .catch((error) => {
            console.log(error)
        })
    }
};

export const crearVideogame = () => {
    return async (dispatch) => {};
}