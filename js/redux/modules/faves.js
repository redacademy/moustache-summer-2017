import { favesQuery, faveToggle} from '../../config/modules'

// Action creators

const LOAD_FAVES = 'LOAD_FAVES';
const TOGGLE_FAVE = 'TOGGLE_FAVE';

export const loadFaves = () => {
	const faves = favesQuery()
	return {
		type: LOAD_FAVES,
		payload: faves
	};
}

export const toggleFave = (id) => {
	return {
		type: TOGGLE_FAVE,
		payload: faveToggle(id)
	};
}

// Reducers

const initialState = {
 faves: []
};

export function faveReducer(state = initialState, action) {
	switch(action.type) {
		case LOAD_FAVES:
			return {
				faves: action.payload
			};
		case TOGGLE_FAVE:
			return {
				faves: action.payload
			};
		default:
			return state;
  }
}