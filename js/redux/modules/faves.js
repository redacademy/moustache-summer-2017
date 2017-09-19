import realm from '../../config/modules'

// Action creators

export const loadFavesSuccess = (faves) => ({
	type: 'LOAD_FAVES_SUCCESS',
	faves
})
export const loadFavesBegin = () => ({
	type: 'LOAD_FAVES_BEGIN'
})
export const loadFavesError = (error) => ({
	type: 'LOAD_FAVES_ERROR',
	error
})

export const favesQuery = () => {
	return dispatch => {
		try {
			dispatch(loadFavesBegin())
			const faves = realm.objects('Fave').map(it => Object.assign({}, it));
			dispatch(loadFavesSuccess(faves))
		} catch (error) {
			dispatch(loadFavesError(error))
		}
	}
}

export const toggleFavesBegin = (id) => ({
	type: 'TOGGLE_FAVES_BEGIN',
	faveId: id
})
export const toggleFavesError = (error) => ({
	type: 'TOGGLE_FAVES_ERROR',
	error
})

export const faveToggle = (id) => {
	return dispatch => {
		try {
			dispatch(toggleFavesBegin(id));
			realm.write(() => {
				let faves = realm.objects('Fave').filtered('id == $0', id);
				if (typeof faves !== 'undefined' && faves.length) {
					const fave = realm.delete(faves[0]);
				} else {
					const fave = realm.create('Fave', { id: id });
				}
			})
			dispatch(favesQuery());
		}
		catch (e) {
			dispatch(toggleFavesError(e));
		}
	}
}


// Reducers:

const initialState = {
	faves: [],
	fave: {},
	error: {},
	isLoading: false
};

export function faveReducer(state = initialState, action) {
	switch (action.type) {
		case 'LOAD_FAVES_BEGIN':
			return {
				...state,
				isLoading: true
			};
		case 'LOAD_FAVES_SUCCESS':
			return {
				...state,
				isLoading: false,
				faves: action.faves
			};
		case 'LOAD_FAVES_ERROR':
			return {
				...state,
				error: action.error
			};
		case 'TOGGLE_FAVES_BEGIN':
			return {
				...state,
				isLoading: true
			};
		case 'TOGGLE_FAVES_ERROR':
			return {
				...state,
				isLoading: false,
				error: action.error
			};
		default:
			return state;
	}
}


