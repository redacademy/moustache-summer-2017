const STORE_HEALTH_BENEFITS = 'STORE_HEALTH_BENEFITS';

export function storeHealthBenefits(item) {
    return {
        type: STORE_HEALTH_BENEFITS,
        payload: item
    }
}

const initialState = {
    healthBenefit: {}
}

export function healthBenefitsReducer(state = initialState, action) {
    switch (action.type) {
        case STORE_HEALTH_BENEFITS:
            return {
                ...state,
                healthBenefit: action.payload
            }
        default:
            return state;
    }
}