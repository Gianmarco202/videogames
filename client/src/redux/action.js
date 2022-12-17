import axios from "axios";

export const OBT_GAME = "OBT_GAME"
export const SEARCH_GAME = "SEARCH_GAME"
export const SORT = "SORT"
export const GET_GENEROS = "GET_GENEROS"

export const  obtenerVideogame  = () => {
    return async (dispatch) => {
        let pedidoApi = await axios.get("http://localhost:3001/videogames/getAll")
        dispatch({ type: 'OBT_GAME', payload: pedidoApi.data });
        
    } 
}


export const searchVideogame = (search) => {
    return async (dispatch) => {
        let pedidoApi = await axios.get("http://localhost:3001/videogames?name" + search)
        console.log(pedidoApi,'search')
        dispatch({ type: 'SEARCH_GAME', payload: pedidoApi.data });
        
    } 
}

export function sort(order) {
    return {
        type: 'SORT',
        payload: order
    }
}

export function createVideogame(info) {
    return {
        type: 'CREATE_GAME',
        payload: info
    }
}

export const getGeneros = () => {
    return async function (dispatch) {
        const api = await  axios.get("http://localhost:3001/generos");
        dispatch({ type: GET_GENEROS, payload: api.data})
    }
}