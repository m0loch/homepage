import InitialState from "./initialState";

const SettingsReducer = (state = InitialState, action) => {

    switch (action.type) {
        case 'MAIN_SET_DARK_MODE':
            return {...state, darkMode: action.value};
        case 'FIFTEEN_SET_SIZE':
            return {...state, fifteen: {...state.fifteen, size: action.size}};
        case 'MOSAIC_SET_IMAGE':
            return {...state, mosaic: {...state.mosaic, img: action.img, imgName: action.imgName}};
        case 'MOSAIC_SET_ROWS':
            return {...state, mosaic: {...state.mosaic, rows: action.rows}};
        case 'MOSAIC_SET_COLS':
            return {...state, mosaic: {...state.mosaic, cols: action.cols}};
        case 'WORDLE_SET_DIFFICULTY':
            return {...state, wordle: {...state.wordle, difficulty: action.difficulty}};
        default:
            return state;
        }
}

export default SettingsReducer;