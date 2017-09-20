const STORE_CATEGORY = 'STORE_CATEGORY';
const STORE_MENU_ITEM = 'STORE_MENU_ITEM';

export function storeCategory(category) {
    return {
        type: STORE_CATEGORY,
        payload: category
    }
}

export function storeMenuItem(item) {
    return {
        type: STORE_MENU_ITEM,
        payload: item
    }
}

export const triggerStoreMenuItem = (item)  => {
    return (dispatch) => {
        dispatch(storeMenuItem(item))
    }
}

const initialState = {
    category: '',
    menuItem: {}
}

export function menuItemReducer(state = initialState, action) {
    switch(action.type) {
        case STORE_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        case STORE_MENU_ITEM:
            return {
                ...state,
                menuItem: action.payload
            }
        default:
            return state;
    }
}