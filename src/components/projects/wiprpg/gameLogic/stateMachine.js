export default function StateReducer(previousState, action) {
    switch (previousState.state) {
        case 'PreLoad':
            if (action.type === 'Loaded') return {
                ...previousState,
                prevState: previousState.state,
                // Test
                state: 'TownScene',
                dialogueTrigger: 'enter',
            };
            break;
        case 'TownScene':
            switch (action.type) {
                case 'OpenMenu':
                    return { ...previousState, prevState: previousState.state, state: 'ShowMenu' };
                case 'EnterChurch':
                    return { ...previousState, prevState: previousState.state, state: 'Church' };
                case 'EnterMerchant':
                    return { ...previousState, prevState: previousState.state, state: 'Merchant' };
                case 'EnterSmith':
                    return { ...previousState, prevState: previousState.state, state: 'Smith' };
                case 'EnterTavern':
                    return { ...previousState, prevState: previousState.state, state: 'Tavern' };
                case 'LeaveTown':
                    return { ...previousState, prevState: previousState.state, /* test */ dialogueTrigger: 'leave' };
                default:
                    break;
            }
            break;
        case 'ShowMenu':
            if (action.type === 'ExitMenu') return { ...previousState, prevState: previousState.state, state: 'TownScene' };
            break;
        case 'Church':
        case 'Merchant':
        case 'Smith':
        case 'Tavern':
            if (action.type === 'Exit') return { ...previousState, prevState: previousState.state, state: previousState.prevState };
            break;

        default:
            break;
    }
    return previousState;
}
