const HOME_TAB = 'HOME_TAB';
const LEARN_TAB = 'LEARN_TAB';

export function homeTab(tabChoice) {
    return {
        type: HOME_TAB,
        payload: tabChoice,
    }
}

export function learnTab(tabChoice) {
    return {
        type: LEARN_TAB,
        payload: tabChoice,
    }
}

const initialState = {
    tabChoice: 1,
    learnChoice: 0,
}

export function segmentReducer(state = initialState, action) {
    switch(action.type) {
        case HOME_TAB:
            return {
                ...state,
                tabChoice: action.payload
            }
        case LEARN_TAB:
            return {
                ...state,
                learnChoice: action.payload
            }
        default:
            return state;
    }
}