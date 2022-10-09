

let initialState = {
    videogames: [],
    detail: [],
    copiaVideogames: [],
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "OBT_GAME":
            console.log('::::::::::::::::::::entre:::::::::::::::')
            return {
                ...state,
                videogames: action.payload.data,
            };
        default: 
            return state;
    }
}