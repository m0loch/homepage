import InitialState from "./initialState";

const SettingsReducer = (state = InitialState, action) => {

    switch (action.type) {
        case 'MAIN_SET_DARK_MODE':
            return { ...state, darkMode: action.value };
        case 'FIFTEEN_SET_SIZE':
            return { ...state, fifteen: { ...state.fifteen, size: action.size } };
        case 'MOSAIC_SET_IMAGE':
            return { ...state, mosaic: { ...state.mosaic, img: action.img, imgName: action.imgName } };
        case 'MOSAIC_SET_ROWS':
            return { ...state, mosaic: { ...state.mosaic, rows: action.rows } };
        case 'MOSAIC_SET_COLS':
            return { ...state, mosaic: { ...state.mosaic, cols: action.cols } };
        case 'WORDLE_SET_DIFFICULTY':
            return { ...state, wordle: { ...state.wordle, difficulty: action.difficulty } };
        case 'MASTERMIND_SET_DIFFICULTY':
            return { ...state, mastermind: { ...state.mastermind, difficulty: action.difficulty } };
        case 'TYLES_SET_LEVEL':
            return { ...state, tyles: { ...state.tyles, level: action.level % state.tyles.scores.length } };
        case 'TYLES_SET_LEVEL_BEST_SCORE':
            const newScores = [...state.tyles.scores];
            newScores[action.level] = action.score;
            return { ...state, tyles: { ...state.tyles, scores: [...newScores] } };
        case 'MINESWEEPER_PV_SET_OPENED_SECTIONS':
            return { ...state, minesweeper: { ...state.minesweeper, sectionsState: action.sectionsState } };
        case 'MINESWEEPER_SET_DIFFICULTY':
            return { ...state, minesweeper: { ...state.minesweeper, difficulty: action.difficulty } };
        case 'TALKS_SELECT_STORY':
            return { ...state, talks: { ...state.talks, selectedTalk: action.selectedTalk } };
        case 'SIMON_SELECT_LEVEL':
            return { ...state, simon: { ...state.simon, level: action.level } };
        case 'SIMON_SET_REVERSE':
            return { ...state, simon: { ...state.simon, reverseMode: action.reverseMode } };
        case 'SUDOKU_SET_LEVEL':
            return { ...state, sudoku: { ...state.sudoku, ...action.value } };
        case 'SUDOKU_SET_LEVEL_DONE':
            const levels = [...state.sudoku.doneList];
            if (levels.findIndex(item => item === action.level) === -1) {
                levels.push(action.level);
            }
            return { ...state, sudoku: { ...state.sudoku, doneList: [...levels] } };
        case 'WHEREWOLF_SET_CAN_PERFORM_NEXT':
            return { ...state, wherewolf: { ...state.wherewolf, canPerformNext: action.canPerformNext } };
        case 'WHEREWOLF_SET_GAME_PHASE':
            return { ...state, wherewolf: { ...state.wherewolf, ...action } };
        case 'WHEREWOLF_SET_PLAYERS':
            return { ...state, wherewolf: { ...state.wherewolf, players: action.players } };
        case 'WHEREWOLF_SET_ROLES':
            return { ...state, wherewolf: {
                ...state.wherewolf,
                roles: action.roles,
                takenRoles: [...action.roles.Villagers, ...action.roles.Werewolves, ...action.roles.Extras].filter(item => item)
            } };
        case 'WHEREWOLF_SET_ASSIGNMENTS':
            return { ...state, wherewolf: { ...state.wherewolf, assignments: { ...action.assignments } } };
        case 'WHEREWOLF_SET_CURR_PHASE_LOG':
            return { ...state, wherewolf: { ...state.wherewolf, currPhaseLog: action.currPhaseLog } };
        default:
            return state;
    }
}

export default SettingsReducer;