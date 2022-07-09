import InitialState from "./initialState";

const SettingsReducer = (state = InitialState, action) => {

    switch (action.type) {
        case 'FIFTEEN_SET_SIZE':
            return {...state, fifteen: {...state.fifteen, size: action.size}};
        default:
            return state;
        }
}

export default SettingsReducer;