/********************
 * TABLE OF CONTROLS
 * *****************
 * 
 * MAIN SCENE
 * Left shift: open menu
 * 
 * INSIDE MENU
 * Arrows / Numpad Arrows: move cursor
 * Left shift / ESC: cancel
 * Enter / space: OK
 * 
 *******************/
export function readInput(event, state, dispatch) {

    switch (state) {
        case 'Location':
            return readInputForMainSchene(event, dispatch);
        case 'ShowMenu':
            return readInputForMenu(event, dispatch);
        default:
            break;
    }
}

function readInputForMainSchene(event, dispatch) {

    switch (event.code) {
        case 'ShiftLeft':
            dispatch({ type: 'OpenMenu' });
            break;

        default:
            break;
    }
}

function readInputForMenu(event, dispatch) {

    switch (event.code) {
        case 'ShiftLeft':
        case 'Escape':
            dispatch({ type: 'ExitMenu' });
            break;

        default:
            break;
    }
}