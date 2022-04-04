const INITIAL_STATE = {
    tabbingValue:0,
}

export function tabbingReducer(state =INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET_TABBING_VALUE':
            return {
                ...state,
                tabbingValue: action.data
            }
        default:
            return state
    }
}