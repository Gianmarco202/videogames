import { ASCENDENTE } from "../constantes/sort"
//import {OBT_GAME, SEARCH_GAME, SORT} from  "./action"

const initialState = {
    videogames: [],
    detail: [],
    filteredVideogames: [],
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'OBT_GAME':
            return {
                ...state,
                videogames: action.payload,
                filteredVideogames: action.payload
            };
        
        case 'SEARCH_GAME':
            return {
                ...state,
                filteredVideogames: action.payload
            }

        case 'SORT':
            let orderedVideogames = [...state.videogames]

            orderedVideogames = orderedVideogames.sort((a, b) => {
                if (a.name < b.name) {
                    return action.payload === ASCENDENTE ? -1 : 1;
                }
                if(a.name > b.name) {
                    return action.payload === ASCENDENTE ? 1 : -1;
                }
                return 0    
            })
            return  {
                ...state,
                filteredVideogames: orderedVideogames
            }

        case 'CREATE_GAME':
            return {
                ...state,
                videogames: [...state.videogames, action.payload]
            }

        default: 
            return state;

    }
}